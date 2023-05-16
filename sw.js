/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","416f22fbfc3de0bc12a908cf79894386"],["/2022/12/17/nvm/index.html","1083a373dbe416e45c5d17bc5dcd069d"],["/2022/12/17/博客搭建学习笔记/index.html","9b6eaa690a9d5e6d49954641b43018f2"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","f295b57d1780ac20536f0940e2c840c9"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","5fa00d9ef84e3d22124b25c6e50119e7"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","15cbfbd9a7328d71adc3fd20cb981700"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","ef3c9c4bbbf362d0aae8ceafb56b064d"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","92643d30fef50c77acd58e2fb0eeabc4"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","b676580b5e742988dd8f516d54579064"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","2a6fbdefa7a8e3571fc0d0a3a1a4522c"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","3bb2afc1765417a492a3770f4144ea20"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","d15d3f3158344cc44b5167b1d403ae69"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","d693911929c6444e097e51eae63f8890"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","a8aa52618cadb4cfbf1f4a4720f6a513"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","57797734249d78ee83ebb323f5c099ae"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","98af737742be9bac2a4f821f917011d7"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","7bf04e47eabf68fd3dd14f8c0375b776"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","d6981920f7a1acc30d41a067694f1bbe"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","645ba504a81c0903e6efe0dc27604a78"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","9037388cc2260bbe72570fa8bb073429"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","3196d5753bba76ef533072b8371efe10"],["/2023/01/06/Hexo博客备份与恢复/index.html","7c42483294dd322c3324b09d4ce082b9"],["/2023/01/07/停车场管理模拟系统/index.html","753cb6b4ea4d1f15467345b576499d21"],["/2023/01/20/Butterfly外挂标签/index.html","4fca817004940e931ed13bcf2c7812f2"],["/2023/01/20/erro_spawn_failed/index.html","9aafd61e17a8da05737293c9abd92411"],["/2023/01/24/Echarts社区地址/index.html","dcc780f02a748208d69a4ec066c08bd7"],["/2023/02/02/论文翻译/index.html","7c185185e3e4fc0f35c175a681807944"],["/2023/02/06/WampServer图标黄色/index.html","0d1f4e842dfaadfdd5615417804100ef"],["/2023/02/28/OpenAI-new必应/index.html","b37822924e8a4fe960ff9c14359aff1f"],["/2023/02/28/PHP页面间传值的几种方法/index.html","455231cde9898b52ef5105087a77ad21"],["/2023/03/02/node端口占用/index.html","d1b4c8b0bde98769c9adc421d6153d01"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","02a1483f23943a6edca329143d24544e"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","539d24ea6cd3b65b9e77062c0848fb27"],["/2023/03/08/Servlet技术/index.html","6e5c34646a71443f22a18252c071bc7a"],["/2023/03/08/模板字符串/index.html","b88b1a2a8f74068ad2a45d05571554c7"],["/2023/03/14/Vercel部署网站/index.html","fa443be8560f8d5ae33f95515a303b5d"],["/2023/03/21/github-copilot使用/index.html","92935ec834f5ebb9697bdee452284456"],["/2023/03/23/从零开始的计网学习——概述/index.html","1765ee30d7b986ee2d403569a6f4b88b"],["/2023/03/23/从零开始的计网学习——物理层/index.html","9c5bd30cec32a75e915d92bd5ab5876f"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","3b67c43a81cef7c9b769fd0d3e07a0ef"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","f001ea86d4a750a0ce6b787fd7c30f4c"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","00db6091467f27e45f8bdef68a873dba"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","b100556bae9f532382421f1cea031b3d"],["/2023/03/30/微信云开发中的增删查改操作/index.html","d9dff084866b5a676f60efdcdb6d5ed0"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","f48c0c6e395b425d281913b47d3e70ee"],["/2023/04/04/文心一言上手体验/index.html","3cd99a9bb5fd870206ee9c4a1fc0f4a3"],["/2023/04/05/操作系统基本概念练习题/index.html","c3d8a3e1fad922021b68a0d7a162b3d8"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","d3e244bf66b51139264ef40a5c45a63f"],["/2023/04/12/数学建模图像处理/index.html","e229436bb40559bc4a54fc31bbff32b9"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","13d56c3e1a2c19899d5aee35a4114197"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","5b157c86dadc40c11b36497911d21c2a"],["/2023/05/08/python内置函数使用方法/index.html","1a6a7cd0e03a5bce17d513e8b5e8dad6"],["/2023/05/09/python基本输出方法总结/index.html","3489c1a34fc2e49479215bb9c0765dca"],["/2023/05/15/微信小程序入门到入土/index.html","90eaa1f244bd24ba1fdecbe8638f9143"],["/2023/05/16/c-一些不会的知识/index.html","9dd6b1d950e4a253962853fd9d0570b3"],["/2023/05/16/c-提高编程/index.html","307dc06bb65f4986931230342b158e7c"],["/2023/05/16/一文弄懂Python装饰器/index.html","cf588f2054af5c0a5791fbb48b036fca"],["/404.html","41f45710a3305a60526c11c31024c0ba"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","e89f31c4d9307442f7a70cbf6f854d8c"],["/archives/2022/12/index.html","a96feddc509874a4bc0b83db0a3c13c5"],["/archives/2022/12/page/2/index.html","420c9e9045ff2f1837000b0c5e0d4248"],["/archives/2022/index.html","c257cce24569bf25f0a746055682fe1c"],["/archives/2022/page/2/index.html","9799f4447fe6f771c8f13ef900713ddf"],["/archives/2023/01/index.html","3f7359576aac0e1de31d10caad662fde"],["/archives/2023/01/page/2/index.html","a5ae153424bf70ae2783bbb378bc5de8"],["/archives/2023/02/index.html","122ebb433688076ccd733283c009d8ad"],["/archives/2023/03/index.html","9d0271e254aa6828f2d689ff6de7c71a"],["/archives/2023/03/page/2/index.html","cf23bcca9671e9c0ab76d02ac25ce9c5"],["/archives/2023/04/index.html","165077b37048a3df240d28ee406d1dc0"],["/archives/2023/05/index.html","82689bd723ee79a329ca5b3dd5fb97e1"],["/archives/2023/index.html","2a3302969913075d67d44193d624108f"],["/archives/2023/page/2/index.html","79b0d3c2dea00fca77e0ab532ff431d0"],["/archives/2023/page/3/index.html","ce9627afb340398e54381fd390c3d695"],["/archives/2023/page/4/index.html","9a1102e3f2e41eb53ce8a25b67434901"],["/archives/2023/page/5/index.html","1c4f4605644979cf08399c82a9610f24"],["/archives/index.html","7f23db72fc6b26fc3fd7f4f0ffeb5d1b"],["/archives/page/2/index.html","978f806939ed166f08d435df197b09c0"],["/archives/page/3/index.html","f99aaf7d39b0cecb064da785c74894da"],["/archives/page/4/index.html","a7652aaea60e732e2d7edeaff2f9df80"],["/archives/page/5/index.html","e4c5c6c04c196c38fd9a2c38cc3d7894"],["/archives/page/6/index.html","7b96d109d800ab03cf49ba0f47675fbb"],["/categories/bug记录/index.html","6dfd801aaa10b2a8803674aedfa2cfc3"],["/categories/index.html","f6993f7a9050125a82b13ec51c1a22ae"],["/categories/学习/index.html","127cd37b32bb9418b43e5d1365cd8ab0"],["/categories/学习/page/2/index.html","9189f174ffb97e673694c0893b532988"],["/categories/学习/page/3/index.html","0ff9c519c77082d05b8009aaaf35725e"],["/categories/学习/page/4/index.html","47295e8556bcbf08a1e1f3b4aa5be4f7"],["/categories/教程/index.html","2aa68175108e3a569f5afcfd6dea8e6e"],["/categories/教程/page/2/index.html","2fe9b8b5e8a7d2414712468c92c81a8b"],["/categories/日常/index.html","24cfd3d522921090064390b28485e32d"],["/categories/项目/index.html","5c6affefac4df5b9bfa8086206d5f6af"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","a4659f94845b5e65f772072d5a0e4794"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","a537f3af9014606ad3f59d816ee6c42b"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","1b39439dc3b8b0122411d6e9c1a520df"],["/love/index.html","ac950dfe17251fc6b251bf514386ace1"],["/my_project/index.html","c295919c8179f2ed703a1171e926d53b"],["/page/2/index.html","0f88b9d04ea6b382f0e901271f1db1d7"],["/page/3/index.html","f9035b8aff42bebe538890068106695e"],["/page/4/index.html","7b0a954405c623c4b44ee6db6c0ed2e2"],["/page/5/index.html","a608f0fe9e06edb615e7c858dc494e5b"],["/sw-register.js","dbaf7cdd6a71d04edec36e795e0bf1c8"],["/tags/C-C/index.html","6e1b213ca9fa97291dffae8838f9e531"],["/tags/JAVAWEB/index.html","f846f1da8b6e727e6ce757deefe6e857"],["/tags/Java-Web/index.html","5282dd8f1cef4e66f1f4204bb9e3adc3"],["/tags/JavaScript/index.html","91881b1c4973998eda6082908d3a6b16"],["/tags/OpenAI/index.html","4661e4b34ba0a51d2a0b2510a20546b2"],["/tags/PHP/index.html","a51e2c8f3d4922b02761cf26d11d87cd"],["/tags/Python/index.html","be8dbc3b31080efc5000564b8d03a626"],["/tags/Servlet/index.html","0bd7b49764fddc3e637a6d97941ea4ab"],["/tags/Tomcat/index.html","4311a7c81fe61eb7b5a1cf0049f2537b"],["/tags/Vercel/index.html","65795b2ebb5517009cecc9fa9f5ebe3b"],["/tags/WampServer/index.html","27672796e563b4e3dc15c5f6834fc8bc"],["/tags/butterfly/index.html","bd2795abb412418e2fe9278a51d4c3d4"],["/tags/copilot/index.html","7fab76be4e653a06bd68415fbd935a6f"],["/tags/css/index.html","20212bce2f86531cb25865a92f265df0"],["/tags/hexo/index.html","5d6335299d1bef4ca27a69e17108acf1"],["/tags/index.html","333bc2c99e0c2ee78143844e9f75cc25"],["/tags/node-js/index.html","cca64817f94fc79c7a6d0660b08cd4c3"],["/tags/nvm/index.html","b39e8126c4130bc7a1424eb355ee380b"],["/tags/paddle/index.html","9d2ec28aa4c5d9cb20cf015cb2b74248"],["/tags/paddle/page/2/index.html","a6aa4b8bb3dbb53822e2311477f26f76"],["/tags/人工智能/index.html","bbe5f99a3f34b0249dcf5a9bae9007a3"],["/tags/人工智能/page/2/index.html","539fe794598ebe1b45e520a60d27eeb5"],["/tags/博客备份与恢复/index.html","4794818c6ddc7d1058bf49770cff3216"],["/tags/微信小程序/index.html","63dbc69dc817b2dce02a48bc3401b102"],["/tags/操作系统/index.html","d380b55a6e306e648df152527fd7fd4c"],["/tags/数学建模/index.html","971b6caeb5f5cc62467be855240a4df5"],["/tags/数据可视化Echarts/index.html","902ede481c55ce651fbde8b045902f42"],["/tags/文心一言/index.html","57d9c3575c918a7675b53dbf09cfd480"],["/tags/新必应/index.html","516f66142dd38e440b8c9781eeda0d12"],["/tags/深度学习/index.html","f51f6d791dd4faed6a7797ea72ef826d"],["/tags/深度学习/page/2/index.html","32a280ac72155038a613e00ab4254672"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","1c4885c2485aff55c58b30de734cd26e"],["/tags/深度学习基础-基础模型实战/index.html","a83302e77af55b77255f20d710d9fbc1"],["/tags/深度学习基础-模型选择与调优策略/index.html","2b2e7fdb97d9eaef3770121a1cbaa4d7"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","8b9756e805cb9f009d366ec14b76096f"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","8a7c42d6370bfaf3f43b130921b7422f"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","3df7e585ae9358706fa99bc40b5912b6"],["/tags/网站部署/index.html","d64b74409e75c9b4474aa4c7ea72dc49"],["/tags/计算机网络/index.html","37a54e55c0f042045f87c5a07a55a2f0"],["/tags/论文/index.html","a14f823ec33c9f94284d5696d1243fe8"],["/web_site/index.html","3c57246e45703fcbff3e73918bee90f5"],["/唠嗑/index.html","5acb2f0bfb4cdcf289f10f77b7ffb78d"],["/装修日志/index.html","0187df2d14b322b6ef8d79def30cb015"]];
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
