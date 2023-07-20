/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","cf56ffc7791b61a15b9c853b4b04b470"],["/2022/12/17/nvm/index.html","4fd873652084ba42609c50a856f6a2a4"],["/2022/12/17/博客搭建学习笔记/index.html","f67d4635a788479affda8df499b82411"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","21efd78c41ec747e125c6475a88a238f"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","c5fc5c1030c2f57f6fc978d0f488e606"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","350ec29bcc84d776d6536c45a5baa263"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","85e9bc9ae05e15b08fadf3d7eeaf74ea"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","372f9189bfef32ac7d27dcede763a4f5"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","6b935ae49c4fa1be0ff0825703967abb"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","81019c817d334f4d79569c4ea50cdbd3"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","8d97d6f7d12865a1378e4c1eb2ef29f2"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","e480a9dc679d39ed6b82f0291a873b62"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","c302203b81865efd154093119f886704"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","63067f02e234703028438fbb784a2f2a"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","a0c638766b0cb67590f26de998919902"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","198a4290f357bd88f6438456b500fc1d"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","2bfd65f5d3360d74007de834904ce270"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","52e9c964a0f8935263851816fdeb995d"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","ecf031752b796862fb0e31cfa9525450"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","8a9698ade088b16f10a81596e2b87b68"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","2098e870caf3d3f471f17e5e55c782b4"],["/2023/01/06/Hexo博客备份与恢复/index.html","f33772bb8de88801bc93fcb666d99481"],["/2023/01/07/停车场管理模拟系统/index.html","5384e24f693cc54eed6d4823c33b954b"],["/2023/01/20/Butterfly外挂标签/index.html","6168e84c995b9e1bd172f98afc1a00b5"],["/2023/01/20/erro_spawn_failed/index.html","5f6009d904077e76cc35b3d8c04353e7"],["/2023/01/24/Echarts社区地址/index.html","8af340298311d2d9c792b7e46d777199"],["/2023/02/02/论文翻译/index.html","7400b8d98f9a0b9c2da2f3a6f0d914a0"],["/2023/02/06/WampServer图标黄色/index.html","c54ae7c56c9c4fd13eba5f2b0b77bdbe"],["/2023/02/28/OpenAI-new必应/index.html","64e8d5e873f5915b2850ca59ef7924be"],["/2023/02/28/PHP页面间传值的几种方法/index.html","f68fc7c62bced5544bf761084bf9b72a"],["/2023/03/02/node端口占用/index.html","ae4a4277ee094028fa10afc1fb0cbd5a"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","6f0ee7a68132b867187704cb0723ead7"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","f2b83d2988d73c2ca97ad9d2234351cd"],["/2023/03/08/Servlet技术/index.html","0d10992940ae697d0eb5dd73fb80db02"],["/2023/03/08/模板字符串/index.html","43edad7903d9aaf68b156c8bcebffa07"],["/2023/03/14/Vercel部署网站/index.html","d4732dae860009ce25e2a9ddcfa636b9"],["/2023/03/21/github-copilot使用/index.html","429b91fb5a23296959b27a0252f61323"],["/2023/03/23/从零开始的计网学习——概述/index.html","4b52970a319fa98d994c4aa54059c7ab"],["/2023/03/23/从零开始的计网学习——物理层/index.html","081a3a58c5a24b6ffbcb941c9228b360"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","53578c07d12299d56988b497f3a8e45f"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","0a194ecc2c927af0415d512ff7006394"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","524ca04d22e7354f85ba9e37388b7a2b"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","b40b9304f866b8c6ad43aa94deba0d23"],["/2023/03/30/微信云开发中的增删查改操作/index.html","f4e1abe813b8cb2849d190f49dfe8465"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","da8461c1dec4515c3f0c303ab89ff656"],["/2023/04/04/文心一言上手体验/index.html","aa272454754540b01802eff77893a7ff"],["/2023/04/05/操作系统基本概念练习题/index.html","1cd88390ebe1356319092df6e903a12d"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","59cde2e6f03c4fe1fb01668dfed355a1"],["/2023/04/12/数学建模图像处理/index.html","24fa5e9a93b8ebf4c0ff69f97dad7b14"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","964f7e60198d29643800b5ab45ccb405"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","2ab82c0fe4e3f8e76c4e449782aa46f7"],["/2023/05/08/python内置函数使用方法/index.html","6dd349f6fe7b9a54afedf681c1a8b0d4"],["/2023/05/09/python基本输出方法总结/index.html","8a605e052aca55904bc3ba62b987f597"],["/2023/05/15/微信小程序入门到入土/index.html","5f2b9059046f519a0c2ee71f4599c965"],["/2023/05/16/c-一些不会的知识/index.html","c5bdbd1b2435595298c1bc724ca83729"],["/2023/05/16/c-提高编程/index.html","e0d3d89ac07e006b17a67826c48cde12"],["/2023/05/16/一文弄懂Python装饰器/index.html","cf9d0079907fd7abc5ed2cae19ed3381"],["/2023/05/29/Python四大法宝/index.html","5c819d8e37db07b82b6f56393c878440"],["/2023/05/29/如何更快熟练Python字符串？/index.html","2460069ff8ce8e771ce7bdf7061cea5f"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","737c4b31210a44db01c7e71511fd2163"],["/2023/06/07/灵神基础算法精讲（一）/index.html","9e7600f3454d51257805ebf538e26306"],["/2023/07/17/灵神基础算法精讲（二）/index.html","d1cbdb03f5154c1d878f3da6074bf56c"],["/404.html","dcf622258fec823b62c3efcaed40f021"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","c930c0612eabd31423cca3e7e30b9fc1"],["/archives/2022/12/index.html","e99b8d8f62a62ebef8de63629f581253"],["/archives/2022/12/page/2/index.html","17a096001b3f542d478292b0954e8539"],["/archives/2022/index.html","f661dd5cc269935e0d5c6c06de44c785"],["/archives/2022/page/2/index.html","02f4e2eb39adf91c711b0c5958ff1f50"],["/archives/2023/01/index.html","cc1cf4517096d53ed17e60d478b7395d"],["/archives/2023/01/page/2/index.html","b47deb196b0f4e05bdcc41204f760716"],["/archives/2023/02/index.html","8eb8d57214e8b48952a17f06a7c5377a"],["/archives/2023/03/index.html","889d7437a9e5ba9006ebee5917162bef"],["/archives/2023/03/page/2/index.html","08b63c583ad3861882b9e08a025598cf"],["/archives/2023/04/index.html","c40f6612de0a2e26e99ab6e67b8c23b1"],["/archives/2023/05/index.html","7b7e7300cec3dc099df91d579985e588"],["/archives/2023/06/index.html","2f6918b58cdc6d2e2660d0a46e0d174b"],["/archives/2023/07/index.html","5b264bb6ceeda8ddc2c4ade752e827df"],["/archives/2023/index.html","f6035bfaa954746b84cd061b7dfa1c2a"],["/archives/2023/page/2/index.html","84c7aef1b3e986b439b64e346e72e063"],["/archives/2023/page/3/index.html","038794617fd83905d7986bf56fbe32bc"],["/archives/2023/page/4/index.html","401eae1f4faec6f00362ae82b97a4add"],["/archives/2023/page/5/index.html","6c4c78b9863e132d6371829c4fc69742"],["/archives/2023/page/6/index.html","baf6251f933fe9cbb8cf650a24503790"],["/archives/index.html","b26daa40ae7fca9bc341aa964949bbcd"],["/archives/page/2/index.html","e7053c39f42e0a2ada5073d49d6a23b1"],["/archives/page/3/index.html","b558aa02067852399c3054af1d6b4146"],["/archives/page/4/index.html","7dc4a93eda8dafb81175eee70beca531"],["/archives/page/5/index.html","f1bba5ef1f5afa89e34987232db20b1e"],["/archives/page/6/index.html","41a0223de82431af57296454b0c9b874"],["/archives/page/7/index.html","e1773765e0fac00054be69b6339f7549"],["/categories/bug记录/index.html","944ec62cc3513ad0a8257f4691d38ce1"],["/categories/index.html","72b7280614027691d957959876a5e3bf"],["/categories/学习/index.html","da323100202954aa0dd75fb42bed0f73"],["/categories/学习/page/2/index.html","4c560bc4c74eb2d67e0765e5f755e56c"],["/categories/学习/page/3/index.html","3d7e27be21ccd94874cb4d12293fbd26"],["/categories/学习/page/4/index.html","99f6c73a83267cb6f7f7bfe1fa961ded"],["/categories/教程/index.html","7cd42a7f762eefdc44b85ec0265f1608"],["/categories/教程/page/2/index.html","61efc39568eef973f6032dbe65edb92c"],["/categories/日常/index.html","68508ecb03893609a2ecb24c01f2d285"],["/categories/项目/index.html","9d0a6ade3ab8e04a1891b2a04252475e"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","365d2045b998e016d5b1d500b3a466e8"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","53ceb7e55ab3e72790922dca8ceba550"],["/love/index.html","127cf91ee21d914e466a06611662a412"],["/my_project/index.html","6cfa7dd171222193b67d989d062c0716"],["/page/2/index.html","80eea8d609f00c259d0de7a57a14797c"],["/page/3/index.html","1a4cff06cfe2991259463fadf1946fd7"],["/page/4/index.html","9a064015cdfd3260d1387e9d25bc99bd"],["/page/5/index.html","ff2ebbf3f5659b248c7b5ce5985dfcc5"],["/page/6/index.html","65feb41065b07470406097d1786b3dfc"],["/sw-register.js","6a843988d9f5ab633cd19ebcee9e5a62"],["/tags/C-C/index.html","c1991ead26fa800288e2db11ccfde750"],["/tags/JAVAWEB/index.html","6103385bca60248a6a6681fd141fb3f3"],["/tags/JavaScript/index.html","9b23dff7d842a752145595ea72867c32"],["/tags/OpenAI/index.html","ec5207fe82fc41f203b33c29683f0850"],["/tags/PHP/index.html","048deb6767a773804b5e1a4268f3f02a"],["/tags/Python/index.html","555f802554013d2a1c97e171de009aef"],["/tags/Servlet/index.html","cb33e28b27d1c08e0549513e2fd9556a"],["/tags/Tomcat/index.html","accb3400e7b2416eb23a77efad06fe96"],["/tags/Vercel/index.html","e22ae0b3c675f7e9de0a79d37924a06b"],["/tags/WampServer/index.html","11986f76f018143539e2bd1713f62a22"],["/tags/butterfly/index.html","e0d02755850c0545da5c37026f1d7ee6"],["/tags/copilot/index.html","5d49463834108a0c1924b0e36a7a7166"],["/tags/css/index.html","aa31bc4176654f5f58ba5e19cf977a72"],["/tags/hexo/index.html","1a70c193285bc031c698a43583b7286a"],["/tags/index.html","84646f7287465432efd8f15567892c25"],["/tags/node-js/index.html","3d0982211493a97e8865ad71e683484f"],["/tags/nvm/index.html","b81d47d7a6ed31a9ad7279e550b6e942"],["/tags/paddle/index.html","1a8c350f9dfe51c0e4212240dc7ecba1"],["/tags/paddle/page/2/index.html","f89ea3009cdc1ddad4b045e614b8d0d9"],["/tags/人工智能/index.html","cf2e9253ad0855653c309b307c906163"],["/tags/人工智能/page/2/index.html","ee102354711950182aba974ca4b7fc66"],["/tags/博客备份与恢复/index.html","7d5a46ed98739ced258a7a122e09332b"],["/tags/微信小程序/index.html","a123fef874ebe7166e5e311037b4d752"],["/tags/操作系统/index.html","96035349915783c8fabddcd502ebca98"],["/tags/数学建模/index.html","5c6c280b4ce69609a1a09e07574d1ac1"],["/tags/数据可视化Echarts/index.html","3fb8b83f63cf88faecc199404db66004"],["/tags/文心一言/index.html","e82f6b87240a032896088a25725da876"],["/tags/新必应/index.html","49bcbab2db35eab3c31a7964eaf6e7a8"],["/tags/深度学习/index.html","b1af4eed02bdecf79987f2bf82cdb08b"],["/tags/深度学习/page/2/index.html","f8388c8417fe2a8c85812045e85f69c3"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","d3abb9e37606849dc0a81e5f1f6f8fa1"],["/tags/深度学习基础-基础模型实战/index.html","ecb7088ca18cd32b7724645ea363399a"],["/tags/深度学习基础-模型选择与调优策略/index.html","b85e8a4c715fa9116e20587944a7726a"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","9a70db1366457bfb91cfce771e691406"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","48f3e5786a4c4720dd4724390067b344"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","76259b1da074dc59ae8013669eb31a7f"],["/tags/网站部署/index.html","4c0eccc84273c0753c1ef4e8abe272fe"],["/tags/计算机网络/index.html","36aec2aad27bdaab4bf76e8b5de92288"],["/tags/论文/index.html","7e5e34169c5018756819b7acca65058a"],["/tags/💭💡🎈/index.html","c93672aa38c24931fee5e2396184ea43"],["/web_site/index.html","64b7d99d88d21e7a7a2de3dfd923c271"],["/唠嗑/index.html","86712d87b4d3af08ab8c06c2245569b5"],["/装修日志/index.html","079f397bf51630edb23501e2156111e7"]];
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
