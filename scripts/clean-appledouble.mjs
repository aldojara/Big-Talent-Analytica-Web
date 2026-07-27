import { rm, readdir } from "node:fs/promises";
import path from "node:path";

const roots = [".next", ".open-next"];

async function removeAppleDoubleFiles(directory) {
  let entries;

  try {
    entries = await readdir(directory, { withFileTypes: true });
  } catch {
    return;
  }

  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        await removeAppleDoubleFiles(entryPath);
        return;
      }

      if (entry.isFile() && entry.name.startsWith("._")) {
        await rm(entryPath, { force: true });
      }
    }),
  );
}

await Promise.all(roots.map(removeAppleDoubleFiles));
