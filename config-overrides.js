// // module.exports = function override(config, env) {
// //     //do stuff with the webpack config...
// //     return config;
// // }

// const {
//     addDecoratorsLegacy,
//     override,
//     fixBabelImports,
//     addLessLoader
//   } = require("customize-cra");

//   // const modifyVars = require("./theme")

//   module.exports = override(
//     addDecoratorsLegacy(),
//     fixBabelImports('import', {
//             libraryName: 'antd',
//             libraryDirectory: 'es',
//             style: true,
//           }),
//      addLessLoader({
//               javascriptEnabled: true,
//               // modifyVars: { '@primary-color': '#090' },
//               modifyVars
//           }),
//   )



const {
  addDecoratorsLegacy,
  override,
  fixBabelImports,
  addLessLoader
} = require("customize-cra");

module.exports = override(
  addDecoratorsLegacy(),
  fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: true,  //一定要把style变成true!
  }),
  addLessLoader({
      javascriptEnabled: true,
      modifyVars: { '@primary-color': '#090' },
  }),
)