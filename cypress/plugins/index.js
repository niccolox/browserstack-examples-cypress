// eslint-disable-next-line @typescript-eslint/no-var-requires
const cypressTypeScriptPreprocessor = require("./cy-ts-preprocessor")

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = on => {
  on("file:preprocessor", cypressTypeScriptPreprocessor)
  
}

module.exports = (on, config) => {
  on('task', {
    logmessage(message) {
      console.log('looking for Product name "%s" in the database', message)
//      console.log('looking Product %s in the logs', message)
  
      return null
    },
  }),
  on('task', {
    // deconstruct the individual properties
    consoleLog({ name, price, link }) {
      console.log('Product Name %s Price %s Link %s', name, price, link)  
      return null
    },
  })

}