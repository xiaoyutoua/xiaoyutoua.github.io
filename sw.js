/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","0f51721aa148b860ddc8bf78d3ccd601"],["/2022/12/17/nvm/index.html","efe885424353a10ca75bdf851a56348d"],["/2022/12/17/博客搭建学习笔记/index.html","fcb36cd4d9193dad49e4e427f16d2634"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","eef5d3ed0e50b2180d64fef4d7317f8d"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","95a520b2869784703feca760da09a233"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","54cf5c94cb1d53e0c87ab49b2d3b8de6"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","ed036a7de01b37c50e0f1ab978c1352a"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","6cfd461e725377d0a90992214beb92c6"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","196258b86eb6e7275ce6b985d572dbc0"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","bf1b46988d70a7327c27d4641c37dcbe"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","293543f30cc1210479939f5039ee7fad"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","2fbfebfafaf5880afe965caa45085fe2"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","4fcd2b00dcdd3ee041c9482627207220"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","de792b31c5a30956888a644c1dbfb3ad"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","ba1e3ab60c52d5e18cf66ea7c1cba696"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","82c6c1acc757e36b3d3c94f501ae36a7"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","4aaa24e95d71fac8aebedeb9e5f19fe7"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","3f6f8a21271e3f1c615ff51a8a4ba2e6"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","9524661e3bd3643b9934c57f26b15e58"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","210c3e41fd2eb71cb15c0b50558f5e63"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","1d0129f728e4e02ac972dd42e035f090"],["/2023/01/06/Hexo博客备份与恢复/index.html","a12479049b8fd72bf9d9362e2ee855a5"],["/2023/01/07/停车场管理模拟系统/index.html","416ff0136bd9db30023a4b7f3f9ab0e2"],["/2023/01/20/Butterfly外挂标签/index.html","18ec870d91733a422472c69b7bebd8f8"],["/2023/01/20/erro_spawn_failed/index.html","85000bb22482a0654328118da4c39a81"],["/2023/01/24/Echarts社区地址/index.html","81a1a4ab80e76e3abbdddc58ad4e894c"],["/2023/02/02/论文翻译/index.html","d661e9d3da3cee4b256814b0966398ad"],["/2023/02/06/WampServer图标黄色/index.html","382e0c7f94d7120afe32058e2dd620d8"],["/2023/02/28/OpenAI-new必应/index.html","b4106cd35d183d3b460c9682ccd68969"],["/2023/02/28/PHP页面间传值的几种方法/index.html","090b660500cdd8968fbc8d24249696ff"],["/2023/03/02/node端口占用/index.html","038e8891610b2c84c9789621929d5b9c"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","24469e8f8aa13ec4ebf81d9fefb1c5da"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","4889bb8925098abd02ae3dee9b947b0a"],["/2023/03/08/Servlet技术/index.html","64fd57c8a9c1ace7f859aa942d3a7efe"],["/2023/03/08/模板字符串/index.html","2d4d765f5c9cda5f6f6359633a7c78a8"],["/2023/03/14/Vercel部署网站/index.html","5e15cf54f3f4b10502aafef738dcba4b"],["/2023/03/21/github-copilot使用/index.html","f7374c1cd9495b52286cbd866440879b"],["/2023/03/23/从零开始的计网学习——概述/index.html","b1d61a5bb26b7294b5fbf0e27cac3103"],["/2023/03/23/从零开始的计网学习——物理层/index.html","921eb4d74bb85a8c42d7775be0e7c54a"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","47a60048ecce136c823e1157059729ad"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","43ab88d910b945dbf9e87dd85e3be67c"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","9cb1316e9d8a0b2bab76a2fe2f82e660"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","857d73e0291223aaa5dfa69832974773"],["/2023/03/30/微信云开发中的增删查改操作/index.html","10268adb7d28d7b6f88e08a7020ba05e"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","1e14dd52f9dae55fc6550391c316fd34"],["/2023/04/04/文心一言上手体验/index.html","f7b8d9570cb84b4373d083ed11bc3a9e"],["/2023/04/05/操作系统基本概念练习题/index.html","3ac51c18b5d54cdadd9b1a7afd776d81"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","613a6d4733b8d08d87b48088735e521e"],["/2023/04/12/数学建模图像处理/index.html","b7bdc89bcac226f60bc63c424d944a1e"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","2e83180320d027b67549321a6f481ace"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","a2a60fe41a708bbd830f248e34e008ca"],["/2023/05/08/python内置函数使用方法/index.html","09b3f251c464b3c8bff71ab183bafbc4"],["/2023/05/09/python基本输出方法总结/index.html","d085d93bbd5bcd159970539beeb5a078"],["/2023/05/15/微信小程序入门到入土/index.html","7fb61fdaf5f899d9b10f7fbca4ae9d45"],["/2023/05/16/c-一些不会的知识/index.html","7d5f9b3cd021a2f4da2354407dcfb2ba"],["/2023/05/16/c-提高编程/index.html","f3c7e634a06619622558525b35f54e7e"],["/2023/05/16/一文弄懂Python装饰器/index.html","b6b177227b5168dcd56e32fe537346d3"],["/404.html","2a0585e5bff468136a06a97fed09601a"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","b84b65a21c6b5f602b5326432d6955e4"],["/archives/2022/12/index.html","6ad49dcdfc8c24434d006020e3ebe32f"],["/archives/2022/12/page/2/index.html","c8a891b1a6366cb8e8800fcb94f0ac7e"],["/archives/2022/index.html","99fe64be750fb8891bebca400c5ab072"],["/archives/2022/page/2/index.html","fe6b8193ed979c9169d5a847f926a289"],["/archives/2023/01/index.html","2264fa3ececb61320b556d839a108a0a"],["/archives/2023/01/page/2/index.html","5bf12847ec13320052976f9cb7167fea"],["/archives/2023/02/index.html","cf79674cfb48e01b6bf6bc8f9e1aa1ae"],["/archives/2023/03/index.html","3fe36be61e80d7f76cc50ae1f64d4f75"],["/archives/2023/03/page/2/index.html","642650cf18f653ae1b9b6142d4f277f8"],["/archives/2023/04/index.html","2b568843ff4b1b9f5df9227594f2b9ba"],["/archives/2023/05/index.html","aa8cfa85c2fac7a9216a9eeefecc44db"],["/archives/2023/index.html","4487e02f1fd8339c577196a072962d26"],["/archives/2023/page/2/index.html","8aa98f3e5ac5323e0f79062113489bb6"],["/archives/2023/page/3/index.html","f5e475a71b10d15fa90435ef03fa1184"],["/archives/2023/page/4/index.html","9dc44cb6bfd9beb780eee4d1c6111fac"],["/archives/2023/page/5/index.html","be5081c197089d17ada895934973b731"],["/archives/index.html","3cf9fc578e5da89aea32508e33e840ff"],["/archives/page/2/index.html","82333d2ca4ef4a262953e400a56eb1c0"],["/archives/page/3/index.html","381e0b58f0d52c2ed493a0ce795501d2"],["/archives/page/4/index.html","53f8f18e10b28f1ae79d1eda46108e04"],["/archives/page/5/index.html","b53a0617d1e78e4587fb0907d8de655b"],["/archives/page/6/index.html","6a93e03267c32931e55e8382798b6ee4"],["/categories/bug记录/index.html","0b6395cca2ae51c04e65543ac63dabdb"],["/categories/index.html","c5213523c6fef374c30d41b296d90af1"],["/categories/学习/index.html","6af8442e06b8903cd7368d53ca35bac1"],["/categories/学习/page/2/index.html","943bff81d929e37be017ca4b9f9767e3"],["/categories/学习/page/3/index.html","acf4aa21c4349df9933a945550ada73f"],["/categories/学习/page/4/index.html","46801a135216ace31546c220e3e54d6f"],["/categories/教程/index.html","3d1773ee63623ab1e08fb8f9ba84d192"],["/categories/教程/page/2/index.html","1dbaefc72892a4c3c37e9ee478846b3f"],["/categories/日常/index.html","f64dac9bb2205d3431834756976aa09d"],["/categories/项目/index.html","8cb6dc5fb80f56439d001783da451783"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","5418b452a8bb6c7c5bf89327a3316d5d"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","04690a91717ce0c11f77b89c128f26e9"],["/love/index.html","f9e8d0cd1feb0c0b9d1026f654255d3b"],["/my_project/index.html","b547fe498c343c94e4b1de6624cfa558"],["/page/2/index.html","8b419f0a6911c115b9cef84f22f36283"],["/page/3/index.html","49956b21bb2f6959f9db77d46af125c2"],["/page/4/index.html","97894a9158bf0a3e1f37eb1baec7ccce"],["/page/5/index.html","61c6ac831c0fe6704823eee283e3d745"],["/sw-register.js","7131a917018f41fb2b7373bb72d17758"],["/tags/C-C/index.html","af40301de622ec4667b7c46658618a31"],["/tags/JAVAWEB/index.html","590479012d2f2d7c3b2bf3b9502b5ae1"],["/tags/Java-Web/index.html","3de67a7dba0a19f10e5c6e70e7f3d4e0"],["/tags/JavaScript/index.html","666e3d544917065d3e884199e731bb4f"],["/tags/OpenAI/index.html","4d91f1c192bf1f7d82c64381f576a166"],["/tags/PHP/index.html","1380b02ad1c8bda6aeeec9870fb2939e"],["/tags/Python/index.html","e1ff60570e68b6622f0439f886c0a5b7"],["/tags/Servlet/index.html","f0be5c6378ddac8bcd6eee5993b7be34"],["/tags/Tomcat/index.html","d58fd72e819c52b799ee1a595e9bdd7e"],["/tags/Vercel/index.html","674149523f4d7fb7f87e91ebcc4987a3"],["/tags/WampServer/index.html","d5a6c78e8feb50969ab5baa27ba36a8a"],["/tags/butterfly/index.html","510be0c574d977fb75c98fd6d20703b9"],["/tags/copilot/index.html","c6cddf84a71b83238f5e374125eb67e2"],["/tags/css/index.html","0d9bb3ab2e6c460ff1a3b296bca97f91"],["/tags/hexo/index.html","a7a47b73cf77d65854c375c61b29bffe"],["/tags/index.html","baf2cbf239542c39a8782bfbc46fa266"],["/tags/node-js/index.html","e0b99eb5e77952e082cf8e83b63a1315"],["/tags/nvm/index.html","3ce85548ef198593de5ebf1bc2d65afa"],["/tags/paddle/index.html","98cf301e2db56bcb07944f34d3564a03"],["/tags/paddle/page/2/index.html","637a10aa17cf1e0073a1a277cee0e68a"],["/tags/人工智能/index.html","bb2375143fb7768bc8a9fe544f5c02f9"],["/tags/人工智能/page/2/index.html","f9ed16b2e0d77f1136edf33300643e29"],["/tags/博客备份与恢复/index.html","52f356e66d4d8483c06cc49509362b04"],["/tags/微信小程序/index.html","a19bef059850d478066445e18f959427"],["/tags/操作系统/index.html","78595e382fbb99c6195d8e8144b20332"],["/tags/数学建模/index.html","f194b25d968ab945c0396501772671b2"],["/tags/数据可视化Echarts/index.html","0b7c6cb79d5c269d8d76ba06193743de"],["/tags/文心一言/index.html","1c546c84fabaad826cf55ea811b527f0"],["/tags/新必应/index.html","4f1c381d09f79da31bf2a553a19190cf"],["/tags/深度学习/index.html","49586ad06df393e9b185ed4ac87eba0e"],["/tags/深度学习/page/2/index.html","da0b26af0f5230f1f502204f3b58eed1"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","728b41c8b7f2ceeae0c3ca84b4b2686b"],["/tags/深度学习基础-基础模型实战/index.html","60a67f86bd78539d0e36b12493963d28"],["/tags/深度学习基础-模型选择与调优策略/index.html","e7bd33f99d3a0498646bf36136cb45b6"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","8ac31e41f331c88de3db27836f889164"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","9b4250a2c4f5efbbb2dba253414454b5"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","4d83fdc93c726d372558987725806cf8"],["/tags/网站部署/index.html","79f28fe03533e019249565f87c123b3e"],["/tags/计算机网络/index.html","23cad48bb0c6a34272bf34fd1e77eee5"],["/tags/论文/index.html","d301c596f97e00ffff018dc40c51702c"],["/web_site/index.html","8605c1eba06cecad8fc99b090305d8fe"],["/唠嗑/index.html","0dea6af5d611c845bd5c9d1a3cd2a2a6"],["/装修日志/index.html","29bf779ecebbc16e2a167b3e78285915"]];
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
