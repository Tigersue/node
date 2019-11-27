const os =require('os')
// const mem =os.freemem()/os.totalmem()
// console.log(mem)
// console.log(`${mem.toFixed(2)}%`)

// const download =require('download-git-repo')


let repo='github:su37josephxia/vue-template'
let dest='test-dowmload'




// 回调式

// download(repo,dest,(err)=>{
//     if(err){
//         console.error('error!')
//         progress.fail()
//     }else{
//         console.log('OK')
//         progress.succeed()
//     }
// })

// async await



clone(repo,dest)
async function clone(repo,dest){
    const {promisify} =require('util') //先处理成promise对象
    const download =promisify(require('download-git-repo')) 
    const ora =require('ora')
    const progress=ora(`下载中${repo}`)
    progress.start()
    progress.color='yellow'
    try{
        await download(repo,dest)
    } catch{
        progress.fail()
    }
    progress.succeed()
}