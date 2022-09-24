require('dotenv').config();
const fs = require('fs');

async function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        reject(stderr);
      }
      if (stdout) {
        console.log(`stdout: ${stdout}`);
        resolve(stdout);
      }
    });
  });
}

async function compile() {
  // write code dynamically in production with file system
  const userCodeFile = process.env.TEST_CODE_FILE
  let compilerResult;
  try {
    compilerResult = await runCommand(`docker run -v \$\(pwd\)/user_tmp_codes:/bunny_code/user_tmp_codes -e TOWSUMFILE=./user_tmp_codes/${userCodeFile} --rm node-tool /bunny_code/user_tmp_codes/${userCodeFile}`);
  } catch (error) {
    compilerResult = error;
  }
  return compilerResult;
}

compile();