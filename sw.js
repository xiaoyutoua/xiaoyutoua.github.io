/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/12/09/hello-world/index.html","f0d5cb6dcddd92a83c4c1fde862e47f8"],["/2022/12/17/nvm/index.html","5a7a14bca9186e0152ad24cc4e5ea104"],["/2022/12/17/博客搭建学习笔记/index.html","82c2fa349d68e04d003f455010d0ee6a"],["/2022/12/18/深度学习1.1-深度学习概论/index.html","9ff5c37dba98a3c6177a6c29dc4b4d2b"],["/2022/12/20/深度学习2.1-线性回归模型的实现/index.html","d03217b69b4017d359f864505b19cc2b"],["/2022/12/20/深度学习2.2-神经网络中的分类任务/index.html","696dea20e66dc3205d01b6d4cacdf0ab"],["/2022/12/23/深度学习2.3-多层感知机的搭建与实现/index.html","38d0087f76117be6696044c51edc2172"],["/2022/12/25/深度学习3.1-模型选择与调优策略（上）/index.html","3525beb228e39462959bda44c6c915f3"],["/2022/12/26/深度学习3.2-模型选择与调优策略（下）/index.html","e058991239b7264e00274772c779d08e"],["/2022/12/30/深度学习4.1-使用飞桨实现房价预测任务/index.html","a9abed5ba97cc117c00e0d4aaa4b8308"],["/2022/12/30/深度学习4.2-使用极简方法实现手写数字识别任务/index.html","0a4b85df9988c98b39ab4a205bf18eb3"],["/2023/01/01/深度学习5.1-从全连接层到卷积/index.html","4bdf2d71df1e4891cb7c4554acad0b10"],["/2023/01/01/深度学习5.2-图像分类中经典模型的组网方式/index.html","d0d313bc52b010c0bcb0abe59d6d3e2e"],["/2023/01/01/深度学习5.3-图像识别模型关键组件之数据处理/index.html","05982be01df2019fc3e5afb6f0279b21"],["/2023/01/01/深度学习5.4-图像识别模型关键组件之图像增广与微调/index.html","b16f804b3284346160d1ab3c416e20dc"],["/2023/01/03/深度学习6.1-目标检测基本概念/index.html","0ed99496ff64874a843e7fce858d8814"],["/2023/01/03/深度学习6.2-YOLOv3实现AI识虫（上）/index.html","07ed3eef804e4b63fd1d0ae4d3b92135"],["/2023/01/03/深度学习6.3-YOLOv3实现AI识虫（下）/index.html","88cb6e5201cda9bc031e8a1ee8bbbd1d"],["/2023/01/03/深度学习6.4-其他目标检测模型概述/index.html","7b081a79553984d720661b7b2cb3fbad"],["/2023/01/04/深度学习7-1-图像分割任务的实现/index.html","59528165073f4c75a4cf355f324091ac"],["/2023/01/04/深度学习7-2-基于U-Net的KITTI道路分割/index.html","b2f7babf11a8c8521eef87f81d1777f3"],["/2023/01/06/Hexo博客备份与恢复/index.html","3fdd58359d57dba360c284a32c7b519b"],["/2023/01/07/停车场管理模拟系统/index.html","145a0a58a69c0617326a17ac28b201ce"],["/2023/01/20/Butterfly外挂标签/index.html","6db4be87cce2f7bbcba8fae1c7f29358"],["/2023/01/20/erro_spawn_failed/index.html","0f12dacfb698fe29ed40f467a44a5b78"],["/2023/01/24/Echarts社区地址/index.html","e40d78c78e907987d44e5893b12cba4f"],["/2023/02/02/论文翻译/index.html","68edb1cce064bb05598bb1e8ff054e54"],["/2023/02/06/WampServer图标黄色/index.html","8933bb0b86bc84263626eff60dd49951"],["/2023/02/28/OpenAI-new必应/index.html","085f60966a65413c70c2c998b3fc2228"],["/2023/02/28/PHP页面间传值的几种方法/index.html","4c4d13ee010e77c17590affa5a4a3365"],["/2023/03/02/node端口占用/index.html","118b8476f17f658579e63044d8265aaa"],["/2023/03/04/完美解决idea配置JavaWeb环境并成功运行，一部到底！/index.html","af03156ce9a8f4c7082475a63e22c1f4"],["/2023/03/06/box-sizing的属性及作用详细介绍【CSS3】/index.html","9a1f5f826d86e8e803b5d95e02818ea5"],["/2023/03/08/Servlet技术/index.html","55035df92b1e4e999b493d004629b909"],["/2023/03/08/模板字符串/index.html","5f98eee5acd149987241c549a74ca26f"],["/2023/03/14/Vercel部署网站/index.html","27dda63a2bb55841af1ad914194ab0e6"],["/2023/03/21/github-copilot使用/index.html","1c6699d1f8895ab041922ced2d84e6f7"],["/2023/03/23/从零开始的计网学习——概述/index.html","7249f253dd7c676ae4b012a6b275859b"],["/2023/03/23/从零开始的计网学习——物理层/index.html","1e17fe87542d32f07b1806b70de320bf"],["/2023/03/25/JAVAWEB中访问一个Servlet类出现404的一种奇葩原因/index.html","64ddf5f4a0a4ea5dfed7507a51bb18c2"],["/2023/03/26/新必应在DEV中无法使用解决方法/index.html","5e805aff6c62acadf4066a1129b1b175"],["/2023/03/29/微信小程序中如何得到自己选择的view的属性等信息/index.html","b8cad7784b2d3f96190aa0192b64b1cf"],["/2023/03/29/微信小程序如何判断一个字符串是否包含另一个字符串/index.html","3d0b1831a53bc80e81a5b28ebec283a9"],["/2023/03/30/微信云开发中的增删查改操作/index.html","2ce36d3966465d204ff561ef0cdb8376"],["/2023/03/31/关于相对定位和绝对定位的区别/index.html","d2550c8cd39ed6bbe34d484305117b04"],["/2023/04/04/文心一言上手体验/index.html","a04c46f8cfa536e5157d1d7c3e948980"],["/2023/04/05/操作系统基本概念练习题/index.html","fd9f0df57fdb8acf0ceaaa5ec059fd8b"],["/2023/04/08/从零开始的计网学习——数据链路层/index.html","2ae978c746dc2f0fa85e40b9c5382c09"],["/2023/04/12/数学建模图像处理/index.html","bf2bd3db8a3c029ff4c8ec59508df646"],["/2023/04/24/python学习中遇到的基础不会的知识/index.html","18746fc4b605483063852f00901e02f9"],["/2023/04/25/Python传参方式：可变-不可变对象/index.html","2f6cf1593dfcbc097b2e1cc95da69c41"],["/404.html","9fbaed1a7d1c7cda2a6d91a35b498733"],["/HTML/新年倒计时/index.css","e1ceb0512672f81ae74802222143d93d"],["/HTML/新年倒计时/index.html","16a32d33a430ccec215118fef6aa823d"],["/HTML/新年倒计时/index.js","ee6caa4969ac10773f32db792905aac2"],["/about/edu.png","f7e5ca9f6a088bc709f4d6bf2d319737"],["/about/index.html","ec3c4090925736476943329a1d6ed4af"],["/archives/2022/12/index.html","369264b5f8034e8bd9c9e2755a2a8175"],["/archives/2022/12/page/2/index.html","0d44aeb1bef87a2f813abd998912e731"],["/archives/2022/index.html","00e3c2883317d39b2c83f89621332c6b"],["/archives/2022/page/2/index.html","b9b96c1b62c2bbb8536e38badd3c8722"],["/archives/2023/01/index.html","5845a1553166ede80ad35891da505d0b"],["/archives/2023/01/page/2/index.html","33f2bc1e1bffe8613cd4377bc4ffddb1"],["/archives/2023/02/index.html","75b08f396b5124a20ac005d1364f0e79"],["/archives/2023/03/index.html","cfd0f9d6576918e56d5e2d19294492ee"],["/archives/2023/03/page/2/index.html","e40f07604d0ec66fb450aee51886fc40"],["/archives/2023/04/index.html","0a21709abcbbed1178ee83a9d8c35cf3"],["/archives/2023/index.html","cf6594c3169ef6f6b762e9daa5c5f39a"],["/archives/2023/page/2/index.html","4614db928ffbfd6870c09517214632d8"],["/archives/2023/page/3/index.html","76b69841d9d56318fe7952560222dcf2"],["/archives/2023/page/4/index.html","d67b6c6a07c936d1c9e36057f15e6fb3"],["/archives/index.html","4ff52f6d10d6d8d1fb5191cb7e25b3b3"],["/archives/page/2/index.html","f721c6552a772ec94573eae50daa7abb"],["/archives/page/3/index.html","aedb76018ae58a3eb73aaa92af496a0c"],["/archives/page/4/index.html","7c33438ab1abe35aff7a7fc7b7652aef"],["/archives/page/5/index.html","f47ec02cbcc9a7bd9df36344dfe96109"],["/archives/page/6/index.html","c5d3abf802e080bbc119f1102dabe9c9"],["/categories/bug记录/index.html","7d04ed4a505948332abdf404f35a9046"],["/categories/index.html","034f93780e7703384a8e61057b7927f0"],["/categories/学习/index.html","3b199d99f37f7e105c6d3f7bdf170c68"],["/categories/学习/page/2/index.html","ef8a38e33bd7dad46377c84796551e60"],["/categories/学习/page/3/index.html","d3f0dfd88d77758c06ffd3cac7f94be7"],["/categories/教程/index.html","863ac44b59f89f2b5043141c1059e994"],["/categories/教程/page/2/index.html","648b4f948946d0b0ade2d08bdb5edee3"],["/categories/日常/index.html","10d012a69c632e02eff009bc8a187e8a"],["/categories/项目/index.html","94a3aaa7f22acbb2f3746a392f69eeb3"],["/css/card_author.css","9a9481ed6678aa94f952335e82ea4d99"],["/css/color.css","6a98d0024aadcedd7433a6b87f37b81a"],["/css/css.css","259638246c3347091b4cd36443627a18"],["/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/css/index.css","b889e78f2fe18cf41584fc8d75beb968"],["/css/nav_menu.css","97a75d91a031304ca971fb9a55843c40"],["/css/progress_bar.css","91725815a662c9fd2e9d37aeae201b4a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/alipay.jpg","901c7b819577760c2b75a848da3f415b"],["/img/apple-touch-icon.jpg","8bc73d37a994c11957684fe51035b68c"],["/img/avatar.jpg","c431edfe68b90cccf15abbb5a0b032ca"],["/img/basketball.png","4761345d41783562cb6f15cb07b6d244"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/img1.png","b3384b52f66a60661c671fab8da5418c"],["/img/web_background.jpg","e2f1847a6cc71fb8eeae4894dd60e1d5"],["/img/wechat.jpg","e85a26f6392756ab0839709999ba10c1"],["/index.html","cbcf7f9bf2fd0d06552172833506aa60"],["/js/card_author.js","6f42ae8853789fa140194116ea8d1171"],["/js/console.js","dcccdf0eeb665e16a6e877e46467a9ee"],["/js/countup.js","8500a121f50e7a2e8a6d82d0904c1402"],["/js/light.js","80818b7ec271966c10c4ccf5244f8ef7"],["/js/main.js","b28662bf81abe2838d20faf2980f0034"],["/js/reward.js","e102668da7ca03e03f76bb7f8a9d8280"],["/js/runtime.js","8dbd83e79e24fddd816df42b553992c4"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/starry_sky.js","cbcf30f81a900ea816ae7d7719d2e409"],["/js/tw_cn.js","58cb9443474ea5d84a1c4ac806c8b4b7"],["/js/txmap.js","8f72de59ff58dae8f1f72e2b4b53e7fb"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/link/index.html","fcf66bba5ee82be8cefd9cfa3e516436"],["/love/index.html","596ea958ddd1cacd0df10d65db3f5bf9"],["/my_project/index.html","0cc9914f11e606e4a98c79a9cf0643f6"],["/page/2/index.html","323469939b998e8491561a77853b23c6"],["/page/3/index.html","111edf7f9916444222b5e5aaedc28440"],["/page/4/index.html","6222c17233fe5a026b0071ec1d784071"],["/page/5/index.html","7cdb5b535308a02306c720eee689cc15"],["/sw-register.js","0cb92e1fd69aa0cf0fb74a3f906b6009"],["/tags/C-C/index.html","cea4aea6e06272dadf86eb2fa31766ed"],["/tags/JAVAWEB/index.html","a0c34c4224bab68bb9c121a7002861d4"],["/tags/Java-Web/index.html","9819d58c620a65e3d749c67f4101e247"],["/tags/JavaScript/index.html","b70ff915195756bffe24bd4bf0101d5d"],["/tags/OpenAI/index.html","0ec37d71ee141d11e435d2e74fc4ca0b"],["/tags/PHP/index.html","4d99237d8fe61b78ac85ef402add9ee2"],["/tags/Python/index.html","a9a0a0844751a595b6e56aec4291e189"],["/tags/Servlet/index.html","65a64321569b7f1dd7972d13dd343b5a"],["/tags/Tomcat/index.html","9b900b65e1a0886ea752ff2c95f7ad41"],["/tags/Vercel/index.html","b80f45a36904433b89d544a7d222b16e"],["/tags/WampServer/index.html","c0a2daa9a486ea8d4cfb59d75487c4c8"],["/tags/butterfly/index.html","b4a5d2369d784a317b6a74f5039216c3"],["/tags/copilot/index.html","f2b1407c87217551560ebb032f68f540"],["/tags/css/index.html","8a953347cc72cb94f1888b4e39e847bb"],["/tags/hexo/index.html","6173c9d66c363f4211a3dcf4ec0726e1"],["/tags/index.html","78a8a1e9a4ee8219c6bc4599c1975c9a"],["/tags/node-js/index.html","ec82d2590e7f2fb337ee64ff0c00b14f"],["/tags/nvm/index.html","44e435cbaac2257a53574d12a7572aaa"],["/tags/paddle/index.html","a39d37cc8e318bc5af0e8a2e87ee95ad"],["/tags/paddle/page/2/index.html","f7fb8a004ed17fc321a15cac8cdc47bb"],["/tags/人工智能/index.html","30629555a9707c8ea6a5973b58ebd586"],["/tags/人工智能/page/2/index.html","85adc911e8679be1459a5a7dee150348"],["/tags/博客备份与恢复/index.html","dc56c50908c71ef37522668149a9f694"],["/tags/微信小程序/index.html","06fe8c9b60fe43f410829a18ab828717"],["/tags/操作系统/index.html","6b6343d7c864343af2179e24a922f5f8"],["/tags/数学建模/index.html","503c7e30040acbcfd6f8a4a5393a75e2"],["/tags/数据可视化Echarts/index.html","a980b181408e1f8b0db60180b6ae42bf"],["/tags/数据结构实训/index.html","8143ff50a58fd925b82734bdcaa1eb8d"],["/tags/文心一言/index.html","acf1cfc1a1c26826315999d21f2f0f82"],["/tags/新必应/index.html","42f03bee5c81b1a72638d01697711923"],["/tags/深度学习/index.html","94622eaf394f6aeafd15a8d1206c8554"],["/tags/深度学习/page/2/index.html","87ba27126115ad921d2eceed811d11bc"],["/tags/深度学习基础-卷积基本概念及经典模型复现/index.html","2df4886cb9832a078b81353cd5bee43c"],["/tags/深度学习基础-基础模型实战/index.html","f7338fe42df82b29e8fa15e86ad02810"],["/tags/深度学习基础-模型选择与调优策略/index.html","3fe1f3cef856963d79de599d3b014474"],["/tags/深度学习基础-深度学习总览与模型搭建/index.html","fca874f43f1561b113e844aa9b8d187f"],["/tags/深度学习高级-计算机视觉之图像分割/index.html","64b9cb01bdd88570342d2841dc6eceb3"],["/tags/深度学习高级-计算机视觉之目标检测/index.html","e3875ca9ed180444f14047ce8ad9c4d5"],["/tags/算法/index.html","5f2d2d63453558384c86f08dd7f4b259"],["/tags/网站部署/index.html","2a5b44ea3d1903e61086c5bcf377386d"],["/tags/计算机网络/index.html","71439a28c7daf70876e666b840d159bf"],["/tags/论文/index.html","bd16837c6924ea097559204b9c077089"],["/web_site/index.html","11426a24b1bc16bdd8322da94337f96a"],["/唠嗑/index.html","dc54e9b44d04e4fbde3b401f01a68943"],["/装修日志/index.html","f825db9df6908422d2c875a5f259dacd"]];
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
