// eslint-disable-next-line @typescript-eslint/no-var-requires
const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor")

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = on => {
  on("file:preprocessor", cypressTypeScriptPreprocessor)
  
}

module.exports = (on, config) => {
  on('task', {
    log(message) {
      console.log('looking for title "%$" in the database', message)
  
      return null
    },
  }),
  on('task', {
    // deconstruct the individual properties
    hello({ greeting, name, feeling }) {
      console.log('Greeting %s Name %s Feeling %s', greeting, name, feeling)  
      return null
    },
  })

}