/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","edd6b313a8be1a1fd6b1f89b5f810aff"],["/2022/12/17/nvm/index.html","8ae747d37e3e3580e73f51db40ed2305"],["/2022/12/17/博客搭建学习笔记/index.html","273fb15301427132577a61302096b2b2"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","9b755763e89c2f35a1c908cf7da57eca"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","16e2752d4e839b004966d3cb10ddb380"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","fc54edba5510ab11ef48399bf6bf7e38"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","e6077724e12fcc21be21eda18e200361"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","6685d0205e431e140674552045c738f7"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","b126f2169c023dc4c3150c465541dc9f"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","1f77cac8b66e67bb500eda8cbbb354c6"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","9029b6cf34e7c6dce0673f981707e0d1"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","48cc6cc3e698ae458b56b2f99b3164ef"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","6761db09eb2fd8d51b73147c1c25e78e"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","3239f6c050684f90b981c709e76df2b2"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","f9b0226fa173da5e0dc3d1701008e7e5"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","bd3f993b85e8ce626626846975dc7d36"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","7a870c13b3c6d087b9d908d5b8ac37e1"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","a22c10cbce208232dff71968e04e24d0"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","e9ffba60e321143257cbddfc43be4cdb"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","50709c51a1cdbe2cf7d76e1147f24f70"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","cd533e8227bdc8e08f2242ad527c71f7"],["/2023/01/06/Hexo博客备份与恢复/index.html","cfc5e5a18c43ca072ff2b4f4d89271de"],["/2023/01/07/停车场管理模拟系统/index.html","c558655253006d8463b3053c3f83433e"],["/2023/01/20/Butterfly外挂标签/index.html","b1db8249e346534a77c5c41ac5f7d223"],["/2023/01/20/erro_spawn_failed/index.html","2cafea020e36e95f3a5518e056055dc5"],["/2023/01/24/Echarts社区地址/index.html","e1f92409662d192bc47ab2a6eacb1ede"],["/2023/02/02/论文翻译/index.html","2d733196ef0d9070db956df9762c7542"],["/2023/02/06/WampServer图标黄色/index.html","aef2fe4bbb3586961d5d82fee072e9da"],["/2023/02/28/OpenAI-new必应/index.html","b2092f580f0954dcf26b76cee5e8ca00"],["/2023/02/28/PHP页面间传值的几种方法/index.html","bf852f1c17c79565c76aad559e22c863"],["/2023/03/02/node端口占用/index.html","329ea5596fb524d368ef64fc77459d88"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","a4cdf04a99c0701c0685bba84fe1c97f"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","703f25d63c281110a0ea78477b6ad8af"],["/2023/03/08/Servlet技术/index.html","07b4a457796d30fd3fb69c6cb67b0ac2"],["/2023/03/08/模板字符串/index.html","9887f9704a89c61fb4cc02af1b2da8a3"],["/2023/03/14/Vercel部署网站/index.html","7c6a404d584eb35c36c4fe7dd6eb91cc"],["/2023/03/21/github-copilot使用/index.html","d7f5f99cb7c2b2006689d18ffa02250c"],["/2023/03/23/从零开始的计网学习——概述/index.html","158e354be3f70a95a338b6ba8f42ab21"],["/2023/03/23/从零开始的计网学习——物理层/index.html","3b01fbd6c75b7b2437e8e85bafd5ae4c"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","cec21ed7e381f8d7658ad55209a16764"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","6222ab12e30335dd01a9f3c1375b200a"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","0c9ae9ac307c887ea337c9329ce6b975"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","c6f5384d2c71bc5d38d64452b496ae90"],["/2023/03/30/微信云开发中的增删查改操作/index.html","cad6b4901049c7213ddea2c91e5fe10d"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","f8022894947d727dece9ae0c2054a7b2"],["/2023/04/04/文心一言上手体验/index.html","642999b60b578e08dbfac8255eb509f2"],["/2023/04/05/操作系统基本概念练习题/index.html","aebbbdfaa903b870ae9b7c4eb555c898"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","fad81c9d6094fd48350490b0ca523f0e"],["/2023/04/12/数学建模图像处理/index.html","12df3ef835668b819ebaa841e1e4a90f"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","6b424f677a6d9accf1d11833ecf30e94"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","4a3cd9499d78f61bc48ccd10c975123f"],["/2023/05/08/python内置函数使用方法/index.html","2a6b2259f59c6c646147329ded907ea3"],["/2023/05/09/python基本输出方法总结/index.html","4a596025ec4d838f88508fb4f821db86"],["/2023/05/15/微信小程序入门到入土/index.html","051997847bd47a37de11d6ae81235b67"],["/2023/05/16/c-一些不会的知识/index.html","5fb41877ca31a3469591ba22e7e57185"],["/2023/05/16/c-提高编程/index.html","b4b21bef6f2df5310e7ae0c097462be8"],["/2023/05/16/一文弄懂Python装饰器/index.html","859c3d31d26e4414234c8e39a498e38c"],["/2023/05/29/Python四大法宝/index.html","eb68f4a5c5bf04778dda2d60f4e220db"],["/2023/05/29/如何更快熟练Python字符串？/index.html","24ae779ff5f20cb91a1bb2b24e60503a"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","641c2423fb3b19186f64197acac1152b"],["/2023/06/07/灵神基础算法精讲（一）/index.html","398fccb0832e1239fe39fb7d33af5123"],["/2023/07/17/灵神基础算法精讲（二）/index.html","5eec3624777a62ffb4a20ca48dbbbb63"],["/404.html","588a9d59743479ce408db867f3d63e92"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","d0319bf0d6ec40cb2b30b0c4173b78b5"],["/archives/2022/12/index.html","5777e5a3ab7eccb4c0d4a83ea0a3db48"],["/archives/2022/12/page/2/index.html","c412b4b237f61d9110770bb17008a14d"],["/archives/2022/index.html","866702b19b03effd8d460a2ec3c88918"],["/archives/2022/page/2/index.html","05309b7caa3eb63ca7bab644093e0776"],["/archives/2023/01/index.html","709e605798b7b931965ffe1c34d30991"],["/archives/2023/01/page/2/index.html","000e39d11978181a54f64cb28eb034eb"],["/archives/2023/02/index.html","14e0575c9376c8d9ec69c752866c05b3"],["/archives/2023/03/index.html","b512faefb1e81e088c02bf796b42be96"],["/archives/2023/03/page/2/index.html","48f04a928ed799145f994aea1f1040a8"],["/archives/2023/04/index.html","99b671d8d8b1a62cffa0893c4fcb0635"],["/archives/2023/05/index.html","90b663692deeaa04ccc91bf766b0bcec"],["/archives/2023/06/index.html","2a9e2b2521471feaeff6a11c4cc28763"],["/archives/2023/07/index.html","5a09269ed19be070786f18aa23163e25"],["/archives/2023/index.html","f24faa77b15362aee3fb07d2eddf9e5c"],["/archives/2023/page/2/index.html","d4ee4423f997c1639006c48aaf9aab08"],["/archives/2023/page/3/index.html","39c2af71b72233d206089294e30d3ee8"],["/archives/2023/page/4/index.html","81f3ee317145ae12213a18e6b7b87503"],["/archives/2023/page/5/index.html","a48a54104257ccfcee9b37ccf570acc9"],["/archives/2023/page/6/index.html","104f7967c1930bdd0863b2578ce02f5b"],["/archives/index.html","4a6c0dd9e716f7161bd974a2f672e837"],["/archives/page/2/index.html","c945db87e843d8ce148c03840a37397e"],["/archives/page/3/index.html","5eb189efe7c52971aeb7ad55c401de18"],["/archives/page/4/index.html","d0356b9eb30fb3d8c07ae8f84c7a17b8"],["/archives/page/5/index.html","4ea8facba8b2f996ccf263d6abe60440"],["/archives/page/6/index.html","aecaa3e0d6dbf9c9004fa2552a28f1a2"],["/archives/page/7/index.html","3f6d9292dc13da7524f65ffe77ebd769"],["/categories/bug记录/index.html","a8159575e47295c7732b31013cddfff9"],["/categories/index.html","2dd3bf5f26eee7f282dd4fbc7149be49"],["/categories/学习/index.html","9715f28423f5cf049c040da9e55218d4"],["/categories/学习/page/2/index.html","06f5c39243e55a0b5adfdd92b2cc62e0"],["/categories/学习/page/3/index.html","cff151c2b0153aa027bfd4eb3ac86aff"],["/categories/学习/page/4/index.html","61e1cb6771fcbd3a62f13397b006d4ae"],["/categories/教程/index.html","a51ad9491500eca168c15d67b52672aa"],["/categories/教程/page/2/index.html","51aee77e13297587fdb8147bb6f31443"],["/categories/日常/index.html","7ab23ff08b7fe07067187bb0c213a8b3"],["/categories/项目/index.html","ba5fe7afb1781888b93e6f2f287b9031"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","84938872523fed244cdad4d297861965"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","b73276e7ed51b2cb2df2ff0d338c9400"],["/love/index.html","4b04e90aeb4c87f6f50aa44d033a4584"],["/my_project/index.html","cd095175297f4d336f69fd1d47111fea"],["/page/2/index.html","37b6630ae60a542b181bc504ca7bb539"],["/page/3/index.html","40d406ec1f23cb394cae9d0350040403"],["/page/4/index.html","5d3f513b0d4b43d8be00d59d49eb42d0"],["/page/5/index.html","c5aeb709a12be28b6a100fbc3b2c4f6e"],["/page/6/index.html","a4a9c57afadcf876ef9460c89570f027"],["/sw-register.js","85a022f3d310772fb2fa3d29b2b47704"],["/tags/C-C/index.html","df99cf852bbbb6c9a6ee01dfb6c16df8"],["/tags/JAVAWEB/index.html","f63e6ea1744f66ea421227482725ac63"],["/tags/JavaScript/index.html","5a10e1bd4b99a3e3977ba720e85bf7a1"],["/tags/OpenAI/index.html","b71f3dab458b5007cf45eac226940f14"],["/tags/PHP/index.html","87a3b21329021546d4c012e20e78a098"],["/tags/Python/index.html","a5731ed2552c75b0f769645d302e9660"],["/tags/Servlet/index.html","814200c6ece1179305eca2934a32d475"],["/tags/Tomcat/index.html","dc3767059bad68dd856bbc42aa819178"],["/tags/Vercel/index.html","94b1dd9ab125753d299546d52da42e2a"],["/tags/WampServer/index.html","bcd763ec238fc9b854cf2cbf986b5e09"],["/tags/butterfly/index.html","41f29c98cafd592533db6281366b98c1"],["/tags/copilot/index.html","a51ddf870afd72d0911127f1092d48ba"],["/tags/css/index.html","e95d9992ab0eb9c7661cfb4de2b1ef60"],["/tags/hexo/index.html","160c37c71736f6bb43bbbea5915df746"],["/tags/index.html","cca0ff01417169aa0e629baa93b17a81"],["/tags/node-js/index.html","6c873c21d06bc4a3c15096ac6083572b"],["/tags/nvm/index.html","a14b3303c4446d1acaaa161cfc31a175"],["/tags/paddle/index.html","c24ec9cc078b15f0238efe3ebc8f669c"],["/tags/paddle/page/2/index.html","020d5146d81dc854d6972474d763e50c"],["/tags/人工智能/index.html","e4320f5022519bb684f98dc87b0202e4"],["/tags/人工智能/page/2/index.html","6566b32ea61ae859b531a0e4e66536bc"],["/tags/博客备份与恢复/index.html","acb7bb3c67d2429c9f7bdd9c5dff50b6"],["/tags/微信小程序/index.html","09f66d2bf7ba50db72bd138c9f53a47b"],["/tags/操作系统/index.html","ebf7bb02a2b16fa734f1961281de857c"],["/tags/数学建模/index.html","d81b376dc9e8a215369facbaa8a21608"],["/tags/数据可视化Echarts/index.html","e2d16e35dbb6c5c56abc633e0cc11a8c"],["/tags/文心一言/index.html","6364ac225f7c8e79a86cadc2dd8b9a59"],["/tags/新必应/index.html","c153892e7d2efca2542249a88d60827d"],["/tags/深度学习/index.html","0fcc6fb1ea085cf9e6021c3f0fc1ca3a"],["/tags/深度学习/page/2/index.html","a4046126e0f499aa713bca3453a47b9e"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","d0e9eafd6275a345bc76c231db9097e8"],["/tags/深度学习基础-基础模型实战/index.html","6c4d1ca073e778908454eee1ee72f967"],["/tags/深度学习基础-模型选择与调优策略/index.html","7b211f7a6dc97bcae258a9f222744e92"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","d281c945dc689c3527a401c5dbba7428"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","4f7037c00672a7c357c313a99aa66056"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","8a5728af5876cc8d74a7b8500f7c733c"],["/tags/网站部署/index.html","83075ab11e1b485cbf062e7bc4f1b264"],["/tags/计算机网络/index.html","850807da279dfcb3557595bbc56e489a"],["/tags/论文/index.html","a3e0c61819ff0ec13e8aba7625a1459c"],["/tags/💭💡🎈/index.html","2252f9138d4094712fa913d85d24b862"],["/web_site/index.html","12ba939df1e74f2c4608d661a7470f9e"],["/唠嗑/index.html","e764735cf82278790f94900bd9d0cc51"],["/装修日志/index.html","8a60795c95678c40f162e3a98eff0f29"]];
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
