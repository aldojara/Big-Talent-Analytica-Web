const APPLICATION_NAME = "big-talent-analytica-web";
const DEFAULT_ENVIRONMENT = "development";
const DEFAULT_GIT_COMMIT = "development";

function normalizeTextValue(value: string | undefined, fallback: string) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : fallback;
}

function normalizeBuildTime(value: string | undefined) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

export function getBuildInfo() {
  const gitCommit = normalizeTextValue(
    process.env.NEXT_PUBLIC_GIT_COMMIT,
    DEFAULT_GIT_COMMIT,
  );

  return {
    application: APPLICATION_NAME,
    gitCommit,
    gitCommitShort: gitCommit.slice(0, 7),
    environment: normalizeTextValue(
      process.env.NEXT_PUBLIC_DEPLOY_ENV,
      DEFAULT_ENVIRONMENT,
    ),
    buildTime: normalizeBuildTime(process.env.NEXT_PUBLIC_BUILD_TIME),
  };
}
