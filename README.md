## 开发

```bash
# 克隆项目
https://github.com/

# 进入项目目录
cd ZLQX

# 安装依赖
npm install

# 建议不要直接使用 cnpm 安装依赖，会有各种诡异的 bug。可以通过如下操作解决 npm 下载速度慢的问题
npm install --registry=https://registry.npm.taobao.org

# 启动服务
npm run dev
```

浏览器访问 http://localhost:80

## 发布

```bash
# 构建测试环境
npm run build:stage

# 构建生产环境
npm run build:prod
```

beforeRouteLeave - 离开当前路由时会先触发该函数
beforeRouteEnter - 进入路由前先触发该函数
