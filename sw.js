/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","1b9107819dbad7bf0aa3535b9bbd0f2b"],["/2022/12/17/nvm/index.html","cdb1572575bb510b1b8e85bfbe0fc1ef"],["/2022/12/17/博客搭建学习笔记/index.html","34a48eefbcfadb34a2dfa1585091259b"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","07c322cc60bd928de181abede01f6573"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","d4d3c1a54803d93c3fffa7dcb3aab79e"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","1291929f5009ffe3b190df4b6d692034"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","d4e1a8a3dc3b25dffcd4ab269f220f25"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","e432f90f63086d629180c7e27f150a3e"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","9779c99738a318c5124d783947cd1cd8"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","f2e5af484ce1da5974aacd0dc619e29b"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","7278076a2397771567661a63c32fc77f"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","e5550e4a0c898d5054288b0810146962"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","36d60384a2b47b74da745328900148d9"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","5a85a041f3dc7fc10c51c899aa3ffa81"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","16af835fe558fbebdf4e746d1df4bd9b"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","c581f25a36886f135398588d2c1492b1"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","f804fdb430e061cc41f2588d5f4c8d6b"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","dc3412052f52d96a0121ad0455ba9558"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","30a90e75d8ae1865681cd1004606dc12"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","69ef288a3735037aab6a0bf627e1334d"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","49ee885aa5a723983ba837f4243de657"],["/2023/01/06/Hexo博客备份与恢复/index.html","f540359ca0e03c185b977c2408096dc5"],["/2023/01/07/停车场管理模拟系统/index.html","33007285924acdfa4e85fd89cd4b8061"],["/2023/01/20/Butterfly外挂标签/index.html","854f103ca571f6d50290ad6af30d62ad"],["/2023/01/20/erro_spawn_failed/index.html","d741d730a4c0e061230a748ea14cee87"],["/2023/01/24/Echarts社区地址/index.html","5014e7325088bda8538fe106713c3f5d"],["/2023/02/02/论文翻译/index.html","925705f45bfefa610ff7e8d3ad376fa2"],["/2023/02/06/WampServer图标黄色/index.html","019f7c6ee4fa316f269b46a6f33ca649"],["/2023/02/28/OpenAI-new必应/index.html","7401db0b03978766ad9d51aa9d564ee5"],["/2023/02/28/PHP页面间传值的几种方法/index.html","1c26cbf06819ebc56bbd336e2f5cb13d"],["/2023/03/02/node端口占用/index.html","9aa9565f60d6743631f3b8fe6b677a61"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","625863dbc1c2059671bbf88177ba2e7d"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","088c95f42afd61d5e1c03597b420442b"],["/2023/03/08/Servlet技术/index.html","b8e2b93eee361621f5a7f8998a7aeced"],["/2023/03/08/模板字符串/index.html","1932c0a7198bc4b5279653e85651f035"],["/2023/03/14/Vercel部署网站/index.html","139c965d22fdb116d5486193e2b98ba1"],["/2023/03/21/github-copilot使用/index.html","c7907b1a9ffe2517d5dd6527dd9cdad9"],["/2023/03/23/从零开始的计网学习——概述/index.html","27df3743fa4a0725317129854a21599c"],["/2023/03/23/从零开始的计网学习——物理层/index.html","6afa4a97b563ed0f540f97095dbe6c2a"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","17521b4f3446457d6177443319e340cc"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","df8d78db32f2dd3e4024ced746966098"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","bb514b65507c2fffd0c00bc2be553ac8"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","c8a87ef080bdba27e9820d52f3c87590"],["/2023/03/30/微信云开发中的增删查改操作/index.html","7d36ba5038c8ddf107358bb41b6dbe24"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","fcd4b45f4763fc4f566f00e977dfafe1"],["/2023/04/04/文心一言上手体验/index.html","7f7105544d7525de187584951fcbd890"],["/2023/04/05/操作系统基本概念练习题/index.html","878c3964b654ad8741e4cb49ff577300"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","4ac4e0ae3061da7c0d724f46de59cde6"],["/2023/04/12/数学建模图像处理/index.html","ebb903bf641179157a88ac83878b8369"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","43554499f35e5bb722a199f9bf288458"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","a7b5fe93cb9d939d6fc7420415859458"],["/2023/05/08/python内置函数使用方法/index.html","4267d318a2df9d6baa22de284763ba4a"],["/2023/05/09/python基本输出方法总结/index.html","f6064b51bf983a2a49ab5e264a9cb0ac"],["/2023/05/15/微信小程序入门到入土/index.html","55d25069e4628acd7d4b9032419e5c56"],["/2023/05/16/c-一些不会的知识/index.html","757bebcec19d5a9738f2685ea1670257"],["/2023/05/16/c-提高编程/index.html","4b5ef091edea93a2a3284ab9b33c6970"],["/2023/05/16/一文弄懂Python装饰器/index.html","415af31f94ab55838dc727c17bd70b7e"],["/2023/05/29/Python四大法宝/index.html","866b1e623fdef8feedbd98c3df1ad1d0"],["/2023/05/29/如何更快熟练Python字符串？/index.html","6ea0352f7e53f0ab6c2f4951805bce3f"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","2360aa23023b360481d4753a29629c0c"],["/2023/06/07/如何学习动态规划？？？/index.html","0fd33d53eb564dbe090e456db01b9d3b"],["/404.html","2ae8e6c64cf1e4c9b4bbe23053b8bcc2"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","132f69e5d42103c38ea7662f3bfaf6d4"],["/archives/2022/12/index.html","85e39801f7841c61a65432a5eb858b2b"],["/archives/2022/12/page/2/index.html","f8141a999fb520cfc9025e180f0aff5c"],["/archives/2022/index.html","e2495888eccbac0ae00dc15a0d3e2775"],["/archives/2022/page/2/index.html","a69fe4048f2b907d8a2bd83255db210b"],["/archives/2023/01/index.html","b19c38bde4b10376f1deed466b2c892d"],["/archives/2023/01/page/2/index.html","402d597251a36628bf4bf7e891d2b87e"],["/archives/2023/02/index.html","68b9c04be1cfd7987c367ef756086751"],["/archives/2023/03/index.html","d07355d09fcc796ca1baecb9abb3ea2a"],["/archives/2023/03/page/2/index.html","0a788c43a5af6aaa5404132e69f2cdb9"],["/archives/2023/04/index.html","cd974468fa0290477b65ee86e881dfe0"],["/archives/2023/05/index.html","8c2051d377abeaf6487b3f950b0cddb4"],["/archives/2023/06/index.html","4cac189d94045d8f958dd9238bdaf7bc"],["/archives/2023/index.html","ed14a637e8f8516bd8496736fc28664e"],["/archives/2023/page/2/index.html","8190f70bf08ebe18de5cea5c1384b8fe"],["/archives/2023/page/3/index.html","657e78e988c0cce44d2d6e13e47752e4"],["/archives/2023/page/4/index.html","d836bc4e46f93006ab545d87926656ab"],["/archives/2023/page/5/index.html","f160611f94f1e60cdd0e8e68e8a9d148"],["/archives/index.html","a8d306ee68fa6dac94e3960897b58ded"],["/archives/page/2/index.html","be74ebdba936b0131ee59b7d6c4817a5"],["/archives/page/3/index.html","70b2ddcbf1660d0866ec4797f1231db2"],["/archives/page/4/index.html","db33c832017220862ffdcd28b71d73ca"],["/archives/page/5/index.html","c53854f34ff65f27e141046f8c84e8d9"],["/archives/page/6/index.html","9e71ebd3d4a96b8d90dde4a80e7a1e7e"],["/archives/page/7/index.html","27a3d521e8835c8468a4e46ba4d12de3"],["/categories/bug记录/index.html","4cb963b0c7f083b31237a52939871f13"],["/categories/index.html","23bbca425d1c6946f2de083537a04476"],["/categories/学习/index.html","a5a87e300bb9f50c02c4cb6cb491dbb8"],["/categories/学习/page/2/index.html","7c38df01693474182bf89a99233b6cff"],["/categories/学习/page/3/index.html","ef8be8c60bb06c3d111fbef3875cb002"],["/categories/学习/page/4/index.html","1ab4ba5847c182465c1235dc608eea23"],["/categories/教程/index.html","10fa6698607a23e64490333d92304fc3"],["/categories/教程/page/2/index.html","8fd1bc900858e3ea067373df1f0f986f"],["/categories/日常/index.html","d40169d20acd14dc0c765b429c26ceb2"],["/categories/项目/index.html","e7d7b196d80b9ae39768991460ee3f3d"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","fff5c51d459209542f4989d791ef831f"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","d502f1ef57993174952a64c160535533"],["/love/index.html","3cc575525ef2f4e91b7eded6500a8bdd"],["/my_project/index.html","8a265a774996ed407dc213f9d8a10357"],["/page/2/index.html","664f2e7c1bb0b9eea2f61707278bc4e3"],["/page/3/index.html","1abc53d40895518fa801829fa383c73f"],["/page/4/index.html","facd2c0219cc7cc9e90ac9c7aad5b0e8"],["/page/5/index.html","72c13fdd74752e71d52b52372ffee0e5"],["/page/6/index.html","520ab689ca33c89974475b35f11f3227"],["/sw-register.js","f083b9efcac8474fd3e3daeb49981fe6"],["/tags/C-C/index.html","42598bbdcc8cf6266718ca5f6dc30018"],["/tags/JAVAWEB/index.html","e19a359a87c5d267082c5d805b05697b"],["/tags/JavaScript/index.html","60171fa9b582ad05248eb44ec550f722"],["/tags/OpenAI/index.html","d7c959da29b9c0b5eabb7161a285805b"],["/tags/PHP/index.html","a8c467c6ab2147451c997c153963be9f"],["/tags/Python/index.html","b14b4ff28f2086abab2b94845d347505"],["/tags/Servlet/index.html","1b7fdf8f8464fc5badb0b4771fc3dd8d"],["/tags/Tomcat/index.html","26adb33934c7170a894dbf8f4d1878e0"],["/tags/Vercel/index.html","ca14ac3ad69d63128a750b9bbf725fe1"],["/tags/WampServer/index.html","b84ebc5e0dc2fd1cb79f5dec4295d35a"],["/tags/butterfly/index.html","733e61e5f387b93fd3f3bd86e5200f79"],["/tags/copilot/index.html","07da3233fc6771222f8b4b5ad1f4b914"],["/tags/css/index.html","7c257f4d52ded4de9f113f913104975a"],["/tags/hexo/index.html","6ba9488371373a9d6e7f73caad6e76da"],["/tags/index.html","e617fb08449fb296d23189e707e9ac60"],["/tags/node-js/index.html","c317faa5f5f0ee3006a4036446c8c1ea"],["/tags/nvm/index.html","3f33da492ab2283a6f12d920c5721545"],["/tags/paddle/index.html","fe93058d2360023830cd45f2304c5800"],["/tags/paddle/page/2/index.html","adfe9a21d80dc22536e2ea58637331c3"],["/tags/人工智能/index.html","cc99ea01595cffc5a6337b1c755286df"],["/tags/人工智能/page/2/index.html","fd6024d5083d9cc8510b74b621105fb2"],["/tags/博客备份与恢复/index.html","7e3aa7560581709d7dd1c563c7da826e"],["/tags/微信小程序/index.html","2cd97b8884d2c931fe2b2578ea639184"],["/tags/操作系统/index.html","e211605a4da0e362642f6aa4e1c1fe60"],["/tags/数学建模/index.html","15e0bfc816375b1c051b290afda41eef"],["/tags/数据可视化Echarts/index.html","eb7c1ff168734bbaa876486d5d183f1b"],["/tags/文心一言/index.html","3f69a1627ac01b90416746eed8e16934"],["/tags/新必应/index.html","40bd90e6b61926a455f6ecb420316596"],["/tags/深度学习/index.html","e013832caf0aeeda73ff3db587f35e37"],["/tags/深度学习/page/2/index.html","8e9697af03646bd9f200c1cd12e1661e"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","fb821b4e5a5f3551d79407a5b26d8d83"],["/tags/深度学习基础-基础模型实战/index.html","dd69d803595000e49dd08db57f05556f"],["/tags/深度学习基础-模型选择与调优策略/index.html","8a163bddaf1b5ecb5326dc7fef581314"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","91363d42c25da376c41beaa1ebcd9e98"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","e47c401bf3cb4c5ab4621776823e13c1"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","f155929ee4aca37e7832ef7a2e9617d8"],["/tags/网站部署/index.html","e39541dbd3727f5bcbada062da0bca1a"],["/tags/计算机网络/index.html","faefb6f1ac53ca37995e73c8e2854204"],["/tags/论文/index.html","58cc6c444e7f8733699892a9ab427069"],["/tags/💭💡🎈/index.html","3a32d0764af94b031a6f76d50e0fef17"],["/web_site/index.html","638dccb3c307154eae10db562cd7d802"],["/唠嗑/index.html","a67e9fc3298739383e6d5ffab834ca02"],["/装修日志/index.html","d971e9711fafce8947b5d58eb38a57a5"]];
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
