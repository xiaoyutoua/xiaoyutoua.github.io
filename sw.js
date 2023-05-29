/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","61b556448897a5f8049af1a51320d752"],["/2022/12/17/nvm/index.html","50aa7a507f102b3f0228664e16895549"],["/2022/12/17/博客搭建学习笔记/index.html","17a7e4460c17915d583e22074cd6fa01"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","cff6f9751db8ad8b418138f11b9db9ed"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","f674000f7b8e4f7d6e24d90824f48c39"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","d3aeb83b487bfffb305731dbb1a2de2b"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","95ec508cda6abf08fc847e0b7f4edbf9"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","9c0cc96bcc810b86bb35cc7f39f9f4b8"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","653581d79cee1f262675f26f497cdbbe"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","86af99468a819617d8b27438b5122250"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","2b346bcdc7354bc2fff842befd084247"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","8e6ad5da3201ef2c2c697ec7553f6d0d"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","43f88c7fbdd8f4f92bf3bb3f516dc907"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","71b1d0bacc42084a4c1bcd2314388ea6"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","aede330adb7285d59659979554d96a43"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","08d98b7200d08dd46702b3d43ab7da86"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","526d089fda8759da2bbb24b2c7f7c889"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","2b5e833387f2a238fff09a4b7a99d1b0"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","9c49cb30a2fe726741c61fe90450785e"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","8a0b36c96ada88e8163b64789c0880c2"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","8f5c7b02bf14185536a95d605a07e1b4"],["/2023/01/06/Hexo博客备份与恢复/index.html","2aa47ffd67fd0b96a4ae96d829df8276"],["/2023/01/07/停车场管理模拟系统/index.html","847606f4c1c217404c5e92fa899e0ca3"],["/2023/01/20/Butterfly外挂标签/index.html","fddcd51eb451327d34804cea41210afd"],["/2023/01/20/erro_spawn_failed/index.html","f0fdf4233c1bd3afef1a8969bc3edafa"],["/2023/01/24/Echarts社区地址/index.html","a568b186f118ec0d3518bb4d0baa53b4"],["/2023/02/02/论文翻译/index.html","99c7ac22443a635a682af68780b9e5ef"],["/2023/02/06/WampServer图标黄色/index.html","bd21dc65a4678e6578fc22442283e95c"],["/2023/02/28/OpenAI-new必应/index.html","d46a49147705ed295b7674b3b04b8548"],["/2023/02/28/PHP页面间传值的几种方法/index.html","e89969619ae083d3f778f8650a1a8318"],["/2023/03/02/node端口占用/index.html","5a19db0855c31e3ed77f70f29b20b654"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","a223ac4e0c6494b1abc911012f00b95a"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","36ee996310f9ee7ce4ec842f743f4c64"],["/2023/03/08/Servlet技术/index.html","b636149f94f60c67ac5f804a8be25df2"],["/2023/03/08/模板字符串/index.html","8d3a9e50b24a810b99e7d89adefa0d97"],["/2023/03/14/Vercel部署网站/index.html","87b69d937e4322bb53579a40f85df045"],["/2023/03/21/github-copilot使用/index.html","c0c94b4a7ab882c7d6081417049b1c7a"],["/2023/03/23/从零开始的计网学习——概述/index.html","2feab3560528154f1537290a24ed4424"],["/2023/03/23/从零开始的计网学习——物理层/index.html","090544793bde44ca027e3011467e6b6b"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","71f2d128441e46e37fb99e72f6b11c28"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","6568ddda9689167e0b37ae1b4fb73264"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","2c8330c1cc54840b829a03283668049a"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","1ec90591d2888d3744456b548ceb1959"],["/2023/03/30/微信云开发中的增删查改操作/index.html","68f5c0670b58da2a750b6efb43987b52"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","da63f7a3099dbef06fee16268950cc4d"],["/2023/04/04/文心一言上手体验/index.html","a59222cc9194ee127001e610c3da50b9"],["/2023/04/05/操作系统基本概念练习题/index.html","5eb480bb97b7546c8cec136b02f7b5eb"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","7c0195240000babc78380d78b12d75f1"],["/2023/04/12/数学建模图像处理/index.html","586dfd7c7d5b854d09802c3c0f883898"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","7b345b67c7d4ee68927209a4e9e1f235"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","6e509fd479802281cbf245eed3d9f8e6"],["/2023/05/08/python内置函数使用方法/index.html","9c7620e90b1e9430dad6cd8b718c7cff"],["/2023/05/09/python基本输出方法总结/index.html","0242d713f30a257e722128ae66d01d0c"],["/2023/05/15/微信小程序入门到入土/index.html","2d6a45a0a90d3a4528efca8d5bfce3e9"],["/2023/05/16/c-一些不会的知识/index.html","04a8f0315484b93c7dd16c27722a6a89"],["/2023/05/16/c-提高编程/index.html","a8f555add7e30c0c8a7af55e78704b1c"],["/2023/05/16/一文弄懂Python装饰器/index.html","3fa0c9137bd6fba0bbb72466c5e9bdec"],["/2023/05/29/Python四大法宝/index.html","570cdabb734673f9cde4786150ba995b"],["/2023/05/29/如何更快熟练Python字符串？/index.html","03af24a0328f3bd73dbb9d83b987a732"],["/404.html","9d13d97da5c8c15f4919a217528ebe08"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","f61e89526312999c43fe6a76b4782aad"],["/archives/2022/12/index.html","2555b4a9b260184d4f7a9c2c8aa591bb"],["/archives/2022/12/page/2/index.html","fba3c3419ba6174313596a8e6672b6ac"],["/archives/2022/index.html","2131748c8004fa51235a52f51af7b6a2"],["/archives/2022/page/2/index.html","065bfb630992b56b9c3ede15cd5e8a35"],["/archives/2023/01/index.html","7a6b73525d995fa6883fc03c9edbd6bd"],["/archives/2023/01/page/2/index.html","58a0c4f462cc3a7fef21a47c0be27d34"],["/archives/2023/02/index.html","a62972429e3f40c39b077b2732838764"],["/archives/2023/03/index.html","32f3743543fa48450ba73a5f5d1674ad"],["/archives/2023/03/page/2/index.html","9afdddfb2bd1f7c6378cf56d41a73986"],["/archives/2023/04/index.html","c445514dc80c1b961e1b0679cd92c4dd"],["/archives/2023/05/index.html","d8a5f4e1c5865b4da9d709b3df842391"],["/archives/2023/index.html","a11e6e2f26adc4266fc367767057f82c"],["/archives/2023/page/2/index.html","d54c1986e38b5073f3a20c30d7095915"],["/archives/2023/page/3/index.html","3a35835bffd275541710e428731dcbc3"],["/archives/2023/page/4/index.html","2fd784895698424ceb94fc58bca10f9a"],["/archives/2023/page/5/index.html","23a5617d8d213a947a011a041893dce8"],["/archives/index.html","7c457106781bc471cfc736b849f01231"],["/archives/page/2/index.html","57e9094eb48d13e5b0291ebfebbb1b2d"],["/archives/page/3/index.html","cdd8481288c1e1aa224b28b53990e16d"],["/archives/page/4/index.html","337f0ba40ff61c2fdd58dc188258ecd1"],["/archives/page/5/index.html","26e7b4206a20f4cbcb889354f57786bb"],["/archives/page/6/index.html","075a5368d199db4ada5f54f0392efc34"],["/categories/bug记录/index.html","b9387b115a71f9d6093a39a48fbe6b60"],["/categories/index.html","8f796c5c71f2f49b63443acf3ee3748d"],["/categories/学习/index.html","aebf0dbfef4a1616870f2fc8f7dff83c"],["/categories/学习/page/2/index.html","f45cae5f6912232dd65b90de0f404adb"],["/categories/学习/page/3/index.html","594d6d2610d0ceab41ff256bd2722f81"],["/categories/学习/page/4/index.html","daf888fb7f7e19c372a7dde5b0153e98"],["/categories/教程/index.html","3c6e490ecad75baa94683b284b2745ed"],["/categories/教程/page/2/index.html","e38d17cf698a15230307b00d802b3a95"],["/categories/日常/index.html","3bc1d4524e4663fb9277f11bfd65f01c"],["/categories/项目/index.html","ad6e590b42465f072c86cc59bf09ec00"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","1d42c27647de89ce53ab281aea82f662"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","ca8bb5bf7ffba18d96a4d2010191329d"],["/love/index.html","f8cbfcffb6d533b3cfcc7f278fcee218"],["/my_project/index.html","cc4d8afd77242dfd6adf4a12b6e5ad5a"],["/page/2/index.html","2f81df03cf30045d1be0bb7594ee5641"],["/page/3/index.html","1fe926f57735f9a53af611a1ed3467f5"],["/page/4/index.html","2d65a8be0e43e8b5b00a89e9069730a4"],["/page/5/index.html","52dd66626b1d3c240e3509b63427c969"],["/sw-register.js","9688eae4f2ac27104fc3a5aded8e8c33"],["/tags/C-C/index.html","83d6cbce04c6e00f0a63a1d644c05200"],["/tags/JAVAWEB/index.html","675bd47bdc63d7b7da000259fa1a3495"],["/tags/JavaScript/index.html","1333429a0762ad7879a85b4b79b1071d"],["/tags/OpenAI/index.html","d6dc64f74498e33fd79ec9cf00b4d634"],["/tags/PHP/index.html","2f655b0f4329de60209789cd364e9d1e"],["/tags/Python/index.html","5f1b0d19967afd65d21837c218f3569a"],["/tags/Servlet/index.html","1460ad74d7a891b05b5b15bcdfe68188"],["/tags/Tomcat/index.html","44aa5317c3ab566a7297aa6bd4b904b8"],["/tags/Vercel/index.html","6216dc7126dad142cdfb4a3191dfeb76"],["/tags/WampServer/index.html","b84a1ce802dfd866396114076a7ab222"],["/tags/butterfly/index.html","a99a7bff9cde7e5d0f32fb700fba4255"],["/tags/copilot/index.html","15ab08fb139bbed1ed1a170b1253c58b"],["/tags/css/index.html","1444e4778a5661e40809b33769604a9f"],["/tags/hexo/index.html","9e22529a0781eae15e5e58f9b9d94bea"],["/tags/index.html","2dc2ede9e30513e0c2a302616318cdb5"],["/tags/node-js/index.html","d16fb47b60453907b5669e8f587563a8"],["/tags/nvm/index.html","94f2c370e89b9e1033b465bf407241c8"],["/tags/paddle/index.html","eecfd93b80add59c4fcbc046fda98c54"],["/tags/paddle/page/2/index.html","8f2cdf2575d99d60ac271d28401e548a"],["/tags/人工智能/index.html","8c8e0bf1fd8817e2be8ac38166053ac6"],["/tags/人工智能/page/2/index.html","d867445f1e4c1ebd9b504454380031ad"],["/tags/博客备份与恢复/index.html","e925b5711bdce9546c700346764e76e7"],["/tags/微信小程序/index.html","46f3b72a1d88da61f8c5588955add399"],["/tags/操作系统/index.html","4a0711047eaa820076bd1dd278496323"],["/tags/数学建模/index.html","7a4626147b711ee7e6b9b979667ac60a"],["/tags/数据可视化Echarts/index.html","471bbcca1e1c0ac1979cb5554f11f5b9"],["/tags/文心一言/index.html","c7910143b78c3bce9cf07e44ba188d39"],["/tags/新必应/index.html","46a0c8fd1cde48ac01245e0589de62ea"],["/tags/深度学习/index.html","cc317e9452d2a9a04e19619ec1fc3f88"],["/tags/深度学习/page/2/index.html","4ae96213f7618c54792949c6c3b5dca6"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","7b2475becc28d2065e8ba8f615bfe480"],["/tags/深度学习基础-基础模型实战/index.html","73f943a7e61ea73c5e72632896df354c"],["/tags/深度学习基础-模型选择与调优策略/index.html","1843e17af28ac98fc7339f22e5b79b70"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","122c5356ab0b405e802376e9a439c2d2"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","264d437ab65391974fc9180a4d172a0f"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","3034e22acea690a118f5f85108b94ed7"],["/tags/网站部署/index.html","bde7aa59a8a6dcbd77c00b546cb4d5e3"],["/tags/计算机网络/index.html","8dc692258549bf8d035f31a0df9038e6"],["/tags/论文/index.html","d7db025ca2318657de1e6f215b39b036"],["/web_site/index.html","97e8f0fe59f45f089117988704bf4b74"],["/唠嗑/index.html","c8859fff7cbbbf065ee779db5a124aa2"],["/装修日志/index.html","0a4d1b8d467c314fa19a584aeadcc4a2"]];
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
