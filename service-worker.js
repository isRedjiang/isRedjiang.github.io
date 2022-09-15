/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "daf94e7ca3f7e59aac87808755c13aa6"
  },
  {
    "url": "about/index.html",
    "revision": "96697400c14d9fac63e04d3ed93c57c9"
  },
  {
    "url": "assets/css/0.styles.71ec635f.css",
    "revision": "b08dbbb5ee0011924818940fd18b5998"
  },
  {
    "url": "assets/img/claw.f886b8d5.svg",
    "revision": "f886b8d5021c8af029e2cd4dea609bcc"
  },
  {
    "url": "assets/js/1.c0cca1a1.js",
    "revision": "8235f739ff31038967f4fd2303375304"
  },
  {
    "url": "assets/js/10.9719f717.js",
    "revision": "f55de1628b1e3182268116658fd442b6"
  },
  {
    "url": "assets/js/11.68c6928d.js",
    "revision": "dec10ea59ffc58ac83a38c65e9f1600e"
  },
  {
    "url": "assets/js/12.cfd2ce01.js",
    "revision": "7f2d45b4ffe5568a23f9b996e3ff1e95"
  },
  {
    "url": "assets/js/13.c8195877.js",
    "revision": "acdcfff7a63349420d91f87c801a48fc"
  },
  {
    "url": "assets/js/14.e0442470.js",
    "revision": "1a316900f2fc1117a1bb77666442f016"
  },
  {
    "url": "assets/js/15.c9b4d1a6.js",
    "revision": "2f8d7489293caee31d6356671d33d641"
  },
  {
    "url": "assets/js/16.0d1c87ec.js",
    "revision": "14665c2df1f79288a1c3fb4441c09c5f"
  },
  {
    "url": "assets/js/17.5ac4fd90.js",
    "revision": "42dee2718598a7bd29654efcf5e2a8fd"
  },
  {
    "url": "assets/js/18.af548207.js",
    "revision": "8da90fbe5889dd6ba683d92f17862bca"
  },
  {
    "url": "assets/js/19.807a49ec.js",
    "revision": "0ba9f991a7fe9271401f73ad09ad703a"
  },
  {
    "url": "assets/js/20.3f047a79.js",
    "revision": "972518939d954ce58d8175d785ffbe81"
  },
  {
    "url": "assets/js/21.9423a946.js",
    "revision": "4b559d373390a76e5b7be5b44911abd3"
  },
  {
    "url": "assets/js/22.45ffb505.js",
    "revision": "784d013feb363a0259e6d49c8b6bcb27"
  },
  {
    "url": "assets/js/3.34832416.js",
    "revision": "4c656450f5aac0c59e7d987fab4b0af2"
  },
  {
    "url": "assets/js/4.d995f441.js",
    "revision": "007252d3ea876273722a003020a56785"
  },
  {
    "url": "assets/js/5.7492546a.js",
    "revision": "74470b6d5156bb095e5cf6038446fe21"
  },
  {
    "url": "assets/js/6.83888e48.js",
    "revision": "8af9dde6b981c01d709f0e7a979f7a99"
  },
  {
    "url": "assets/js/7.1e83acef.js",
    "revision": "2f42a1a77ce9799724a508506a623f98"
  },
  {
    "url": "assets/js/8.5ead6d46.js",
    "revision": "ca09d3e59c3f8aab31bd6deee299c2da"
  },
  {
    "url": "assets/js/9.e11c6f33.js",
    "revision": "992af893e665bd7bf48f041b60d5f486"
  },
  {
    "url": "assets/js/app.579ed344.js",
    "revision": "39bc3d23be7e5170092f8818637677b3"
  },
  {
    "url": "avatar.png",
    "revision": "87066313bd115c0d3c7d2aa3cb66a2a2"
  },
  {
    "url": "bg.gif",
    "revision": "c410e4c88117101925f7134b8938979a"
  },
  {
    "url": "blogcover/%5GHJ]KWH8EFCDYWW9%P2FG.png",
    "revision": "51a65774b473c8d20c9ea3076ef30c88"
  },
  {
    "url": "blogcover/0223833fdf1f4c34a628d8308b60ebe4.jpg",
    "revision": "2f89ef53cb60ce1fcc2ffb371ab4afc7"
  },
  {
    "url": "blogcover/058fe486bd784f28875a7a01f68d09de.jpg",
    "revision": "d35931f6b21ec40726ffec78cd2a393f"
  },
  {
    "url": "blogcover/09bd55b166e7468f99ae439e133a2d1e.jpg",
    "revision": "3234d2534ebf9877e5db70b1e560b697"
  },
  {
    "url": "blogcover/0a3e61d9a57c49de80839cca0d98f2b5.jpg",
    "revision": "18e8770e224eb57254e320617fa84100"
  },
  {
    "url": "blogcover/0b049d001eb347b7b14fc311118d8b6c.jpg",
    "revision": "042b4b2294fa65199c804a2d8d7ace5a"
  },
  {
    "url": "blogcover/104fdc6e37264c62bd8a470c2e2c8d9b.png",
    "revision": "38f41073a455475b49c1819f37b0c91c"
  },
  {
    "url": "blogcover/112080.jpg",
    "revision": "16d11b3594aec4e6a59ac64fd4498dde"
  },
  {
    "url": "blogcover/1260688.jpg",
    "revision": "585d38bcd54f0a034ec1e447437d1dff"
  },
  {
    "url": "blogcover/15fa4d3d375c411a95e0815b19257968.png",
    "revision": "d599097df6a723e637380026e5d0d3a0"
  },
  {
    "url": "blogcover/17d64770e74a442aa93eca1d1cc0a139.jpg",
    "revision": "d5e541bb40b8323824d0e08259663fcb"
  },
  {
    "url": "blogcover/1cdd12d9e59f408c82ac6c8c8a75055f.jpg",
    "revision": "8b6393973e72cdf52c085452f9b0af5a"
  },
  {
    "url": "blogcover/234994ef162142349b5bb46e372796ca.jpg",
    "revision": "5244398307f33e138fcb3462c7dfdd06"
  },
  {
    "url": "blogcover/2591d7a1c8f24181a764b3b30987d791.png",
    "revision": "92f8b00c6889c2ce0afd0d6ee55745f5"
  },
  {
    "url": "blogcover/27524ac7880511ebb6edd017c2d2eca2.jpg",
    "revision": "d2158376b341f44674dce876eac958cf"
  },
  {
    "url": "blogcover/29842afd880511ebb6edd017c2d2eca2.jpg",
    "revision": "75e96fe9408eb23027c42a472c98d772"
  },
  {
    "url": "blogcover/29938218043f4bb18f28a4747358767c.jpg",
    "revision": "30981bdbff12594764f2ca812f41e858"
  },
  {
    "url": "blogcover/2b838b1569ce4063b1766727ed46a7ca.jpg",
    "revision": "1c45510811c77205a54ee0892283b817"
  },
  {
    "url": "blogcover/2c61b17b880611ebb6edd017c2d2eca2.jpg",
    "revision": "6e84abe40b77809fbb5acaf7ae7f6af2"
  },
  {
    "url": "blogcover/2dbce38cf08d4aa5931081e907de21c1.jpg",
    "revision": "a5e67501cfa1b8ec79aca1d9181bf024"
  },
  {
    "url": "blogcover/2f9f872c6a11447ea172f97a8d1e21f9.png",
    "revision": "d2db060af0269c64685b55995cb4f1c1"
  },
  {
    "url": "blogcover/35d9316f450041b89232893f083a57f1.jpg",
    "revision": "d65ac25847667c1c0a19fccc0f12f792"
  },
  {
    "url": "blogcover/375f91ff181a4a19a12894a8cfbd0552.jpg",
    "revision": "ec829c47c52a238a2d524452093a0384"
  },
  {
    "url": "blogcover/3d107f0491244691b28d59c91645d1e1.jpg",
    "revision": "1bc142c76b42212595585141c2271394"
  },
  {
    "url": "blogcover/433387c3882211ebb6edd017c2d2eca2.jpg",
    "revision": "a57cf16281d002157a3ddeadc009d07f"
  },
  {
    "url": "blogcover/4509ab83679945bfb12ccb66ef818784.jpg",
    "revision": "42b6b151284b078f905475716a51a3b7"
  },
  {
    "url": "blogcover/45faaa549400488ca99aa88c4ca63aba.jpg",
    "revision": "ed99de57c876ef636a2742a17dae3664"
  },
  {
    "url": "blogcover/4c1b704ee20e4b5fa28fcac2a82a32d5.jpg",
    "revision": "a77db33df4eb5fcbfba15f090be5ac2e"
  },
  {
    "url": "blogcover/4IT(L__UGPTO6AJ@GM0(TPU.png",
    "revision": "60ff2608e69fc01db42fe91c901e4b82"
  },
  {
    "url": "blogcover/5237b906372c4c28b29a7b9b1c81c35f.jpg",
    "revision": "8994fc335227501268c78e86f22a4438"
  },
  {
    "url": "blogcover/53a8dacdd4c044d09d81cb4795289be8.png",
    "revision": "7faf2d572830663af63d32b18c73dae7"
  },
  {
    "url": "blogcover/53d0e3ed9f824fa4954909c1647b3efd.jpg",
    "revision": "341680de62d050a6fde14bcbe624ed41"
  },
  {
    "url": "blogcover/59550a209df94aa6a76b9e48e133dc96.png",
    "revision": "f1d38db812a321cfc6ab5e11da5e10f2"
  },
  {
    "url": "blogcover/5af17f7f881b11ebb6edd017c2d2eca2.jpg",
    "revision": "0cc7372362ff95755673557f87149f52"
  },
  {
    "url": "blogcover/5c23d52f880511ebb6edd017c2d2eca2.jpg",
    "revision": "d2d652f55cd647c3993cbf19ab45f831"
  },
  {
    "url": "blogcover/5e16a6ce67604727becb241ead6c5a20.jpg",
    "revision": "d461f7ef3773f2dcd59b6d198f328fad"
  },
  {
    "url": "blogcover/5e61c24eed404b829963123a406a834f.jpg",
    "revision": "851b6b4f0c7039c43e59dffb93d10597"
  },
  {
    "url": "blogcover/6d59a41674704b77a14fef7279a37f2d.jpg",
    "revision": "76b138936d1aaeee89c3833a11aaec50"
  },
  {
    "url": "blogcover/769c220e2e5745e58ed663896e33be16.jpg",
    "revision": "daf825382e09cdf484aa924bcf82bca8"
  },
  {
    "url": "blogcover/8084dca06c794b1cb79a6236acbfcf2d.jpg",
    "revision": "47775650400dabc1ab31ca7a5ecdf232"
  },
  {
    "url": "blogcover/83eec0c90f224797aeb170cd11e6ce76.jpg",
    "revision": "179378214aad2078610a12cd033ff4ad"
  },
  {
    "url": "blogcover/895a30549fc64e57a8b0b09f0740e98c.jpg",
    "revision": "3bce790714638b9f7be726487804e9d7"
  },
  {
    "url": "blogcover/8PKBWN]OKF)V(`WL]}VR753.png",
    "revision": "a2ad8f48f64e9e8643cc36e4c04132b9"
  },
  {
    "url": "blogcover/9d24be1b931c444d8b9f362b5ada2205.jpg",
    "revision": "ce63ab370e617eb9b303044d6a7ff5b6"
  },
  {
    "url": "blogcover/a0d9084babd04367afd23ea58e768f9f.jpg",
    "revision": "a0a469435a3cf3a87bf49c178d9ea3c7"
  },
  {
    "url": "blogcover/a7bd6883e9834ecd9077596233ad1529.jpg",
    "revision": "7e0164c26190ddaf46677ebe58794d09"
  },
  {
    "url": "blogcover/a99e988f8be645c0b30949486524b4a8.jpg",
    "revision": "7c07053ae0760c3e7d0b7fc3a03306aa"
  },
  {
    "url": "blogcover/a9c352ec56a5437a80b8c30000689daf.jpg",
    "revision": "21dd9a6629d30ebfeb5647a08aaf13d0"
  },
  {
    "url": "blogcover/b20ef7ed80304190a81162b1b5036343.jpg",
    "revision": "caec13c5a2d2d501f18d6bca0972f3bc"
  },
  {
    "url": "blogcover/b86b2f72f0744a28a3001fbaf91a5757.jpg",
    "revision": "d42af0ac38141cf92534c6927f26ab32"
  },
  {
    "url": "blogcover/bfc2f86091ca4a9cbeeccfbb7aa37f21.jpg",
    "revision": "b8b2fe15bd6e83641885f5cf6bde1544"
  },
  {
    "url": "blogcover/c071cdc46f0c4867a1d52d0cb51fc6d6.jpg",
    "revision": "6810b4886b53394eef8eee0e838522c3"
  },
  {
    "url": "blogcover/c0b418d39a3444e997791a823bc6bea3.jpg",
    "revision": "2a8aa40694a2f16a575f3fb3179323ce"
  },
  {
    "url": "blogcover/c0f72debd16c4deebd65572d781a1856.jpg",
    "revision": "6a87daecdd8d735de41501d029b8b8a5"
  },
  {
    "url": "blogcover/c534b902ebbd4ab8be7b2a245d2cfd76.jpg",
    "revision": "be85006c50b0c217febd0feb9cfb5236"
  },
  {
    "url": "blogcover/c58bc3a7880911ebb6edd017c2d2eca2.png",
    "revision": "efd6f343ba9775b0f564f01c55487aca"
  },
  {
    "url": "blogcover/c89083824f074c0bad71a976de306a83.jpg",
    "revision": "3d96d5225d73b6031d0c95e5c3181891"
  },
  {
    "url": "blogcover/c9507fa7e3dd4da4bc5c6f54ed2085b7.jpg",
    "revision": "568529e2c72bff0c342b4fe90e42c45b"
  },
  {
    "url": "blogcover/cb9f067867d44282afe01b0340e54d59.jpg",
    "revision": "b5e1c76969848b000b1463b8bad22bc2"
  },
  {
    "url": "blogcover/ccf8c903f3374e259c8562cecdfd7849.jpg",
    "revision": "755b100f0be93ab9c2954b1516cf3850"
  },
  {
    "url": "blogcover/cd2e73d2880511ebb6edd017c2d2eca2.jpg",
    "revision": "ff119ea37f6b5ff448e8cb72e96007e0"
  },
  {
    "url": "blogcover/d0e5ee3adf7244cc836d950c270e995a.png",
    "revision": "fd97171373e2499fd8eb7e6c58f2a9f2"
  },
  {
    "url": "blogcover/e3408389cb0d4ea1b5f651873dab2a19.jpg",
    "revision": "1ba788ed900d5b62eca6bfb47bff1008"
  },
  {
    "url": "blogcover/f8a48eab83c64ce69c039135d6031188.jpg",
    "revision": "84912e9e5d230f64015c5cc0c11449e0"
  },
  {
    "url": "blogcover/fcbf221cd5e74cf0863d72626e435758.png",
    "revision": "5218fd60df4bac31b9c3ca9f60507307"
  },
  {
    "url": "blogcover/header.jpg",
    "revision": "5cfdef69e771aea441d2a6d85223110c"
  },
  {
    "url": "blogs/other/guide.html",
    "revision": "096a623720470ca4c9fb144320db9e66"
  },
  {
    "url": "blogs/tec/2017/092101.html",
    "revision": "8caacfbea89ccb6adaa8169768ffd143"
  },
  {
    "url": "blogs/tec/2017/092102.html",
    "revision": "fca30cd03a4b847a6da51423a3dc4503"
  },
  {
    "url": "blogs/tec/2020/2020-2-6-Markdown常用语法.html",
    "revision": "6c961897073bfad0228653bb64b70a6f"
  },
  {
    "url": "categories/index.html",
    "revision": "74c68ffaa5148b91cb3d22c577544e3e"
  },
  {
    "url": "categories/心情物语/index.html",
    "revision": "b6042d5377c15b8abee509a0b1b04105"
  },
  {
    "url": "categories/知识杂烩/index.html",
    "revision": "0aa35fb5b03818ca83bf239eecf83e2f"
  },
  {
    "url": "comment.gif",
    "revision": "c410e4c88117101925f7134b8938979a"
  },
  {
    "url": "cover1.jpg",
    "revision": "45d06bde37fc356a9341cdf4c211c40b"
  },
  {
    "url": "cover2.jpg",
    "revision": "657452986bf2117997777f6f97273014"
  },
  {
    "url": "cover3.jpg",
    "revision": "7a80bb2f2dbcddcc85609964fe926bfc"
  },
  {
    "url": "cover4.jpg",
    "revision": "e5ba03eba8083425b32b87a5b6aec2cb"
  },
  {
    "url": "cover5.jpg",
    "revision": "864b2b464377a036a54441654983a4ba"
  },
  {
    "url": "cover6.jpg",
    "revision": "d14dafda83cd2489234365dd2e849180"
  },
  {
    "url": "cover7.jpg",
    "revision": "5618e78603b8ebf6de5ca6473ca5bfbd"
  },
  {
    "url": "docs/theme-reco/api.html",
    "revision": "ae6d29406f0c9ce56e10a86883cc51c8"
  },
  {
    "url": "docs/theme-reco/index.html",
    "revision": "a4a7c71459e1318d5a3ef85e4edb1d95"
  },
  {
    "url": "docs/theme-reco/plugin.html",
    "revision": "1267dc03b62dbdb07a3f919fde914a71"
  },
  {
    "url": "docs/theme-reco/theme.html",
    "revision": "41b50e972d6e4cb7bb60a78a317398bf"
  },
  {
    "url": "hero.png",
    "revision": "5367b9349d4e048235eeed50d9ef36df"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "3695bcdce5126c062d77868b6adb30cf"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "de92e6f07a3982d983a8614ded271dce"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "8bf5139e11a674bd6fd8bc1e1cf67910"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "371574641fbced0264ab7fa5bc7a17ec"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "781ecb1548f8d8900febce18379d714f"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "9d1348cae48d568d911f0d245c4f7de4"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "a45eb4df808b28c6650b83c015c0798c"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "3cb8c5de7b1ef0ea613ed258775a6bee"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "b63551282cf27fb77c52b1d3a1c59b24"
  },
  {
    "url": "index.html",
    "revision": "4fbc91f794be546aa66914de2986496c"
  },
  {
    "url": "live2d/unitychan/assets/moc/unitychan.2048/texture_00.png",
    "revision": "d2016f474e091b863d35dac6f12bd801"
  },
  {
    "url": "logo.png",
    "revision": "f318926d90b3e4339a572ea647ede290"
  },
  {
    "url": "tag/index.html",
    "revision": "d42361af741c31143a90c49facd23372"
  },
  {
    "url": "tag/Markdown/index.html",
    "revision": "d4454b3557921e9368c71eca66d4c91f"
  },
  {
    "url": "tag/产品设计/index.html",
    "revision": "0ea764cb75d8ed9e010fe70bdf1adf61"
  },
  {
    "url": "tag/消息系统/index.html",
    "revision": "6d086f214df591c33d7e0074193bbfee"
  },
  {
    "url": "timeline/index.html",
    "revision": "f9c7c738635aed968a473e7f5b33d08f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
