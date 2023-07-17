/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","0308f42853b05559339c9d2053eeda21"],["/2022/12/17/nvm/index.html","ffe2ec5e2285ff5e34fd88fb7e66cdff"],["/2022/12/17/博客搭建学习笔记/index.html","b537a65cd7a0ef2031bc6d5fb5145349"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","4ee5532c8542c2f9eb5f177deb321aa7"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","56f9cbe6265dc87fc8ee7945e9a92c6e"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","2b51d3f33b59b75a1de7a3381c5952a3"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","c9d3647a1603fbca113d5cc34b2df7a7"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","3913eded12d3ff4a5326048ce4e9d57c"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","385fdf1753e1bdaedc17e452dcb0a2a6"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","058a7a623a040dade68323f601b71617"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","06e4945ffca859fdc225cd7d0079099c"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","0432b3ed65cbb6d83f02e4bd8cfab3e6"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","dbd827d8246341418973aa8c312a5c13"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","6d349f19146e832f6cb703be86d4a499"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","6fd42ba8dec1adaa213f58c46e1f1f43"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","4a8b52646d72039a8dcb55b56210c304"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","1ef1ccc009e80deafd07559832ab6823"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","ffbaa8d06c402c6d9af45ce7946d0863"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","e674ae6476cb10e59f86f80ccd81013e"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","4aba353259cb7168bc8f8a9a2ba31aed"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","c400cbd1c6c03d00366990cff888c78f"],["/2023/01/06/Hexo博客备份与恢复/index.html","159c4d22a5af1aabf4e58cd6f9767bf4"],["/2023/01/07/停车场管理模拟系统/index.html","5718d6f25b2218d80401e9dfbf799c07"],["/2023/01/20/Butterfly外挂标签/index.html","532530b6b13c546adcdc6acf0fe133d5"],["/2023/01/20/erro_spawn_failed/index.html","a112003c9b95f04a2faf4a13474e6992"],["/2023/01/24/Echarts社区地址/index.html","4f68de68a554e3c23284a6424b4f7ad9"],["/2023/02/02/论文翻译/index.html","bcfd74ad75c3a5987e3e61cadfcfb699"],["/2023/02/06/WampServer图标黄色/index.html","c4ee61a6bfcfc7503748df53d59723a8"],["/2023/02/28/OpenAI-new必应/index.html","1fef0d24cdbd8486525301d7da25bc19"],["/2023/02/28/PHP页面间传值的几种方法/index.html","71fa6f8c82aaaca29f07d64f2e27a6be"],["/2023/03/02/node端口占用/index.html","34e87f33c48f67a870c6807cde663bf8"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","ace1de44ca8a431d9f048f6b82182783"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","d780ee0b90b06f99e414bd94946231bd"],["/2023/03/08/Servlet技术/index.html","3bdb661d38e4279e9120d1ad1f4da68f"],["/2023/03/08/模板字符串/index.html","24d29ddcc5604d8ea083873b164f4b2e"],["/2023/03/14/Vercel部署网站/index.html","def5ea2a3e005133e8ee3e2202a63575"],["/2023/03/21/github-copilot使用/index.html","6383a86344f7e99bb796be1be8cce8cf"],["/2023/03/23/从零开始的计网学习——概述/index.html","8d97a96a506f07ae8a9f0ed0619fa999"],["/2023/03/23/从零开始的计网学习——物理层/index.html","9d0c73e01bef52d958df593f281e603f"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","47808c1a3ff8be1535741872f64d8581"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","67b4a9cb79d6d3456f0bdf04860afe6b"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","c423653219b1485b58b1d59e7ecffcc5"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","35686995e9a8c0ba60d3d8b7b18b2454"],["/2023/03/30/微信云开发中的增删查改操作/index.html","e8731f312a93f36ff7c01f265153d93a"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","17978e33c18e65af9d37f121e3c473bd"],["/2023/04/04/文心一言上手体验/index.html","746bef507bbbc34ad385f0a7f6dc858c"],["/2023/04/05/操作系统基本概念练习题/index.html","a626044e712a9ee56622de871c445f99"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","aa63a4dd5c21fe58b703a60d9213f6fa"],["/2023/04/12/数学建模图像处理/index.html","d8cb089f21e34a7350ab47cf16bb6b7e"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","937c333eb9516707318aeebbea0d63a9"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","a1794aa8fbfb91dc4fbbbafcc409a73e"],["/2023/05/08/python内置函数使用方法/index.html","d3a265fe65868fbe5b238ac6a49cf757"],["/2023/05/09/python基本输出方法总结/index.html","1203441dd7024a0cbc7a7e5e4f30df91"],["/2023/05/15/微信小程序入门到入土/index.html","94811d764e39e7ebbba8cb750149c1b2"],["/2023/05/16/c-一些不会的知识/index.html","b55ae37ac8b47b4863b9eafd634bdd06"],["/2023/05/16/c-提高编程/index.html","8a4a0c7b5449f5781991fafaa02e903a"],["/2023/05/16/一文弄懂Python装饰器/index.html","d01fef7b65633a02ce75d70cb3559713"],["/2023/05/29/Python四大法宝/index.html","a729ac56623a3cc2613962a2b653534e"],["/2023/05/29/如何更快熟练Python字符串？/index.html","1349edd480b0be1f58f9e31795e25688"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","e0cfd83762434b98fa00572cf50884d0"],["/2023/06/07/灵神基础算法精讲（一）/index.html","d229c7137fe4b76227bd6502ae882d44"],["/2023/07/17/灵神基础算法精讲（二）/index.html","14b8780ab75f5c4e9cb5a358ce7e79e2"],["/404.html","296cb2cc4324c32fda426706ee4cdd5a"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","6ba89f83c052c9fb2fb0449d12ceadd7"],["/archives/2022/12/index.html","a6533c1a6ecd326721a8b82b3a64881e"],["/archives/2022/12/page/2/index.html","99fc2a3c78158ab7ec68a7f00839c2e5"],["/archives/2022/index.html","03d614617cbef21f7098aaf413436396"],["/archives/2022/page/2/index.html","30c8c6dca70fb6561aedba248cfb17b8"],["/archives/2023/01/index.html","c9bb966389362884e7d6f117f3d0e078"],["/archives/2023/01/page/2/index.html","b90d4d698e7f86d0c2287fdd41c3ff3e"],["/archives/2023/02/index.html","3ca44d8e0648d6930903f1c52c19c64d"],["/archives/2023/03/index.html","62043a85e6461a56bf6e6f8dddf21677"],["/archives/2023/03/page/2/index.html","47a4b020f4dd61c00469eba4a8f350fa"],["/archives/2023/04/index.html","5317d5bc33b6f1a85be7b9570dfef96c"],["/archives/2023/05/index.html","ba0650a48f8cd384f5daca1611644cc9"],["/archives/2023/06/index.html","a5a0d50dfe8e1c971cc49bc2b47ed346"],["/archives/2023/07/index.html","ad350cacfaf84725f146906d0dd01198"],["/archives/2023/index.html","946f11085976eb85719403036ac0ae8b"],["/archives/2023/page/2/index.html","39075b024c403dc2fd6ed7fa2099bb62"],["/archives/2023/page/3/index.html","0f83228ae1ba1168ee80302b77172731"],["/archives/2023/page/4/index.html","1f8e8880f43aa485835cb31dd4d1fe62"],["/archives/2023/page/5/index.html","84ec0ff6e76a4db07ca6ca98ff6de70b"],["/archives/2023/page/6/index.html","4680377d3f267d4663eff61f5eff90f4"],["/archives/index.html","e23f696826b5827132c90bf4fbcc6ab3"],["/archives/page/2/index.html","bfc619aef8ce357c12d67f7f8c0e433b"],["/archives/page/3/index.html","cefaa57d8781ab9b8901811246927291"],["/archives/page/4/index.html","80ee02375feddee0dbf25e1aecfc1edc"],["/archives/page/5/index.html","b6d689e635a2bd18e7ddcc130eca0516"],["/archives/page/6/index.html","bbd9c1bf32bb4f73197d3531d301fbe3"],["/archives/page/7/index.html","2b1cc51fe180ee06c9dab6ebed821a5d"],["/categories/bug记录/index.html","860b74f96f2f5a1f9d85d7f9072f8444"],["/categories/index.html","6481d3e7d25492d72d659258afdb243e"],["/categories/学习/index.html","8bd86c504c0f95c71e695b2c4d07d580"],["/categories/学习/page/2/index.html","65dd183380cb49235ad8406ad29ac48a"],["/categories/学习/page/3/index.html","ba4602f23dd883861f5e8beb3ebc827d"],["/categories/学习/page/4/index.html","c78f7754f2a3f307a3f1869392796b05"],["/categories/教程/index.html","b88a0403006162cd8f2a4f9418a04776"],["/categories/教程/page/2/index.html","9a2253ffb353ffc9bd020dcbd5099613"],["/categories/日常/index.html","4b3f1829dea8188b9fe54979e87795e8"],["/categories/项目/index.html","1387063384b1f0fc4a34e13a90d21cb5"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","f476ef5fa900ebb1150098307fc0d2e9"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","6a3cebc9b806c1b02bb54d49b48fe84e"],["/love/index.html","54b8239e404da4493d8aa8c840e23856"],["/my_project/index.html","cde64221e0821709ae1ab28f2f89e903"],["/page/2/index.html","723e5b554c6b8db864e0262dc23d2cd2"],["/page/3/index.html","296a78209538a5c2195b8f32f9e40576"],["/page/4/index.html","4f42b9ac29b341d283f34983aef96971"],["/page/5/index.html","34feaa9c5f9d7ff4653f619db504aee0"],["/page/6/index.html","b8993e1ab074308f309f0d7b572d7bf5"],["/sw-register.js","eba4042e8f88a961286fc9838bbb0146"],["/tags/C-C/index.html","0552d12d90c3f66474e00889b6de2abb"],["/tags/JAVAWEB/index.html","f2a89db5a99f3aeb129f802b0afdcb68"],["/tags/JavaScript/index.html","a39c0e5c128638577af1e4dbdd774603"],["/tags/OpenAI/index.html","352cd3d7216bd809437be2f7d3a3648d"],["/tags/PHP/index.html","c4f3ac290308cdec7d513c852f268c40"],["/tags/Python/index.html","7ea9c411ccbc8417fb16feed4d41f025"],["/tags/Servlet/index.html","c0178449e0215b9880251d26d7e8dbd5"],["/tags/Tomcat/index.html","1632ded4dd14d5fb72652a33d608ee4d"],["/tags/Vercel/index.html","5804e9cf0b7faf8ca8223ea9901d01f3"],["/tags/WampServer/index.html","ff515f0dbe00a4be4dd7344adbff8daa"],["/tags/butterfly/index.html","d40ca046ad22acecb49dafb8168bf619"],["/tags/copilot/index.html","399c24f5d5390412ddb64a9a78bdf892"],["/tags/css/index.html","efdde5e25f40d65d8a45bf64133f8400"],["/tags/hexo/index.html","20d687d25fed4ac00ad4f1d853a965ef"],["/tags/index.html","4008c54831164a951cd7a9713298e2dd"],["/tags/node-js/index.html","f78d7be8d3919c3522e469e463efa8fc"],["/tags/nvm/index.html","9922519f1e7ebce3503aad10e7461785"],["/tags/paddle/index.html","d1a34d835e240fccd30e95ff8b604751"],["/tags/paddle/page/2/index.html","8bd5cb5eb89715a7e19a4196b81dcf69"],["/tags/人工智能/index.html","232f119042d209c6cf6f109f2d83c20e"],["/tags/人工智能/page/2/index.html","e0200f16f7f39c4d756e64484eca8923"],["/tags/博客备份与恢复/index.html","afa01552d32aa0f1fe9768e21147ccfe"],["/tags/微信小程序/index.html","4f9be9d595cf2e3cbaf2ef96aeccce1e"],["/tags/操作系统/index.html","f995676f3493d45f2a0133f7d5272860"],["/tags/数学建模/index.html","9d8c4f8d26da25e9fad3371bddfdf551"],["/tags/数据可视化Echarts/index.html","68c80e679f2424fb3d93bf71584cfa12"],["/tags/文心一言/index.html","10a78b67a40c43587bd82a05fc077027"],["/tags/新必应/index.html","b0bc918b859e8bde1c1229991395ea03"],["/tags/深度学习/index.html","d82d2487eddcaf410c1e57a8d0e5c3ce"],["/tags/深度学习/page/2/index.html","c9ff3c02531d8ab0006fa23bc9c6d241"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","2b1c9fb7e95cf50b82112459b5e70dd9"],["/tags/深度学习基础-基础模型实战/index.html","f66b976c9324f2308bd0fccddc6156bd"],["/tags/深度学习基础-模型选择与调优策略/index.html","e06cd4173f5f16da9abd0a8c1e7eb810"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","eb6a3efb0a44c9c761d94ce10c90b6ed"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","17a95a07b38331e4a20cc1982b6ed29e"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","0bd6af30a187a3544532b98908509b06"],["/tags/网站部署/index.html","4d7dc5bca50fe4a043010d35e540af11"],["/tags/计算机网络/index.html","5d41082a77bf3b724c8bb03f57795917"],["/tags/论文/index.html","fb684b84ecbefba2689aecf13107b07a"],["/tags/💭💡🎈/index.html","d7bc8f8561f7e018bb8c6f605d91fc1b"],["/web_site/index.html","1a9031d83194a0806edba8e157d5ee76"],["/唠嗑/index.html","964857a33aceffc78dbe270f67bac8e5"],["/装修日志/index.html","5406d4d59df4cbec7c9e46480a9c49db"]];
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
