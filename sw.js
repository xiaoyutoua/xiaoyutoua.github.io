/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","67b8729f75d4a3d0492440392c7f7eec"],["/2022/12/17/nvm/index.html","8abe0213567a937bd59bf88986ab8e7f"],["/2022/12/17/博客搭建学习笔记/index.html","97f15331270f8ceabc2f87ef7869cedb"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","52bf5ec0b7f13d96d6880ac838384cbc"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","ba744fa0981f95974d98fcc5f44aafa4"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","ba8ae28bac9ec79e13468740b4c7d0b6"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","37b54b7c118830e5623842abd2b05cfe"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","213a48408ab354d7b2b4f01a4aa3f87f"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","e110e376e848a8d1641b07934f9470ea"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","cec4f0461353c7c76c088aa79409f95e"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","3f219dc16c33448c4a22c953deeecaca"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","31161806d5519ebe695b04995283340e"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","0d5a46a6502e32c453d17e7740c777a8"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","00dba3e781b47db64110ff0f85f07fb0"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","fed684b07accae87559f9521d01b7316"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","8c706a249fa7717f51b6cb6d930cdf97"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","93ca62ef3484f7415481775aa2cbd43a"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","f13ad9cd321af047652041db2e4dfb94"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","29604f74b2997f32792ccb756aeb82f6"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","aa23b8bd8135c38112b7ee0734bb89d1"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","f45f25cfe50d4393f51a85b87935a03b"],["/2023/01/06/Hexo博客备份与恢复/index.html","401170204f332a58253908aec51eb5f0"],["/2023/01/07/停车场管理模拟系统/index.html","c141d84b736760c09decf693b4f5c956"],["/2023/01/20/Butterfly外挂标签/index.html","2f615781c358360cec17e76ef5ba37ad"],["/2023/01/20/erro_spawn_failed/index.html","f06d4c5b6631ad00f223ba40b8629dd2"],["/2023/01/24/Echarts社区地址/index.html","d7d9012b3cf9615779f15d0815540268"],["/2023/02/02/论文翻译/index.html","73d75fbc117bb20897345bd35301b984"],["/2023/02/06/WampServer图标黄色/index.html","894a1de3421105138d5a10afae799ef8"],["/2023/02/28/OpenAI-new必应/index.html","404482819b830d26274387994c2017a3"],["/2023/02/28/PHP页面间传值的几种方法/index.html","c770680b87c84308c95ff5daabe28611"],["/2023/03/02/node端口占用/index.html","64794199f8907bf3085f72f9f5b46190"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","3e0973e49c66128009a0813ef4d9e63e"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","831f0e03c22ac064b0d18b3fdc12bb0a"],["/2023/03/08/Servlet技术/index.html","93e7df7c7407bb41f5be0d98e2e437b7"],["/2023/03/08/模板字符串/index.html","6cd501760b8431131044d2bc553fcb01"],["/2023/03/14/Vercel部署网站/index.html","2fcf0d157284f3650a29aa9436db68c3"],["/2023/03/21/github-copilot使用/index.html","d94f995ba7459b1aee447836348cb1d3"],["/2023/03/23/从零开始的计网学习——概述/index.html","8c8fd3ace1b25edb46029069e45a6b11"],["/2023/03/23/从零开始的计网学习——物理层/index.html","0c73a078e88a8c78786c730c477fbdf4"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","b8be3d9b0d86e54befb313b7b24373da"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","15eb4b52c2d2da6be6951c6da4a755b9"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","8342e50567c8e4df871e2ecd69907847"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","6af361d6a06798ebb1c11f4a99bff5c5"],["/2023/03/30/微信云开发中的增删查改操作/index.html","b013063c6410a6fad6140e7c91eb7459"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","719946429adbc336821123864ff55640"],["/2023/04/04/文心一言上手体验/index.html","38b29e71278adf81a4ea300e69ce3de9"],["/2023/04/05/操作系统基本概念练习题/index.html","4f2ba2c79c83da51581217ea21362da3"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","347be446efbd9f32dbcd871374a55653"],["/2023/04/12/数学建模图像处理/index.html","a69f5328e501cfc012555ab81048043a"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","93bab98ece77a9199f6def5af4827bf1"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","dbef2e56f5f232c71891ad66c25007fe"],["/2023/05/08/python内置函数使用方法/index.html","8d71bd640fea1b9523613e2fd4d7a531"],["/2023/05/09/python基本输出方法总结/index.html","13ceb40f67d5a1c7f0ab0110de74d3ee"],["/2023/05/15/微信小程序入门到入土/index.html","f6e95ddc6b17aeea6116fe7653fa098a"],["/2023/05/16/c-一些不会的知识/index.html","45a2bf8c3c4fb87dc309e42f47f1380a"],["/2023/05/16/c-提高编程/index.html","1438ce588833fea690da78824b03477b"],["/2023/05/16/一文弄懂Python装饰器/index.html","05b11265936ecfd5cd0d56d5ae625b8d"],["/404.html","ee0ddb8f00dd31d42f85048eafbb71ac"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","3b7b014f90ea1c47f3038a0f6b9f03b3"],["/archives/2022/12/index.html","50e288c78cc1756efc86dff4f9061d6b"],["/archives/2022/12/page/2/index.html","f190eae3c39dc875c2bff41f6b402668"],["/archives/2022/index.html","e79e8734b2eed1f236695fc5fadfa8f5"],["/archives/2022/page/2/index.html","4bc67cfd058e26e32150ceb97f664565"],["/archives/2023/01/index.html","1b354b988330387caf61b6c0d0f74b39"],["/archives/2023/01/page/2/index.html","8e2c03ff14ec495c51936bc39051455d"],["/archives/2023/02/index.html","3589dd8deaff721ea681268a0b3b6559"],["/archives/2023/03/index.html","3e79bfab239a58015591f7c651997851"],["/archives/2023/03/page/2/index.html","a3eef540f85c502e368f982e7a2fa410"],["/archives/2023/04/index.html","f14be7320bc8e9da656fce8a710e7907"],["/archives/2023/05/index.html","6a343d151187b69c5085ca6ebe83508b"],["/archives/2023/index.html","c8cfb923557e3b24b1f3330eda58f406"],["/archives/2023/page/2/index.html","5935a2e5e08248982c0d0b85249e1a30"],["/archives/2023/page/3/index.html","a221990deb95c8029d8082f35c715270"],["/archives/2023/page/4/index.html","49bd3cb2d06d826fdae8c308170fe45c"],["/archives/2023/page/5/index.html","2906f31e2057dff621b2b4e93f734001"],["/archives/index.html","009e8e9d2515c953290523d902e2cd52"],["/archives/page/2/index.html","ae6dc9f7e62f585f810a0a2204746ff1"],["/archives/page/3/index.html","f20711ca0fd2c9568360c4f67b7931e6"],["/archives/page/4/index.html","08fd9b0cd940c2270f3f85795ed6797b"],["/archives/page/5/index.html","a67d57d0295b41cd043819b700f63118"],["/archives/page/6/index.html","ef9ea56a042e1466e3220b9138fef170"],["/categories/bug记录/index.html","824a8358d97605c990678cb0d13fa180"],["/categories/index.html","f27a723767c4c00cc65c9573224df944"],["/categories/学习/index.html","0fe70fe05585436bc35586a82af16930"],["/categories/学习/page/2/index.html","d4979b06fd2699318ba19bb1b06facee"],["/categories/学习/page/3/index.html","41187e9d06b38b46ac60ca9d70586a16"],["/categories/学习/page/4/index.html","74e6251b56cde1ac61e1e77d24be9ebc"],["/categories/教程/index.html","48d6c55707e8cee5259a446dff8653fd"],["/categories/教程/page/2/index.html","32ca4a4aa28bd4ce8e04c760c2d49f75"],["/categories/日常/index.html","0111e5b552505d07464055c16e14d225"],["/categories/项目/index.html","3bb53450cb1bbdcccacd081729259664"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","a4659f94845b5e65f772072d5a0e4794"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","fabca8a8f692d6fd8890846ba89052da"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","71b6887b3554dea30084ddc9c918f49f"],["/love/index.html","468b27acb4957855f531e9fa3275f1d1"],["/my_project/index.html","798c02e45166665cc37782c11c6911e9"],["/page/2/index.html","9449cd9b6959d423e7a43a0ce7718d79"],["/page/3/index.html","93a5b5d69b93b3ffce7333f20404cb67"],["/page/4/index.html","f12f796eb2f6c8e681fc3e018464d791"],["/page/5/index.html","74146a88eaa679b46dc28441245bc76b"],["/sw-register.js","b3ffe16757765c8fe8c44b22aec13746"],["/tags/C-C/index.html","37ef40e4dbb0d0903e400210dd77cb3f"],["/tags/JAVAWEB/index.html","a5f7e2ef34215e0d7316a2f8aaefcb40"],["/tags/Java-Web/index.html","a1beeba1e5b657da69773e989db9f8b5"],["/tags/JavaScript/index.html","cd0ba82042b9cb8841447b91f1403118"],["/tags/OpenAI/index.html","9ca6e6a193c60c8b844aa94ab53f3bcb"],["/tags/PHP/index.html","df0867fd123a18e75bae44cf4771fc38"],["/tags/Python/index.html","430b1143a5ea65f03c54352243f4570f"],["/tags/Servlet/index.html","59a4810b090c8e6df38b61a4426ab1ab"],["/tags/Tomcat/index.html","fd66c3ef2498bc5f3e502aa7bb43cba5"],["/tags/Vercel/index.html","c47264a2147baa0cefed3caed4b2fe0b"],["/tags/WampServer/index.html","5e8c19f29435e36391b7721e5c4dc60c"],["/tags/butterfly/index.html","4bf1a8b6e1e8271ce77de1bd891c4d87"],["/tags/copilot/index.html","48af79c494f8fc08e531af84fd7fddc8"],["/tags/css/index.html","c42acfe7ebe9f89cde97e81d6606f899"],["/tags/hexo/index.html","14a56a5e5f278db171e65b302a42c214"],["/tags/index.html","5add25667e1589b20f236f332d51cf41"],["/tags/node-js/index.html","4d11efe1d937b62580b2fae1a92135c8"],["/tags/nvm/index.html","3141d9c1a72085613ff4e25a946194eb"],["/tags/paddle/index.html","1649b28a40ca10accf6903d7d812815f"],["/tags/paddle/page/2/index.html","19a4f2f00b21f09b4ce4f3564ef6c0c5"],["/tags/人工智能/index.html","7d0b04d2dd9424347528903e474f9a13"],["/tags/人工智能/page/2/index.html","01c675cf2925789bb21c3e624ed77fda"],["/tags/博客备份与恢复/index.html","01f9968123c3f979b49a3f5658667e47"],["/tags/微信小程序/index.html","4a7a71c566c33e47eb69ae0e374b9610"],["/tags/操作系统/index.html","46de432332ff9302c0d26d35539076dd"],["/tags/数学建模/index.html","2b07f868d22494fd1277d0ef13936d49"],["/tags/数据可视化Echarts/index.html","b1deb318253403acfd4cca9bfb5e8fee"],["/tags/文心一言/index.html","f6bb80949c5b676ac5dbb84d824335b1"],["/tags/新必应/index.html","e1883bd5e5b365f5ccaf42755bb58269"],["/tags/深度学习/index.html","67ea377505944d7b6ce6f6a963d10d41"],["/tags/深度学习/page/2/index.html","4d2a5ab13f7a4c070043e81586cc44d0"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","bffbf75e6b8ff97f81cb40fdab9b9ac6"],["/tags/深度学习基础-基础模型实战/index.html","18e200819a72c2f0c89ea7264070da5d"],["/tags/深度学习基础-模型选择与调优策略/index.html","dfdf9bc81da7c708b735ce33f36181ea"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","adc4e1d6026aaefef710acbdd7a848ce"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","aa4b11b8a8cc6d408492539880206645"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","491644a66d0b3880c6fc74ac756fb864"],["/tags/网站部署/index.html","9353c0034fa02b05d189851a74cff7c3"],["/tags/计算机网络/index.html","1267c0e5e8a38f3ea1940d66292a65ac"],["/tags/论文/index.html","730a640d272ba99e84a1b30770d4623b"],["/web_site/index.html","02d6b1e79cbc6476cfb795e018b6e18d"],["/唠嗑/index.html","f927808ae7aa7c10d45f4fd65899b987"],["/装修日志/index.html","e10e1372a3bb93f32c5302dc6586c8b3"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
