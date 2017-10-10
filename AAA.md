


# /**u**

## / 获取用户所有信息


 <!--
{
  "name": "myreact",      // 项目名字
  "version": "1.0.0",		// 项目版本
  "description": "react+redux",	 // 项目简介
  "main": "index.js",		 // 项目入口js
  "dependencies": {		// 项目最终需要依赖的插件
	  "antd": "^0.12.12",
	  "es6-shim": "^0.35.0",
	  "fastclick": "^1.0.6",
	  "history": "^2.1.1",
	  "immutable": "^3.7.6",
	  "isomorphic-fetch": "^2.2.1",
	  "react": "^15.0.2",
	  "react-addons-css-transition-group": "^15.0.2",
	  "react-addons-pure-render-mixin": "^15.0.2",
	  "react-dom": "^0.14.8",
	  "react-immutable-render-mixin": "^0.9.5",
	  "react-redux": "^4.4.5",
	  "react-router": "^2.4.0",
	  "react-router-redux": "^4.0.4",
	  "redux": "^3.5.2",
	  "redux-thunk": "^2.0.1",
	  "scroll-behavior": "^0.7.0"
  },
  "devDependencies": {  // 开发模式下需要依赖的插件
	  "babel-core": "^6.7.2",
	  "babel-eslint": "^6.1.2",
	  "babel-loader": "^6.2.4",
	  "babel-plugin-transform-decorators-legacy": "^1.3.4",
	  "babel-plugin-transform-regenerator": "^6.14.0",
	  "babel-preset-es2015": "^6.6.0",
	  "babel-preset-react": "^6.5.0",
	  "babel-preset-react-hmre": "^1.1.1",
	  "babel-preset-stage-0": "^6.5.0",
	  "babel-register": "^6.14.0",
	  "chai": "^3.5.0",
	  "chai-immutable": "^1.5.4",
	  "css-animation": "^1.2.5",
	  "css-loader": "^0.23.1",
	  "del": "^2.2.0",
	  "enzyme": "^2.2.0",
	  "eslint": "^2.9.0",
	  "eslint-plugin-react": "^5.1.1",
	  "extract-text-webpack-plugin": "^1.0.1",
	  "file-loader": "^0.8.5",
	  "gulp": "github:gulpjs/gulp#4.0",
	  "gulp-clean": "^0.3.2",
	  "gulp-replace": "^0.5.4",
	  "gulp-sftp": "^0.1.5",
	  "gulp-util": "^3.0.7",
	  "html-webpack-plugin": "^2.10.0",
	  "isparta-loader": "^2.0.0",
	  "json-loader": "^0.5.4",
	  "karma": "^0.13.22",
	  "karma-chai": "^0.1.0",
	  "karma-chrome-launcher": "^0.2.3",
	  "karma-coverage": "^0.5.5",
	  "karma-mocha": "^0.2.2",
	  "karma-mocha-reporter": "^2.0.1",
	  "karma-phantomjs-launcher": "^1.0.0",
	  "karma-sinon": "^1.0.4",
	  "karma-sourcemap-loader": "^0.3.7",
	  "karma-webpack": "^1.7.0",
	  "less": "^2.7.1",
	  "less-loader": "^2.2.3",
	  "mocha": "^2.4.5",
	  "moment": "^2.18.1",
	  "npm": "^3.10.5",
	  "phantomjs-prebuilt": "^2.1.7",
	  "postcss-loader": "^0.8.2",
	  "prop-types": "^15.5.10",
	  "react-addons-test-utils": "^0.14.7",
	  "react-timer-mixin": "^0.13.3",
	  "sinon": "^1.17.3",
	  "style-loader": "^0.13.0",
	  "url-loader": "^0.5.7",
	  "vinyl-ftp": "^0.4.5",
	  "webpack": "^1.12.14",
	  "webpack-dev-server": "^1.14.1"
  },
  "scripts": {
    "d:dev": "export NODE_DEVICE=desktop NODE_ENV=development && webpack-dev-server --progress --host 0.0.0.0 --port 3300",
    "d:build": " export NODE_SERVER=formaldesktop NODE_DEVICE=desktop NODE_ENV=production && gulp clean && webpack --progress --profile",
    "d:testbuild": "export NODE_SERVER=testdesktop NODE_DEVICE=desktop NODE_ENV=production && gulp clean && webpack --progress --profile",
    "d:publish": "export NODE_SERVER=formaldesktop NODE_DEVICE=desktop && gulp publish",
    "d:testpublish": "export NODE_SERVER=testdesktop NODE_DEVICE=desktop && gulp publish",
    "m:dev": "export NODE_DEVICE=mobile NODE_ENV=development && webpack-dev-server --progress --host 0.0.0.0 --port 4400",
    "m:build": " export NODE_SERVER=formalmobile NODE_DEVICE=mobile NODE_ENV=production && gulp clean && webpack --progress --profile",
    "m:testbuild": "export NODE_SERVER=testmobile NODE_DEVICE=mobile NODE_ENV=production && gulp clean && webpack --progress --profile",
    "m:publish": "export NODE_SERVER=formalmobile NODE_DEVICE=mobile && gulp publish",
    "m:testpublish": "export NODE_SERVER=testmobile NODE_DEVICE=mobile && gulp publish"

  },
  "keywords": [
    "react"
  ],
  "author": "yezi",
  "license": "ISC"
} -->



