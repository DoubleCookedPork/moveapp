const {
  sep
} = require('path')
/*
打包工具在构建的时候，对样式的文件转换都会来调用这个函数
 我们可以在函数中针对不同的样式配置不同的转换规则
*/
module.exports = ({
  file
}) => {
  let rootValue = file.dirname.indexOf(`node_modules${sep}vant`) !== -1
    ? 37.5
    : 75

  return {
    plugins: {
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue,
        propList: ['*']
      }
    }
  }
}
// module.exports = {
//   plugins: {
//     autoprefixer: {},
//     //  rem适配设置为375px,实际默认是750px.所以在做的时候都需要除以2
//     'postcss-pxtorem': {
//       rootValue: 37.5,
//       propList: ['*']
//     }
//   }

// }
