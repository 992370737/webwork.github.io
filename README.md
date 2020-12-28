### 部署地址
        webwork.github.io

### 简介
        网上商城前端网站
        作者：992370737(Z09418207黄诚江)

### 环境依赖
        "axios": "^0.21.0",
        "element-ui": "^2.14.1",
        "mockjs": "^1.1.0",
        "vue": "^2.5.2",
        "vue-piczoom": "^1.0.6",
        "vue-router": "^3.0.1",
        "vuex": "^3.0.1"
        json-server

### 部署步骤
        方式一:

        1.打开cmd窗口，定位至项目目录下

        2.json-server --watch db.json // 打开json-server数据库

        3.npm install // 安装node运行环境

        4.npm run dev // 启动项目

        5.打开浏览器在地址栏输入: http://localhost:8080 即可打开项目

        方式二:

        1.打开cmd窗口，定位至项目目录下

        2.json-server --watch db.json // 打开json-server数据库

        3.打开项目内dist目录下的index.html即可打开(但是由于在项目打包时element-ui没有能够打包进去，所以打开的时候会导致一些图标不能显示，因此推荐方式一打开)
