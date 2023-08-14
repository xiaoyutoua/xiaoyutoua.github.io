/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","e009b015ae4dcad0b8d2c473492d9f08"],["/2022/12/17/nvm/index.html","43ab929c89c6d02401b40760b79a8226"],["/2022/12/17/博客搭建学习笔记/index.html","3f9604660f90cc9d14be8ade4c1b3a79"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","958e1d07563a3e21ecefcd8b76c43ffb"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","c2002fdb4ebef2bd956e823147ab5613"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","b5780e27a0a690e12a7496585f3edda4"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","be50ff6951db88261fcb6126bf9f5d22"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","cda24d646b3d12f57bd6b109fe626d85"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","35ef61ca46a36668b14a51bc40197187"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","e613415f865b958cc6eec4249ee50bf7"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","5c5b41a01cff1204c04f0ea8754f6f35"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","52c57329f241c44d897b69a88b3628b5"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","44f8be72c32cae34fac9e1a58e22bcac"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","b044c1c37ef9e5c39bb9e5ea40ce60e4"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","0b313b56b49c42ac72d5cbe4714ff5b7"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","8c52568c12d5c0e5a502b68c5a2d2cde"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","3f8d7ebf4136d9a9cbdec136292a632e"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","5e7d7f04d35bdeed7b2476a44038b68f"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","65b959f432f04d41151c703dfa8a2af6"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","43c1dc7c92cf89355c1d418ebd373e33"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","1b87e13a62fb19cb397659cca6488333"],["/2023/01/06/Hexo博客备份与恢复/index.html","311cde8e20cb6d95f9ea1562f30ac0ec"],["/2023/01/07/停车场管理模拟系统/index.html","10d2a520db98930581fcbf86528e0401"],["/2023/01/20/Butterfly外挂标签/index.html","5040574657ee58d26b0cb6c3d70109c1"],["/2023/01/20/erro_spawn_failed/index.html","cf1ab498629721da3fb50ae47e9817de"],["/2023/01/24/Echarts社区地址/index.html","99d54913472192f0ff590e237338718d"],["/2023/02/02/论文翻译/index.html","852fd930a6db7f728a5096b2622a3005"],["/2023/02/06/WampServer图标黄色/index.html","430e07ac3f73485dd6fa2934426cbedb"],["/2023/02/28/OpenAI-new必应/index.html","897481a8214544d03fde4091c9db93a1"],["/2023/02/28/PHP页面间传值的几种方法/index.html","6db3e38becf1fbd616f7f3c5dc54c1d3"],["/2023/03/02/node端口占用/index.html","0ee3b06c52f96724686684a0337e6eff"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","1a0d2d5635c2d88cb45238a8c270b182"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","799e98cdc2f2309ecbd8de5b7a1d4d82"],["/2023/03/08/Servlet技术/index.html","011c784b7760c6be1766a055e0c25d73"],["/2023/03/08/模板字符串/index.html","0d0645bfd4daeb50946a0512ed006638"],["/2023/03/14/Vercel部署网站/index.html","d4a066a27e15d9b55334a4fd37d1b122"],["/2023/03/21/github-copilot使用/index.html","beef8cc6bf9b37c076b048966c6138ef"],["/2023/03/23/从零开始的计网学习——概述/index.html","7065dc5276437c02bc275a39ee40c97f"],["/2023/03/23/从零开始的计网学习——物理层/index.html","ba44230bb2ecaf3325f623893e395309"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","748e1a2dfe2b7e669413a28da232bf90"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","032885ddad6f80651cb527756859d4bb"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","0e69cd14272436de1873b81b4b24aae9"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","365c9190238e518877d7f099e1a1e3fa"],["/2023/03/30/微信云开发中的增删查改操作/index.html","ff97021608997d545778f38db3506f76"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","cd5cdfe048fb0564edd22c346af61408"],["/2023/04/04/文心一言上手体验/index.html","1a8ce52b57cc6f992998eee699a41c37"],["/2023/04/05/操作系统基本概念练习题/index.html","ff1fdd81638a32a6f05d56ba1c619531"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","acefd941a53e0300eb6e47b5bcdff5db"],["/2023/04/12/数学建模图像处理/index.html","b34aa8f67c0e57dd477e4fd73c985b16"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","acdd6798b0817ee673450f3727103b55"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","b85da5e7ff2b4f1f802512cfb754935c"],["/2023/05/08/python内置函数使用方法/index.html","e0e27cdd9fab23d421db74abcffe8375"],["/2023/05/09/python基本输出方法总结/index.html","1e5188be51b0fbec901a477f855bd234"],["/2023/05/15/微信小程序入门到入土/index.html","e638c233f624601a732418be3a5dba02"],["/2023/05/16/c-一些不会的知识/index.html","7da0770596eba09d997ed1fbb3673a67"],["/2023/05/16/c-提高编程/index.html","369afffed0071775b4c63ecf17c257b2"],["/2023/05/16/一文弄懂Python装饰器/index.html","95b62c23cf3095a44425e38b5bdf0af7"],["/2023/05/29/Python四大法宝/index.html","34e77029fcd14674104be50c4481a1b6"],["/2023/05/29/如何更快熟练Python字符串？/index.html","2e6e8d535471a8e4d268916a21c6fadf"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","b972581d3ccbcea60f1bcde53a5730fa"],["/2023/06/07/灵神基础算法精讲（一）/index.html","155fe3e606bfceb512490f8ae515b785"],["/2023/07/17/灵神基础算法精讲（二）/index.html","6cd71a6976834dbae6e21abf710e1160"],["/2023/08/14/python的一些库/index.html","53d51f8b5fe7041086162cd5bb3c0cef"],["/404.html","faca5708755e9981177a30383236c543"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","f992fae6266f968bbff6851375ea1322"],["/archives/2022/12/index.html","61220b125686c09fd5eee85ade83c23b"],["/archives/2022/12/page/2/index.html","7f4148e7c1e557ce0c82d65cbb26b849"],["/archives/2022/index.html","707dc1835f28fe33af6cfc26c8ec67de"],["/archives/2022/page/2/index.html","e153865e602e6da6332b3db285261296"],["/archives/2023/01/index.html","f39c4e075621b07309334f316e693f99"],["/archives/2023/01/page/2/index.html","cb1471cdc1322ce5f349f177aa18e3cc"],["/archives/2023/02/index.html","267db2bd74f60616b0bcc13f63cbdbd8"],["/archives/2023/03/index.html","3e68cbaff55f873afaf9495323b6c5e5"],["/archives/2023/03/page/2/index.html","24c035469d2adbb29651653269ce1611"],["/archives/2023/04/index.html","6bd3335062a0875ee7d27b8ac03caa09"],["/archives/2023/05/index.html","b2a7ce5bf31c5324e79408c0e83c4b73"],["/archives/2023/06/index.html","63b41e94e5c90dfa90815e52f7c82a34"],["/archives/2023/07/index.html","7cfcebdf501539c19489e120a2cf2ca5"],["/archives/2023/08/index.html","76eb360d345d13913dc16133ec8feece"],["/archives/2023/index.html","923a1cab44d35882c9ec189813eaeb0f"],["/archives/2023/page/2/index.html","59f13b3cda1f0dc5fc6487cfde5c13c1"],["/archives/2023/page/3/index.html","fe4a21584350c92fcbb10799f5613f68"],["/archives/2023/page/4/index.html","933eec1802f1d25f3b75f924d8220548"],["/archives/2023/page/5/index.html","f54abe6834cd6e7ddfe1ece52874e900"],["/archives/2023/page/6/index.html","89ffa200945cd0446b7f69160013d1d7"],["/archives/index.html","3791574863ab1aa8ac216ab3ec2ed7d7"],["/archives/page/2/index.html","3d205f421046018508551ac967c11122"],["/archives/page/3/index.html","b2af7ee23b13e94932bb66a3eb4409c7"],["/archives/page/4/index.html","2477a02f7d95505e6f13aa2262a9e873"],["/archives/page/5/index.html","71fc33041c3c71aceafbef6f27cce402"],["/archives/page/6/index.html","e794253b52aa1485ba6f09dc9cf0da65"],["/archives/page/7/index.html","5f8dddf9fa266d9c4e30f97e7c73d132"],["/categories/bug记录/index.html","84f59debbfdcc48917fca4c079cae967"],["/categories/index.html","8bce4974e8eb2922ce22f505badf4085"],["/categories/学习/index.html","92db84a5db311ad628f4b68203be7745"],["/categories/学习/page/2/index.html","d08f0630b380929a3e9405136b61156d"],["/categories/学习/page/3/index.html","b54f0ec83280e25a3da610e6c6c3d9d9"],["/categories/学习/page/4/index.html","053e20133be55b0f947ff0625816601f"],["/categories/教程/index.html","380258a477680cc6e198dce9268876b3"],["/categories/教程/page/2/index.html","fa9f2d9ed76f88d880c00334252282d1"],["/categories/日常/index.html","9c93d69953a318fe1a77d6e07731d3b4"],["/categories/项目/index.html","a2a20de19a949854be690deb0e3e0275"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","30eb7f02c6f789d967b3e72d279189ca"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","84eeb260a428321d9c9bcb563a9c2101"],["/love/index.html","e81261717ef4a52efb9741dbad32515e"],["/my_project/index.html","47e12fef09680a79f14e77cf511417e4"],["/page/2/index.html","5ce44764ab7fa10b768be5c27e0e9930"],["/page/3/index.html","a0ffd133bee4dfa0846dee1a1084229d"],["/page/4/index.html","5f22df7054c405d819f982636425b01a"],["/page/5/index.html","a5764d5d86fd104dbcfc70491cddb48b"],["/page/6/index.html","51e330bff2cbc5ea8a986104363a7421"],["/sw-register.js","3bec42340a6a8ae15f128b1d4055de22"],["/tags/C-C/index.html","e4c0bede0c10ea7e3147eb077462c0bb"],["/tags/JAVAWEB/index.html","a96363353decf96dd09018901acb3cb2"],["/tags/JavaScript/index.html","10d755f9dfe6bbc3797fb8720e823417"],["/tags/OpenAI/index.html","f7ae35adfb85413f8e318a43ce97e0d4"],["/tags/PHP/index.html","03715cd778e5023f65e8f78954f1a43b"],["/tags/Python/index.html","ef13814e481d46095aa089743f81a3e4"],["/tags/Servlet/index.html","2dfa0f898267a8d60ca8a7365a5dcbd2"],["/tags/Tomcat/index.html","d769634083d40987089ea090152bd43a"],["/tags/Vercel/index.html","5b1fa3708e6f715a65c746621c6ade1f"],["/tags/WampServer/index.html","1746ee02ccd1e7ab7a2f30a598eac259"],["/tags/butterfly/index.html","2a0b86e175da3a3c7f88aa29051c9efb"],["/tags/copilot/index.html","962c5c008875143889c977b622359234"],["/tags/css/index.html","60edbf563f0613402cf4176c96d24833"],["/tags/hexo/index.html","2b215c62bcda9cd1b5fb292b8194af35"],["/tags/index.html","714099d28997408eb6eb305443a56d4f"],["/tags/node-js/index.html","b80bd20df5a3e6ecf715cdfc51923f93"],["/tags/nvm/index.html","6edc714edcdcf3009e40931543aaa3bf"],["/tags/paddle/index.html","63de6add676507a4de30cec15309ca14"],["/tags/paddle/page/2/index.html","bf3df153d3ed9539954ea87c45ce590b"],["/tags/人工智能/index.html","64cef494f37f29f1b8e61d16dc225a91"],["/tags/人工智能/page/2/index.html","1772f81ffa732520cff68a81c81f3652"],["/tags/博客备份与恢复/index.html","276def63362c6bf0d8f750018bfb4d2b"],["/tags/微信小程序/index.html","53cadb860ea7e9b25ba19cf32880e79a"],["/tags/操作系统/index.html","bad4e5208aac0d55bf0cf01e8c3ae9a7"],["/tags/数学建模/index.html","7e7d556e9549a7980d3b2f9984e33909"],["/tags/数据可视化Echarts/index.html","428ab292cb9897be850aa0729ccc2bfe"],["/tags/文心一言/index.html","020181f92c721fe08dbb45a180326510"],["/tags/新必应/index.html","dc7add39a3842fe79100557afb0bb00e"],["/tags/深度学习/index.html","c42b67f59cda0763994d9f79169569dc"],["/tags/深度学习/page/2/index.html","10b2bb58c808f164e5f2f427930cf8b1"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","849f2a463e0e6c63931d9a0c2ffd0c5e"],["/tags/深度学习基础-基础模型实战/index.html","f1bb82304c844c9825fdd0db1cbacf29"],["/tags/深度学习基础-模型选择与调优策略/index.html","796924bd897a2f0e22b2bc33478e2692"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","03ecb93232dd73cacdf087efb78b21a9"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","e327f510ee2fd3ff6e366e8860c8d21a"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","d2ee680c7af3c5032055d8b12ae5e28d"],["/tags/网站部署/index.html","a00aa36deb277bc35c17f1bc20de57b8"],["/tags/计算机网络/index.html","338519727e94127f41c33ba00e5d48b2"],["/tags/论文/index.html","799542c7596411b94a99aa281ac1e495"],["/tags/💭💡🎈/index.html","e61fa21328081b716d2cd06d95906524"],["/web_site/index.html","5936a8eb6a8ad76f222ebb998492db13"],["/唠嗑/index.html","f650e97f07e7555c23f72152b717ad81"],["/装修日志/index.html","9a11d6616c14f555c4ead1f2d4b86b32"]];
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
