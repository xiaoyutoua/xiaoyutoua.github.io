/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","6434bec3ae9f58f7c1f056f3e43172a4"],["/2022/12/17/nvm/index.html","b22cc3b04dfc89a665d9a44de72581b6"],["/2022/12/17/博客搭建学习笔记/index.html","bf024043b4863876120637783d4f499a"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","651e11c67ba25ca295a6d08623b07336"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","6bd448e734c9b3a5a239453fe98cedc4"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","a21171a3e52801c5b4890261592b9d93"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","6d39d953d87e7544a8d3871a6d5ac521"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","d4b0bf3449411d821fdf1999fc9da530"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","ce04dbd650960132342007c762087c34"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","bd74943821b1ab9bfadb69944d90cd5b"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","7868d368edb419f3a74b47c7101d9aa6"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","748cda23fbfd544df5eb5b72f60123a1"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","82019c25943fab71bd44978481216291"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","5fea00a818391a91afd13c323ca56ba1"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","ef60001ecaf9e76b952485fefe560cd1"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","9b25d251b3754baf0bfecdf707dc913d"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","227c0bdcc072ee5ef4ab18b38b4e6740"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","fa61575643103c536edd12b038553406"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","fa9fa05926bd4b828aef46f5585c91ae"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","2a3042c536e625b9fcf2ef0ac65997f4"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","af5a2be70db0160a897284c48c3e909d"],["/2023/01/06/Hexo博客备份与恢复/index.html","ce62151554564a205fb021db3d9a0951"],["/2023/01/07/停车场管理模拟系统/index.html","f707aeea3a81e3372fc269cbebfd69e3"],["/2023/01/20/Butterfly外挂标签/index.html","31981b8cb84e1a4cfba759a50e9b4a37"],["/2023/01/20/erro_spawn_failed/index.html","136e46282f6d0f5f47854bcc97af5b2d"],["/2023/01/24/Echarts社区地址/index.html","d072a6dcc8cde9e6781b32fea08e4ad5"],["/2023/02/02/论文翻译/index.html","12b5052ff20d09a306a823ca8c9605fe"],["/2023/02/06/WampServer图标黄色/index.html","7664fb7d84f5956bb0a94c1dd050ec6c"],["/2023/02/28/OpenAI-new必应/index.html","5adf3cef634bf335de06f17b73177153"],["/2023/02/28/PHP页面间传值的几种方法/index.html","799f3c7cbb2dc1ee93475424bb2561ca"],["/2023/03/02/node端口占用/index.html","051b1316d4d91e3d99e7689198ea9847"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","b728629ab26e4d06c091f4ffa8c16b6c"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","ffd5621d3e0ef30d657c9cbafb355e70"],["/2023/03/08/Servlet技术/index.html","d02115820a02989f1e591f1a520aa4dd"],["/2023/03/08/模板字符串/index.html","0bc17b9b48cb9a9ea3779363fa4f055d"],["/2023/03/14/Vercel部署网站/index.html","c3ff45fee11bb31af12e01dffd5d3f83"],["/2023/03/21/github-copilot使用/index.html","3151e69baea48a9f031060524e23f589"],["/2023/03/23/从零开始的计网学习——概述/index.html","ccd64340614c945cfb8a8f37357817b5"],["/2023/03/23/从零开始的计网学习——物理层/index.html","646d3bf713ec0a08b770d0ba1c827d08"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","bcf72ddb591f3ef2e63e96835cc1d11f"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","4dd6e3b152f948e8432b32fa57827983"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","6801ba5621ec46b4f8425d24f94d9dbe"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","82fa963faaf98c874a46a886372dd561"],["/2023/03/30/微信云开发中的增删查改操作/index.html","bf1a9566f025ebb7e3aea363497cb3e3"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","36476304596acee3264315a12a212805"],["/2023/04/04/文心一言上手体验/index.html","769ce384e9115401faeb72d6bc445368"],["/2023/04/05/操作系统基本概念练习题/index.html","fd884b594e95c2b3c40d770f194344e5"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","2b7fd46a1f4d4408b5144eb30fb17d46"],["/2023/04/12/数学建模图像处理/index.html","f4ecedfc8d4c557615d35420b1a32382"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","aeedd359539adbbd4a5f2858af9bea80"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","a753c21f57fdf76967c0283c4597223e"],["/2023/05/08/python内置函数使用方法/index.html","6aaf85cf65845f75c6eb0cc675571541"],["/2023/05/09/python基本输出方法总结/index.html","d463e21f08099de5c7ce0e5967d7e01c"],["/2023/05/15/微信小程序入门到入土/index.html","31a5a3a4cffbfd4dd6558f069caacb35"],["/404.html","f44c2e1b70d8f8b9074d5ef00768b0cf"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","a73df1abf9463d8a9d13a3e3623dc886"],["/archives/2022/12/index.html","6dafdcf22d2fec6a4b247173bdca1222"],["/archives/2022/12/page/2/index.html","a57ae4c785a22a68c358b7bcfa92bedf"],["/archives/2022/index.html","e791ea8857220151ba9fb03ce3a28144"],["/archives/2022/page/2/index.html","c18cf252ca00e644c606b771918f0656"],["/archives/2023/01/index.html","fda45cf0bc406d3656577b8b1c34cb04"],["/archives/2023/01/page/2/index.html","7d7fdf941fb99e1e1877e26b8670d0c6"],["/archives/2023/02/index.html","68f01348bc72ec4b83919055237ab273"],["/archives/2023/03/index.html","9f68268441729c377d04e9c33111b795"],["/archives/2023/03/page/2/index.html","0223531657676cd22170ad0032d52d55"],["/archives/2023/04/index.html","345907111b165e9a7ed5d7fa80cc3607"],["/archives/2023/05/index.html","8ac43dfbf3cb89148d6ebcf08c7341b0"],["/archives/2023/index.html","db48767a94af332807ca409e8084b473"],["/archives/2023/page/2/index.html","0c16e88992aec6e48c07d3c45842a843"],["/archives/2023/page/3/index.html","6f11c302ed99df8266dd7f4de5f3931e"],["/archives/2023/page/4/index.html","af84c66494b08f9d0d9093b76d633331"],["/archives/2023/page/5/index.html","5c4c28008a2159ebd18a0960bae54684"],["/archives/index.html","22d65d008d2144e577c7a6c23300d789"],["/archives/page/2/index.html","9beb5e8db41ed1a385b24d1d3d1d06fa"],["/archives/page/3/index.html","a3a44ada1a7feb499425dc1ac97d0787"],["/archives/page/4/index.html","119b8190dde671127adc871de93aa246"],["/archives/page/5/index.html","0eeecda2fa0cec5cead7c8c21eafcb5d"],["/archives/page/6/index.html","578287d02e8d52d07805d17a36f55071"],["/categories/bug记录/index.html","fe05fcde01393a998ac0972ca5a245ff"],["/categories/index.html","e3791e7d51d8e5851cf8d4278b62d8b0"],["/categories/学习/index.html","df81c198bea7cf35ea29034423cf7078"],["/categories/学习/page/2/index.html","3bd79bb8ed8b08fbd02bbce0daf545e1"],["/categories/学习/page/3/index.html","6c13f9cdb8fed8f215247a065231c8ad"],["/categories/学习/page/4/index.html","e86a23248702a2f82cc03f7de710e2d4"],["/categories/教程/index.html","8ffc5b32394af0c96ff1b8bc41da1ede"],["/categories/教程/page/2/index.html","b8ece3e76dcdd2691afc085508e7b716"],["/categories/日常/index.html","62ad53d8306e305ed381232e489c024f"],["/categories/项目/index.html","4e006e205dcdf659a2affb3e146ad3f4"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","a4659f94845b5e65f772072d5a0e4794"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","dc6ab181d940ba6e07f7dae9475d5f0c"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","8de1ce89bf8ba8acd92778c3315720de"],["/love/index.html","ec1d53a17b837e620a91ad7f4373f2fe"],["/my_project/index.html","0e7c8197406fd241a05214e574d682bf"],["/page/2/index.html","f4d33f69001a3ee60b32cf30cc5a0e63"],["/page/3/index.html","0a136711de4da2cabad6d168a2a9b13d"],["/page/4/index.html","6a638df85441a10e0eb0d133adc56797"],["/page/5/index.html","40d7ecf0424d92bcd440f6b88f0d7295"],["/sw-register.js","851560635522204a620ce276815f0c98"],["/tags/C-C/index.html","5b1b889ed9e2e3351bc555e152894999"],["/tags/JAVAWEB/index.html","498c43e91fd71c94595cca3a7d94592b"],["/tags/Java-Web/index.html","8aaac1616bc910066f0c7a689bedba0e"],["/tags/JavaScript/index.html","6dc250635954284b06583365ea0c8d4f"],["/tags/OpenAI/index.html","8f0797ea44a87cfc92ce0e78b4448b7e"],["/tags/PHP/index.html","6c0221c8b2c9a68ef924cbad52028b32"],["/tags/Python/index.html","07eb52aa38e9fd6c43277b8e20c60822"],["/tags/Servlet/index.html","4be1ef1214df6bfbaa290a568a9dab8e"],["/tags/Tomcat/index.html","a3662cb38f5fb91a016d8fa565549c2e"],["/tags/Vercel/index.html","75faa5a88b2f6a49c58750372b4ea93d"],["/tags/WampServer/index.html","ea2919f737514a0a766b4764512f99b3"],["/tags/butterfly/index.html","2058d592ae8a7cfd3db0e0ce76730c79"],["/tags/copilot/index.html","9c5a6c6d397ea4bc5d71cccb153aeffd"],["/tags/css/index.html","b553f66c552d58ac75c783f3e7f28337"],["/tags/hexo/index.html","a2086e7af195e120baca67fda1fc3997"],["/tags/index.html","ef0be7f61e565671b832c25336c0584c"],["/tags/node-js/index.html","d1561f1ff8a04ec0600cd6021523c6a3"],["/tags/nvm/index.html","9c8976a4fce43520fecdb417ded06d81"],["/tags/paddle/index.html","4b05a3abb416e6d8c04d10f689cc285d"],["/tags/paddle/page/2/index.html","b154fecca1e38e09cb034fbba0732aea"],["/tags/人工智能/index.html","60085415bee4e443aa5a1fea5cc0056a"],["/tags/人工智能/page/2/index.html","cd2a3320ab8b733d73738cc3379c5d54"],["/tags/博客备份与恢复/index.html","bb5ef9af1fb348505a7de131d8aed736"],["/tags/微信小程序/index.html","ead4b1bd4a5673e99d53a18e042e213b"],["/tags/操作系统/index.html","0737756b5408eb4b0c9ae2560e24ace1"],["/tags/数学建模/index.html","935c35be0609d64ff4d116b07c47eeb3"],["/tags/数据可视化Echarts/index.html","562fa3971cf7e8df1964b054a7e7866d"],["/tags/数据结构实训/index.html","8ba353bd067a2751fde43b9b223aa8ce"],["/tags/文心一言/index.html","be03da58292a6e5b9d9bc5e15abc93c4"],["/tags/新必应/index.html","4723800cc51e97e8f610379752f46fbf"],["/tags/深度学习/index.html","0f6784ec1cbeb1c1f4acb61ccb76e031"],["/tags/深度学习/page/2/index.html","5287a4e7ab0c7892918391f94fb05808"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","12dfa020c7fdef19c02a5ebeda844af4"],["/tags/深度学习基础-基础模型实战/index.html","6fe8b2a062f1e60cbdd0dc83f8a5a5e5"],["/tags/深度学习基础-模型选择与调优策略/index.html","a028e29f25aa559d9ad8dca38f39d6ac"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","807fca22e04b76158ff4657eb4eeff3d"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","acc52d0e9fa11d6d63afa15af15fed0c"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","5538fb07f457a07d1d0c17e5d524dd49"],["/tags/算法/index.html","dfd5dab1bcf26e9571e88c7a3c8c5afd"],["/tags/网站部署/index.html","0a0c7923e24dd07fe88bea0bf8098db4"],["/tags/计算机网络/index.html","de559ac75423db1823ad284b5bdc08bd"],["/tags/论文/index.html","55fff1d5f5c334e467947e4f6d3ef447"],["/web_site/index.html","2e94f065a783c46df452745e160a6bb2"],["/唠嗑/index.html","27b71d57f9cafc09289410437005ad7c"],["/装修日志/index.html","36e3b503538699c75fbcc15e91206d73"]];
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
