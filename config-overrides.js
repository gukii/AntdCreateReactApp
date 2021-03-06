// antd using CSS:
// comment out / uncomment one of these (CSS or LESS)

/*
const { injectBabelPlugin } = require('react-app-rewired');
module.exports = function override(config, env) {
    // do stuff with the webpack config...
    config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
    return config;
};
*/

// antd using LESS
const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

module.exports = function override(config, env) {
    // do stuff with the webpack config...
    //config = injectBabelPlugin(['import', { libraryName: 'antd', libraryDirectory: 'es', style: 'css' }], config);
       config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);  // change importing css to less
       config = rewireLess.withLoaderOptions({
         modifyVars: { "@primary-color": "#1DA57A" },
       })(config, env);    
    return config;
};
