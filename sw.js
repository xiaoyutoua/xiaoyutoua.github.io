/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","7eafff767d3bf1bdbb877d67bdebe36a"],["/2022/12/17/nvm/index.html","62bd430e21b7c48bd406f4380ba327fb"],["/2022/12/17/博客搭建学习笔记/index.html","6b7f4b2fea6d4cb5ac34b0ef37769085"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","97a29e98ecddc5f739443885bb3ccd7b"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","523cda7da304c289637a1cf0903ab646"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","2178318ce7be5ddb371a457d8410d442"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","f3c6894495ad076da9a2457c102015f5"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","1cb3329f690df8e960ac4edc498aae2d"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","9ccae8d4f4d99ab89d82a1fd7ad08d9f"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","d72995108bb370641875a31ee67d87b9"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","3f32c64f6cfa6dea2e5ae894cc81ad9b"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","50171313ee15946a275526f4436a8a89"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","02109c85ac94954eca01ec009e1a399b"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","11074b6d48157f143ac2030f193d803c"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","db6a1f780241ea4f42536498e2be5622"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","03758c43b84795ef78682322609995fe"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","fbae680535cba821634179e7c12edf9a"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","9b1b4a6f4fd80164041e2465e8953204"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","197bfd49eeecd061e12a17aaa003c481"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","47114cd5ee5a9f4f0b3d093906e18e11"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","a96d05d575735d732ad918884e2d7c45"],["/2023/01/06/Hexo博客备份与恢复/index.html","395a8999c9ed9169fb0a9e46c6f98683"],["/2023/01/07/停车场管理模拟系统/index.html","abe22c4ea34a78485e3b8626d9a66191"],["/2023/01/20/Butterfly外挂标签/index.html","4ffd1e8ffdefe7c024f9f60d63a44a3c"],["/2023/01/20/erro_spawn_failed/index.html","1759d9838929bba5ca67155a359aaf3d"],["/2023/01/24/Echarts社区地址/index.html","df2d9a7b09a6e5183f7916a4ff0a82d4"],["/2023/02/02/论文翻译/index.html","3a9ea871f1783d78065f39d42ff28fa4"],["/2023/02/06/WampServer图标黄色/index.html","c9285cc2c82aa1948b2cd05bf9e84da8"],["/2023/02/28/OpenAI-new必应/index.html","47dcf1ecb84297804c034d8f77dcf73d"],["/2023/02/28/PHP页面间传值的几种方法/index.html","9fd47356cc4fd71d975b7ae532fb28b4"],["/2023/03/02/node端口占用/index.html","df80ea7d9cd27c4ab7ef87ccb3ab5fd2"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","764b89e757069d127ebb2bc576557349"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","5e479bcb8dcdfd35b338e5472140644f"],["/2023/03/08/Servlet技术/index.html","dffc8ef7d7dcebda6c80e8a6e7f450a2"],["/2023/03/08/模板字符串/index.html","3e69317c76caae27eaae10bb5ffb7b41"],["/2023/03/14/Vercel部署网站/index.html","0d42ac3ff50ed62bff09fd8e6350e28c"],["/2023/03/21/github-copilot使用/index.html","da488c62e97ece47e9b05d210301a4b9"],["/2023/03/23/从零开始的计网学习——概述/index.html","73f8eef2fb10714f32a243b7b9400fe6"],["/2023/03/23/从零开始的计网学习——物理层/index.html","7643c0ec54e597135ec27aac4ad0f633"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","a86bea4983c8db03a367921f2d1cfe5d"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","76d407630dcbe02435725be4dd541846"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","768322f4d344fb144bb3320ccfa76cc1"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","64f73253b005ff687ffd365864b1995a"],["/2023/03/30/微信云开发中的增删查改操作/index.html","c77620457c810b46af2d993081cf6626"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","63b8625ed945fcc3725401522b35cffa"],["/2023/04/04/文心一言上手体验/index.html","2075d3773ba618804c1288b0a5169b63"],["/2023/04/05/操作系统基本概念练习题/index.html","29ea4c3b843f7c4d7f02708a00e07824"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","59e3f6b1792f5ed451eaf78094d67ed7"],["/2023/04/12/数学建模图像处理/index.html","afc55a6c2433f818b56310050c0a4762"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","476fa87ee59f83526dcd62c2fc66a5c9"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","8d9583711fda60d7a54d088f9dfacd7f"],["/2023/05/08/python内置函数使用方法/index.html","03e983e176853e253a814c8eef861afe"],["/2023/05/09/python基本输出方法总结/index.html","90babf876f82a093991fcfd05f784d59"],["/2023/05/15/微信小程序入门到入土/index.html","608672aec81c36440aa342b28d323ce2"],["/2023/05/16/c-一些不会的知识/index.html","a0e1149217e876cb2aac19ab3edf9214"],["/2023/05/16/c-提高编程/index.html","50f64242e1c422130db6b57da3c18be5"],["/2023/05/16/一文弄懂Python装饰器/index.html","ebc93794a9d7e82cec716c58e9708f4c"],["/2023/05/29/Python四大法宝/index.html","e35ec72076b27904cb0d053cd7e76f20"],["/2023/05/29/如何更快熟练Python字符串？/index.html","53b32d20b1eaf8b06539282f9fe5b129"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","77fbd1043486fba5556f2d24364c37f7"],["/2023/06/07/如何学习动态规划？？？/index.html","bbb033363c7ecd55c0ee22d14b08a8c7"],["/404.html","8e422962f105f97608ab2bd0dcc69529"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","c253e5b32a5313a7fa9236bceda9db1f"],["/archives/2022/12/index.html","e1720a69f1db8e318a692fa09d374244"],["/archives/2022/12/page/2/index.html","b83487551438bbb96649c025a27359dc"],["/archives/2022/index.html","e47cec89c7bb48b76aa393a2175b82ff"],["/archives/2022/page/2/index.html","f37c177d07a51d49f705464029f475b0"],["/archives/2023/01/index.html","6fb79f1ff5ace47d48a80618e2550f0c"],["/archives/2023/01/page/2/index.html","68902282d4147fa34ad33f92fd25308f"],["/archives/2023/02/index.html","d81576bcd7d9e35e5c41f35bef5e8dd1"],["/archives/2023/03/index.html","75710180e7626a7d2363ebeb226c54b9"],["/archives/2023/03/page/2/index.html","07be9d9109d6e6524eede92421e0a4d3"],["/archives/2023/04/index.html","e9b9e6f8172b6cae3f72c6fe6bef2cfd"],["/archives/2023/05/index.html","ebd5fcfba12702b818301062d54ee457"],["/archives/2023/06/index.html","b67ac3188af68e74a00b0090c23b17ee"],["/archives/2023/index.html","3d9e1da6d6eaa6b9652e42f711b8c74e"],["/archives/2023/page/2/index.html","7fdfdc408ced90a5b789f2b43a8f92a7"],["/archives/2023/page/3/index.html","19846fe39c2b9ba99cbad5ee84f99481"],["/archives/2023/page/4/index.html","81c8dadc33d88f8e5ea110017e80e0df"],["/archives/2023/page/5/index.html","a325cda4101a76f8173adb9bcab901f9"],["/archives/index.html","307c0e91e493b32f714223a34e5306d9"],["/archives/page/2/index.html","cadb8c9b1523ef022d60d4ee4b5c4280"],["/archives/page/3/index.html","8af990a138a3dab1eec76ea99e4efce7"],["/archives/page/4/index.html","22f4856360f06783e8793bcfdba6f6d2"],["/archives/page/5/index.html","293bd1b3fe0e153e810ee74eb2c56c7d"],["/archives/page/6/index.html","0a7ca10c62ed8b6cfd8e42eb5f565e27"],["/archives/page/7/index.html","4dbeb268c2c432c01949c3c2b581ade9"],["/categories/bug记录/index.html","85155fa38134b7366f99ff1a833edd86"],["/categories/index.html","0f4150d8d9abc8bda1b33618bfecacca"],["/categories/学习/index.html","b0e5686a11d77c5780faafa205c22d89"],["/categories/学习/page/2/index.html","7567325f092e7d4c5ce842b1754ed260"],["/categories/学习/page/3/index.html","027dc36935bd7f01d6ddac9c8006f434"],["/categories/学习/page/4/index.html","038d5f635aed0330a32e9162578d30a3"],["/categories/教程/index.html","07bca3d439cd8cca8183cabe6b1326e2"],["/categories/教程/page/2/index.html","74e65f3ccca84bea1312957cb6b629e1"],["/categories/日常/index.html","3bff754f49e293e808f27d297fdba63f"],["/categories/项目/index.html","e11a7541f5b670d5537e6f90fe6c0360"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","de21a4318f513378cbc95db000d98f16"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","a98d290613a8d95e47a403179aa95e81"],["/love/index.html","8b2420092b887cde04d5bcede00aed9c"],["/my_project/index.html","31cac03c0776ce35b326205f4c7c7ed5"],["/page/2/index.html","6fd048dce308cb46181ee5765e301cd0"],["/page/3/index.html","b09fc3d4f2c3c6179eb27220bb9bbed6"],["/page/4/index.html","8dda9a94a74a901c42da1bfd07816748"],["/page/5/index.html","f458f2d5d317e93b722dee42da959209"],["/page/6/index.html","e8533439bb5c356636e406cc726354d9"],["/sw-register.js","c251d10c9d206f8523afc1581e3f124b"],["/tags/ACM/index.html","b66ecadb0ee13b30c4d6785223002e09"],["/tags/C-C/index.html","01f13748e3e5f46c07bacc129922bd2d"],["/tags/JAVAWEB/index.html","2b5ea15095ae575687a84b809b0e2c4a"],["/tags/JavaScript/index.html","3837b25abd4cca1e5ec4dce0d236b4c0"],["/tags/OpenAI/index.html","ca652b1f45378ab244954bc4826b65aa"],["/tags/PHP/index.html","aa65284f6772a32fc7d4c0067547b28f"],["/tags/Python/index.html","11158c3539b2903d943c0d1b124cc4ed"],["/tags/Servlet/index.html","9be8f365fdf6a9950ea1629dce7e3be9"],["/tags/Tomcat/index.html","25f0de9de82c525c9f3df7c4488fecc5"],["/tags/Vercel/index.html","16ae74c508afc6b5880867dc2d8cda9b"],["/tags/WampServer/index.html","ce6a4f8eccfec050dd1880eb1c999ae6"],["/tags/butterfly/index.html","84aba172c421116ade134e3053fee615"],["/tags/copilot/index.html","87512bda1c9e4cddc8567fb1bd1aca31"],["/tags/css/index.html","cc233c3660bfef1761526e799afd492c"],["/tags/hexo/index.html","ee51ed63aa2bd1cda5a7f7ee63726c76"],["/tags/index.html","2331f57718d42d1f03e72ddb6ea6715a"],["/tags/node-js/index.html","c73a4215476af83ee2b2d677a4ac08b3"],["/tags/nvm/index.html","0ca1d0238fffc8ca2aca09f2a2fad4b3"],["/tags/paddle/index.html","93abc45060224e249d7b8a2f14051134"],["/tags/paddle/page/2/index.html","121a691b3fbce74b9d09e7126bab65e2"],["/tags/人工智能/index.html","1df6ef260dabd074be011780faee3730"],["/tags/人工智能/page/2/index.html","65bff36a67919ad7335781b4eace5a4b"],["/tags/博客备份与恢复/index.html","27ebefbb1a5b350f7f19ce3d1f7c0233"],["/tags/微信小程序/index.html","acdb0751d4844ba46e081ff90c578e0c"],["/tags/操作系统/index.html","8c0105c7c3e569d256ed7497bef8b50f"],["/tags/数学建模/index.html","6c32f6fe7357e3217d4b5c6b6c5bbe97"],["/tags/数据可视化Echarts/index.html","edc6a46359ed9ab015a5c41af1136bfa"],["/tags/文心一言/index.html","f40e511567431d9da475da8214ee0d36"],["/tags/新必应/index.html","893b62e7bc710bb8015defd055bd7e05"],["/tags/深度学习/index.html","5376156abefcf8c4290a8a5f347f639b"],["/tags/深度学习/page/2/index.html","d1c3ac186e747d664494d5504b006bd2"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","13c6ef35d03b54914d96a5352d13fc13"],["/tags/深度学习基础-基础模型实战/index.html","c8d6602bcabf91d9dbee34f38e5e296b"],["/tags/深度学习基础-模型选择与调优策略/index.html","0244e8b1666a39c7af61cffb4cc9a3a9"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","34fe83bc731a8d2bc57e71cccafd28bd"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","c249101e2858459c7c7fbe70e9542d55"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","29900ff44e5dad8443aad61ba225ffa6"],["/tags/网站部署/index.html","d5576da2855f899212d85715d45d231e"],["/tags/计算机网络/index.html","97ab6cd71a600a6149ef47f46bf00950"],["/tags/论文/index.html","890a3701d45ad517c3cb904e70a73a38"],["/web_site/index.html","625c382a623d3492c98a395da5fec39e"],["/唠嗑/index.html","23c77f2d468c2882a6d86936041648c1"],["/装修日志/index.html","4ac7a03c236377bbeaa0859a11861831"]];
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
