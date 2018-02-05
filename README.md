This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Got Antd installed, following Ant Design's own guide to setup [Create React App (CRA) with Antd](https://ant.design/docs/react/use-with-create-react-app).

Removed the remaining import of the CSS library, this is handled by babel-plugin-import now.
/* @import '~antd/dist/antd.css'; */

## For mobile developers:
U might want to replace the antd library with antd-mobile, if you develop for mobile:
yarn remove antd
yarn add antd-mobile

Edit 'config-overrides.js' and change libaryName: 'antd' to 'antd-mobile'

When importing components, make sure you ll import from 'ant-mobile'.

Current version of Antd is: 3.2



