# hello

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 现在这里记录一些升级过程中遇到的问题

#### 1. 升级之后使用进行单元测试时，svg.js文件报错，无法阅读undefined的getAttribute属性?
原因是vue-cli的测试使用node.js进行测试，不是浏览器环境，无法获取到元素的一些属性，只要将它return回去就可以了。

svg.js文件中，添加以下代码即可
```JS
t=document.getElementsByTagName("script");
var e=(t)[t.length-1];
if(!e) {return};
```
