/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","50274968b2fb7fcb29f0772c6ffa8c72"],["/2022/12/17/nvm/index.html","952a1d45d6f15007586964a1340b4b35"],["/2022/12/17/博客搭建学习笔记/index.html","2258c25fb357ade45a7bc07f0c85f7d9"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","fdd4e8d8e3fb3e6fb6a17b78114f80a2"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","ef2e11759af1c7cfa49467b4b90b1d25"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","36e7b94b6cb4d78993c278bd76521912"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","0da701a21e8d14beab158dcd5f6f9a6d"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","dc7c1df8712d03aeaffb30af87a40e88"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","47d4aa9f273e3deff496b61dde0219e7"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","9c32ef7786be2189f236fe880072f047"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","aa9ce960856872ff11616c3908529c25"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","863325983340d71791dbf25f13a297f3"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","c28dffa285f6d405e3b5815a0c59aee0"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","5060dd47dc769cf49f4975828aa0305d"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","7bce54ab93d93cbafaef57d816146d00"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","711ecf35715e3ff6118613fdd63f99de"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","8962d0d049150f14d54f9d35173609ca"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","a43fb01cc25489cf3f45734c5401c847"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","7dd11b6b393a52c15a4cac477f43d411"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","88adde3a7ce9f679db200d622ebb5163"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","5eb7fcf07b78226e20020b9ad1455668"],["/2023/01/06/Hexo博客备份与恢复/index.html","582a62249a434673faa42bf056682352"],["/2023/01/07/停车场管理模拟系统/index.html","07fe414032298108bf4d65cde20167e4"],["/2023/01/20/Butterfly外挂标签/index.html","f949eaed28a5266149b2391935e780bd"],["/2023/01/20/erro_spawn_failed/index.html","ceb1c132c47c84c033fb1c985abf377b"],["/2023/01/24/Echarts社区地址/index.html","3346e72125e3fa93c0d1171aae28f9fc"],["/2023/02/02/论文翻译/index.html","23d7f45e389325bcb99360aeca1533ea"],["/2023/02/06/WampServer图标黄色/index.html","0e478c3c97ef852d5dcba8de3771835a"],["/2023/02/28/OpenAI-new必应/index.html","5579fa4c99fcb230e113649dbdbad409"],["/2023/02/28/PHP页面间传值的几种方法/index.html","6d9a91612084c0fa63fc1229e0e32bae"],["/2023/03/02/node端口占用/index.html","1919e3d965e390b54e58a14179dbdf63"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","af4654ee761f85eece24538e14e3eefb"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","8a2a9bb63aef51b1bc1874f94a3671ef"],["/2023/03/08/Servlet技术/index.html","a655fc7375a92dc19826ee8bc458553f"],["/2023/03/08/模板字符串/index.html","d77519c45f497ad71707030fe0f68d63"],["/2023/03/14/Vercel部署网站/index.html","f97df57f14e467fd9cc1dab4cb21a6ac"],["/2023/03/21/github-copilot使用/index.html","b62f37638ac7a3d7985bae6c13c3c9f9"],["/2023/03/23/从零开始的计网学习——概述/index.html","4f7ef6593b3173cb64615d0596487abd"],["/2023/03/23/从零开始的计网学习——物理层/index.html","ddf1fa2498b40551b291008dfb4cc3e3"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","56812378dada29e289b53b470b6614d5"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","2267eccbb41a697a2e66a6f5fde2a8bb"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","232ad0c58482b9e6e040842c3a0322b1"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","e0d46e80e1743e432cb5ff370eb071b0"],["/2023/03/30/微信云开发中的增删查改操作/index.html","fecc44b4e29d098447b0f69752619e79"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","ed9315c6a900af373d2183ff341f91b1"],["/2023/04/04/文心一言上手体验/index.html","c5d29110168c455a498051cfae55a80b"],["/2023/04/05/操作系统基本概念练习题/index.html","61ee0528a69c9084104ece1684cd9316"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","9d725443f159a2e34a3c76d38cedc13d"],["/2023/04/12/数学建模图像处理/index.html","2057d8734b021054cb38d8e246f33b2e"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","6ca9ef0eb7afaeb1300412829febddc8"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","5a6161638ef08820c7784acde1ed1df3"],["/2023/05/08/python内置函数使用方法/index.html","adf3e4ea63c14bdfc4ab35279732561c"],["/2023/05/09/python基本输出方法总结/index.html","099dba452c506ff0a48c11a2f0f5a68b"],["/404.html","7061d5baebb5fb8ea2137c77bf580e1e"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","3c3a1250b7bb113972ee532baefd3c2e"],["/archives/2022/12/index.html","d5661233aa1c069246aa247f2da8a6d7"],["/archives/2022/12/page/2/index.html","4cc10dc0213f702e6d18227db000692f"],["/archives/2022/index.html","4d0c2ecfbb2df3259f3278e083129ca9"],["/archives/2022/page/2/index.html","84c0e402e24678d16769fbc29cf497fa"],["/archives/2023/01/index.html","027521a8658142504947503081d6682a"],["/archives/2023/01/page/2/index.html","dacc6ca5538d8d567b4f7be1829afe5d"],["/archives/2023/02/index.html","d0a061ab5eba0fcc74524c2cd04af256"],["/archives/2023/03/index.html","e66ea4ca8b36afb39514988d250dad55"],["/archives/2023/03/page/2/index.html","6dcb4949479f61f299354112ddbaf311"],["/archives/2023/04/index.html","d50f1f47de892a599be369ba837a4a16"],["/archives/2023/05/index.html","d6c5dda08641cfc81e36fc6528b2f8d6"],["/archives/2023/index.html","1da00445a26cbfcb5776f18426201fc2"],["/archives/2023/page/2/index.html","437f41c6dad921b40bd82904be13d726"],["/archives/2023/page/3/index.html","dffbdba7dc8da67196a436216a1df4d4"],["/archives/2023/page/4/index.html","c7a751d954f9e7b3154ff0240cdd9bb5"],["/archives/2023/page/5/index.html","2d22408640a91b73aaf30ecd479de985"],["/archives/index.html","9592be1ee7c793d6fe3bf46e9561d1f2"],["/archives/page/2/index.html","b35a9677678b97489e09063bf62bd385"],["/archives/page/3/index.html","1fd63cba036515ce9a574392b6627f42"],["/archives/page/4/index.html","f22453166b044958c145970f2ee71e6a"],["/archives/page/5/index.html","e1f2a99cec6f4234814f35a6e0e5f981"],["/archives/page/6/index.html","db19ae9e262c1cb89fe71be35e691cd2"],["/categories/bug记录/index.html","075c34857f82eee2885f7833f1f6bbb2"],["/categories/index.html","f46ddff3f4e3b62583f8f9834bf7aaf0"],["/categories/学习/index.html","fc0be706a93a56c7e9aa97e42df6f2bd"],["/categories/学习/page/2/index.html","9091e68f82fea37e45c516d3e7487f38"],["/categories/学习/page/3/index.html","814bc1981722b275cbbfcfa729fd225a"],["/categories/学习/page/4/index.html","53aa9c9a62241142f90de774f87bc956"],["/categories/教程/index.html","a069c2849a3c43b37cea5176f237a8df"],["/categories/教程/page/2/index.html","e705b31e1c125550b8c30a1fe83eefbf"],["/categories/日常/index.html","07f3e99c27c6370c41f548dc6d52429d"],["/categories/项目/index.html","315cc54cb78c79dd4d88ae6cc1bc173c"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","a4659f94845b5e65f772072d5a0e4794"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","ff73a4403fe4bf8ac0781d80165b39dd"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","ad95c1c1f16e4422ba833bed74693b0e"],["/love/index.html","977a5289ec9b17e6eb8548f2349ca264"],["/my_project/index.html","4349abeebadadd7ad3a7e3da8edc1569"],["/page/2/index.html","ecef9d2439a119b676cb6fc5d870ec4e"],["/page/3/index.html","d91706066683e379e38ac50e303ec5ed"],["/page/4/index.html","f8c78f1eda71fc0dda619543580dffc2"],["/page/5/index.html","0ea3acf4e818217158276cfb39f983f3"],["/sw-register.js","ff3d4ad1aac3bfee5b6f950c561bd250"],["/tags/C-C/index.html","cc1e7958f49060140bab5e7d81b062bd"],["/tags/JAVAWEB/index.html","9739b516adbe9e32eaf51a1354fac8a7"],["/tags/Java-Web/index.html","c32d49ba43991d4448d665eb77b01089"],["/tags/JavaScript/index.html","9077fe3798f2317c5a5628349755ffa6"],["/tags/OpenAI/index.html","9ab2a73d90fbbc0e98cdebb7e140e07c"],["/tags/PHP/index.html","7756ea7823b950f8fc2efec0ae87d5b0"],["/tags/Python/index.html","939c595fdd69d99b53b7c280a13daf6a"],["/tags/Servlet/index.html","dcdb30301388f73bfee8076b5bc6ac3e"],["/tags/Tomcat/index.html","dfe4f09d959aa789a11e650d9a619a2e"],["/tags/Vercel/index.html","b33e4de2dab2fc5d77dfe596010d5f40"],["/tags/WampServer/index.html","2de5738d8297a67bc7345a60c5674692"],["/tags/butterfly/index.html","5997ff9703f3edabde42dc96c0d4380b"],["/tags/copilot/index.html","f87c94a59572de2ef62058b7c8c49a35"],["/tags/css/index.html","4d68abd6925766ddd06e2bbec79bb3d8"],["/tags/hexo/index.html","04203a83e4001ffe3e997b955f04db32"],["/tags/index.html","facfb8e8b6fdf7ec40dbb7470b37df38"],["/tags/node-js/index.html","8b465dd3a6723ef0de60f306b41b1742"],["/tags/nvm/index.html","7ae54867adc266fa80cfd9a723a5bd52"],["/tags/paddle/index.html","775e961814f13b6254668ae161f3c4f0"],["/tags/paddle/page/2/index.html","2995de0a2883965dba5e4222e0c2a381"],["/tags/人工智能/index.html","e287c8e895e0ab26b9df5d87e7a1c2cf"],["/tags/人工智能/page/2/index.html","2e79ec33ed8ae9688d200e46ac8dd043"],["/tags/博客备份与恢复/index.html","d0e6cebefc5c6f9aeddb500117bebb32"],["/tags/微信小程序/index.html","5edc9d1044f9e649a1fd9e2a5875a3f8"],["/tags/操作系统/index.html","2b1844048bb138379b3f7141a67b3239"],["/tags/数学建模/index.html","e516add03003a6e5033983148d7850c6"],["/tags/数据可视化Echarts/index.html","9c616244ead847779ab9a3076c234088"],["/tags/数据结构实训/index.html","d5f8709edddd6858b5629c7883b416ec"],["/tags/文心一言/index.html","4126adca54b9433bafb9fc92b672944a"],["/tags/新必应/index.html","19f320d236fb5bb7dbee6aa3df349415"],["/tags/深度学习/index.html","90550d2df0eb23050c81e7f749123d91"],["/tags/深度学习/page/2/index.html","b4bb1dfaffca6ec676a2d586579123a9"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","c6c5e5a318fe52324ca209157b8a57cf"],["/tags/深度学习基础-基础模型实战/index.html","8cec86be062cc481c1131a438d65c97d"],["/tags/深度学习基础-模型选择与调优策略/index.html","1104e3a5c7cd77d2d73786d58d31c2e2"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","02ed46a2516a1faebb322830ef5e660d"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","443256510d8ac2ccbafa8dd9bddd0ddb"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","58bbcc910ba87e37d60115a5971c9f16"],["/tags/算法/index.html","60352fff728fdb107a15076c3f270958"],["/tags/网站部署/index.html","65f5671d0fd76ad01605ed92500ea1c6"],["/tags/计算机网络/index.html","44865a76d1b418c58938a1e4ca6b0cde"],["/tags/论文/index.html","94587e05fa98ae076ede2694b110cc96"],["/web_site/index.html","e95e3fd2aa8c952fad3a4bf337753d90"],["/唠嗑/index.html","cfb8c60376586582c5da2aa0e967c5d4"],["/装修日志/index.html","a92dbaa94f087ce1ce8e7fb25f1acd53"]];
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
