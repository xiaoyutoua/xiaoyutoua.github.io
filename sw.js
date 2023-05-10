/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","601848167619c4d7e6ab596c093ad304"],["/2022/12/17/nvm/index.html","857ca018a3664ba1cea1b2b7174d2e56"],["/2022/12/17/博客搭建学习笔记/index.html","b78de2bbc90f5496c328419dc953b767"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","c13a0d35ca5c031c2561a9af5bac5ea8"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","ff6d991b5bf1e263ef929bedd5b73035"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","038b6a8a3898769ce26dc2e72bd343fb"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","227a083998680977667e802b6e5f4e90"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","83c575c9072d638fae21c3f8fc7537d3"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","f0e0d92a59ebd28a299f5e96b739636c"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","1886e5b7e0069e69103c57d9bed73f87"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","3df23fb925072bb36760e51af7a0fe36"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","007a9c214d8adf37dcbcb747bd137694"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","26e6733b174d9466c30836c95a4762d5"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","f561e4f02b8ab1a2827f6de405e4efb7"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","cd98dab7d3856e8da7d16b89f7dddcc9"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","6dc42f0cadf853c00f2eebb77930b339"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","5015bee3a511014baa8706d437d39d0e"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","1cd6165989de1f8ae0c168c73d747f07"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","07ac716dbfdb41e82811668c76c464d3"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","fe1c03d0bad048314d53f496ebbe1cdd"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","884858009920e97bb0ee4fc039750d30"],["/2023/01/06/Hexo博客备份与恢复/index.html","36659589bb7d6eb52dc81f5c7094ba4a"],["/2023/01/07/停车场管理模拟系统/index.html","239829509e3f78d77066350ce90aa21b"],["/2023/01/20/Butterfly外挂标签/index.html","f731c4ae720f5ef400e0208d102ed19d"],["/2023/01/20/erro_spawn_failed/index.html","4f2c133dbfc8787386e083be00045973"],["/2023/01/24/Echarts社区地址/index.html","8a6c5ae85a7b0b49dd5b1f5a6705588f"],["/2023/02/02/论文翻译/index.html","89e21f71c76cdf312cf02eaede1817f6"],["/2023/02/06/WampServer图标黄色/index.html","759fcc9104a47dc425769e5f23425f6b"],["/2023/02/28/OpenAI-new必应/index.html","0af7eee9f0d367aacf0a1586dacb029a"],["/2023/02/28/PHP页面间传值的几种方法/index.html","0d85ee1032f10a3339893df8867aa01a"],["/2023/03/02/node端口占用/index.html","a0bc7ce6cf619bff93304623e2a1c6cc"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","4949065fe2247e04c89d1a8b94eb2961"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","168d2071c30d05d0289b049be737dcee"],["/2023/03/08/Servlet技术/index.html","5ae7d9445ce93da01de109bde4c7947a"],["/2023/03/08/模板字符串/index.html","d7eed8cf91d892e9342d1838edffdd68"],["/2023/03/14/Vercel部署网站/index.html","bccebbf5bfa4ca3fa653c6a1db783d7b"],["/2023/03/21/github-copilot使用/index.html","491afac6e5e0a4e17b05632eb5f6b73a"],["/2023/03/23/从零开始的计网学习——概述/index.html","d9b0450ff054804360894b41f57a46f8"],["/2023/03/23/从零开始的计网学习——物理层/index.html","c097efadb673cbf822c082a09cf60ba5"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","7d6c59321131271851215d8b66b59a55"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","70a3947ef10ca090415f3c929eee2ed8"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","79e4cf02ce1a66768363b89caa111764"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","da32cbe8af0a6acc32e181f5e6dd7b74"],["/2023/03/30/微信云开发中的增删查改操作/index.html","1b631b4532a9c7fc5fd034b10441078c"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","bba4fbd189cc8045103736030247ccea"],["/2023/04/04/文心一言上手体验/index.html","1cfcff6b583408fe81ed62eec2f368b1"],["/2023/04/05/操作系统基本概念练习题/index.html","d885c78e2647baae2a6208305de496ab"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","9da41864d0f83f0cabf771a53a27105b"],["/2023/04/12/数学建模图像处理/index.html","0b95a839e9a9666b0df7a2546125b5db"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","6a0c619ec57c8bdc769a3eec6beef7d9"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","6431ea7a09f829135fa359287b12257d"],["/2023/05/08/python内置函数使用方法/index.html","8bbaecd500cabf2dea973efeb78c512b"],["/2023/05/09/python基本输出方法总结/index.html","8885a734c19ff31b0260247395a6050d"],["/404.html","08657e45176edf9c733aa61c68eab167"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","7842eba7d7108922bbe99d5d6250c94e"],["/archives/2022/12/index.html","95e006ae84bbada2b09f6f883e54915b"],["/archives/2022/12/page/2/index.html","8bd8c43c4abb7d82607afe6d8da6e021"],["/archives/2022/index.html","c9a9aae0acd2500522da1a270820d7b5"],["/archives/2022/page/2/index.html","2934b5b225ead7f21ae1fb9b8507b630"],["/archives/2023/01/index.html","bd45a381e1164ca02980aa2bfab6eb03"],["/archives/2023/01/page/2/index.html","df4f72c483b2d320874715f63ddbac55"],["/archives/2023/02/index.html","7ee53495eaf63214d069bb014353463a"],["/archives/2023/03/index.html","191ceb2602f1337bdb02e0a80679571b"],["/archives/2023/03/page/2/index.html","f60934058ddbd91c90a90eaa3dc5cd65"],["/archives/2023/04/index.html","0a39ac03ac6d64b84d5e1ad459c2d54c"],["/archives/2023/05/index.html","51af6a51ca76ba264e5c8cd1ff6e73ea"],["/archives/2023/index.html","a0592c832718ac449e32cf3f3bd1b127"],["/archives/2023/page/2/index.html","60cd346d3d977c26c273e7f591adeff6"],["/archives/2023/page/3/index.html","dfd59f19b8e4e54e96ec6b068c0b913d"],["/archives/2023/page/4/index.html","6ec1ae3f87523b2a985fe14a51b9f34b"],["/archives/2023/page/5/index.html","5fa2171a605fd97ebcfaa04c202caeb9"],["/archives/index.html","f54444acc5a349e6634e518dec92ace7"],["/archives/page/2/index.html","84a1e0232a59030d4197a2cb0be04803"],["/archives/page/3/index.html","2bc20bc9a2934bff0153c883968e8b07"],["/archives/page/4/index.html","3868b31f043a6074bd8527d943e61f60"],["/archives/page/5/index.html","61b12bb23a5fed4730decdf7bdb378ed"],["/archives/page/6/index.html","c15d136a43254ab036d7d16fcc4630a0"],["/categories/bug记录/index.html","57f8a0b407d648463955399fa9c54ae6"],["/categories/index.html","b22ca152e3516f3680d67dddaf555efd"],["/categories/学习/index.html","341fd172e1513e953d709594c7cc532d"],["/categories/学习/page/2/index.html","23e2ba660ffed8be412e2e2bfaefdfe1"],["/categories/学习/page/3/index.html","5c3376e3b555cd09e760fe32e5ee9cc7"],["/categories/学习/page/4/index.html","e1fd214e2449d7b7a5663f97b286021c"],["/categories/教程/index.html","e77bed41d9745abe49c8e87ccebc9ac5"],["/categories/教程/page/2/index.html","b07f3fef4061770f0f54e943ec7f8bda"],["/categories/日常/index.html","23cd18675ac87d8fc9b691b2c93eed85"],["/categories/项目/index.html","abba4ebf4b9d63e253680f951e4edbc7"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","a4659f94845b5e65f772072d5a0e4794"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","7deb75a0d0499131726e75f37e49a223"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","a2db755a41aab5c374bee2f9e945699c"],["/love/index.html","f2cb4a35d7264593a9bb0689a531b6ed"],["/my_project/index.html","841ba8bfdffa16d9a21e4c40359db35f"],["/page/2/index.html","fad5885b974f82aef8bf96d5c219c1d8"],["/page/3/index.html","a948af24d03d471db5976d4cba525b03"],["/page/4/index.html","0e2d7b2695cde787bd24d5006df76541"],["/page/5/index.html","984184ed2b90e36820eea67e9cc17c94"],["/sw-register.js","eb362183b265f5523505ff9986a4e0cc"],["/tags/C-C/index.html","6584aeaa16e98a8960b250c35c4c92c8"],["/tags/JAVAWEB/index.html","590a8e15d8a9cbde5ba0f94c2da5990a"],["/tags/Java-Web/index.html","59018272e6606d83ef151a7a2412599a"],["/tags/JavaScript/index.html","35e69182860a2aca04b01ee7e83ca385"],["/tags/OpenAI/index.html","761b6e94374e748cd0d755bd9e35f3de"],["/tags/PHP/index.html","eda8f4fee0af058da3bcc2279cb53e6c"],["/tags/Python/index.html","b117e1419aa305d38e943784da4be7db"],["/tags/Servlet/index.html","4c7d6d6c3b3720f4f637e3b0f3a76606"],["/tags/Tomcat/index.html","5d8bd842b10ec0286fac99e06ea32240"],["/tags/Vercel/index.html","37214418f1edb6a178adb42d41d0d3e8"],["/tags/WampServer/index.html","de32b6fd2d9d8e91769c7bdc879fdee8"],["/tags/butterfly/index.html","e46bd0623d483e4707ffe4739b4bd3c3"],["/tags/copilot/index.html","cdde5cfa2b678b3bb681e725826d55cb"],["/tags/css/index.html","e1208cbe2d1b392fd718f0c54d987655"],["/tags/hexo/index.html","280e4c764fccd51914e5e50690071dad"],["/tags/index.html","9b08cdc13774e8eb7896c39f0aaeda8d"],["/tags/node-js/index.html","2d47decd8b95eeeee75f2599882458bc"],["/tags/nvm/index.html","819ced4394c647d0480e1b07d36915eb"],["/tags/paddle/index.html","aa09e066ca2da51244832a5686578dc5"],["/tags/paddle/page/2/index.html","197af70a48f1e5528bf6eb1b95e1402f"],["/tags/人工智能/index.html","acc2df76518ea5364e61fa73aca83198"],["/tags/人工智能/page/2/index.html","982dc2b560a582aee6154b337dadb030"],["/tags/博客备份与恢复/index.html","9192ba55199f78a25ebef1f53d5dab04"],["/tags/微信小程序/index.html","e1fbef0fd915a7a4d2961b2b78e919c4"],["/tags/操作系统/index.html","baedb90436bdeee0a5a15efcc165bd16"],["/tags/数学建模/index.html","6aaa8aa3ffb9dcacae6f6ea8a00b8258"],["/tags/数据可视化Echarts/index.html","c40a25ce382d5c575ed379d9282fd37c"],["/tags/数据结构实训/index.html","ce9ef750e8176bc8b3c74add79122f92"],["/tags/文心一言/index.html","151d7dfccae83df150c564858a685556"],["/tags/新必应/index.html","f55752e01d28a763ccc00f8e7d786373"],["/tags/深度学习/index.html","397dbed12e26c38c43b0f59a76e66f3f"],["/tags/深度学习/page/2/index.html","9f13a9111bb67637280903fa67da4a89"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","23086ba704fe1257c7062756c1d885a4"],["/tags/深度学习基础-基础模型实战/index.html","cda76e17fcfeeb268705aaf56db61c23"],["/tags/深度学习基础-模型选择与调优策略/index.html","4bf5499c26616b0c50b597bfd20b14d9"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","41e1296b3cd8df11d9274a782da4d0db"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","8565616c48b9d63f9f5c00d691a31365"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","acaff3b66006252c4c8087edac268751"],["/tags/算法/index.html","90606bcd1e73ff2ae67733ab8501546f"],["/tags/网站部署/index.html","bf0b00dffe91656468a1e844db677dd3"],["/tags/计算机网络/index.html","efefdf483cc382b66a2299d316424637"],["/tags/论文/index.html","a88e443527f2aafd8df93930976f76ba"],["/web_site/index.html","e02d8765d3a0e5c2b4d72e81c9994e3b"],["/唠嗑/index.html","61f8d510787b5bbd9b8331eaff7db5cd"],["/装修日志/index.html","634ad200526feffebeb3ad7e2837a676"]];
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
