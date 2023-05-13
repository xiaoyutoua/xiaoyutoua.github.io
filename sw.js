/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","cd0782d27add8d30b4be98ca5113ddb0"],["/2022/12/17/nvm/index.html","e48700285e01a79f456705fe7ce05d78"],["/2022/12/17/博客搭建学习笔记/index.html","f29ef4608dfb20a056d8d621c4819d97"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","e5ae66d3e7b766522058ebebcd39d850"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","6e1690673a36ef16a390b69ba2c9f3bd"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","198c2f5dc42d4dd2c8250725aebfb775"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","519febc7bb281adac2b6723918640fc0"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","d5dd00c7509ae6e17c88c6a915bb73f5"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","2ac0d6a428d2be4c7e0e0ec11f6df1bb"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","12952a4a99381500cb8c29fd1f3a078e"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","c0d870fe86b37bcadcf0c084ae761512"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","b25a8cde46d322508f4283303cc871ae"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","8f138fb797569546d1250cc4c4d8cc8c"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","4a4e32135109ddd52149e6acbcb3fdae"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","d5fd553a5cb13c14890280bff26ebcbb"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","2921af786dbb30eb696df7b603aababa"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","273e7fe360b8cbd1a2f2ec0e798599b0"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","2979c6a492a1ad36caa66e7d8a8628d8"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","e6c79816c741d21faced6f4e873db6e5"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","d91154911ab8e079a186d71697bb0ac0"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","8ca5d84a84ac047761702fb488e8bd60"],["/2023/01/06/Hexo博客备份与恢复/index.html","a6171fd166d0b513d00ec19e61492c32"],["/2023/01/07/停车场管理模拟系统/index.html","ad137ca8a72b3e17e18159adf6b622c7"],["/2023/01/20/Butterfly外挂标签/index.html","1b44a13ae1346704d47fea8664173457"],["/2023/01/20/erro_spawn_failed/index.html","631f4841578e142ead50ab8b5d3af3b4"],["/2023/01/24/Echarts社区地址/index.html","510f8e8ad82f4589c2a7e248e6d1e251"],["/2023/02/02/论文翻译/index.html","070e9fa0ae2fd837593f229cb42d13b1"],["/2023/02/06/WampServer图标黄色/index.html","7bece9306d895c92875b503f478195c5"],["/2023/02/28/OpenAI-new必应/index.html","781159eb1131325e3a98a1e065c14823"],["/2023/02/28/PHP页面间传值的几种方法/index.html","15f96d93a1b4c6d4e8635041a389600d"],["/2023/03/02/node端口占用/index.html","bcfc83d3f00807f7ba8d14980604776b"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","9949051299b3fccd3f7c82d04c5df2a2"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","241ca543a9870eecccad0da586ef3c61"],["/2023/03/08/Servlet技术/index.html","554f0474e946fe269c824e63cdee2870"],["/2023/03/08/模板字符串/index.html","194f69130cd4b54ed65918a2f96efa3c"],["/2023/03/14/Vercel部署网站/index.html","24d1e7cf29158a637623fe5390a23883"],["/2023/03/21/github-copilot使用/index.html","05e1cce4a556fe3b75249ed4b663e61f"],["/2023/03/23/从零开始的计网学习——概述/index.html","5bf0bacaddd90cbf263b1cd90dcfa35e"],["/2023/03/23/从零开始的计网学习——物理层/index.html","d4702dae2e4849ed2ef4b3a9f7bb58ea"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","2130c511428f8bbe5f5f80984db9894e"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","51edfd756ed43c5d6528034bea893bf4"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","ab97a1d0cc9801f30a976e1be4bf3b87"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","d5530c2706551c448718bd7451a28cea"],["/2023/03/30/微信云开发中的增删查改操作/index.html","c65562acf892514ce9217f53fd80d898"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","c0b01c35fc85eef836ecaf72018755ab"],["/2023/04/04/文心一言上手体验/index.html","e4db85c163580c589d50ecdc3da932cd"],["/2023/04/05/操作系统基本概念练习题/index.html","8370a9b1046786f60c6b444ecc10a5a2"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","a41e627680a41b0de7cb809a0beea39a"],["/2023/04/12/数学建模图像处理/index.html","8db988308ba4025350cb1c29eddce578"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","1f57c07393c620f2b159c6955817b5d5"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","0d7140165c85ece17574cd0889641c57"],["/2023/05/08/python内置函数使用方法/index.html","bcbdbfbac4f6b786e0f2d4d9ea2b6895"],["/2023/05/09/python基本输出方法总结/index.html","f53b02668038a2437d59346857814f40"],["/404.html","aab5d54d0fd7c0e73e5922e71b818a35"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","ea6c86b695281dcf473de7c31af8a929"],["/archives/2022/12/index.html","2fb6f613afb51323e521e872e32ec530"],["/archives/2022/12/page/2/index.html","efb3c4c2f803578112ae70fbf90d59a4"],["/archives/2022/index.html","0a8621287b76058647af4cfe0db04c69"],["/archives/2022/page/2/index.html","12bdd4a98bda9aaa63128436bde3db61"],["/archives/2023/01/index.html","2ae1359348c336dc7635cc308a36fd0f"],["/archives/2023/01/page/2/index.html","d31ffd95a35a50b0c516db7072f29b6d"],["/archives/2023/02/index.html","6cd557a9ad97b94c557ae6b447d21e99"],["/archives/2023/03/index.html","30062486d69395abdcc4372d6fdf1131"],["/archives/2023/03/page/2/index.html","df5f97421701ed7ed005ce2b77a11011"],["/archives/2023/04/index.html","891276d50e1d13c946fc1b2ede1daacc"],["/archives/2023/05/index.html","bb6f3e8c78a9bb39cecf08fbeaef0ecd"],["/archives/2023/index.html","1e7cd2b860775557012aa1f54b774a88"],["/archives/2023/page/2/index.html","55dfaa4b409d21b8ac38b6af2539dd4d"],["/archives/2023/page/3/index.html","974c52b480967dd8ec145de2bd749273"],["/archives/2023/page/4/index.html","2a1fc02e59d634db9081de2f3f9d867b"],["/archives/2023/page/5/index.html","80c7dc3b461d7ea25917d9a10b803d80"],["/archives/index.html","13adc0ab500f940b0fcf9e8c50762ecb"],["/archives/page/2/index.html","1e4f36095cbbf259f771595d4421e4c2"],["/archives/page/3/index.html","aeffb93baa0d6a430229e61e2b1427c3"],["/archives/page/4/index.html","d477d1ecb1674fe7ae5af26d13ad36ce"],["/archives/page/5/index.html","5c821420a3b777883fc8cf252ce35ab6"],["/archives/page/6/index.html","bea895be65df482e579ce3f6ea66455d"],["/categories/bug记录/index.html","7b4d1d001a1f8e97308ebd2e7c6c82ae"],["/categories/index.html","9a0ec4b85508f22397e603368fdde28e"],["/categories/学习/index.html","b928def11ef6a9769ec67444f9db55a0"],["/categories/学习/page/2/index.html","28db28642f867cbf360318d8d6085867"],["/categories/学习/page/3/index.html","36d95ead4ffcf9cea63db6b547097cc9"],["/categories/学习/page/4/index.html","878fa28c4938ff66f4a51db94875e39d"],["/categories/教程/index.html","a687aa5663b0c1462eeec3c359cdf172"],["/categories/教程/page/2/index.html","1125f19fec1ce204ea7b5281beed0916"],["/categories/日常/index.html","38864d826cd89a2ca17274d71e9b6db4"],["/categories/项目/index.html","53a603a47448c5722d84fd44609c524a"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","a4659f94845b5e65f772072d5a0e4794"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","2930a5db6d8dfbb91615904ff016ef8d"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","fccecb3e084e4ad540c4fdb840c0b010"],["/love/index.html","f6b81681806437d0843f3907bfc18ca2"],["/my_project/index.html","6251c114673b03a3bbeba5a4cd1cbc04"],["/page/2/index.html","b3fca7be0775e4d6a3216ba324446800"],["/page/3/index.html","2bd9713f28d867a116644be49316f69b"],["/page/4/index.html","e0d378828a0d7350a836384a8e05e519"],["/page/5/index.html","eb5f71a345410af967e398987f1e87f4"],["/sw-register.js","152bf6edfa3b95b277bf1f8a19cd0097"],["/tags/C-C/index.html","e66cc6467b0f99eb9c461c8df968cbd4"],["/tags/JAVAWEB/index.html","414e0327a400031dc69489d54532dd27"],["/tags/Java-Web/index.html","995a2dcfc7d25e5fc7aecf280aff0c78"],["/tags/JavaScript/index.html","218ae553a98dc36365b3e71ae8f8c034"],["/tags/OpenAI/index.html","5f958b38a8c098213ed5b13490c24163"],["/tags/PHP/index.html","2c35fef2862e1a5e126fd4b04c381b86"],["/tags/Python/index.html","25e7151219edd8b500a18eb820207406"],["/tags/Servlet/index.html","3fe4afb02bfc7e7625e06711068c14d1"],["/tags/Tomcat/index.html","ef5691178af621b653e95a53ca013ec0"],["/tags/Vercel/index.html","06741a2791e90b83f7fa7361bd512853"],["/tags/WampServer/index.html","01900cdab7973d802dfb82646435e4ed"],["/tags/butterfly/index.html","6c2e110a62b34e0ff051005cd65c9132"],["/tags/copilot/index.html","c941f234ac44820204335f57492ca474"],["/tags/css/index.html","525ac55ac74df169d6f4e9bb75f6fa44"],["/tags/hexo/index.html","1b0ee5039d51c7f6b0669865bae05b6b"],["/tags/index.html","7d16f0ea8769ad58b649531a8178f994"],["/tags/node-js/index.html","737e577ddd96f1fb79a80d97ed6066b7"],["/tags/nvm/index.html","5ddc551a9929dc09046abe092242342e"],["/tags/paddle/index.html","2908928be2971539d5669ff4191a3473"],["/tags/paddle/page/2/index.html","f9070f873d2b6cec2d5188dae6df257d"],["/tags/人工智能/index.html","593ffc0d59ba3d6d8c6c983e7bbee908"],["/tags/人工智能/page/2/index.html","96f53d327e6e12f492b661c54ebeb5b1"],["/tags/博客备份与恢复/index.html","0a36ba55bc22a535c03d4f80a2c8bef2"],["/tags/微信小程序/index.html","7d842b63e67d39fcda6fba83d6d37841"],["/tags/操作系统/index.html","b857acda3306c1b9f069c42d13e5ee5b"],["/tags/数学建模/index.html","990fa646cca06cc5031db84d859dc8cc"],["/tags/数据可视化Echarts/index.html","bf2112349a61f2db5af617e008194197"],["/tags/数据结构实训/index.html","a3c09e28745d62cad9d8673a6a7cd4a7"],["/tags/文心一言/index.html","01707c1336a756df9de4946d2493e26d"],["/tags/新必应/index.html","0b5e8a1bf74bc75ff02ba5b45fe8a88a"],["/tags/深度学习/index.html","eeb9bc3c106a77e380f6fbbaaae4290a"],["/tags/深度学习/page/2/index.html","0fde1a7ddf59e8c4ae22cc3060b1ae41"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","9f2e03c026e1934ed53eaf564400ffc9"],["/tags/深度学习基础-基础模型实战/index.html","1afba623abe4f9cefa4f07589139f41c"],["/tags/深度学习基础-模型选择与调优策略/index.html","8e7c54162a570687c1cf3864a4534206"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","3bf7493908dd36298bd15d6096ed1d50"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","76276ffe7862d3d1c2403b3491b1d916"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","a189e0e7cbeeb06b71e29f4f3e0d0cd8"],["/tags/算法/index.html","d6c27f2acbea4484021bed8dbf529bf2"],["/tags/网站部署/index.html","1e8f4381f478a215861eea9c8c7845f5"],["/tags/计算机网络/index.html","be84b5f202b08062e403f963cb661203"],["/tags/论文/index.html","20eed0718193a8083c29610920eb6d28"],["/web_site/index.html","f673228afedaa409ec9eb3cc7e84326a"],["/唠嗑/index.html","083a949db1d943916feb9c18e2c3d120"],["/装修日志/index.html","4e2498a58aa7439c965e62185e54e1fe"]];
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
