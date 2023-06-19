/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","834e9189b64c8a39fd9b9f1335bb9f40"],["/2022/12/17/nvm/index.html","aaf463845553836b4a7edd1cd502bf02"],["/2022/12/17/博客搭建学习笔记/index.html","368c7c0897e367276867cd45f5845372"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","9bddfe061fbbe1d2b0deb06f3c6e6b41"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","cac77e89f88bda0b8c07ed6566d7c308"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","411bf72f09884317b6d3931f2e849a87"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","fdb6b5849c160c15756c3a905099bfb9"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","d5120bb19be4a2414c934ec7b1da664a"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","03606a69aa9cfd1125213073b24baf4c"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","2eb7b83e10cac8c4ccb890c80dd11c90"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","9bf6105e002e08df14c4e07a426f21d5"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","4be6d61f95349710aca6ca11f23325df"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","450ba1c500b4d1e302dddbb68f97e10a"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","b8e34b8eab969c798779a54c445a8400"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","d6ed15146b327b4e4709dd508128d5cd"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","99ea2a90a14e74e79fef119f76d8f481"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","3fb723fa5a1467129e65960bbb27812c"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","e79e746766537726826398433460ebd8"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","f6750cee32839e4fc0ce1d8f3846d06d"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","3cdab732111bf13d101a9c2d04045167"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","1f974158cebac40fac4fb3fbbc8c1ae4"],["/2023/01/06/Hexo博客备份与恢复/index.html","d91f3b2741f26fcd684779bf1332e8a5"],["/2023/01/07/停车场管理模拟系统/index.html","ed6a086b6dff3732128d4fa1ac377d2a"],["/2023/01/20/Butterfly外挂标签/index.html","3b84dbbbf2e6be3defab383c32e932aa"],["/2023/01/20/erro_spawn_failed/index.html","504c67bb0ff9a7ee5aa9733cbbd5d753"],["/2023/01/24/Echarts社区地址/index.html","30ca3e160d928cfcb871ec2ea9239776"],["/2023/02/02/论文翻译/index.html","eaa42eb8e83f0eef57e65171f7ff1887"],["/2023/02/06/WampServer图标黄色/index.html","cbf6efd1f560ed64897e36400a378a5c"],["/2023/02/28/OpenAI-new必应/index.html","b56f58cd128508a321fc6f1cbf60f1da"],["/2023/02/28/PHP页面间传值的几种方法/index.html","2cdb6f82cdffda70eb2246b92312a4f5"],["/2023/03/02/node端口占用/index.html","955c63fcc3ad2d25f84acab1a5c9efc2"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","7e5688ae4885e833d49dd78179edcc70"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","0d52487d1664ebe40074ab651f73b530"],["/2023/03/08/Servlet技术/index.html","32ece387d103c88fd6789714086eada2"],["/2023/03/08/模板字符串/index.html","7771485eef4e9b48ff176507a0d7cdb7"],["/2023/03/14/Vercel部署网站/index.html","6b79b0e44c6806bcc062c453fefe008b"],["/2023/03/21/github-copilot使用/index.html","49d26c0a82b014f349c010ae20e10e4f"],["/2023/03/23/从零开始的计网学习——概述/index.html","e488a913dc1a5a6bb1cbab2d0038054e"],["/2023/03/23/从零开始的计网学习——物理层/index.html","88d2970f92deb28e54b9088c4aec7e5c"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","1961496fcd24334f43e1d3499029408e"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","8787400088c4594a37afc05ff127a99e"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","2ce9479e88778e7853bd94efb47a04dd"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","6a55f0619c4ec5931d365c3229730ff2"],["/2023/03/30/微信云开发中的增删查改操作/index.html","94b8c20fc26866206c7ca065892a14db"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","659d906274807f5bd8df84e7f0279c9e"],["/2023/04/04/文心一言上手体验/index.html","296ac30601a627077a7a5b751050a552"],["/2023/04/05/操作系统基本概念练习题/index.html","24bb81cc65739d56f2ab3bd3ce79df56"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","a0db90e43f7d2593e194cdbb06608c2e"],["/2023/04/12/数学建模图像处理/index.html","c9cc0e5754330736b3e779fc873f0426"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","b57c099ae0b0f5d0f1bb9971d8444d0e"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","da8f900c86ab189fa466ab316c06c71e"],["/2023/05/08/python内置函数使用方法/index.html","7023a7e6d1d0ef17c56cd230e0151d87"],["/2023/05/09/python基本输出方法总结/index.html","a2e80500e398685abff494f1b615a0ff"],["/2023/05/15/微信小程序入门到入土/index.html","5b78f8ec83da786cd2b8c9e615836344"],["/2023/05/16/c-一些不会的知识/index.html","93558d93c1c706f5b78c18551947f23a"],["/2023/05/16/c-提高编程/index.html","2143ac9588ca4b8f5814adaad1039021"],["/2023/05/16/一文弄懂Python装饰器/index.html","5ccaf69d9cb82468d990f13b8462d091"],["/2023/05/29/Python四大法宝/index.html","1133a869cf21591013d5ed3aa2edc3cf"],["/2023/05/29/如何更快熟练Python字符串？/index.html","e110f1d5a39c5678d7492cfc1598ba12"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","5ec68af470eee0c47bf30b6cf1b77258"],["/2023/06/07/如何学习动态规划？？？/index.html","d046d905e28baa300f69164a43b6d379"],["/404.html","ec0ccc85ff931b3c1e31874039eb0f0a"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","a860fcac1d61b92eb182709319a45184"],["/archives/2022/12/index.html","d6605faaf3048ed16b61752468be8db9"],["/archives/2022/12/page/2/index.html","fef8dc3dd190264cf522ca9fbcfdb033"],["/archives/2022/index.html","7d5807982d9d2dd0eb28647f72cde09d"],["/archives/2022/page/2/index.html","8e0dd11a4bc2d341c5155078527d9e9d"],["/archives/2023/01/index.html","986fcb56b814bda20e14446116cea246"],["/archives/2023/01/page/2/index.html","ee1fa4c390428bda67eeb84be7a41317"],["/archives/2023/02/index.html","3de4f852ace5336c4a9825c790f0a432"],["/archives/2023/03/index.html","c94a6c288d43c4b0baf1013fe6af12e4"],["/archives/2023/03/page/2/index.html","72d8b18aa8f5b0098b780623cdadbee4"],["/archives/2023/04/index.html","125910d8bd31340c4dbb201e31d7ab52"],["/archives/2023/05/index.html","3bfc8449a3165a061dbed430102ff7da"],["/archives/2023/06/index.html","6964bc4696810a40d71dde7aa40d4459"],["/archives/2023/index.html","71bd17893c31b019174695fc2ae2aafa"],["/archives/2023/page/2/index.html","2f131976af716ea6830c6af78ae9e469"],["/archives/2023/page/3/index.html","f6e6ccc68b46e6cb8817a4f28dbde3c5"],["/archives/2023/page/4/index.html","0d605a678aa7e63df6aae0618ef1c772"],["/archives/2023/page/5/index.html","0f68b95aebd7a0dd9a60d9212cb3d9fc"],["/archives/index.html","0b6a19c28e6b749f09e11fd0d1168cea"],["/archives/page/2/index.html","711a4b5cf1fc8d13d6a9161664dc4005"],["/archives/page/3/index.html","8452146d07a218e63fa653914d6968a4"],["/archives/page/4/index.html","97152a095cd5e55a6daddefb39111cf4"],["/archives/page/5/index.html","c24ce17adc1814757a61cc442bb9cf76"],["/archives/page/6/index.html","14e394d0d9b3dd969835353766cf7139"],["/archives/page/7/index.html","fc8bddc723170012de7f79eec7f47175"],["/categories/bug记录/index.html","c2d160da40701bf729f9f24790245247"],["/categories/index.html","f022b9f39b253cb18f4c45b6dc9349bb"],["/categories/学习/index.html","e4e9ea41bc8be93d503e4d484cad39b9"],["/categories/学习/page/2/index.html","a73bd0edd5f1663be9462f5699ea670f"],["/categories/学习/page/3/index.html","f8de01b452888fda968065a896c59568"],["/categories/学习/page/4/index.html","15b8bdd6a7fb9c7c9a2117caaf580623"],["/categories/教程/index.html","d8f6661e0542d38b87967f64feefd012"],["/categories/教程/page/2/index.html","07d87fc716abf4e402e71ab9dca16147"],["/categories/日常/index.html","46e711360baadcd6f340a8129ff29a4f"],["/categories/项目/index.html","64c02e8ff27ff99c42ca5450246b18ab"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","5e3e63d24edc585e7fe9c7fde9983968"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","56552fafbfb024bec33c9d4e8fb3cbb7"],["/love/index.html","3bae27046c1460bec9f9104f030a6d86"],["/my_project/index.html","3abe60f2fa468d1a1509ed34f22aa387"],["/page/2/index.html","60aca575827885ac691cc3e7ce46810e"],["/page/3/index.html","91d1b860c002a51f02e2978ba2ea615a"],["/page/4/index.html","d6dbb7143c4b573018b9eb69e542f6d8"],["/page/5/index.html","ece9021a3756803f0bdb3002b013a1b3"],["/page/6/index.html","200656a971c8d0888a47cc717e11fd5f"],["/sw-register.js","3b8aba9955e1488aedc51a8d2e55d6e9"],["/tags/C-C/index.html","88f4a45416add7e7efbfa7c81f3445c7"],["/tags/JAVAWEB/index.html","eea03342cd1c6dd8517feb9922c762c8"],["/tags/JavaScript/index.html","727cf1c202f0b84401681c1211720375"],["/tags/OpenAI/index.html","85ed98bd8cba10861fad3d07a3cd9af1"],["/tags/PHP/index.html","0f33e62ba8e5acb586419027d75c0a0b"],["/tags/Python/index.html","2ea5f5f72d24bd2c4fcd32cebb42b268"],["/tags/Servlet/index.html","09345b8b86c707770d839127df4f0b6f"],["/tags/Tomcat/index.html","7e389da0dc333ad13ae2ecb3d583b692"],["/tags/Vercel/index.html","3f568e087eeac6705c138d95e11967da"],["/tags/WampServer/index.html","2469c19602bad731965cf1b72d751e2a"],["/tags/butterfly/index.html","4b7c0d0cb777de59c37ba9e29b52cb61"],["/tags/copilot/index.html","9ccc0c2eac222645b89f07256dc505f8"],["/tags/css/index.html","09a21f47a95d274e426cc662cb4d80b9"],["/tags/hexo/index.html","eb2e59ce43a2a3c73f01d4517c923544"],["/tags/index.html","7d9e153151ae07d7792804961af0ec52"],["/tags/node-js/index.html","dfd058ae9350b7776609a2de91762346"],["/tags/nvm/index.html","ff4f96b30bd737899e0b7ca9d9759128"],["/tags/paddle/index.html","227ff7f02d4adf063a14f154749be3f0"],["/tags/paddle/page/2/index.html","22b1eaf1bc744c953f750f229ae2b9cd"],["/tags/人工智能/index.html","0a9a2fc2995d99c1e1620cd99523bc5e"],["/tags/人工智能/page/2/index.html","2b8e76d94eade75cc5e072f0bf3b365f"],["/tags/博客备份与恢复/index.html","c78888c96808c9c0108c0ed9b8e48e16"],["/tags/微信小程序/index.html","3e5323c41cac8fb369f95e2c8e11bc65"],["/tags/操作系统/index.html","fc059b5a1329f3693bd0af2f9f1bf945"],["/tags/数学建模/index.html","8a1f86cea86026ece50357da4a96c646"],["/tags/数据可视化Echarts/index.html","1251145954d7b9bac66fbc95e7fe5b21"],["/tags/文心一言/index.html","f38c9a854d0297ed6bb07682191aceb2"],["/tags/新必应/index.html","d9778827a769c270c74c08d66dd880e9"],["/tags/深度学习/index.html","5cb17cf422cd4fbe4a1c60d33cb1cc4e"],["/tags/深度学习/page/2/index.html","ba52c55feea6f50105ad297eee9af747"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","7dbfb603c279ed56a8112bd54c119536"],["/tags/深度学习基础-基础模型实战/index.html","3f9e2cc394b2aa03e5e909507f7e4816"],["/tags/深度学习基础-模型选择与调优策略/index.html","d64c376e6afa4ce3566b94af64b1131d"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","ed3d8863367c1812ae40f97da8bf35ac"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","695306796d673dbb2990d14b00d780f8"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","7926858033649a6c38a027a7548ec213"],["/tags/网站部署/index.html","1aa56810f03b67d2278854ad93579949"],["/tags/计算机网络/index.html","f16456ef6ac89972f3af1ce07417dcc8"],["/tags/论文/index.html","bf8f99cc39804c451ed18e9a999df890"],["/tags/💭💡🎈/index.html","f51086029dbeb5f7d42fb2b21fe17b2a"],["/web_site/index.html","6a28257bac51c864f5680f537d85eceb"],["/唠嗑/index.html","29a29b330402c24361806fe79e539a2f"],["/装修日志/index.html","f0bf4ec25dd92272e381587b4eb7428f"]];
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
