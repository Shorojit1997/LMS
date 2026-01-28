const core = require("@actions/core");
const { execSync } = require("child_process");

try {
  const requiredVersion = core.getInput("required-version");

  // Get installed ruby version
  const output = execSync("ruby -v").toString();
  const installedVersion = output.match(/\d+\.\d+\.\d+/)[0];

  console.log(`🔍 Required Ruby Version: ${requiredVersion}`);
  console.log(`🟢 Installed Ruby Version: ${installedVersion}`);

  if (installedVersion !== requiredVersion) {
    core.setFailed(
      `❌ Ruby version mismatch! Expected ${requiredVersion}, got ${installedVersion}`
    );
  }

  console.log("✅ Ruby version check passed!");
} catch (error) {
  core.setFailed(error.message);
}
