import { loadEnvConfig } from "@next/env";

const updateEnv = async () => {
  const projectDir = process.cwd();
  loadEnvConfig(projectDir);
};

export default updateEnv();
