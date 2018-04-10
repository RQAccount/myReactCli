# myReactCli
react + redux + webpack + antd


## GETTING STARTED

### 项目启动

#### 下载项目代码

#### 安装依赖

```yarn install```

或

```yarn```

#### 启动服务

本地启动

```npm run start```

本地 mock 数据方式启动

```npm run mock```

#### 浏览器访问

[http://127.0.0.1:3000](http://127.0.0.1:3000)


## 项目说明

### 目录结构
```
.
├── README.md
├── build   --  构建相关配置
│   ├── webpack.config.js
├── package.json 
├── src     --  项目源码
│   ├── assets      --  图片，字体和其他静态资源
│   │   ├── favicon.ico
│   ├── components  --  react组件
│   ├── actions 
│   ├── reducers 
│   ├── store 
│   ├── network     --  api相关的代码
│   ├── pages           --  页面组件
│   ├── utils           --  工具文件
│   ├── router.js       --  路由
│   ├── index.html
│   └── main.js       --  js入口文件
├── server.js        --  项目启动入口
├── postcss.config.js    -- antd 配置文件
├── .babelrc         -- jsx语法转译/。。。配置
└── yarn.lock       --  yarn锁版本文件

```