# .balelrc

<!-- {
  // 运用babel的3个插件，es2015,stage-3,react （即npm install时的那3个插件）
  "presets": ["es2015", "stage-3", 'react'],
  // 下面是配置按需加载那个插件的（babel-plugin-import）
  // 是从蚂蚁金服抄的，大致意思就是，css、less等样式文件需要按需加载
  // js也要按需加载
  "plugins": [["import",[
    {
        "libraryName": "antd",
        "libraryDirectory": "lib",
        "style": true
    },
   {
        "libraryName": "antd-mobile",
        "libraryDirectory": "component",
   },
  ]]]
} -->




# .eslintrc.json

<!-- {
    // 项目的环境
    // 意思就是以下配置的这些环境，它们自身的全局变量,eslint认为是存在的，比如jquery的$,如果下面不配置jquery:true,项目中直接使用$,eslint会认为$未定义
    "env": {
        "browser": true,  // 浏览器环境，window变量等
        "commonjs": true, // commonjs环境，require方法等
        "es6": true, // es6环境，各种es6新功能
        "jquery": true // jquery, 就是$符号
    },
    // 继承某个官方定义好的检查规则
    // 下面用的是react的规则，必须配这个，否则eslint识别不了react
    "extends": "plugin:react/recommended",
    // 设置各种解析器
    "parserOptions": {
        "ecmaVersion": 8, // js版本，最新的8（即JS2017）
        "ecmaFeatures": { // 额外的语言特性
            "impliedStrict": true, // 全局启用严格模式
            "experimentalObjectRestSpread": true, // 支持...余运算符，就是ES6里面那个“...”解构赋值
            "jsx": true // jsx语法
        },
        "sourceType": "module" // 代码类型：模块化。因为我们经常用import,export等
    },
    // 第3方插件
    "plugins": [
        "react" // 支持react(即eslint-plugin-react)，上面配置了jsx,但react语法不仅仅是jsx，所以需要这个
    ],
    // 自定义的检查规则
    "rules": {
        // 字符串的引号必须用单引号
        "quotes": [
            "error",
            "single"
        ],
        // 每一句代码结束必须加分号
        "semi": [
            "error",
            "always"
        ],
        "no-cond-assign": "error", // 禁止条件表达式中出现赋值操作符
        "no-debugger": "error", // 不允许代码中出现debugger
        "no-dupe-args": "error", // function禁止重名参数
        "no-caller": "error", // 禁用 arguments.caller 或 arguments.callee
        "no-invalid-this": "error", // 禁止全局this
        "no-unmodified-loop-condition": "error", // 禁止死循环
        "no-with": "error", // 禁止使用with语句
        "no-catch-shadow": "error" // 禁止 catch 子句的参数与外层作用域中的变量同名
    }
} -->
