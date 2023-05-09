/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","88cdd40ea465ba8fc64623fa2fd05516"],["/2022/12/17/nvm/index.html","cceb1bd23cc98247a78889b192c40505"],["/2022/12/17/博客搭建学习笔记/index.html","4ea1c9e88461b14e2445728cd2d98a59"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","b50fb56ee814802c888a9fee1230d342"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","cb27f3969da81886a47ff1cb5088de56"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","99108268580d5ed266c9b6722fbdea97"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","f125c5e78f30c8f17421c7c101319c50"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","e65813af50db189331e823ec49693e57"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","17ba5b5ec799ab88edfdb7bee220eb84"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","6049ff4375b0b6c80258910d5673554e"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","ee680304246106f8677817227949d49c"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","82f238514d82298f8f762e3c1bebc003"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","e7ab3c49d56dd8cd0eb9cebb1e0d6058"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","db9834142f706c9655e197448d5ea1dc"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","19b4aae7813b541af2583084fc66ef31"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","8336e5ffb173a15f5d3973d127345ac7"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","cd50df8e72ef00171aa51a870bd3c592"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","9fc422568c78640074d3501600f21edd"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","ab91378a926e0ca40d203aeec58bbc9a"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","1b0ced8ab625cd945863ed7e60770270"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","39c23311f39111fd0f19673208a702d5"],["/2023/01/06/Hexo博客备份与恢复/index.html","b0bd4306d55b749caa7bae2d5655fa73"],["/2023/01/07/停车场管理模拟系统/index.html","25d5ccb866c3c412ba2752cedfce08c8"],["/2023/01/20/Butterfly外挂标签/index.html","c5207aa0610b65e200175e964fbb9740"],["/2023/01/20/erro_spawn_failed/index.html","516589aa083fc3d57ae99d7ee5193f00"],["/2023/01/24/Echarts社区地址/index.html","e2627c822450fcdf2ca4e359c011fc53"],["/2023/02/02/论文翻译/index.html","957052e4d0e33e2a6fb79c85bb0a1e1b"],["/2023/02/06/WampServer图标黄色/index.html","1a698d0b997fbd052e32c89a6d369f8c"],["/2023/02/28/OpenAI-new必应/index.html","a92a04b6b041b37a8863893d48f6e49d"],["/2023/02/28/PHP页面间传值的几种方法/index.html","dd327b0b5c876894507122842a053217"],["/2023/03/02/node端口占用/index.html","c6c286172c62f10cdee4b29f2ccf8165"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","25057822597fd72f068debde97cc365a"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","3995d50b0a8d0b0570efcc4db0b932c9"],["/2023/03/08/Servlet技术/index.html","54f7ac308bac32b01ca176598fbba22a"],["/2023/03/08/模板字符串/index.html","e2ee6306d70c0e3b4dc5c8c651b40213"],["/2023/03/14/Vercel部署网站/index.html","024a0e65ca26f5054fdeab46dd1f5aa3"],["/2023/03/21/github-copilot使用/index.html","f1190448e41300811de87a9ce2bf5d37"],["/2023/03/23/从零开始的计网学习——概述/index.html","866b23f4b0b14b18950af51bf876431e"],["/2023/03/23/从零开始的计网学习——物理层/index.html","352a59130da30b535d8461b7fab1188f"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","472c8aed0f62b3f84d05e528c4bdb36f"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","1894fdcc390f5043cfad8cf23c5afa20"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","a2b376ec43d870d69d3fc96336ea266a"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","441856337710dd4520e7d79c531fa7c1"],["/2023/03/30/微信云开发中的增删查改操作/index.html","5ee0e870bd978219f22751b9f7e51d74"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","3dbb65f99506610688df17ce31f4d3a7"],["/2023/04/04/文心一言上手体验/index.html","29b612b53db25854141f87522aff95c4"],["/2023/04/05/操作系统基本概念练习题/index.html","e3e707566177faf4bcc11d35196a50c1"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","3a9cfd68ddc19430dc81eb9a353a9dfb"],["/2023/04/12/数学建模图像处理/index.html","c01f6e2b408de68a9d9fbccc41a8a988"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","e8d0f0f1b4a8a8dcc44a3444f9043722"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","ff3d67a93214d552666578b4ffc27da1"],["/2023/05/08/python内置函数使用方法/index.html","776518a807170c8a95ad6ec1e77cb518"],["/404.html","04bfc825b0957aa78180172f2dcbe568"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","c0afeb92e400c584646f300ff75cf893"],["/archives/2022/12/index.html","875fe40e2cf4ac2b250ea095a37614ad"],["/archives/2022/12/page/2/index.html","1a6dc7544f56e78dd885231b91bbbc4a"],["/archives/2022/index.html","6665c3b7ccfd49e8c4bab42c3fad5e92"],["/archives/2022/page/2/index.html","8b5c0c2f05f208d99eb93adf009ede12"],["/archives/2023/01/index.html","b8a778b6d7edb1fada1b3d8720edc3d6"],["/archives/2023/01/page/2/index.html","a0a98606fc189374000321729da52244"],["/archives/2023/02/index.html","89d3ad98bffeb0b417968ddcc3fd7b17"],["/archives/2023/03/index.html","9a862c845b9564349d27241cecbcdc4c"],["/archives/2023/03/page/2/index.html","48f71fe28257d157228e182a3ac65481"],["/archives/2023/04/index.html","497ae665a92fd431f06c21f3836f6530"],["/archives/2023/05/index.html","5eacd944abe28cbbdea9ee7251a3a8a7"],["/archives/2023/index.html","2145552c667f509469364a682dd19754"],["/archives/2023/page/2/index.html","b3469820dd4fa4ed9b841d99a1cf5a7a"],["/archives/2023/page/3/index.html","c19cd606c98c84a6be3ea866b935a94d"],["/archives/2023/page/4/index.html","56b28a18d0153dbcc325c98cdeaa03a8"],["/archives/2023/page/5/index.html","11506409e23cc7bcae39e6f9830c47d0"],["/archives/index.html","d8b4a17a0902cb38186024a94aa158f0"],["/archives/page/2/index.html","479b13cdc58401767fa81f4151a8ff4a"],["/archives/page/3/index.html","b0f16e2de3a7ab6d8d59fc2772d10bcf"],["/archives/page/4/index.html","b3fea2504bbafefcc1038e47c4696c6e"],["/archives/page/5/index.html","bf1d9d55d428e9d59c21606feefcef10"],["/archives/page/6/index.html","60181c5fb68de978e33f6d3e061b3c2e"],["/categories/bug记录/index.html","ddd06a3c5da82fc7aaca1d88fb3fb709"],["/categories/index.html","236bf39b24c3fb92564c69ec89362d5d"],["/categories/学习/index.html","1f6ebc6a3a3129058c3c9a6fc3db5cb4"],["/categories/学习/page/2/index.html","0b9788f2a6460dcb2e4d3cfa3b93116f"],["/categories/学习/page/3/index.html","bcb502a1d004d29f3b250039e7eb5453"],["/categories/学习/page/4/index.html","ff7e0c049c6973005508954d2baaf7dc"],["/categories/教程/index.html","5abf81d7b893a2da08bedfbff09dd5f3"],["/categories/教程/page/2/index.html","0b197de4e99ea9eb92f41014263a5afd"],["/categories/日常/index.html","092c77d0a5ae8813cfab42c88c12527a"],["/categories/项目/index.html","ffb273d3e59639981d8cda8665e9ebce"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","b889e78f2fe18cf41584fc8d75beb968"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","5936dbf28832bbf98e9f3f8def55485f"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","754a5874430f2b56062599a87a0f596b"],["/love/index.html","3b3bb932c7d0c1fab8083b5cdce00e2c"],["/my_project/index.html","9b9f3d362c8f94cd298ae8059e6367d8"],["/page/2/index.html","758caf66f08f27e60fdf53101c64638d"],["/page/3/index.html","3e639f2a548188233aab05ef95f232ed"],["/page/4/index.html","aadf51ceb55eea67f01ed5d8f2990525"],["/page/5/index.html","bcff228e7eab7d2e83087a57ba5dd0e6"],["/sw-register.js","d3e0c1c17ce6953f333ad0fceeffc535"],["/tags/C-C/index.html","9872d80472e579d50ede8c639e14998a"],["/tags/JAVAWEB/index.html","711c41bb703eca5f32a85336de2bdf55"],["/tags/Java-Web/index.html","962f09ba4c64f30f2352cb41b75aa70c"],["/tags/JavaScript/index.html","1f6e3211f41aed998adb2aa904f2b9cd"],["/tags/OpenAI/index.html","a766d93becaf9d64baf9a26561f749d7"],["/tags/PHP/index.html","35ce29b5ed6f5690456442a8ae086b3b"],["/tags/Python/index.html","5c9259457dc8d7a3b3f9025eb48844ef"],["/tags/Servlet/index.html","70242077bb0193f0a013ca3efef9cc22"],["/tags/Tomcat/index.html","cf8830ead0368d575280d5bbc57597c5"],["/tags/Vercel/index.html","41ae1f50fa2f3df4ef937b3b090425d8"],["/tags/WampServer/index.html","c9b5f346f3321f794eedf80d51d44723"],["/tags/butterfly/index.html","7aedc0cb0c313d3b75baf74feab1252b"],["/tags/copilot/index.html","bb69cab4a17fe4d0f40cedffda36e77a"],["/tags/css/index.html","9c44836e124d4249587c3293f843afb0"],["/tags/hexo/index.html","d42ee579feb4b84b345269422886fed1"],["/tags/index.html","6bce6d2d9a4f78a7d2ec8ccd07986299"],["/tags/node-js/index.html","eb928fac6009994e382ef3a9971c75ea"],["/tags/nvm/index.html","5fd803e9fde80a124d80e53c9c35a510"],["/tags/paddle/index.html","ec64a328769530ad5dc32a0ca54421a6"],["/tags/paddle/page/2/index.html","53c07ba9544bf7769f0406a879546ef1"],["/tags/人工智能/index.html","1e4c607fc4743959dc5a4b662122af05"],["/tags/人工智能/page/2/index.html","9835c270a260d8d512b27212c6d160e8"],["/tags/博客备份与恢复/index.html","a6b0fbbff8241350479fa2bff5b1d16b"],["/tags/微信小程序/index.html","739672ceb1183bddaf8420ddf9b2e13d"],["/tags/操作系统/index.html","d4b0c87874b55cd4153ace891dce4a45"],["/tags/数学建模/index.html","1aded0cd24781360fdf1ed1cdd1205d2"],["/tags/数据可视化Echarts/index.html","4c933e89c1a9266bb6acaa9b2ea90835"],["/tags/数据结构实训/index.html","284bff6bb2e9a44222c8d23214706841"],["/tags/文心一言/index.html","d46d9eb2238f7aec01269f9bb76b551c"],["/tags/新必应/index.html","380589b9139ec1b3930ce587bab660d9"],["/tags/深度学习/index.html","b1ff3ed8d2ebda0b94f34c96a670d3a9"],["/tags/深度学习/page/2/index.html","d071aa78c8482033be91e0a756a8a472"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","de087327f6b89bd7cba66fe65ec971a8"],["/tags/深度学习基础-基础模型实战/index.html","e3ad4c1a3f370a9e30dff18c2cee4424"],["/tags/深度学习基础-模型选择与调优策略/index.html","c65e088018224d3fe7adbca1d00a13ca"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","df6e922edb22efc452c2054ef20fc9c3"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","68d16d0b1c7ef1f151a0b951ce8ed31b"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","b4cc9826de3eeb652082abcd58a70333"],["/tags/算法/index.html","8b610cbc8ff4b1f4c49e63cce35cbe95"],["/tags/网站部署/index.html","8cdd0c06d17469b3d896383738539a1b"],["/tags/计算机网络/index.html","c6615f461e04a70c5824586c84de4c44"],["/tags/论文/index.html","c5916600285e0dc6a9dfb904bb1f618d"],["/web_site/index.html","75ccdccb22bdce5cda3e8c228705cff4"],["/唠嗑/index.html","7f645a62f64de566f89a87de7668ccaf"],["/装修日志/index.html","960cf8da5eae73723b8374c0fe5e64d2"]];
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
