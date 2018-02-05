

Got Antd installed, following Ant Design's own guide to setup Create React App (CRA) with Antd:
- English: https://ant.design/docs/react/use-with-create-react-app
- 中文：https://ant.design/docs/react/use-with-create-react-app-cn

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Removed the remaining import of the CSS library, this is handled by babel-plugin-import now.
```js
/* @import '~antd/dist/antd.css'; */
```

## For mobile developers:

If u develop for mobile u might want to replace the antd library with antd-mobile:
- yarn remove antd
- yarn add antd-mobile
- Edit 'config-overrides.js' and change libaryName: 'antd' to 'antd-mobile':
```js
       config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: true }], config);  
```
- When importing react components, make sure you ll import from 'antd-mobile'.

## Install and run:

```bash
$ npm install
$ npm start
```

or:

```bash
$ yarn
$ yarn start
```

## Libraries from package.json:

- [antd](http://github.com/ant-design/ant-design/)
- [babel-plugin-import](http://github.com/ant-design/babel-plugin-import/)
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
- [less-loader](https://github.com/webpack/less-loader)



