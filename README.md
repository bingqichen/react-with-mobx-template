# react-with-mobx-template
项目模版-react&&react-router@4&&mobx

## 技术选型
- [react](https://github.com/facebook/react)
- [react-router@v4](https://github.com/ReactTraining/react-router)
- [mobx](http://cn.mobx.js.org/)
- [ant design](https://ant.design/index-cn)
- [axios](https://github.com/axios/axios)

## 目录结构
```bash
├── src/
│   ├── components/     # 组件
│   ├── config/         # 一些配置项
│   ├── containers/     # 路由组件（页面维度）
│   ├── services/       # 数据接口
│   ├── stores/         # 数据模型
│   ├── utils/          # 工具
│   ├── app.js          # 入口文件
│   └── router.js       # 路由配置
├── webpack/            # webpack配置
├── index.html
├── package.json
```
在组件的设计上，应该明确`components`和`containers`目录中的组件职责：
- 尽量保持`components`中的为纯组件([PureComponent](https://facebook.github.io/react/docs/react-api.html#react.purecomponent))，一般来说它所需要的数据都来源于页面组件或者父组件传给它的`props`。
- `containers`是页面维度的组件，它的职责是绑定相关联的`stores`数据，以数据容器的角色包含其它子组件。

接口服务都放在`services`中，供`stores`中的方法来调用。

## 使用
```
npm:
  npm install
  npm run dll
  npm run dev
  
yarn:
  yarn
  yarn dll
  yarn dev
```
在启动`dev`任务之前请务必先运行一次`dll`任务。该功能可以大大提升`webpack`打包性能，关于`dll plugin`的详细资料可查看 [dll plugin](https://webpack.js.org/plugins/dll-plugin/)

## 其他
- 启用`editorconfig`来让编辑器自动读取格式化文件；启用`eslint`；
- 使用`happypack`加速打包。

## 关于项目的一些配置项
- `webpack`的配置：
  - 在`.babalrc`中配置`transform-decorators-legacy`来使用修饰器；
  - `webpack.config.js`是基础配置，一般情况下不需要更改；
  - 在`prod`配置中，`publicPath`属性区分了测试和线上环境的静态资源引用路径，请按需替换；
  - `dll`配置用来生成一个单独的、平时不需要更改的`vendor.min.js`，在业务代码之前引入，只有在后续升级或者增删了主要依赖包才需要重新执行`dll`（大部分情况下后续更新的都是业务代码，更新依赖包的频次远远小于业务），这样一来只要这部分不发生改变，我们平时更新业务代码时这部分是不需要更迭版本的，利用原有缓存而不需要用户重新下载。
