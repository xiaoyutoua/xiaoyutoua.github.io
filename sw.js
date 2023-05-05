/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","e5b21f48e9f50bc431e767a194e26820"],["/2022/12/17/nvm/index.html","931d67070a6c7446ee44ad9abd695a3f"],["/2022/12/17/博客搭建学习笔记/index.html","45566c88bdcca42b049bbe48832ed51b"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","561ad484b4d8deab53bd472d20e5cb05"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","03e5683ae57084073166aa62841e47de"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","063f96ae0fc6884e6bc8e6226089a068"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","1a24e5021baa1026b27b7577ccf590d6"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","4ca2165659e753eaf99011418d93c114"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","8b87c1fae21ca77e06180089690108d3"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","0adb0e0ba889e0e62f0715708329b956"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","4855f0e368bd1aff173baf2fbac0eab1"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","88359bd4fa55cd57c96119573d73da40"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","ec23eb8f3c0ad7ac667632026420465d"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","7c3218d69bb896d43688f0790f2b6cc0"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","2e497d0c050328b2a3d19759f4b8017a"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","2d160d482ad5ac853f9e46a7dc65f09f"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","c7bddcbb27ec7495ec6d3d8343d7704f"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","c4607bf5710be2cf57a2cef2c664b9f7"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","eab59ed10d4a14eb471fe2e86259b8d1"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","e3c748f5c14fcdace10665bccff74491"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","7b34094c28cad891f00ec77ea0f06795"],["/2023/01/06/Hexo博客备份与恢复/index.html","c47f2c32606759a991a3c976bb03ae51"],["/2023/01/07/停车场管理模拟系统/index.html","f450bd58b902457d999e677641a9012b"],["/2023/01/20/Butterfly外挂标签/index.html","7d290085cd6e91246c04b712147ea0b9"],["/2023/01/20/erro_spawn_failed/index.html","d3c3c86aa83bfc3d33715f798a26120e"],["/2023/01/24/Echarts社区地址/index.html","824ec6379dea5e91496c1e68a9b34324"],["/2023/02/02/论文翻译/index.html","a10593c622c33807c6c09f32365852e3"],["/2023/02/06/WampServer图标黄色/index.html","37cfdc96c2a55043fbc42ec6f8cdc42e"],["/2023/02/28/OpenAI-new必应/index.html","8c994cfe8d1121da9b5f9000eb385f75"],["/2023/02/28/PHP页面间传值的几种方法/index.html","1ef13fa97633c82c2a49ea1eccca9b5b"],["/2023/03/02/node端口占用/index.html","3efbf7dcf8f3ff54f6dcf08ec738c7f3"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","349c889b00b13508f9a45994fc107590"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","93a1cd0a7bad7883a1707c87269e2dba"],["/2023/03/08/Servlet技术/index.html","0088d283a9f28a43b456c5dac52a5c9a"],["/2023/03/08/模板字符串/index.html","f808c554107e35816fa3ebb8f132c0f2"],["/2023/03/14/Vercel部署网站/index.html","410d4c5d9260465d62cd4a0ded95d2ab"],["/2023/03/21/github-copilot使用/index.html","68138dee67f4cfb8a52b01b82a6fa512"],["/2023/03/23/从零开始的计网学习——概述/index.html","758459e1148b8b6e9eee2db6a3e6ec26"],["/2023/03/23/从零开始的计网学习——物理层/index.html","05cd0352408414da22134ca5bb8ed8f1"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","61477f6f9559140687c2ec2048b8def3"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","2ecf38590cafa78fbbe3eb2e402a73c8"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","b896e59d8eff152d1a2c413d71fc5878"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","f4fdce4445ea5c5ba7310b43323e19e7"],["/2023/03/30/微信云开发中的增删查改操作/index.html","eef623676788ced2b5a9b98dd0b088dd"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","b30d544cc96b0fdb401f8091678e3d81"],["/2023/04/04/文心一言上手体验/index.html","476d38fd5930191529a21916194dab30"],["/2023/04/05/操作系统基本概念练习题/index.html","4468d6e3af9e765e7037680072691047"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","4e37dc876d7ce78d467ce9fbc5c26124"],["/2023/04/12/数学建模图像处理/index.html","f53075c33a41971b953173f1aeb6fcd4"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","62c6a093884669d3114a55e637612eea"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","4f9fc1e250378a00b045c4f122666993"],["/404.html","bf7680295efc16fac4cc8c7f846d3f61"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","b88314ee46dc0f9517109b4ec614a490"],["/archives/2022/12/index.html","714f93d56fc47c732883df66dbd795e6"],["/archives/2022/12/page/2/index.html","a32c7080717a15bb15d8d68b6a5bca59"],["/archives/2022/index.html","e5167b78ff34b3ee3a5391f9d73bdb5b"],["/archives/2022/page/2/index.html","89178a9ee90d1ae314ae429187147dbb"],["/archives/2023/01/index.html","6c3be1f254edf1a50f0f41759c8a5e9e"],["/archives/2023/01/page/2/index.html","76577f3fbf2b2fc3be05a42c57a22169"],["/archives/2023/02/index.html","5899ef176f2d096fdcde8611dd8b816f"],["/archives/2023/03/index.html","2b76677841cd0914c35d395201d6e9b3"],["/archives/2023/03/page/2/index.html","85a0428e2e2b1e391c142925282e4159"],["/archives/2023/04/index.html","3365d181ddac5de1eda8d27e3f97c9f7"],["/archives/2023/index.html","774930f35f3de9cfb4f3b44d54b4ce71"],["/archives/2023/page/2/index.html","9c341390e324bb00947a15a8c0d98c48"],["/archives/2023/page/3/index.html","32e217e01681482eaf3bc5fc751eeb9b"],["/archives/2023/page/4/index.html","61244e91eef8775614cef6c9190cfb84"],["/archives/index.html","a09b3c39787c44b016fb88978a83283e"],["/archives/page/2/index.html","e7fa68d48c42f9916585398f5acb7f3e"],["/archives/page/3/index.html","ec26769e158423fd146f26ce82283340"],["/archives/page/4/index.html","6beebb76b07a6e2bad26ee34db35f6db"],["/archives/page/5/index.html","64bb3ee13ca225033a9830d1b7481e6f"],["/archives/page/6/index.html","03072bb99e9336e8d29553d0da2ce4cb"],["/categories/bug记录/index.html","13ed6f01dcb46fbb7a10da5025ac6add"],["/categories/index.html","92426a902e10d63d2878de44fca05ca4"],["/categories/学习/index.html","6e74b463d7bcafd5dccb344086b0fc46"],["/categories/学习/page/2/index.html","bfab63c31fa21ec5ef18e8abfea028ed"],["/categories/学习/page/3/index.html","c37223600afe049e6bb868433f76fe49"],["/categories/教程/index.html","a9d9b23381c4c59cdfd248a7b1530b8f"],["/categories/教程/page/2/index.html","a7489c663e0bd9f98e5b691075d4da4f"],["/categories/日常/index.html","203b5766b8f351d243cf0aa42cf4fc7c"],["/categories/项目/index.html","41acf2be7a91150361c03a2d37a4c2c1"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","b889e78f2fe18cf41584fc8d75beb968"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","055169318b13bc1d8159f3ab85635c26"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","060a99c4dbc8e5f541f3bb1f4f4c7ac0"],["/love/index.html","7e8f456dacd50a585aaf2f114f3bacbd"],["/my_project/index.html","14fcd24b2df4bcf418b65799378a092b"],["/page/2/index.html","5e5aca76648fc90e663e8a2ff4b3a6c2"],["/page/3/index.html","dc699311866ac629ecca61f1c5d20936"],["/page/4/index.html","01864527775597a8403fd100bf2e3917"],["/page/5/index.html","feb24e367edeb2962d977ff7ef93c65e"],["/sw-register.js","43f66f87750b5434c9436b07acd85aa5"],["/tags/C-C/index.html","e6b2f97cc0e7551c4129f321135e44e6"],["/tags/JAVAWEB/index.html","e0b8810cb4db15f71cccc06e1ce09a8c"],["/tags/Java-Web/index.html","aa849d915144b5175cdd116f456174e5"],["/tags/JavaScript/index.html","74ff540aa7d5fbbf976f33df302a236e"],["/tags/OpenAI/index.html","14018c357a94a23573caa59b19ce3529"],["/tags/PHP/index.html","70ed97a42436eafa5a3e5044d9b49d32"],["/tags/Python/index.html","5e1db2e23f7857d9f30051ba2429b91f"],["/tags/Servlet/index.html","4ac069d9e9909d67ce9368ffcd5e1841"],["/tags/Tomcat/index.html","e6e4ec4ee1f25c6ced0bec75bfa4a1e4"],["/tags/Vercel/index.html","055a5a70d1b66dfce6d91429b7438d03"],["/tags/WampServer/index.html","cde6a715ba6abbea39f9c36182b3edb3"],["/tags/butterfly/index.html","8863604c1cf167cc58f630394554d9ca"],["/tags/copilot/index.html","88077a144440718d6f696d11a3663279"],["/tags/css/index.html","9f9562cb6c63b4efbb9871b7da6da9f9"],["/tags/hexo/index.html","428c1736c24f04bd31bfde0482ce02eb"],["/tags/index.html","fa11030e2df0fd981f0ab0aa10953659"],["/tags/node-js/index.html","3bbcb978c9a8598ed3d426cb04c63ecf"],["/tags/nvm/index.html","7f5a7b4bb2b88fefc2c753cd00d90a99"],["/tags/paddle/index.html","bdee36c807c4b716477a747a1c58e421"],["/tags/paddle/page/2/index.html","67e9b7ff42bcc1fe856292674d945c75"],["/tags/人工智能/index.html","dcdc29f61ad7c2d56018f58bc3722d3e"],["/tags/人工智能/page/2/index.html","c15f59dd05c91dd143ae450a27e84371"],["/tags/博客备份与恢复/index.html","fe0c7651280254012058d25c5dec41aa"],["/tags/微信小程序/index.html","7011caaeef9ced09499fa9a1cf5958a4"],["/tags/操作系统/index.html","a53f58b6a2b3faacf3661c3b4145b5e9"],["/tags/数学建模/index.html","533e68b3b53eab627933828e8443a536"],["/tags/数据可视化Echarts/index.html","3ace8e6c4e62e4a06a5665199f378ca5"],["/tags/数据结构实训/index.html","e1fcbb2395af8ae093222772d8eb77df"],["/tags/文心一言/index.html","10926852a3a3d3428ffa32096c31b182"],["/tags/新必应/index.html","ee185a5f349c4ffb9acde5a93ddb405c"],["/tags/深度学习/index.html","038d7a96e78ddf5cce30b40b4505f3b0"],["/tags/深度学习/page/2/index.html","8fa7cdc1447a2deced2ade8548cb9c50"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","9f87060645d5a35361bc85490336ba2a"],["/tags/深度学习基础-基础模型实战/index.html","d0548be41fc630593dfc6d36342e343d"],["/tags/深度学习基础-模型选择与调优策略/index.html","a364b4e25a18126583e5f018f0573298"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","a178676c8e7539463fff7bb87952bfe9"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","46ba0d712df5ca0a9246b7063c239658"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","007c8e2c368ab5762114a34f2e5fc3d3"],["/tags/算法/index.html","596072822849103392f976798069dfc7"],["/tags/网站部署/index.html","6868a9f805923ac053fd61212093b21c"],["/tags/计算机网络/index.html","9f939441d93eecce07a5e7aa0fe85b9e"],["/tags/论文/index.html","9818c8e443f1a751e4a62868e8315ec7"],["/web_site/index.html","f3c29cd4d61bb3e9185c951ecd1fef43"],["/唠嗑/index.html","921c50d31b26d038f0f52256edd47900"],["/装修日志/index.html","512669f546ed717a970392758c9b8187"]];
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
