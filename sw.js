/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","4b03c4ac26f4ac3fc1c63cb468bf89f8"],["/2022/12/17/nvm/index.html","c92fc62f647bbd6cb17e208401c8c0aa"],["/2022/12/17/博客搭建学习笔记/index.html","23dc608caf71609296f3d3fbcbf61089"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","b3ce808e40c90458591529951a3cfae2"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","a22968a752458b9100ac8dd161f00bdc"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","9039f956ab6328ad96e4a7a7d2c8a7b5"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","2726dddcc3860d5a2a0c93b609bfc22f"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","84cdc490e8e88e2cfe50f9343148d4b5"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","fd8bed1f9dd4e73c706d71f5a390d9d6"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","bcc9b268108a2b4ea9c2b501aa524429"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","5ff47d26edacede86252894785db3f44"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","da9bfd494b147e1e81925477fe3d8d02"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","8e810b200277f035179b5849d313f158"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","f4cca3dda75f993ef115a2b1d1b24666"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","b7c58adcbaafec6ab4e623d677dc5c5f"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","9084ff26922c271497fe854b55eefc4a"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","013fa11c15f7713edadfc9fca42cceab"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","a1bf1d08b87d2e2aaf4a249fd9bac2dd"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","c56df50ca89bfa154d4a16304a1a9b3b"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","8d5d32b84c42b636954be32796d170b1"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","f7c518aeaf7218554acd129a9c00961a"],["/2023/01/06/Hexo博客备份与恢复/index.html","24c7744ee9354b71b9da9a652d5f1e4d"],["/2023/01/07/停车场管理模拟系统/index.html","4b95b6d66ebe51c99e96d25d7266403f"],["/2023/01/20/Butterfly外挂标签/index.html","0f37f563c713f3b483c2381df4a6f58c"],["/2023/01/20/erro_spawn_failed/index.html","f4fef1b5311df67af98630b735f876b4"],["/2023/01/24/Echarts社区地址/index.html","09d8789fb302267aa50fda3c4901cd5a"],["/2023/02/02/论文翻译/index.html","5a73b0227de9410f747c21e15d237477"],["/2023/02/06/WampServer图标黄色/index.html","a03682ba9781358e4016f0692395f551"],["/2023/02/28/OpenAI-new必应/index.html","9b26f10f8166cb88d0f948f2118caf8a"],["/2023/02/28/PHP页面间传值的几种方法/index.html","140169a854580cf720456a51d19d8e11"],["/2023/03/02/node端口占用/index.html","3b30d968fb1b3788849cf74b8610cfbc"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","dd5207ff535e876e7f0cacff613c9726"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","751c7df8b8f06bdad652d53da6864345"],["/2023/03/08/Servlet技术/index.html","d353822302b69ce87a5ba5ee37e7a6f9"],["/2023/03/08/模板字符串/index.html","22edc891cfd4fcd73b5a1ab6eb1b8c6a"],["/2023/03/14/Vercel部署网站/index.html","b7f444d65133733a50aa8e7195edde30"],["/2023/03/21/github-copilot使用/index.html","f7fe7c1a3814f81394e70b12a1cf499e"],["/2023/03/23/从零开始的计网学习——概述/index.html","c9033c02bdef2b04d6bbd32630d58e99"],["/2023/03/23/从零开始的计网学习——物理层/index.html","e0a842003d4599f09a5cbed479f71e64"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","07faf8da65992456fa1024048ea40579"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","d7d19b401544ddd30ff8766a9a5ff0c2"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","6ccf4bac0fa480c1c94672e272b1454d"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","3b10a4fba74907077dd4ffdcc908638a"],["/2023/03/30/微信云开发中的增删查改操作/index.html","b7f0b6d1d387ab61491313b4cadfc818"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","867d9292847ee191285f33e4b7333dd6"],["/2023/04/04/文心一言上手体验/index.html","382c0cbc652279fe10d1e032c8916673"],["/2023/04/05/操作系统基本概念练习题/index.html","1d341f23bcbf5b6c40339cc3c82f1c41"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","42fe5a1e1169377ba1180fb398fdcaf7"],["/2023/04/12/数学建模图像处理/index.html","e7d33e15d84185c775b7147c8b653c92"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","b32f8fbdc0b8fe328c7f7f97c7e5e107"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","d9aa8ea0ec1df3e43e5978a1dec282ca"],["/2023/05/08/python内置函数使用方法/index.html","0afd5ccb4fa8fdc8707dd5261420fe3f"],["/2023/05/09/python基本输出方法总结/index.html","0871fbf4629b2cb538ec2c31e078833b"],["/2023/05/15/微信小程序入门到入土/index.html","b27b2aa9defa8ec6d6b26ae2ae7be1a8"],["/2023/05/16/c-一些不会的知识/index.html","e7c985fa801ed8f7773affb539c6da61"],["/2023/05/16/c-提高编程/index.html","56e24cc81eadfeb6f06da8f42e994c59"],["/2023/05/16/一文弄懂Python装饰器/index.html","47dbd7ff694701a6d5191c4d484c204e"],["/404.html","0ac4332174095c1b0d6a8706fd7dd9b0"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","a89025dc4e942e8694203aaab450c61a"],["/archives/2022/12/index.html","5026fdc62ecc6bff60c390811a9db904"],["/archives/2022/12/page/2/index.html","d79828b7906b880a33d8ef31f1308410"],["/archives/2022/index.html","fc9c1c93d36f1aeb29bafb1258f274f8"],["/archives/2022/page/2/index.html","10dce8733d4965408bf1771f7dc47998"],["/archives/2023/01/index.html","741af2060ecb58eaad0b2227688448ec"],["/archives/2023/01/page/2/index.html","740d1604d2486ff4a99d7e74bec61942"],["/archives/2023/02/index.html","58309b856a129c7d3810debffbe257ea"],["/archives/2023/03/index.html","b0877e1d727238a3aaa88b6f953d4b38"],["/archives/2023/03/page/2/index.html","b000acefef78b838573408907ff11f02"],["/archives/2023/04/index.html","8a05739c84f7e63d02618d2619bf5d71"],["/archives/2023/05/index.html","f02726f4280dd22f21304f241076e50f"],["/archives/2023/index.html","2bad8d01d219c540b50badb6140bf9db"],["/archives/2023/page/2/index.html","0c3b9ee0b3983e478c524102e11c323f"],["/archives/2023/page/3/index.html","d9c00401f179e28a781110aacc111d30"],["/archives/2023/page/4/index.html","7f32adaa0dfa2721b7732174b6bed5f8"],["/archives/2023/page/5/index.html","aa2fa8ba4211f20283086c493ef4c12f"],["/archives/index.html","a2922f28409e1abd521305ecc97e98ea"],["/archives/page/2/index.html","d1d97590e5ca4dff74043ff460400993"],["/archives/page/3/index.html","19cf03a5e1282860f08d088e424c9e0f"],["/archives/page/4/index.html","2d06ce6ea031adbd8b96d074a57a03f9"],["/archives/page/5/index.html","ccd88c579d4d4a36794e44e0319983c9"],["/archives/page/6/index.html","12235ab37cccd47cfc35d22014b76a7a"],["/categories/bug记录/index.html","793c13c075de0981e024f4ca717ed760"],["/categories/index.html","63dd6031699675475dbd0786b61320d1"],["/categories/学习/index.html","f000617e09a216baed0b80f02871da7e"],["/categories/学习/page/2/index.html","8feda22519594cd2e649f7f1e5429ee2"],["/categories/学习/page/3/index.html","b5a6a6f8c07d3e1700c77a06cd65f851"],["/categories/学习/page/4/index.html","7ee6a27a292a2551b1508605e577f5f7"],["/categories/教程/index.html","acc2c0db39b7d50cafc67534b62d935e"],["/categories/教程/page/2/index.html","d094b9fff0352c785e1aa21b0c220123"],["/categories/日常/index.html","8d6bca9645c8e880851bb44f2f260c9c"],["/categories/项目/index.html","3ce4af70ca21fd957a88aedbcbed7cf3"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","a4659f94845b5e65f772072d5a0e4794"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","6271c5a5df564becbfe4efaa8526fa13"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","737319b2a448b45c7ee6eac313348741"],["/love/index.html","6c3e02ae0b69318a1539e5beaa6c40a7"],["/my_project/index.html","0657420448c98dfcacdc609c87eb9536"],["/page/2/index.html","f43b1d2b092369f56fe8c0b2c0974b7a"],["/page/3/index.html","07ff4009ce4aa040ce016042516bcd4c"],["/page/4/index.html","12c65fa37283b4a3b12d4164550e7203"],["/page/5/index.html","928f8887d59c76d0a8f01e146cc65c49"],["/sw-register.js","44e00014b706e928bccd0552655cd6d0"],["/tags/C-C/index.html","fbba4a346b7014b5546f8628d7fcc9eb"],["/tags/JAVAWEB/index.html","5507d5d7b2e3201b50a74f587ebd6836"],["/tags/Java-Web/index.html","e4abc40e7fd30ef3d2c6a48b60938d79"],["/tags/JavaScript/index.html","8a41679174b696f8ae7b596bfbb9d2f7"],["/tags/OpenAI/index.html","442453155b9695692b75216f18878628"],["/tags/PHP/index.html","5b02fab7638c90b837ab16c359bd5128"],["/tags/Python/index.html","3ecb81e95e3d561db139adb5beb28e4d"],["/tags/Servlet/index.html","d1fd6759be68dddabf76ddb17fcc6767"],["/tags/Tomcat/index.html","49fae17822b42288213c91a10ec5c65f"],["/tags/Vercel/index.html","99930eb2cd9e005d8a7946e62d413943"],["/tags/WampServer/index.html","7e60658e5a499a650f162a877cca7fbf"],["/tags/butterfly/index.html","81fdd4b6904d3bd729079433a3cbd20f"],["/tags/copilot/index.html","f7c01426395d7e13cdf97326c147f018"],["/tags/css/index.html","5752dc5dc1e5e9302cd719238bd36a2a"],["/tags/hexo/index.html","2c0a75a4e23d98898b3437f3f8ffd756"],["/tags/index.html","8ed2d7128e8ab0dc624ed27c59c5134f"],["/tags/node-js/index.html","6dedc14686fc42482667fed32aa386d7"],["/tags/nvm/index.html","9e2e67f4ed862e5ed60fab9e3812a8d0"],["/tags/paddle/index.html","c795b543a30ebb63effac3fdf3ada793"],["/tags/paddle/page/2/index.html","851f1c327dc0a9652904ff3fb393b785"],["/tags/人工智能/index.html","70ab8dc631bd3f5a59ccfe22e5fb5525"],["/tags/人工智能/page/2/index.html","4be60c8c334a5e569f42095ac9ad85e6"],["/tags/博客备份与恢复/index.html","0bbb9df40069fc3443bc358b7bba44ff"],["/tags/微信小程序/index.html","5ce728f56d515af987aca11eb65d3650"],["/tags/操作系统/index.html","7e10e105ace53f24123d11fe9feb7f87"],["/tags/数学建模/index.html","7851ce94277bd14df8b37d96fbd43bb0"],["/tags/数据可视化Echarts/index.html","2d2c92aa920e830f2cd853be211d6471"],["/tags/文心一言/index.html","f5a900fc53cec1b892b8c26399b35450"],["/tags/新必应/index.html","0f06f7804e820bb051f873d720b1192c"],["/tags/深度学习/index.html","6663c49ec483d8b4c0f483b3d8fbadeb"],["/tags/深度学习/page/2/index.html","3676218622b0495ab6b00dd341447ace"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","ca67f5da4e2ea96a71f22f7101168db0"],["/tags/深度学习基础-基础模型实战/index.html","b18a14c9af44eb9e80b2dd28de1d75a7"],["/tags/深度学习基础-模型选择与调优策略/index.html","fbdb739bd94c94cf8aa2ac8936d0ef66"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","24ea2780e35779e774e657b885f38722"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","d9dd9cadc72fb2458918bacc6fab3944"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","53d231922e3922b1357d00052514cd1f"],["/tags/网站部署/index.html","4f2168b91673009f26ee68242fda2ac3"],["/tags/计算机网络/index.html","d56adcac6d2078c1c280eb45a0e76aa3"],["/tags/论文/index.html","7fbc4907d0b770a4bebfc18f26f49df5"],["/web_site/index.html","1dad048ef9d6d8ea760755a1398216a3"],["/唠嗑/index.html","79762adbafbff54d3a9902de09fcdd29"],["/装修日志/index.html","6fc9ce41d5c186e07b07083fb3fa7797"]];
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
