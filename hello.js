const { helloWorld }  = require(`${process.env.TWOSUMFILE}`);

const compilerResults = []
compilerResults.push((helloWorld("Hello world !")))
compilerResults.push((helloWorld("Appwork school")))
compilerResults.push((helloWorld("Bunny code")))
compilerResults.push((helloWorld("Stinky tofu")))
compilerResults.push((helloWorld("Happy coding !")))

console.log(compilerResults);