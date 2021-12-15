# CORS 跨域配置测试环境

## 背景

前两天出现了一个生产事故。前端在接入 Sentry 过程中，给所有发出去的 API 请求头中增加了 sentry_trace 字段，导致跨域请求被服务端拒绝，原因是新增的字段不在服务端允许的请求头白名单内。
在定位问题的过程中，发现前后端对跨域请求的理解和配置都有写模糊，所以整理一下对跨域的理解。

## 项目实践

### 准备环境

- [Docker](https://www.docker.com/get-started)，只是个软件，装就完事儿了
- 2个项目
    - fe 前端静态 H5 项目
    - be 后端项目，基于 Egg.js 搭建


### 环境搭建

流程图


修改本地 host 文件，使浏览器访问 `http://h5.live.cc`、`http://api.live.cc` 指向本机，不走外网。

```bash
vi /etc/hosts

# 新增一行
127.0.0.1 h5.live.cc api.live.cc
```

通过 git 拉取本项目

```bash
git clone https://github.com/junbinding/cors-test
```

进入项目中，启动项目前确认本地环境 docker 已经启动，且本地 80 端口没有被占用。

```bash
# 启动 Nginx 服务
docker-compose up -d

# 启动前端项目
cd fe && http-server

# 启动后端项目
cd be && npm i && npm run dev
```

本地 nginx 服务已经启动，浏览器访问 `http://h5.live.cc`，页面正常访问，我们打开控制台，调整前后端项目中的参数，看看报错。

这时候我们可以看到页面已经支持访问了。

修改完 nginx 配置后，需要重启 nginx 对应的 docker 服务。

```bash
docker-compose restart
```
