/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","c50926be99d616dbaee49a13fdf5c70c"],["/2022/12/17/nvm/index.html","81444a50fc1ffb9e9ba267529e290dae"],["/2022/12/17/博客搭建学习笔记/index.html","1dd7a54966b601d50d1ed643b0301903"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","cabfbc732cdf890d819215043aed80d8"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","ffcc45226e8d220ff47113d648b96e90"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","013c7aa89e47984d3b8fe72dac6346f7"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","a5bf812ef61aa3fb3459890b24437ee3"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","e850afbd9b90059fda72831a92c0e289"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","d6b2b63d7abd44580b00c4e7acf50b09"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","fd184763f001b8e3a4d19cb2f55d889a"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","8892c3570f5353b431849f48339f1b39"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","254eaad50e019f4f23fccb05bb83e130"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","33b08c0f249bdfc732ea6d39da8d12be"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","20485e08caba35486f3450505b054f4c"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","a5690f4a1f67150c310d69b65b3410bf"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","4a6f5361b0452c930ae598e975497b64"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","7552cc2b0acf9629a6695f8cc53a366c"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","15cf2267fdedc875b43501d1ccd7b091"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","e4fe3fd11000e847d71fa6f37ce62881"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","d0671d7a33b1abc9a553a9f6c8650630"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","d4133dcfbf37f9619ca52f064342266d"],["/2023/01/06/Hexo博客备份与恢复/index.html","eefd2d1a2be7bfc3eb36d524ba40e950"],["/2023/01/07/停车场管理模拟系统/index.html","971658f55fe7417eefd46d49e9855b34"],["/2023/01/20/Butterfly外挂标签/index.html","097587c8f2a1190c010cadd6532ae231"],["/2023/01/20/erro_spawn_failed/index.html","f8e97cfbaabdb2576c67259d43fd68bb"],["/2023/01/24/Echarts社区地址/index.html","b3dca9e00ce5f66f3cf65effd06a6970"],["/2023/02/02/论文翻译/index.html","84b7ae909b6b024b97335cfe6cad4b81"],["/2023/02/06/WampServer图标黄色/index.html","1b7ea5dd5c4ccba876a5296c5f2f78d0"],["/2023/02/28/OpenAI-new必应/index.html","bfac9cdfd67bdad02053ed502f7ebf98"],["/2023/02/28/PHP页面间传值的几种方法/index.html","7d98dba5de675ae20227a14021c4c102"],["/2023/03/02/node端口占用/index.html","267d373a551b7b6a49ed4ac4e9757ffe"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","56b01da363a1f2e968cb9acea58c20ff"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","c8bb222a0d84bd4d6f868c6eeb343a65"],["/2023/03/08/Servlet技术/index.html","ebec3812eac50269b0d29bc7e4586d87"],["/2023/03/08/模板字符串/index.html","558c5f990d71a51426c6af43cc0357f5"],["/2023/03/14/Vercel部署网站/index.html","58533bebd5365f346ac00a775d5f9a45"],["/2023/03/21/github-copilot使用/index.html","ed8f258fd50902d1ca050271e1c708e1"],["/2023/03/23/从零开始的计网学习——概述/index.html","3902ba831c378c554cf18f9f498c4588"],["/2023/03/23/从零开始的计网学习——物理层/index.html","de04dd307465c262d2371c99a609a11b"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","57a6b16eeb360afac486d153140d687b"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","9c44bab6396f320e0d0de9e98eb886f6"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","de058d68bf103e264696a24f0177fc90"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","edb610c041b71d96d06b29af6b92e64a"],["/2023/03/30/微信云开发中的增删查改操作/index.html","dbbb8e6518786056b43158ae2247d3a2"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","78b3c5111a96b250cfd8ed05b401a357"],["/2023/04/04/文心一言上手体验/index.html","7e70573d6e493d34672337c0fbb6ccb4"],["/2023/04/05/操作系统基本概念练习题/index.html","be8d7fc0f2ff87408996cbdcb8f78f3c"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","e87e520290104dbf4440864294918154"],["/2023/04/12/数学建模图像处理/index.html","9e9d6111b382cc8d32f7eb6c2d1cf75e"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","0849a7ed205c5ae2e728cac623e70dcf"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","ddc0da4374ca87dce4f6874033941448"],["/2023/05/08/python内置函数使用方法/index.html","82d910db24216eb7ef3edfa0e63d1834"],["/2023/05/09/python基本输出方法总结/index.html","3dd4ebd527ddd0081b3d243989150a00"],["/2023/05/15/微信小程序入门到入土/index.html","03015aac6e08149345f479ff6ae05e4e"],["/2023/05/16/c-提高编程/index.html","c0b028c1cabb002e70dd1fd96ed7b786"],["/2023/05/16/一文弄懂Python装饰器/index.html","25ffcb7f70b7a540d3e6e46ab395b9c1"],["/404.html","3b84b9f96753250f21ad3cbeb81476b2"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","efb93a9154fba31795fb995268e1619e"],["/archives/2022/12/index.html","48b7edc65a9f60b112b5bb96fa0814fa"],["/archives/2022/12/page/2/index.html","b46287613616238fa100c7545315f975"],["/archives/2022/index.html","cf33c5ec3e09a084f534c4c07b0184eb"],["/archives/2022/page/2/index.html","928f440367a47f39451e7ae37509debf"],["/archives/2023/01/index.html","3baf90bb316fd573ef41daf2753c39f6"],["/archives/2023/01/page/2/index.html","eecbfb0c0eebbf7f36412814fc02a616"],["/archives/2023/02/index.html","68882d2f960ed0d0fb52aaeccb56f968"],["/archives/2023/03/index.html","09ac9839ffe9ddf993d2bdbed718dbfb"],["/archives/2023/03/page/2/index.html","0bb55b66382640a20dc0b3cafec51c65"],["/archives/2023/04/index.html","58421cc1a17288e06b86be28a9fcd25a"],["/archives/2023/05/index.html","8e68adc324859ad76123b448b21ade45"],["/archives/2023/index.html","3e6530055118030760cd027b784d56fc"],["/archives/2023/page/2/index.html","0c8053ec65c0fecc35acaa857a4837fe"],["/archives/2023/page/3/index.html","24049f4910b3b7defa2d060740ead30c"],["/archives/2023/page/4/index.html","7a8a16996889d06b9c860ec78f7625f6"],["/archives/2023/page/5/index.html","bf9c854aeb219b5367269f84b69688ac"],["/archives/index.html","4703d87d59aa12a3c0b220697cb5b8e7"],["/archives/page/2/index.html","a62fe387f206b29faaa3022d53574cc4"],["/archives/page/3/index.html","2cabad2040af05899e5b6bdabfec7852"],["/archives/page/4/index.html","637fcaf772ca492f04289ba595c525b9"],["/archives/page/5/index.html","3b7d1d24860bdc5ca00ed30e4fd5174a"],["/archives/page/6/index.html","5d9e4ba8db2381fc13d3291a74eb422d"],["/categories/bug记录/index.html","fad78a618d4e94fc3b3f061025853401"],["/categories/index.html","94195e786ed9c640b65c531a909623c6"],["/categories/学习/index.html","81e4e99611902945cf3d8b33bc160330"],["/categories/学习/page/2/index.html","0a9a04d7ef7aa431566d125c07a01ec0"],["/categories/学习/page/3/index.html","a83d7d458aec65afa2fa6195e46fde46"],["/categories/学习/page/4/index.html","087e71a1f28afd96bf179219a8a46641"],["/categories/教程/index.html","e4cd3747ec338aee94a84cb3bfca79d9"],["/categories/教程/page/2/index.html","e8d60906f2554d1196c55b2558fc0a83"],["/categories/日常/index.html","b1f3499c4c7dff506a357e20c9aa045b"],["/categories/项目/index.html","527b079f3b6e48f017cd4279f22b9ec4"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","a4659f94845b5e65f772072d5a0e4794"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","5dc62879c68dc1fb290d5367cc94277a"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","e241156bf36d9068a1ba8de1e55ddea9"],["/love/index.html","24f352ce95da80c462962b0e3f4c7ea3"],["/my_project/index.html","6340e5314483f3cd0031f64fc1179b63"],["/page/2/index.html","a031d1851c501179c1bf1a0ac7df4624"],["/page/3/index.html","7578c9926d2743d1d5b5a7464c79d0fa"],["/page/4/index.html","8f4bc6925aec0137c5b480564ec5158b"],["/page/5/index.html","d4509e8681bbbcf83b2d5e799fc19b51"],["/sw-register.js","ee21492b8045c07cebbe0d2293a154f5"],["/tags/C-C/index.html","eb55921d067b1f43a1e4d8ff942ae03c"],["/tags/JAVAWEB/index.html","37bbe984c9205f0c952936ca435fc888"],["/tags/Java-Web/index.html","9c948950ed1c68af738ddc4bede27f1c"],["/tags/JavaScript/index.html","79344d517556d84d3943d88196e28676"],["/tags/OpenAI/index.html","71f09849a05de91388cfc77905eeced6"],["/tags/PHP/index.html","1841325aa558cccf41553e778c2c298e"],["/tags/Python/index.html","c814d0b226e87a4fe2582c7399e1ff5d"],["/tags/Servlet/index.html","9d45fe21da5eee8ddb2c8b28dcd9dff7"],["/tags/Tomcat/index.html","23d3ac841bb427a221c58b39734036c4"],["/tags/Vercel/index.html","c601ac66d90e1fc38eb1ccd1a78b882e"],["/tags/WampServer/index.html","e464c5827c3993098f1ad18a8323acf3"],["/tags/butterfly/index.html","18b606b3ea3291bfed270e9c3f19631b"],["/tags/copilot/index.html","487cfc37e19a3d5a419641ca5938f048"],["/tags/css/index.html","1f504f42d14442fd488933c42073cf6d"],["/tags/hexo/index.html","e6518109fc0ceef74365d46646590e82"],["/tags/index.html","34f76a97cd19a767205c53230a163343"],["/tags/node-js/index.html","43f416b8c6bd1441e1622c5756f5d5db"],["/tags/nvm/index.html","1c4c8ef84c6f1006b747ce3e1c8a47e1"],["/tags/paddle/index.html","b826784dfdad7dc16a758ec71cef42b4"],["/tags/paddle/page/2/index.html","29679343dfc8f3d8933de345935d0828"],["/tags/人工智能/index.html","f74ce75422f1b285ba53b3d4e1758392"],["/tags/人工智能/page/2/index.html","f0a3bcb4a3b6fc758e01142d1acb0d8a"],["/tags/博客备份与恢复/index.html","ae91de7791cf7b16518574995bdf475c"],["/tags/微信小程序/index.html","bfc35b8ccf9be10f06ef54b414b5e4da"],["/tags/操作系统/index.html","5f9c14d267ff692d574c0f3ba6a31625"],["/tags/数学建模/index.html","88a877d90aa9a2957e67d710b72f71c4"],["/tags/数据可视化Echarts/index.html","730b87cdb27b554a2b5719d8207eccda"],["/tags/文心一言/index.html","d8bcfa30e71db63a99d2f7f76c0f9cb1"],["/tags/新必应/index.html","e5eacfa5171e9d1588778dfa025aaa35"],["/tags/深度学习/index.html","77e4e52bf5efdc817bcaebacf902ccc6"],["/tags/深度学习/page/2/index.html","ca6b1a630d9a34d19e89a25f926f71dd"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","6b20433886ec3d6dbed9fb78d1bfd0b5"],["/tags/深度学习基础-基础模型实战/index.html","71472802bed20a859158fc0a51cd3fab"],["/tags/深度学习基础-模型选择与调优策略/index.html","b8e9a3c361cd81ff751f40325304efd2"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","729fb240ff49bd03306be9168ac3a2ba"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","71d09326f851463da942bc26b2bc3181"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","e4c2fe4df991f4634b6d431eadd3f5bc"],["/tags/网站部署/index.html","72cfe9cd5e6814b6306fc22436ffeb9a"],["/tags/计算机网络/index.html","aeeeeea5ea6d775c8a28837bd702cb10"],["/tags/论文/index.html","b973e275ece97ceb2a8fb95cf29b319e"],["/web_site/index.html","b642cf660371f32f79c743b7d969977b"],["/唠嗑/index.html","817f97a430bdde74d392cff4db3c1888"],["/装修日志/index.html","ab76914d67237c4d6a1a35f980904fd5"]];
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
