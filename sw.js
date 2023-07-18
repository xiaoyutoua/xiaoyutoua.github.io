/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","2d1f8bbc596f6e24efa9e0e273ad9587"],["/2022/12/17/nvm/index.html","2301d9a4aa9876f4218035559ab2d123"],["/2022/12/17/博客搭建学习笔记/index.html","2209da032cf35a781181e018f94ae77d"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","90af5b8729d23609b440b58e4629e5eb"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","ca13e8b7b87d944ccc9d9b52de973024"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","1318373d8806991323446d59e9980ab2"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","641697fc806d2410d2166c6eacb14080"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","44e99c4f123652366670f58112cfc24e"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","3133737bb481442c2166298a68e1565c"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","e5529ddd11cfa174b28ae3fa22e168a9"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","59192a5bfcd3c84a325930e36ae23a54"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","b8c06b4a6ac324422de71f9413c5bd86"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","56ace49842bba1c37aead92843d16366"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","ab3255d4766ed6b56be9aef1eb30407e"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","90eb1e40141f353d00d3f5a981edc150"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","98434b76d3dd1611fcb314b8f9bfc699"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","792c5eb043ed67088727c0d3d5c5a121"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","d4053403a93a7dd26d1075cba975a6cb"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","d2558165a388a0f0b75b64f357f3e998"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","78b61fd66c776c90a572a357463b7de6"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","d4f8fd5e55f609bebe73995c2f0a18cf"],["/2023/01/06/Hexo博客备份与恢复/index.html","a4ccf8b02addeb6c4ec138cfabced4da"],["/2023/01/07/停车场管理模拟系统/index.html","89ae98d3c0df0e99b31cd98e071ee27b"],["/2023/01/20/Butterfly外挂标签/index.html","21b5ee629f09a87d3be3de82ddf45af3"],["/2023/01/20/erro_spawn_failed/index.html","0204c2d133638aefd689327245e251d5"],["/2023/01/24/Echarts社区地址/index.html","f3a2b183408d6ea8a61d52c36ede374a"],["/2023/02/02/论文翻译/index.html","8a0c83717b28f20064f70a1d80d6eef4"],["/2023/02/06/WampServer图标黄色/index.html","a57a8c47b3dbd9df66b1f4c6230b976e"],["/2023/02/28/OpenAI-new必应/index.html","19b5bc4391b283d312d5904f92e2f784"],["/2023/02/28/PHP页面间传值的几种方法/index.html","0ce36fa0de8521fed6286f47d190a377"],["/2023/03/02/node端口占用/index.html","35d4817f527a8f88c7e79e2c9dbdf669"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","6a2b4236ebddc58b1b6fc3bd83f10ef7"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","56bf04d33b131c180b4efc5a42d53d5e"],["/2023/03/08/Servlet技术/index.html","dd0c1eafcb08bd835d6a72ea0b4c2624"],["/2023/03/08/模板字符串/index.html","8003ecc2ed0089bd0abee004f7b41bcc"],["/2023/03/14/Vercel部署网站/index.html","ad4dc83beadfcee8b12f20c4e0897cbf"],["/2023/03/21/github-copilot使用/index.html","5745593999e49e32326710e0915480b1"],["/2023/03/23/从零开始的计网学习——概述/index.html","3c8771d4f48e9c2b0ad056bdb9c480d3"],["/2023/03/23/从零开始的计网学习——物理层/index.html","679b3f4b2d688ce7e70eb4ef750acca4"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","0d6f7565dde48f415e2c19b986c2e7e0"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","42eee6c4afc0b2704e89e47cef2ce3c4"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","10435566020160fa653dae2570aabacf"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","c186a9098090cbce972db74b51d4776f"],["/2023/03/30/微信云开发中的增删查改操作/index.html","4ea4a0eca111724d6014bddc4833736b"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","e18b40873ed75cece6c25d7d57b29cab"],["/2023/04/04/文心一言上手体验/index.html","e185a7a2c6e776cf5a7b1bf401872b16"],["/2023/04/05/操作系统基本概念练习题/index.html","6e673589def1d0d9828234399e2ad808"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","975d104d9ad99249201f47a7e01e1438"],["/2023/04/12/数学建模图像处理/index.html","91a2f7fd9d62318e7ae34183a11de957"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","ec4028a56e2e61593d6d3a6f710fd26f"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","6fb69d70aecb9cf69ae99c803e7e7ee0"],["/2023/05/08/python内置函数使用方法/index.html","65f926e534c5ef8bef31ccfa173a9283"],["/2023/05/09/python基本输出方法总结/index.html","bc6d92c628e5785e8cb92d898b5039db"],["/2023/05/15/微信小程序入门到入土/index.html","745e64046346603ffe2e35a8739f9aff"],["/2023/05/16/c-一些不会的知识/index.html","9d343e5ba2f335cf4cffd6fdd2c576b6"],["/2023/05/16/c-提高编程/index.html","4b04b9cea203c2859180068f00634b7f"],["/2023/05/16/一文弄懂Python装饰器/index.html","2e6aa6390b1dbf952c74391a24a45050"],["/2023/05/29/Python四大法宝/index.html","54d1215d9f2e13ba4bfd26f24a74fe89"],["/2023/05/29/如何更快熟练Python字符串？/index.html","afac3c066011b2de10cc89dbfcd2791b"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","0230cd07a441421980ace71a25f81966"],["/2023/06/07/灵神基础算法精讲（一）/index.html","e5e85e79140e5761ba7335f270a8e5ce"],["/2023/07/17/灵神基础算法精讲（二）/index.html","6ee73f077ffeed9d64c6257b89fda5e7"],["/404.html","23d0f6270a5bb7c55944df62a8e87f00"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","67f292e9faa2f01bfd040f931d969d7f"],["/archives/2022/12/index.html","50c3ef257391704495b2ff76a31b0c5d"],["/archives/2022/12/page/2/index.html","7a1c9553de88e583496b77d55706ffcf"],["/archives/2022/index.html","af29d8b279cc8106d48a3787b7b349d0"],["/archives/2022/page/2/index.html","0768f5196a3f3c3c84fae7cc78ad6217"],["/archives/2023/01/index.html","275f3bc5cbe2dd210f9af110f3fb42d9"],["/archives/2023/01/page/2/index.html","1a15c52b531d366496ec691e4c7b04e2"],["/archives/2023/02/index.html","6fc62781cf341c7e7eac421aa0d51fdd"],["/archives/2023/03/index.html","a5a9d9babcdcc06036f3c43fdb41872d"],["/archives/2023/03/page/2/index.html","c7b0380bce1c9309656a973b393e561c"],["/archives/2023/04/index.html","af873a0c5752c26879e7620e3d16ecbe"],["/archives/2023/05/index.html","79c393d7dc931fda1ed6e147004fc88f"],["/archives/2023/06/index.html","6ca508f0f7e3c31658d03ece2bf07584"],["/archives/2023/07/index.html","d62ee1ce91c997562ef3fae607f08d39"],["/archives/2023/index.html","67f10a1036d44aca86a51f96ff265c5d"],["/archives/2023/page/2/index.html","e620058f4666ad96d91869040d2254ea"],["/archives/2023/page/3/index.html","115093c692795825a05463bf6a3c67eb"],["/archives/2023/page/4/index.html","f1c54cc9351d09ca49b13843d77b0696"],["/archives/2023/page/5/index.html","733ac10be4dd9f907ff6b52f9f8ccebc"],["/archives/2023/page/6/index.html","9aeb8206a0efa5854cc7062001335f61"],["/archives/index.html","a6b5e5cc9a176f97fd3a31371b4317f2"],["/archives/page/2/index.html","68ca6de8a674e5ea4bc8af9dd195a2dc"],["/archives/page/3/index.html","de7b7d69f5abd0d55dbea10c64f6a93e"],["/archives/page/4/index.html","8341d596a69d9397a0c7d6da27b49d23"],["/archives/page/5/index.html","6e85ed95fb77f5d96116a001b03b2286"],["/archives/page/6/index.html","29b2b5c2b5f7d1e505951ca838053977"],["/archives/page/7/index.html","87713aec584f7c5b1ce5ee59c0286d87"],["/categories/bug记录/index.html","6563a4af467dd0de56c069626c7cca51"],["/categories/index.html","97ca56983d28567a87f5d19d1f2c80a2"],["/categories/学习/index.html","7f54cd35d0cee59f3ee85478e4310cde"],["/categories/学习/page/2/index.html","5fead31e1789d6bdd71fd0d395b4da6e"],["/categories/学习/page/3/index.html","a9cfc31702ea96fd6fb6c610b90f8148"],["/categories/学习/page/4/index.html","4d64253742eb5e98eb80e2ea2f738ace"],["/categories/教程/index.html","1aa58a3cb4e98f4a08f8311afcde191d"],["/categories/教程/page/2/index.html","760c75d05079fabe46d5b7569de50cb6"],["/categories/日常/index.html","97ad25790c62bc80fc959bb253a42f74"],["/categories/项目/index.html","5d529d5758452af152836c2a857322fe"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","b4b328fc4b763272ddbfef6de63ad3b3"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","857b1142c2bbf7d4d328e93861db6c1b"],["/love/index.html","d489477034ebe02b79d173b1aad9eb9d"],["/my_project/index.html","2f99fdbde4a58b8f94fa51f462fccb2d"],["/page/2/index.html","ff6041d4dd7468161389dbc78d06ad20"],["/page/3/index.html","04967d4d212f0788714447887ee272c2"],["/page/4/index.html","014699a197484b8d6426d738c3d2ade5"],["/page/5/index.html","a429507fbf4afc38db169b88aa37fe2b"],["/page/6/index.html","09e516af72fa3afa8865e713cd9947d3"],["/sw-register.js","40284689dc8be56e38da3d0b21619d3b"],["/tags/C-C/index.html","1e717841325fec144a18cec9c9bc03d2"],["/tags/JAVAWEB/index.html","f08911993f1e532a8c9c15765c20f7d0"],["/tags/JavaScript/index.html","795762e68682af5cc8c88cddb426ddb7"],["/tags/OpenAI/index.html","b3d5af3a8d1bc8a38675d262e97412c1"],["/tags/PHP/index.html","cc21ff043584277e0d0977c210db177d"],["/tags/Python/index.html","0bc178127a483f66752e14c0c1dbbe09"],["/tags/Servlet/index.html","e3e4ea4302fb8fe2853bdbde896a4e93"],["/tags/Tomcat/index.html","19777dcffa1e96e3d4bb89ccfe2ce62f"],["/tags/Vercel/index.html","0956844ea8241cff8422e781a3da8e5d"],["/tags/WampServer/index.html","df96cce166003d5f0acd37b83e547440"],["/tags/butterfly/index.html","3684aa02d12c730a8c66fa6cda8e96f6"],["/tags/copilot/index.html","1844b49b500b22919ae150821e592060"],["/tags/css/index.html","d909ebb07d3463ad3d645964be84310a"],["/tags/hexo/index.html","ab3e3b15775199dd6469db1959b0d87f"],["/tags/index.html","1ba812dd6169eb14a2424a750dee4b70"],["/tags/node-js/index.html","94339827416f277bf5d9e9e3384ea53a"],["/tags/nvm/index.html","72d9a884b90b20175e7bcb12485eb9f4"],["/tags/paddle/index.html","ee5efdc0d3019cf82c6c6492bd5898c7"],["/tags/paddle/page/2/index.html","91701891fcabf6530c092fade3604698"],["/tags/人工智能/index.html","bf22a15a455b3a7a390618ea561d37ee"],["/tags/人工智能/page/2/index.html","93506e6e05a5cae5478c73a47dba62eb"],["/tags/博客备份与恢复/index.html","09727508c49a51523d370a71d2b646c1"],["/tags/微信小程序/index.html","8474f7e3f7042035e01a4edffa0cb35f"],["/tags/操作系统/index.html","d22f6863e76ca5162cd588c2d768ce3c"],["/tags/数学建模/index.html","7f82670648bfed805e12a8d19d6fe814"],["/tags/数据可视化Echarts/index.html","7195c0c7ccaa82a31a22213bf972b19a"],["/tags/文心一言/index.html","75877c28d4515e53facc9c05989ef558"],["/tags/新必应/index.html","18f184a6048d3c73c4f781e57fe58608"],["/tags/深度学习/index.html","c07cfe3b2e45b79a2578dae62bc91427"],["/tags/深度学习/page/2/index.html","3e0071f2c018357bdd6e704e8dbf6df3"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","6484b3054cb2ea04fcabf06795e2f97d"],["/tags/深度学习基础-基础模型实战/index.html","14ae4fc401d642ea48c9c88bdbb3885f"],["/tags/深度学习基础-模型选择与调优策略/index.html","5fb70b72a4768b5526cf3746b79ca10f"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","8ec3aaaeca1c71a0934ff50ad7137d70"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","0090f94e7d3665b48cc9f08f560fb3be"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","f6db0a2484c5793405877961191b34bb"],["/tags/网站部署/index.html","35e0f499fd307b4e4a4715a68fb18cb6"],["/tags/计算机网络/index.html","b8fb1b5bb7fc2ce8b83245e974a5dd24"],["/tags/论文/index.html","a58686ed4434b2cfcc61b4446d0180e2"],["/tags/💭💡🎈/index.html","17ded828595284ca47907dd18eafddb9"],["/web_site/index.html","7287149014f0dabd37325cd7dd3ca8bc"],["/唠嗑/index.html","42bcdec789ca9bc8be1e22f3cb9f77ce"],["/装修日志/index.html","afba8f1bf579fa756fe25f6782f5a168"]];
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
