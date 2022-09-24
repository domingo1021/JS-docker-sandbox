require('dotenv').config();
const fs = require('fs');
const { exec } = require('child_process');

async function runCommand(cmd) {
  return new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        reject(stderr);
      }
      if (stdout) {
        resolve(stdout);
      }
    });
  });
}

async function compile() {
  // write code dynamically in production with file system
  const userCodeFile = process.env.TEST_CODE_FILE
  let compilerResult;
  console.log(`\$\(pwd\)/${userCodeFile}`)
	try {
    compilerResult = await runCommand(`docker run -v \$\(pwd\)/${userCodeFile}:/bunny_code/${userCodeFile} -e TWOSUMFILE=./${userCodeFile} --rm sandbox /bunny_code/twoSum.js`);
  } catch (error) {
    compilerResult = error;
  }
  return compilerResult;
}

compile().then((result) => {
  console.log(result);
});
