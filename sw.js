/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","c6764faf2005ea24924deab11a28a02a"],["/2022/12/17/nvm/index.html","a90200dca3280ed7b8b3bc98f3e57040"],["/2022/12/17/博客搭建学习笔记/index.html","1677719d522a921cacd7803960e45df3"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","0adc8b2ae70182e624ba1d4fbb0d7d6e"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","711990f31e1a299a67883476e428e6e1"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","9a71c5e713d052a20f8aa6fece9af9e9"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","f13852984524a0518c88d7fb71ba43a0"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","6f03551b4f272ea8c9725358e67b25ec"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","2de75b9e8a28df0d18235451f393fd2c"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","da17f0374c7e80424c0b1f0ec231faeb"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","6c6c7d5c05eab73ae82b2fb91a2ea703"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","c651b01945cafd03df7eaa19f13cc8a2"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","394f71a6ff537bb440005d543a9e46b4"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","5b8248bbfc6801c58af819c13fd94977"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","e84f78887684b81712a9dcdee4e9f851"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","1ed3a8e34960c737496cfcf0e046dcca"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","0a097a23d3f5a3bd5f37c0767d5ca4ce"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","34a43f2ac16d37367588972b66b6afed"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","59b20db5e671cd961b94d4dbeff50eeb"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","052d6cc53dc7f673af59b0050a20c184"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","db75fd3bf90a986343535cf68a404647"],["/2023/01/06/Hexo博客备份与恢复/index.html","35b7337fcb1d6a67ca4d8a5000cb2793"],["/2023/01/07/停车场管理模拟系统/index.html","0a1eafd399a6a9d8a6427ba44ffabdc6"],["/2023/01/20/Butterfly外挂标签/index.html","4da78f98b9e76687e9c7540c2bf4e6ff"],["/2023/01/20/erro_spawn_failed/index.html","361e7bb8bd4b89637991b18432097c06"],["/2023/01/24/Echarts社区地址/index.html","afa0c96b1ece991582388d2866c4dcac"],["/2023/02/02/论文翻译/index.html","03521bf2e68dc407262fd4b63aa8201d"],["/2023/02/06/WampServer图标黄色/index.html","f2831c4cb92ecd7f77200bb56522cd4c"],["/2023/02/28/OpenAI-new必应/index.html","a7e4c354ae047a405b7c7dce179518b5"],["/2023/02/28/PHP页面间传值的几种方法/index.html","40fc06b37ecd81068278d7aba76c5652"],["/2023/03/02/node端口占用/index.html","42aff0bea873e960e3a78ebd7fc113f9"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","501c39a929b53b47e0589e7897535e5a"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","c1c26d3cfb40cea30311feaef5bd0a34"],["/2023/03/08/Servlet技术/index.html","2986878deb3add23a0ecfb6c322bfd8f"],["/2023/03/08/模板字符串/index.html","42b0250ba814e6e1bbd5c254738dbd13"],["/2023/03/14/Vercel部署网站/index.html","18804d1fc4057543175a00d657fa63e0"],["/2023/03/21/github-copilot使用/index.html","d0e96035e52e6fe1ea3b444e370b18af"],["/2023/03/23/从零开始的计网学习——概述/index.html","aef3b055d21fdc22ce0ec8ff45dfd15d"],["/2023/03/23/从零开始的计网学习——物理层/index.html","78a1ba76c4833ede39d0d99a9569f1b9"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","2be8698d2cf3de8ccd1c1ef2ecdb9dde"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","89ded8ca62b320a1d1774d35b651bf7a"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","c8213a01bb4b3806b01cd93d755a6a71"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","efc4c3fc319e6e878a52b9fd4c0118a7"],["/2023/03/30/微信云开发中的增删查改操作/index.html","f495c81c5c2f2d4ef6823d3f1b3d0998"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","c3733687db3fbc40c4c6fd20205e384e"],["/2023/04/04/文心一言上手体验/index.html","faaa837e3b42b729b9b4decce8c5bd5e"],["/2023/04/05/操作系统基本概念练习题/index.html","29fd939507516f5ab882e3beb00eec53"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","5a5b599b4ea2e824b3e1b545d10fba40"],["/2023/04/12/数学建模图像处理/index.html","7c31a5222622eb9d5a32997c5e76ffe1"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","7a6eefcb8145556aae013d6634331769"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","6473695054df6c91cb3709c1f731cb2c"],["/2023/05/08/python内置函数使用方法/index.html","6ff685c61babb93cf2212b0cb99a40f5"],["/2023/05/09/python基本输出方法总结/index.html","6522e9e0def543bbe33d958e04514cf4"],["/2023/05/15/微信小程序入门到入土/index.html","2b39341ef3bdb978ef57cf93eb5f37dd"],["/2023/05/16/c-一些不会的知识/index.html","e3ef15600483ad1e8df93d50c9cc7aa3"],["/2023/05/16/c-提高编程/index.html","5f9a72b1dba8eaddfed6a9d79c6c51c2"],["/2023/05/16/一文弄懂Python装饰器/index.html","490f425684fefb5fc582b7d472b60a59"],["/2023/05/29/Python四大法宝/index.html","93d06d3311f64e295efb5f4c1a073346"],["/2023/05/29/如何更快熟练Python字符串？/index.html","9eb8b77cb16729772b3d5df9297ec1fc"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","fbad3d1d377b39d1ed06d130706817b8"],["/2023/06/07/如何学习动态规划？？？/index.html","ce55965e69d9ac567981d3a52069e01b"],["/404.html","151b46ee87511034fddc73c14030ec33"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","25420a9bad6a8567f84e7641167b1dc4"],["/archives/2022/12/index.html","4a8320e78c9a0ade1253040143dbb1a7"],["/archives/2022/12/page/2/index.html","8a070cd9ca5d3e75216f6b0304c6ebbf"],["/archives/2022/index.html","12ceebbd65ab907c316267be5b90ef08"],["/archives/2022/page/2/index.html","811ee320016f6f8f0093b933afb5d2ce"],["/archives/2023/01/index.html","c2989cc900bee7157222ef7976786d65"],["/archives/2023/01/page/2/index.html","0daeec5c8dc9a048c81d88743241b794"],["/archives/2023/02/index.html","103d4c60d3953113a4cea763183c7a48"],["/archives/2023/03/index.html","b9e121663f75344ad14fffe5664c7d76"],["/archives/2023/03/page/2/index.html","1b59f5148877ed5f2b3dd19aff653a32"],["/archives/2023/04/index.html","ba4d9760d943a9461c7ca0159a011096"],["/archives/2023/05/index.html","31936a20757b561346744ba967600d63"],["/archives/2023/06/index.html","4f092b333e857c5b0e7a691572146353"],["/archives/2023/index.html","19fce82fedd86a9a05535bb7fb5c2111"],["/archives/2023/page/2/index.html","dd082e8f063ee629ced8f9ed4bd442f5"],["/archives/2023/page/3/index.html","ca63db72d35b8bec1d4c61e2341942ba"],["/archives/2023/page/4/index.html","7fa19075da961d077185c9d2bb7441b7"],["/archives/2023/page/5/index.html","4301ac14cd37be3683334153815ae605"],["/archives/index.html","49356a650c8344b82b8c11d72f824348"],["/archives/page/2/index.html","bc6a37353c8f8c7010b5e175012d0272"],["/archives/page/3/index.html","a61f8660717f55f91fb17edbdd289170"],["/archives/page/4/index.html","53ce141f9f45cf22335600e019a44950"],["/archives/page/5/index.html","71f6156ce1b82ff2144c38b7b86d2896"],["/archives/page/6/index.html","d97c5422e57839003ab289b51284f93e"],["/archives/page/7/index.html","be94e27a394db3b5195b9fbc3ea65c02"],["/categories/bug记录/index.html","908d3348e196400aec2b24d559b77671"],["/categories/index.html","e2f0ba42bb3f4691a60d903eec3253da"],["/categories/学习/index.html","9f18c150c841a279d8372e940929829d"],["/categories/学习/page/2/index.html","fdcee98d707e73d4426d7c107fee52c5"],["/categories/学习/page/3/index.html","5d24376eb9d22e91f1c7d77e05507460"],["/categories/学习/page/4/index.html","5c62781e69a30186b82062f400599a43"],["/categories/教程/index.html","d85c5cae53c7fb4f2a7b4bbed7a06282"],["/categories/教程/page/2/index.html","a9a678c8453e7284b8469fc07551b536"],["/categories/日常/index.html","6866e99945726566ad9932ddcd4e13f1"],["/categories/项目/index.html","56df29b88ce953c2f3d5ec9101c6658d"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","490920d9564431743c6e0741eed18d5d"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","da9728105eacf7818ddf4f0d97c7a777"],["/love/index.html","c95e1c54a263a5212a876417e950159e"],["/my_project/index.html","355bd95cd295d153d0c21a9e1963d73e"],["/page/2/index.html","54b3acb5b473890f1c6189452ad08715"],["/page/3/index.html","a8a5f165c06c1d0c1b8ae07c52c6ee84"],["/page/4/index.html","20610aebff15dd23cc38fcd0686695b4"],["/page/5/index.html","1dc76d7f25d695f5aed056eab954ff1a"],["/page/6/index.html","b9db1cc1f62da90ac0178438e95e076d"],["/sw-register.js","d4df0ef69640785e17ea6b8c6ff9f5aa"],["/tags/ACM/index.html","35358655567a13adc3ac381eeb589db1"],["/tags/C-C/index.html","f3f03510de56423279b2361dcfd39789"],["/tags/JAVAWEB/index.html","eb1bcd91e00e8b574fb7b8b000613f72"],["/tags/JavaScript/index.html","f7720d3d51e57f08e07e14644dd756f0"],["/tags/OpenAI/index.html","4a701a4d472ec89b77c594d0a9ced92d"],["/tags/PHP/index.html","de6ecf646506d7ce37ff62b779044d69"],["/tags/Python/index.html","9f0a4baee8d8380db347831ce8fa704a"],["/tags/Servlet/index.html","a613126bfdffbfd330748a324b17d165"],["/tags/Tomcat/index.html","b76c489a993a32b3ea1a29b67f9ae723"],["/tags/Vercel/index.html","11feac22e8ab1bab086cbff4a9bebe57"],["/tags/WampServer/index.html","261d4a3809a800e86bdd23da0c0706e0"],["/tags/butterfly/index.html","0fbc80d483cbfd7325343c7e725e7165"],["/tags/copilot/index.html","856b934d5e3826c511ac70e6ce7fe5fe"],["/tags/css/index.html","9d8a3dc8eefdaff6e19bd3b7de39d18d"],["/tags/hexo/index.html","5bb1dec898d3df3e03c60a59f0736348"],["/tags/index.html","856a65caa2526a0f7e8794416f1ff1ea"],["/tags/node-js/index.html","5b65cf56ad6d7487d2b060e2cf57fc60"],["/tags/nvm/index.html","b3bc53c9621385ec4cc6b70b22115cb5"],["/tags/paddle/index.html","3c2d43d3a22e860469c87fa07defe200"],["/tags/paddle/page/2/index.html","567f07bed054015545a633c20dbe1773"],["/tags/人工智能/index.html","ef3c6d8c8cb326914904b5fd209f82f6"],["/tags/人工智能/page/2/index.html","e622090a3aae7163ed3031cd797b5dcb"],["/tags/博客备份与恢复/index.html","9497f3fe6437b0bef66566b0a6967bde"],["/tags/微信小程序/index.html","06058c7f01aff8591c04371bcf178952"],["/tags/操作系统/index.html","dee52443cebb209831f3ccbc86e0882a"],["/tags/数学建模/index.html","a273f2289113b7c276bb751a58547b91"],["/tags/数据可视化Echarts/index.html","7ffcad44d8e67a8ad91f8b6d5ca8fd4a"],["/tags/文心一言/index.html","15c29ec34ffa07a900433a01eebc78aa"],["/tags/新必应/index.html","a8c12ae12b575a7dc30bf330a3381262"],["/tags/深度学习/index.html","b18ed9b5cc884c0881405499b97b844e"],["/tags/深度学习/page/2/index.html","0ec80ef82f065c1b21024d4180eb7e9b"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","2af7064af47dd7a84519827fb86a8c34"],["/tags/深度学习基础-基础模型实战/index.html","7168dc89c584d0ffceed01a81c8a7b2e"],["/tags/深度学习基础-模型选择与调优策略/index.html","69928c8df44ccae3a34195b3c37e62a0"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","ad3727ba0646bcfaccfc7f99ed6e9d1d"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","88858101926b9fcd1091c584ff452fec"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","3162a0033dfc425f70f4c2400949aac4"],["/tags/网站部署/index.html","2c3583cf435a9f5143351d10d6e273f5"],["/tags/计算机网络/index.html","a56ea0b65537387c700ecbd02b13e117"],["/tags/论文/index.html","09f4c6ba8525fd29861bac0511da7cd7"],["/web_site/index.html","7ab8aa1bec9726c2fd1df127104210f1"],["/唠嗑/index.html","a24351da45380059a3fff04c1c2af37a"],["/装修日志/index.html","8f43b120e337175d3c5b8799e9220809"]];
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
