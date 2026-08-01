import { spawn } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const repositoryRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
);

const mode = process.argv[2] ?? "deploy";
const allowedModes = new Set(["preview", "deploy", "upload"]);

if (!allowedModes.has(mode)) {
  console.error(`Unsupported mode "${mode}". Use preview, deploy, or upload.`);
  process.exit(1);
}

function run(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: repositoryRoot,
      env: options.env ?? process.env,
      stdio: options.stdio ?? "inherit",
      shell: false,
    });

    child.on("error", reject);
    child.on("close", (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(
        new Error(
          `${command} ${args.join(" ")} failed with ${
            signal ? `signal ${signal}` : `exit code ${code}`
          }`,
        ),
      );
    });
  });
}

function readCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      cwd: repositoryRoot,
      env: process.env,
      stdio: ["ignore", "pipe", "pipe"],
      shell: false,
    });

    let stdout = "";
    let stderr = "";

    child.stdout.setEncoding("utf8");
    child.stderr.setEncoding("utf8");
    child.stdout.on("data", (chunk) => {
      stdout += chunk;
    });
    child.stderr.on("data", (chunk) => {
      stderr += chunk;
    });

    child.on("error", reject);
    child.on("close", (code) => {
      if (code === 0) {
        resolve(stdout.trim());
        return;
      }

      reject(new Error(stderr.trim() || `${command} ${args.join(" ")} failed`));
    });
  });
}

async function assertCleanWorkingTree() {
  const status = await readCommand("git", ["status", "--porcelain"]);

  if (status) {
    throw new Error("Working tree is not clean. Commit or stash changes before deploy.");
  }
}

async function getCurrentCommit() {
  const commit = await readCommand("git", ["rev-parse", "HEAD"]);

  if (!/^[0-9a-f]{40}$/i.test(commit)) {
    throw new Error("Could not determine a valid Git commit SHA.");
  }

  return commit;
}

const opennextBin = path.join(
  repositoryRoot,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "opennextjs-cloudflare.cmd" : "opennextjs-cloudflare",
);

async function main() {
  if (mode === "deploy") {
    await assertCleanWorkingTree();
  }

  const gitCommit = await getCurrentCommit();
  const buildTime = new Date().toISOString();
  const buildEnv = {
    ...process.env,
    NEXT_PUBLIC_GIT_COMMIT: gitCommit,
    NEXT_PUBLIC_BUILD_TIME: buildTime,
    NEXT_PUBLIC_DEPLOY_ENV: mode === "deploy" ? "production" : mode,
    COPYFILE_DISABLE: "1",
  };

  console.log(`Building ${mode} from commit ${gitCommit.slice(0, 7)}.`);

  await run(opennextBin, ["build"], { env: buildEnv });
  await run(process.execPath, ["scripts/clean-appledouble.mjs"], { env: buildEnv });
  await run(opennextBin, [mode], { env: buildEnv });
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
