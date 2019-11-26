const os =require('os')
const mem =os.freemem()/os.totalmem()
console.log(mem)
console.log(`${mem.toFixed(2)}%`)
