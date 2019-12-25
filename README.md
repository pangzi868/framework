
## `目标`
- 兼容IE9+


## `开发`
### 1. 安装依赖包：yarn
### 2. 启动项目：yarn dev
指令执行后，将同时启动以下：
- 前端react：[http://localhost:3000](http://localhost:3000)
- 中间层node：[http://localhost:5000](http://localhost:5000)
### 3. 后端接口修改在/server/global/config.js内，接口参数是（API_ADDRESS），node端口参数是PORT
### 4. 开发时的本地端口修改在package.json中，port为页面端口参数，proxy为node端口参数，与3中的PORT保持一致
### 5. mock接口一般写在/store/modules对应的模块的mock.js文件中
### 6. axios配置文件在/src/utils/dataAccess下

## `打包`
### 打包脚本：yarn build

注：APP打包好之后，将会保存在 `build` 目录.<br>

## `生产环境部署`
### 1. 打包：yarn build
### 2. 启动脚本： sh run.sh
### 3. 访问地址：http://{host}:5000
注：run.sh是为了方便运维部署，部署过程仅用于启动服务器，不包括打包过程，打包过程应先由前端工程师完成.<br>


## `注意事项`
### 1. 兼容IE9+
- 不准使用flex布局语法

### 2. 要使用fork方式拉取项目

