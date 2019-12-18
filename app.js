// let fs = require('fs');
// let path = require('path');
// let dir=fs.readdirSync(__dirname).reduce((prev,next)=>{
//     const fullDir = path.join(__dirname, next);
//     const entry = path.join(fullDir, 'app.ts')
//     if (fs.statSync(fullDir).isDirectory() && fs.existsSync(entry)) {
//         prev[next] = ['webpack-hot-middleware/client', entry]
//       }
//       return prev
// },{});
// console.log(dir)

