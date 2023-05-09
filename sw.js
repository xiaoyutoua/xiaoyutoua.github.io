/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","94bcf5d4abf9967875a56a056c567471"],["/2022/12/17/nvm/index.html","64ba5ac63559b02a4b5dfbe0bba881bb"],["/2022/12/17/博客搭建学习笔记/index.html","0c8e0cdbd5095533ac1945426b6f28a5"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","923bf64a80401d8832456de00eaae91c"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","543bff3ea8a546132248c920f83dc8b2"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","2fc317dfc2b8be061cd91e5ea6c46890"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","9ebb0e954ddf2a892c7b64cd76a9c5f6"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","a7b93235678100da5cab536399ff6e02"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","6f11be22d0eada2a78713f8d5826e82f"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","3cfb231699a767e6e3a870cb25a01d87"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","69a35e28ab2b4a31f0e8db4dda513a92"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","9670e1f06cd2d062e6892205c5b4b2c4"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","0f956f99b97f63a9212612dda7833ca2"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","b31b1e0389e88ca0c6e6cd01584082a1"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","9b2ed19d5008e48a96f44f98e467e4c4"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","7e3a0b6cd1a95a5890da10bf9a43a96b"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","889c96b9135d82ed87ec1d71e989677d"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","1ca70d7c6dad6348fff2d13b649e35b0"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","2af793c19710f3d7665ebbb0cc02aa50"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","c8e6a0fe3e015bb0b04e5836e6244856"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","fdf34b4aaae0812d0a41dfcb9be2b66f"],["/2023/01/06/Hexo博客备份与恢复/index.html","d13aa0f604ebca9b7920f2fedd5eed5b"],["/2023/01/07/停车场管理模拟系统/index.html","12a48aced51ed8caf91aac6394a9c9d0"],["/2023/01/20/Butterfly外挂标签/index.html","de7f69569b240022a5725167df7624bd"],["/2023/01/20/erro_spawn_failed/index.html","cb2e61be05548ff6334967e767fd146c"],["/2023/01/24/Echarts社区地址/index.html","a1e22375e017da70ed6e3db2657cb22e"],["/2023/02/02/论文翻译/index.html","b5df6b7124c802f0658317ac355596ec"],["/2023/02/06/WampServer图标黄色/index.html","c27535a020ca4a32b0610f92a8a06898"],["/2023/02/28/OpenAI-new必应/index.html","0a5fe4ea858f50b996bb981340e4a4ea"],["/2023/02/28/PHP页面间传值的几种方法/index.html","93593da8e02040e1e27818dfd354ba2b"],["/2023/03/02/node端口占用/index.html","4653519c6225e8f6e8e69dba4f259164"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","ecdf6343158b24592e4b4b58c6e12811"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","5bea27c7ddbecbbd8d70e62da7c64982"],["/2023/03/08/Servlet技术/index.html","928a66201fed835479d5e7e4aefd2299"],["/2023/03/08/模板字符串/index.html","e09424f597e5eb280bed3b6f0ba47ca0"],["/2023/03/14/Vercel部署网站/index.html","e1a7023f347894c98b76ce5a03df7e36"],["/2023/03/21/github-copilot使用/index.html","019ce88870ca828c62effd7d3cb9fd07"],["/2023/03/23/从零开始的计网学习——概述/index.html","5b231e4a0fbc0789aeb85969b6ad6a4a"],["/2023/03/23/从零开始的计网学习——物理层/index.html","e75fdb46fbbd183bd7e4c0d146a32869"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","08580aee8ea1a06c747705ae4251be7c"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","e5cd499eed029f267003cb14403b1878"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","ba3d980f8793023bb0ef134386fed99d"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","bb8a1fc5d786ed8dd3dd3344544caf1b"],["/2023/03/30/微信云开发中的增删查改操作/index.html","c7a840b78f2fe3f39014c1f2ebc4403a"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","cad532f6b4218edecc5f9b7cf730932b"],["/2023/04/04/文心一言上手体验/index.html","7ddd7f64efaca762a733445ec616095a"],["/2023/04/05/操作系统基本概念练习题/index.html","99744bc7d3a6129bc1efae16ef1cd82a"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","5c64892678932d6601d9d982eb5fc590"],["/2023/04/12/数学建模图像处理/index.html","447c7b651ea9c75c84417482fe32801b"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","764e558fb916790adbbc11e1b4bdb45b"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","891649def42f1aa505e719451fd0cda6"],["/2023/05/08/python内置函数使用方法/index.html","cd97c1275668ccaee46a31a68c2d7629"],["/2023/05/09/python基本输出方法总结/index.html","bc3db793c4b7ac339ad5e1aeb1286890"],["/404.html","179c5d9218bc6ff41447a39eae8d43a5"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","adaea975fd8170d560eba1119eebe6b6"],["/archives/2022/12/index.html","096066d1fde76d3b79a58e1849db87fd"],["/archives/2022/12/page/2/index.html","4e7ac09ddde9a7066e8bb0d29d240c0b"],["/archives/2022/index.html","4bfbec51786609fd7b5e2a425991ca18"],["/archives/2022/page/2/index.html","d5783665d39399c37230ff6f09a4d5eb"],["/archives/2023/01/index.html","2d810b508a046d84600c608916041658"],["/archives/2023/01/page/2/index.html","54430596123b4d4437c57bdd5cd2ffcc"],["/archives/2023/02/index.html","9ec0be15551330dcfd3445beb2b1100d"],["/archives/2023/03/index.html","585263a2fb0ad54fe8559b5e12b35bb5"],["/archives/2023/03/page/2/index.html","e25240cf7de1528203d478a9e5c721ef"],["/archives/2023/04/index.html","667ad7408db24e2deab338067eeb9d77"],["/archives/2023/05/index.html","fb770c375b6aef8b1c29dfc5b209aff2"],["/archives/2023/index.html","0028372c42b77c0f6133c35452fabbc7"],["/archives/2023/page/2/index.html","1f2933a4d37654a23962e81a44b1d86e"],["/archives/2023/page/3/index.html","41e006ed14adfa634e1ad5e7a6bce205"],["/archives/2023/page/4/index.html","5f6d41edb01da38c8d5d6f3da040ba49"],["/archives/2023/page/5/index.html","4875cb8dbf3b0d8568180b4f0b465de9"],["/archives/index.html","9eb8eb896d893dda2a1b70cecc50c436"],["/archives/page/2/index.html","abd5674878fee416aa40d3ed604ea97c"],["/archives/page/3/index.html","b85656f4b9d451fc7a86c4bfb078d51d"],["/archives/page/4/index.html","3c0c47f9b72c5474ae72d6078e6f6693"],["/archives/page/5/index.html","ac8b3163cc43565c7c9c807d967f068c"],["/archives/page/6/index.html","2b1107ff88230097098b1e38672273b3"],["/categories/bug记录/index.html","fd4a0395d9f021cedcb5c97596c5c4c7"],["/categories/index.html","8a1b18cf822067a9d5c98f2bc9325cc7"],["/categories/学习/index.html","377b0d78e0176c45d3da99185ca1f65f"],["/categories/学习/page/2/index.html","ee61fcb9c583c63398560a4d562cb145"],["/categories/学习/page/3/index.html","22cd7deb604fbd802db8be4671347937"],["/categories/学习/page/4/index.html","fa6b972610882715f7a8d372d5f4d47c"],["/categories/教程/index.html","6fcce7e196a0d2203499ff414f2e0b22"],["/categories/教程/page/2/index.html","c9848392055f2d3bd0747b025e8a66b4"],["/categories/日常/index.html","dbcd715905783352eb990a0576fb4c49"],["/categories/项目/index.html","f2146bc2a125d39c2e6bef9ee58128f7"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","891e00d130b1267cde8b2354d9cc3b8e"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","068945d1af32ee132e07902be33196f9"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","6aaff5d656c7038aa95dcab785480aad"],["/love/index.html","990f124885cddc4944cad0a616f59bb0"],["/my_project/index.html","50075a449004fa52b29edafc380f1773"],["/page/2/index.html","2386b438c2558c15fcac22db9d3b86c7"],["/page/3/index.html","97a4129c1651d0bc77994137642326ea"],["/page/4/index.html","76f7587fa4fb6615b4598252621c6402"],["/page/5/index.html","75c2247b9c808054a1e03dba091b1179"],["/sw-register.js","c19a97e390b35f079b1dc52ddeb6a23b"],["/tags/C-C/index.html","5c4caa75f38150ed4a91e5ed3565b480"],["/tags/JAVAWEB/index.html","353ad62574ff2f570d36f065cbd35ed7"],["/tags/Java-Web/index.html","6ddfd9a10f7d301ce1f5b92f6da8a9ff"],["/tags/JavaScript/index.html","116b366d58ad969fb481f6a22e8d62be"],["/tags/OpenAI/index.html","5f739480939382833da26f11e18c176d"],["/tags/PHP/index.html","bed083a89208b47dad0b856d8231b6db"],["/tags/Python/index.html","02019b49711e908af87f7c4f07197585"],["/tags/Servlet/index.html","c9a2d83396d939b724fdbfea2d9e4b4a"],["/tags/Tomcat/index.html","9c4d22a2ce04ecc214ef0c5d9fa914e0"],["/tags/Vercel/index.html","c0d2ee98b58fce9066eca636bbe845a0"],["/tags/WampServer/index.html","f94b950381fbc37e64c2950094122298"],["/tags/butterfly/index.html","b1bedbe3ce1a26243e157c14d4be6c31"],["/tags/copilot/index.html","a3d286cdffbddf0ebf53c2cea21d3944"],["/tags/css/index.html","3bc16497b4aab64cb2f21008a2dafe78"],["/tags/hexo/index.html","67b680e4bc267bf4799ba9e9f3908b2e"],["/tags/index.html","8d923c1199b47f6fc754dac8159b9804"],["/tags/node-js/index.html","8adbc63612e15976f082b77a196b6188"],["/tags/nvm/index.html","2d57e064d71261cba3bc690ffd5365f9"],["/tags/paddle/index.html","8fbc0b0202dca49a05b3dde0044ad1a1"],["/tags/paddle/page/2/index.html","a691a36ec1b1617218dcd5b2d6861cbc"],["/tags/人工智能/index.html","da4907e0e7918949f2836c1a9d56b471"],["/tags/人工智能/page/2/index.html","505e2228c5bcface4970b1e44abddaaa"],["/tags/博客备份与恢复/index.html","4f97e2798e3f633e97de24e666005ffe"],["/tags/微信小程序/index.html","e778b7e6060b67a4fe49c3a955684aef"],["/tags/操作系统/index.html","8b2b6ddb8f5e4867498969d40530a568"],["/tags/数学建模/index.html","56b46f82b56d9b9fc2446ed814a62534"],["/tags/数据可视化Echarts/index.html","0247d84c3cc8a57758f30d61ebc4e2c6"],["/tags/数据结构实训/index.html","fbb71bd4a7bd6ccbf03082a405c7df50"],["/tags/文心一言/index.html","65d9ff4ea8efd308d424b0eba9bfad8c"],["/tags/新必应/index.html","a2636948f8bb1193a2507f43494454aa"],["/tags/深度学习/index.html","c0c3092bd7574e7e4ad45c6d9f22ebfd"],["/tags/深度学习/page/2/index.html","72641e64e70280af5111a665c497ebbf"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","cff29d1f7d23b7c5fde79f55c07eaf8f"],["/tags/深度学习基础-基础模型实战/index.html","de868d4af2b4903a374cf346bdf2a573"],["/tags/深度学习基础-模型选择与调优策略/index.html","ed5b77dfea0a9548ba1bc1a7b9610d2b"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","410608b4980738defa6d889ab5a37480"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","783ae30689b53b69a3e7ab11fa479178"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","f508a6cd2bc4de2d638d835a3fc9e60e"],["/tags/算法/index.html","e5e40a4c9eeebaf241938a3b8c35ab0f"],["/tags/网站部署/index.html","d3682a75e0b48f6dd6bc249f3c88bdf4"],["/tags/计算机网络/index.html","c4922e915d51b8cffb631b1e390ecca0"],["/tags/论文/index.html","1f245b072296a072cba88f900cda4d93"],["/web_site/index.html","e3ab1ec3b087b7f0576a3e31ce1e3ea8"],["/唠嗑/index.html","dacfeaa2fcacc6d477be7d97bea914b9"],["/装修日志/index.html","dc3ca9e4398c426dbf2c094a7247baeb"]];
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
