/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","db15b48114897b42a5ab01ae774da99b"],["/2022/12/17/nvm/index.html","fee2162a7fb86c25139ae9186c1aaef1"],["/2022/12/17/博客搭建学习笔记/index.html","a627481ecad9453f660c1319cb5082d4"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","74b495dbab62e456a3768adc9f96841e"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","c460d8f3529e2b6e8c5854c0cebb77e9"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","828af2ca6b94034ca38b9fa1d91de798"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","979fdc22ac226c8923a7a57cd1646a76"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","56da3250d8981318327d618b59a9e449"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","5143aa467cd4caee7e480e9427b3c04c"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","d359fae8471d9d6f2d121ef452cd395d"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","a67d0309532c4cc52710a89fb0aae375"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","51ff9b85a4aab720b27b5d7d88fd6862"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","21fe12b7064e1da4cfa6c0ad9b06f689"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","9227bc5e7ce514a0fec577d43c2ba91a"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","225e299f678f4e3464f13156618f45ab"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","e21e65b970aa2f944bab8c2567601138"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","c0157595763337c9380157f8b23d77b3"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","56787b62d6091c233e6ad87b94f3cf61"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","a2a806f6c2fda2ecb7413b4f6bb78d14"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","8933a1e8b5f704f538f55d49d3bfc5e2"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","7e1824bf8e7ed89674dfddabb45f7003"],["/2023/01/06/Hexo博客备份与恢复/index.html","926db385635d6700ef0c252ad7247694"],["/2023/01/07/停车场管理模拟系统/index.html","d77988f9adaf6c2bd8d487b35f6fe9a2"],["/2023/01/20/Butterfly外挂标签/index.html","6fa022abfe8033022709655f25327b56"],["/2023/01/20/erro_spawn_failed/index.html","0f9932c9500a8adeaba9c8faecc6553d"],["/2023/01/24/Echarts社区地址/index.html","68312ba5767318c05e0c9c18aab7cf2a"],["/2023/02/02/论文翻译/index.html","8421e4776a96ea4c4fbf023ea0130229"],["/2023/02/06/WampServer图标黄色/index.html","1d9c736fd41394f034275f1e4ba09652"],["/2023/02/28/OpenAI-new必应/index.html","e072d47da5b4c055f007aa4d0d1227dd"],["/2023/02/28/PHP页面间传值的几种方法/index.html","465c81956060c3a9cb1018bfe2031faf"],["/2023/03/02/node端口占用/index.html","2c3e5dc3dc4b77d70478c9907bbefc08"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","e850ef3c6fd1697dde6dd2c9d631dbf0"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","305111be62440f987874f822ccac6a23"],["/2023/03/08/Servlet技术/index.html","236191942a427de1e5fda98d32b18ceb"],["/2023/03/08/模板字符串/index.html","da6116465c1e10aa18052671f4837513"],["/2023/03/14/Vercel部署网站/index.html","f451ed31cb34b5888af2b28759d9412f"],["/2023/03/21/github-copilot使用/index.html","4c0dd16bc575ccee8194d2932e6ad4c1"],["/2023/03/23/从零开始的计网学习——概述/index.html","aee67d76ee0158c48043caa697e5434d"],["/2023/03/23/从零开始的计网学习——物理层/index.html","d9a3ae385d1bde8122c50faa34320e85"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","5e6260efa6b3731e403db8e7bb73c98c"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","5bec8a4e93cf5e54fec599932e9c34a9"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","9112d7cd7c8699103d736f65c181ec42"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","8f707a43c7ccceab68eb181e6bb65477"],["/2023/03/30/微信云开发中的增删查改操作/index.html","4d307092efbcf6e8a11d889be3d64dae"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","0ec544305486602a412f0d43a1786e63"],["/2023/04/04/文心一言上手体验/index.html","28dea5218d016f47250c23fef41afb76"],["/2023/04/05/操作系统基本概念练习题/index.html","ce42ea957e3706b9e03190628c8cffa9"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","676ac711bab128bb5c5a6eb27f0bc024"],["/2023/04/12/数学建模图像处理/index.html","0aa280b33f7caffc8eb5ff35c4736c9b"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","7c175f2ef325931fbcf04e7b8f558c59"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","ea45aae71085a2f10d603b8c1dd12119"],["/2023/05/08/python内置函数使用方法/index.html","14f10975edc50803f187870836650a38"],["/2023/05/09/python基本输出方法总结/index.html","9474db45e93ace6cc0d3cfdd2a57888b"],["/2023/05/15/微信小程序入门到入土/index.html","eecd6cd22b9abce8a4dc588d22a560c6"],["/2023/05/16/c-一些不会的知识/index.html","10584b5ac13c0104beac388b142ba564"],["/2023/05/16/c-提高编程/index.html","6aad9345aafe2ad09d284cd4dd4b8893"],["/2023/05/16/一文弄懂Python装饰器/index.html","d39630e7155e069ee773f38315872091"],["/404.html","4a9cd93db1e89f1bf91f4e9013b94ddc"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","48d9b5666225069cb7782058c7616666"],["/archives/2022/12/index.html","e4674e2e3c48468317c462a3f2625ef5"],["/archives/2022/12/page/2/index.html","bce3754ea9991ff149d3bd354d9deb90"],["/archives/2022/index.html","55b26fd50d7ec85081bc09a6af4ae1b3"],["/archives/2022/page/2/index.html","8dc704d6e8fe0cfc1fa43eb9388286ae"],["/archives/2023/01/index.html","44dde98001d7f8e8c57abd91d09ab495"],["/archives/2023/01/page/2/index.html","fa50c2e71bb54cd1e1fe4f2fad0a6d7c"],["/archives/2023/02/index.html","8dc187fe4614806a4842a0fb49bd4e5c"],["/archives/2023/03/index.html","3b428a77f54efd18bab1bf93f0e751da"],["/archives/2023/03/page/2/index.html","83ec453e9a0d41d6615896f12ff850ac"],["/archives/2023/04/index.html","e8e94bcebfd83d194031bde71985f2f1"],["/archives/2023/05/index.html","cd42eb4edead6b011f7a955ebf4e05d8"],["/archives/2023/index.html","6f9d6bd752dc696b8b07d8e98136c622"],["/archives/2023/page/2/index.html","b2f098343540725bbb9054dca567fce8"],["/archives/2023/page/3/index.html","5404043fe725a6efe34412f79ba43e4e"],["/archives/2023/page/4/index.html","24fce23d09d69f0f082b0d0fae734bec"],["/archives/2023/page/5/index.html","6444c4cc0307bb7fb52d2dd1409896fb"],["/archives/index.html","be63f88e84c045c42a9e0e7c1183ab32"],["/archives/page/2/index.html","11a72b4c4d33f9d80e9b6fd49f2eb79e"],["/archives/page/3/index.html","e4e3f93a8f7a80c946bffa9c4e1e848a"],["/archives/page/4/index.html","90724d7cf3445a558136f8b38cf43f47"],["/archives/page/5/index.html","4eb479e601a7cd7d6c1328ca004514db"],["/archives/page/6/index.html","d1dcef367e3daa98d985f1099efce5f9"],["/categories/bug记录/index.html","a497e2706b75a1a8b2bf4f228f450155"],["/categories/index.html","49a4d447faae6b5e2b35db980d19dbbd"],["/categories/学习/index.html","71e7050d5088b2c11f6cf78685747f62"],["/categories/学习/page/2/index.html","59e67377beb942de3d6e7946fa990303"],["/categories/学习/page/3/index.html","065c3e271b679e1645517841fdfbd84a"],["/categories/学习/page/4/index.html","97eeb1d60e4f158fd189e37582ef9871"],["/categories/教程/index.html","0baba146df9c810697e08120f511269a"],["/categories/教程/page/2/index.html","b8d386c64dded6cd6a6f37362164f492"],["/categories/日常/index.html","d1d898fab0dcffa09f226bc7a7deac80"],["/categories/项目/index.html","cade593d322b1b7907addc3a9d20a887"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","ad8982199f9980b86823d00ee8be35ef"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/pwa/144.png","adccb671e1bda05676355b8109a6cf2c"],["/img/pwa/192.png","cbae4bd5306a25496ff548654d57125b"],["/img/pwa/196.png","1fa4428403f3150205df37d55a9e9300"],["/img/pwa/36.png","ec970849177e4944a9d7c883921528a6"],["/img/pwa/48.png","90a8e232a795cbca8f9c083f25244828"],["/img/pwa/512.png","11bba49a697fe32690e8803c2a7168d7"],["/img/pwa/72.png","6ce0c570c54062275375a0478c954171"],["/img/pwa/96.png","cd8799ed3733fa9131f19edb13884b89"],["/img/pwa/splash-1125x2436.png","7b903846ca712a9814a4e6a89b4e2c9b"],["/img/pwa/splash-1136x640.png","2930ef656854da7bbc614f25d3afc053"],["/img/pwa/splash-1170x2532.png","1cd9304970487b6982370fef6f1d5bcc"],["/img/pwa/splash-1179x2556.png","fa101ef6d41188b5fed93d6758b7da81"],["/img/pwa/splash-1242x2148.png","0c13751f39ce5cdc6a5ccf0081b745e2"],["/img/pwa/splash-1242x2208.png","5e2ed1e59ae9ac9282dbf28aea541567"],["/img/pwa/splash-1242x2688.png","73345832185ba8d61055b02077fd35cf"],["/img/pwa/splash-1248x2778.png","e75f4930f173722905264523b89e9865"],["/img/pwa/splash-1290x2796.png","10eca44c8867621b56abc7d59881211e"],["/img/pwa/splash-1334x750.png","d475293a161f07c8c8646f982290f0bc"],["/img/pwa/splash-1536x2048.png","97be79687e9fd703002ae7bf7e40035b"],["/img/pwa/splash-1620x2160.png","39f442acdcc3057f92f4921bb32ba1c0"],["/img/pwa/splash-1668x2224.png","54f7e2bdfd73af8addce2e5341871074"],["/img/pwa/splash-1668x2388.png","1b3897297cc67ac9e94f44b385092d73"],["/img/pwa/splash-1792x828.png","488f9851086833c57eec0f697ec7ee79"],["/img/pwa/splash-2048x1536.png","db2d7c7eedfe048b2497e8189bbe784b"],["/img/pwa/splash-2048x2732.png","71f5913a09f60e36de38a9ea039b3413"],["/img/pwa/splash-2160x1620.png","6e56d9c92c136da70bcb6086ddf7edae"],["/img/pwa/splash-2208x1242.png","c76e3093cd4a4dfa9fd42a61e6d0703a"],["/img/pwa/splash-2224x1668.png","a39c77f6e691701f4be686fbc089f1e9"],["/img/pwa/splash-2388x1668.png","a6b6497af8c875046c8ac21b63d3c4a7"],["/img/pwa/splash-2436x1125.png","14af74c1fb49e47fd3d891e5b0d4023e"],["/img/pwa/splash-2532x1170.png","e9aff1d483145bbcfe04b972796cd9b8"],["/img/pwa/splash-2556x1179.png","9bb7e5e8dcac1ad3d06a133e91779799"],["/img/pwa/splash-2688x1242.png","f8da0b31942a6032d4d6ea20033772af"],["/img/pwa/splash-2732x2048.png","ff385ef5677f88d73b543259a5b5a5f2"],["/img/pwa/splash-2778x1248.png","d548f8a97a364d4f55d7527c0d876151"],["/img/pwa/splash-2796x1290.png","39d6ab45b81920b58886c14e18e28ec1"],["/img/pwa/splash-640x1136.png","ba8964f281d99be3a9e90957d86960e8"],["/img/pwa/splash-750x1294.png","141ddf19b576178bb20e84f8cdd905bb"],["/img/pwa/splash-750x1334.png","88c9eb17e30e7500a78660d4d0d3806c"],["/img/pwa/splash-828x1792.png","5af1b00543e3bacc803e0b865707fa7c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","fabf4de4c28a7701d08cb793b956555c"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","234da77c919b065666b2bbfdc95eea72"],["/love/index.html","863ddb99cb06eb97b5c156ecc1d04800"],["/my_project/index.html","0d0a691a11898011f229884c0def936c"],["/page/2/index.html","25441adbc120d1e9406a9d0218d929d7"],["/page/3/index.html","b06c9e55f5fd0ecd31772cbc612db17a"],["/page/4/index.html","607fe21a454df71fa49a0a1d9bc9fe3c"],["/page/5/index.html","4145ea027bc5b33f50e99fd65dcf7d4b"],["/sw-register.js","9400e35d22fb347e2b0777e7a278d2b8"],["/tags/C-C/index.html","1c61e3fdb52952a6e4017a21d858d6cc"],["/tags/JAVAWEB/index.html","1bf686a31476dcfed31c72bf1a9835f5"],["/tags/Java-Web/index.html","38c1763bf061455cbcca3fe9c24a311e"],["/tags/JavaScript/index.html","b5862aea32ff22460c52ab88969d3b12"],["/tags/OpenAI/index.html","a9d195c3d6d2d1536cb82154be80fd66"],["/tags/PHP/index.html","d3a1595b2f65782661d80acac2664a4c"],["/tags/Python/index.html","462a4f97aa986733b3003418d60d9333"],["/tags/Servlet/index.html","1ee7e08482cf943b55ae36e5e70f0bfd"],["/tags/Tomcat/index.html","5b4d699980eb95d60ba630701d778ca9"],["/tags/Vercel/index.html","5bf3d68768273133b4b35d84fd2fe630"],["/tags/WampServer/index.html","81985764efb924984fce1f5cda6c7636"],["/tags/butterfly/index.html","dde75629329f23d4bca41b267c1f4a23"],["/tags/copilot/index.html","aea245d60f736f8ac65ad91b53a1b3f3"],["/tags/css/index.html","7c73f6d36e3b252b06e106366609918f"],["/tags/hexo/index.html","08b9074cd4230d38acc0f7eafbb89259"],["/tags/index.html","366efd3a33ff85bb6ee70b97a906aa23"],["/tags/node-js/index.html","a115d2fd2b94eefbba8c501884467498"],["/tags/nvm/index.html","80e3218ba57a8cbfa3d2cd2bc39478e9"],["/tags/paddle/index.html","6042cfadf7e74d94374876c5ed3979f8"],["/tags/paddle/page/2/index.html","8650fa8c0b2a781ddf1cf031e3939498"],["/tags/人工智能/index.html","ce89d75b856b864008cb2b5d7f6a03ed"],["/tags/人工智能/page/2/index.html","1d60d91ec0044db704d23c11e4359133"],["/tags/博客备份与恢复/index.html","55813c029124365eed2d1067cf9098b8"],["/tags/微信小程序/index.html","6a0ec7a95e87299f63a0844f46d36780"],["/tags/操作系统/index.html","70be62c4be98b4d63ac07fc219a1ac1d"],["/tags/数学建模/index.html","3fc1a99374d102eb5b3d954be8897aa2"],["/tags/数据可视化Echarts/index.html","2460b62cd2168507fd07aaaf8b6a15df"],["/tags/文心一言/index.html","f8307792b013d756dcd3b5ea00d0324a"],["/tags/新必应/index.html","2812cb2e63366fc73b58202716c05a21"],["/tags/深度学习/index.html","cc8573e697247a609a9ee6659990d2ff"],["/tags/深度学习/page/2/index.html","2d7639c3e150eb7a9cf189bef3093366"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","07002a30a1bc0e17921b8e3124e1b48e"],["/tags/深度学习基础-基础模型实战/index.html","1a975b5ed37346cab4f4b074944dc554"],["/tags/深度学习基础-模型选择与调优策略/index.html","c0918abb7f9cf3fc6bb5e81f2f6f14d8"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","73a1009d2ad24f12265ef24774cde798"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","f3d753a1ad17c5685ce6ae0f343d98ee"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","7d8982aeacc7a69d17b089f51df80d82"],["/tags/网站部署/index.html","1e2516de0cc88818fada14f084c80512"],["/tags/计算机网络/index.html","8916bd9267e38974c2f5873be8e984be"],["/tags/论文/index.html","65f2483bd430f6e56efab2e5fe657431"],["/web_site/index.html","b7ec6e3d104d8c402aff04a9edc5ba73"],["/唠嗑/index.html","f857fbc572f043041847e3029cdf9289"],["/装修日志/index.html","7f84662fb7336f04e8ea812f9db21429"]];
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
