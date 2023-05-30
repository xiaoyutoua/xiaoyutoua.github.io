/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","e49b0fe2fd7dfad7fc55480a00bcc74a"],["/2022/12/17/nvm/index.html","efee0c96b12ea1e8b21d60faff8c9ab5"],["/2022/12/17/博客搭建学习笔记/index.html","9b9d7d3cf55db22bb7ec199d1d0f7eab"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","2c43b2aaa9c66f8e492276c902645d95"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","ed6daba3903afa7e5f7b137c5f66a3bf"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","d7973824dbb2715914f8281e2a33eddf"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","75d2d41062e14e7891ce29ae587042a9"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","f1dc5cac4cab192c630f063d14766c40"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","521cab48dc75b9c9e6c3dda92f3ef848"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","0103c82fe1aad33b4758ed2f93913f09"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","3573b1dc0e8c3df5ad6d30c585f35e29"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","7e7ce9c4421f84371727c2c25fc36822"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","bb848897728bfba8bcf6e112aebd2c4e"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","29a6089ab2bafb0c322e1022c136b5e7"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","178127fb71a9338c8459087741ee4a5e"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","ef717a809e2ac1e942a6accdf896d590"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","0e6a20590244ba74fc730d508d264163"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","0b1c8098882858a2ca69a3b7ebe4d91b"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","b712ae20906b1851c9622475de5f2f00"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","5fc9606584fcc7dc5a87c71ff9eef9cd"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","eb07b5945761a3de76910a5febfaa401"],["/2023/01/06/Hexo博客备份与恢复/index.html","e479f3212b9c012cadcde29134724bf3"],["/2023/01/07/停车场管理模拟系统/index.html","a0bfc996f547995f1eeb004c12f2be07"],["/2023/01/20/Butterfly外挂标签/index.html","24b0773104728afaf8e3369ce769b1ff"],["/2023/01/20/erro_spawn_failed/index.html","38c0382d66956432e3c67792354f4791"],["/2023/01/24/Echarts社区地址/index.html","bd698066013748615efed8ce621649dc"],["/2023/02/02/论文翻译/index.html","a6badb41cd9f172d38f884227c4b16d3"],["/2023/02/06/WampServer图标黄色/index.html","6ed90ebc73c0948fa4984611cec331ee"],["/2023/02/28/OpenAI-new必应/index.html","2e5f3df4a31434854f14bfeb90b69b2c"],["/2023/02/28/PHP页面间传值的几种方法/index.html","1632fb476106cb9cd3404fb145bd017d"],["/2023/03/02/node端口占用/index.html","1783a3840771442e23027eaf8acfd3ce"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","731916aef59080ba6e3f2902d5e79f81"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","b9253412cf179e1541f18234f32a9200"],["/2023/03/08/Servlet技术/index.html","3b2cc0fdf5875e3d415fe2354d2a337f"],["/2023/03/08/模板字符串/index.html","a4fb0bfca5f219d38b50ebf540ee8273"],["/2023/03/14/Vercel部署网站/index.html","f801ba4f267685f70568bad2d8e4298b"],["/2023/03/21/github-copilot使用/index.html","23ee5889073248f1d45a7acf2504b2c7"],["/2023/03/23/从零开始的计网学习——概述/index.html","9c3ab1cd580e5cb45a1db8b5691d46f4"],["/2023/03/23/从零开始的计网学习——物理层/index.html","d0815abf143a58678060eb3521acb2eb"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","b6b56ff7426ecbcab0a7da99cd573419"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","eacb7f03015eb0f711f9808d49ab74a0"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","42e229b50acc9b3d798838641ea449c7"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","fbb41d9697087ecd3abd39116fb28dfb"],["/2023/03/30/微信云开发中的增删查改操作/index.html","97361fe82820dc4dc990e6aabba43c3e"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","644babede9eeee41c9544f7f6a46e04b"],["/2023/04/04/文心一言上手体验/index.html","5f5e97ef2f875b17bb1e4a8769282b9e"],["/2023/04/05/操作系统基本概念练习题/index.html","aa064c927925f78beb0ba67fb2947c03"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","a39009c2ba67953f41dd70432acc0698"],["/2023/04/12/数学建模图像处理/index.html","4792ec3fcb3f3850fd8afe8eafbac953"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","cab2587a509e42f96a23c9ae36614001"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","328e65f11cdb28e58e7ab0367651af60"],["/2023/05/08/python内置函数使用方法/index.html","ca578c75ae3d10e24e83f6663552e4e7"],["/2023/05/09/python基本输出方法总结/index.html","184029d1f1e5844989cd5380de3654f8"],["/2023/05/15/微信小程序入门到入土/index.html","d91d67f6a70e084c95da2a7bd0332cf0"],["/2023/05/16/c-一些不会的知识/index.html","102fbc0caee6c3d40d76162f97805b3b"],["/2023/05/16/c-提高编程/index.html","bbe28b4b78525606f5fbe24d12f3c209"],["/2023/05/16/一文弄懂Python装饰器/index.html","170a7d47e645fc9ee9952aefb2980638"],["/2023/05/29/Python四大法宝/index.html","7679e08068819c7ea6926068e292bcb8"],["/2023/05/29/如何更快熟练Python字符串？/index.html","a7536e6072e6c4e1984f54550dab7b2a"],["/2023/05/30/基于时间片轮转的进程管理系统的设计与实现/index.html","eddc11f639e01a707b82fb40ec04db8e"],["/404.html","6856a7891fd5bee92a68b1436b874a7d"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","67823dcab5cd7fd771f0f896df199e1a"],["/archives/2022/12/index.html","f83815e04ff3c3e18d3ec57df479946a"],["/archives/2022/12/page/2/index.html","c47e1b3bb37f8d2361393eaa3085e2d4"],["/archives/2022/index.html","0a9fc4561eb85e85fa8a5f4573ac3214"],["/archives/2022/page/2/index.html","65c5a70372db542e3519bf3d5ac886b4"],["/archives/2023/01/index.html","3a944c289aba5d0cefb1c2d97490fc40"],["/archives/2023/01/page/2/index.html","0396c647ee15eb987941604f72fcf448"],["/archives/2023/02/index.html","b0564789770f1adb0b992f1d3735225d"],["/archives/2023/03/index.html","e56ac1574c9e038d0f18ccebf42fddd4"],["/archives/2023/03/page/2/index.html","a23e06f3ff78ee9beec4d7bfd08a10b6"],["/archives/2023/04/index.html","8ea9cb1987de00ff3a617706cd310241"],["/archives/2023/05/index.html","378f88961cb6ad6515cde86503b65e8d"],["/archives/2023/index.html","24f2832518750a4cb8f7977dbde46810"],["/archives/2023/page/2/index.html","03b23287287a297b5f445cfabd07a0e4"],["/archives/2023/page/3/index.html","0e9bda275d1bb8c6d4cf5eaaac1af78b"],["/archives/2023/page/4/index.html","f48f2d7817d137ed0bb6cf77ce405b85"],["/archives/2023/page/5/index.html","f7790f61f76f9f273be77ef8d8da9614"],["/archives/index.html","225f2c19b1cf615cfef6f28889095769"],["/archives/page/2/index.html","5ab4fe4124d7ebb8f609b343bd72be06"],["/archives/page/3/index.html","7b403238e633bc1ea1d1475f1bb66ed7"],["/archives/page/4/index.html","3fda3f0f976618d97df47b46b951a575"],["/archives/page/5/index.html","51e6f5b3a26fb05638f3dc83ce9cc97d"],["/archives/page/6/index.html","6e7d4025a9b8e6850affd0f74eb7d233"],["/categories/bug记录/index.html","d70da73282989d92555a11a2ee487cee"],["/categories/index.html","81f9c3a9c7734c963eadc7d992c008a7"],["/categories/学习/index.html","6696c6c13a71e94b241d0f25f11b0d4b"],["/categories/学习/page/2/index.html","d077ecffaf1b8d7115c185d64f3d04c0"],["/categories/学习/page/3/index.html","166485893aa9c0985ef4467058e255a6"],["/categories/学习/page/4/index.html","ceef256278fb1a0b83fac1ed8f016b34"],["/categories/教程/index.html","9151f08b93ef0a0e08462a1eacda58cc"],["/categories/教程/page/2/index.html","b595a41ba1956bf96956fe3ca9ac1e89"],["/categories/日常/index.html","f70c51b106415e3e292346f02959c2a3"],["/categories/项目/index.html","c5f36fa45ef7ee0ec9a1cb39e906070c"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","2f80e4ca388aad6e942b6b6f1fb48297"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","3e14ed10539169e54cd12d0f4b6a6f6c"],["/love/index.html","f44cad80536c789e5e86ca39a27e8978"],["/my_project/index.html","85921da8bfddcb71b93a6ca56348e31a"],["/page/2/index.html","47682613629d9f7ba1f5359b1c65961c"],["/page/3/index.html","92e004d479022b4f5e899d4459c5babf"],["/page/4/index.html","47a0b30ec9dfb3dc56dea1cd3be5e1cf"],["/page/5/index.html","edaa62a5020dfd7ea1ead62a48fadf70"],["/sw-register.js","4836a058f824557b4b31e904758eb456"],["/tags/C-C/index.html","733c18f396c3285ad6764d8c20d21b5b"],["/tags/JAVAWEB/index.html","3df54b77cc7856d74eaccb0c1f04dfd9"],["/tags/JavaScript/index.html","c68d8b40f504b0e3961894e17f2bd3ac"],["/tags/OpenAI/index.html","91eb52cea94fa0c755e3d400c330724c"],["/tags/PHP/index.html","bb2842261fae121780cdbcd0ead19249"],["/tags/Python/index.html","0a366290155ee1eeecc1139fdc4200d6"],["/tags/Servlet/index.html","78f7a2dd3222eb63b032b87267222e06"],["/tags/Tomcat/index.html","60585106a19dde141288bb153b8ae341"],["/tags/Vercel/index.html","fb0517f199dc8d52afb45612727f9105"],["/tags/WampServer/index.html","82f23c5b41bd68478f448df37daaf121"],["/tags/butterfly/index.html","62c88b867a95b27cea43ee3f2da48562"],["/tags/copilot/index.html","da2bc6b38cfdcbbd4021f77644c8ddd3"],["/tags/css/index.html","117a64e05a54a0251e56ff4980c4300e"],["/tags/hexo/index.html","4fe100a6ef8fc788516945f2dba54bb3"],["/tags/index.html","824ed81462d2dfbbddff4125b5c09b9c"],["/tags/node-js/index.html","1eb2119f80a220c9d595f077367a9569"],["/tags/nvm/index.html","207091e7c7d2b21c6ecd778d7651509a"],["/tags/paddle/index.html","0c453608dd7e9c39ea2786b98653a71c"],["/tags/paddle/page/2/index.html","23b5ce067fd53181fc52bc72dfbb2697"],["/tags/人工智能/index.html","c85485c0c9ad071e142f9403155e40da"],["/tags/人工智能/page/2/index.html","e90a4deda1e276278944b39c808b0ebf"],["/tags/博客备份与恢复/index.html","a4f0030a37e57e48f90cebb9e9ac9e49"],["/tags/微信小程序/index.html","c62e6e40f72927fbeab1b091bf20ccb3"],["/tags/操作系统/index.html","15281204eb3caf61c03f1626e8ec3d09"],["/tags/数学建模/index.html","eb27bc2217349469b3fa3837e139163e"],["/tags/数据可视化Echarts/index.html","f67a8e9260b919dd1520f946e4d412cc"],["/tags/文心一言/index.html","64ae584ff56d2d73a2ab0d0cb24887fe"],["/tags/新必应/index.html","0f9df6603082a707911df9c20283550a"],["/tags/深度学习/index.html","9553ce83a8cf7565d13cc018443a09de"],["/tags/深度学习/page/2/index.html","f18b44ea0c50b20db462bf85aaf61e8e"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","73a94f442d926550760de0deff5d455a"],["/tags/深度学习基础-基础模型实战/index.html","e72aa7330815afb511a13e63150a8762"],["/tags/深度学习基础-模型选择与调优策略/index.html","915f04313231341023d9594606837561"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","2ebb3cc29775d166bedb3b150d6d5160"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","ebf3f1a6af85519ca976afbecd08689b"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","0b739fd7afa7b1122b3a36eabeb5fc10"],["/tags/网站部署/index.html","fb54d1484150a46395753258fcf515f2"],["/tags/计算机网络/index.html","62cde77cb6d91ba9a57208dd75abe17a"],["/tags/论文/index.html","cd10fb178c878fd3e1093eb26d0b2dad"],["/web_site/index.html","5a3e7839263d848796954c67f6043d5f"],["/唠嗑/index.html","5a7fc8b146ceb47b10dc93e1c3b8cb7d"],["/装修日志/index.html","3920fcdb51374a10c73aab25b0d1c17e"]];
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
