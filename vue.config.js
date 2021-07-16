module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // productName: "ebopo", // 项目名,这也是生成的exe文件的前缀名
        copyright: 'Copyright © Ambow',  // 应用程序版权行
        publish: [{
          "provider": "generic",
          "channel": "latest",
          "url": "http://ambow-ebopo.oss-cn-beijing.aliyuncs.com/common/electron/",
        }],
        "win": {//win相关配置
          "icon": "./public/app.ico",//图标，当前图标在根目录下，注意这里有两个坑
          "target": [
              {
                  "target": "nsis",//利用nsis制作安装程序
                  "arch": [
                      "x64",//64位
                      "ia32"//32位
                  ]
              }
          ]
        },
        "asar": false,
        "nsis": {
          "oneClick": true, // 是否一键安装
          // "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          // "perMachine": false, // 是否显示辅助安装程序的安装模式安装程序页面（选择按机器还是按用户）。或者是否始终按所有用户（每台计算机）安装。
          // "allowToChangeInstallationDirectory": true, // 允许修改安装目录
          "installerIcon": "./public/app.ico",// 安装图标
          "uninstallerIcon": "./public/app.ico",//卸载图标
          "installerHeaderIcon": "./public/app.ico", // 安装时头部图标
          "createDesktopShortcut": true, // 创建桌面图标
          "createStartMenuShortcut": true,// 创建开始菜单图标
          "shortcutName": "ebopo", // 图标名称
        },        
      }
    }
  }
}