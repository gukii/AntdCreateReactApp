

Got Antd installed, following Ant Design's own guide to setup Create React App (CRA) with Antd:
- English: https://ant.design/docs/react/use-with-create-react-app
- 中文：https://ant.design/docs/react/use-with-create-react-app-cn

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Removed the remaining import of the CSS library, this is handled by babel-plugin-import now.
```js
/* @import '~antd/dist/antd.css'; */
```


## For mobile developers:
### Use Antd-Mobile instead of Antd
there s a repo for that:
https://github.com/gukii/AntdMobileCreateReactApp.git

### or make changes to this repo:

If u develop for mobile u might want to replace the antd library with antd-mobile:
- yarn remove antd
- yarn add antd-mobile
- Edit 'config-overrides.js' and change libaryName: 'antd' to 'antd-mobile':
```js
       config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: true }], config);  
```
- When importing react components, make sure you ll import from 'antd-mobile' instead of 'antd'.


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

App.js imports a button component from 'antd' and renders it on screen.

.config-overrides.js allows switching between CSS and LESS.
The LESS version shows how to override the color of the Button.

CSS/LESS and React components get imported selectively, only the ones used will become part of the final bundle.


## Libraries from package.json:

- [antd](http://github.com/ant-design/ant-design/)
- [babel-plugin-import](http://github.com/ant-design/babel-plugin-import/)
- [create-react-app](https://github.com/facebookincubator/create-react-app)
- [react-app-rewired](https://github.com/timarney/react-app-rewired)
- [less-loader](https://github.com/webpack/less-loader)



