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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "83d1a196c1a9c22c4db15145f849e74c"
  },
  {
    "url": "assets/css/0.styles.382af5d5.css",
    "revision": "6d079eb24adec22d599ddb69f525f6dd"
  },
  {
    "url": "assets/img/dashboard_delete.ab52830d.png",
    "revision": "ab52830d5f13a1a71827cf0fb38cc38f"
  },
  {
    "url": "assets/img/dashboard.1f3ba6c3.png",
    "revision": "1f3ba6c363c38c0f928ac0f4c64eb2dd"
  },
  {
    "url": "assets/img/delete_widget_after.04d9e5b4.png",
    "revision": "04d9e5b42ade37515949752446971bd3"
  },
  {
    "url": "assets/img/delete_widget_before.7e4a6f79.png",
    "revision": "7e4a6f79cb1289eea373e4413f7fd289"
  },
  {
    "url": "assets/img/delete_widget_delete.25cb1f83.png",
    "revision": "25cb1f837bef06faa990731d95ebc3ea"
  },
  {
    "url": "assets/img/new_dashboard.55b4df15.png",
    "revision": "55b4df153b45a7b1adea4cb3d5d1dfd2"
  },
  {
    "url": "assets/img/new_widget.bd389cee.png",
    "revision": "bd389ceef9d6420395a87ed5fc728662"
  },
  {
    "url": "assets/img/rule_choose_source.ee64cee0.png",
    "revision": "ee64cee0f1b9683b50823af7a7e8bea0"
  },
  {
    "url": "assets/img/rule_pick_actions.1f5b1a05.png",
    "revision": "1f5b1a055e37e167f2d6b3f2ed1c57b7"
  },
  {
    "url": "assets/img/rule_set_rule.529b06c7.png",
    "revision": "529b06c7dbb120bc9870dea65bfff06a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/things.c71179db.png",
    "revision": "c71179dbfec8ff0daa50119826004151"
  },
  {
    "url": "assets/img/users.2b9ffbeb.png",
    "revision": "2b9ffbeb7d0540f7486a64eeaf547d2a"
  },
  {
    "url": "assets/img/uvcam_hinges.3e67ecaf.png",
    "revision": "3e67ecafdb26010a3ec115301010cacc"
  },
  {
    "url": "assets/img/uvcam_psu_housing.90a77e18.png",
    "revision": "90a77e18ffedd34ea1663ffae5cc82c7"
  },
  {
    "url": "assets/img/uvcam_psu.47be3a31.png",
    "revision": "47be3a311fbc1a3049c427b5d8422a6d"
  },
  {
    "url": "assets/img/uvcam_software.3374de53.png",
    "revision": "3374de5328ccdb5c14a496178f051fac"
  },
  {
    "url": "assets/img/widget_resize.b64f6887.png",
    "revision": "b64f6887e1f854ea709b352f64401fb6"
  },
  {
    "url": "assets/img/widgets.e0b4c6b9.png",
    "revision": "e0b4c6b9ce7420c953e50b1de3c2327c"
  },
  {
    "url": "assets/js/10.83aa44e1.js",
    "revision": "e801478e715cad8c6f17d1df042a5f89"
  },
  {
    "url": "assets/js/11.b6e26488.js",
    "revision": "d5fe1ba3d7fc87756eecd6a51e104b5f"
  },
  {
    "url": "assets/js/12.b3d0789a.js",
    "revision": "54aae8a0c10e0a07bfa2c07853b92291"
  },
  {
    "url": "assets/js/2.6c2bbd64.js",
    "revision": "758878380e40f7449bc93a03a2e9eda0"
  },
  {
    "url": "assets/js/3.10a6aa2c.js",
    "revision": "b3d4b7d07699c4e9a23008079659e8a9"
  },
  {
    "url": "assets/js/4.eb8f0d38.js",
    "revision": "35d357d40a834c21718f410129eb22a0"
  },
  {
    "url": "assets/js/5.648d7272.js",
    "revision": "0e3a96913134a026d1f3b108f231214f"
  },
  {
    "url": "assets/js/6.71e8ed9d.js",
    "revision": "fd298ed8bed335619107f530514e4550"
  },
  {
    "url": "assets/js/7.ee399fca.js",
    "revision": "9f2c8d266e2c554c6f134549a5c5087c"
  },
  {
    "url": "assets/js/8.44919cb8.js",
    "revision": "1f6f25f9282039fd0ae82e588b30a7da"
  },
  {
    "url": "assets/js/9.da0df6c4.js",
    "revision": "49a308198830671e0a8fd634923cbdf2"
  },
  {
    "url": "assets/js/app.05f4314f.js",
    "revision": "d52acafa3fdee10307232de8fbc76458"
  },
  {
    "url": "datalog/dashboard.html",
    "revision": "490a0558855b67e2f9614c23802ef1df"
  },
  {
    "url": "datalog/introduction.html",
    "revision": "5204e62cf8673d6f35eefbe4f9d4dffd"
  },
  {
    "url": "datalog/settings.html",
    "revision": "ac3c9f8c09cab9a161d5b0c856d6664e"
  },
  {
    "url": "datalog/things.html",
    "revision": "464d9bb9122502f38648a10186daab92"
  },
  {
    "url": "index.html",
    "revision": "765dc558e63bf5027c551063e884f7c1"
  },
  {
    "url": "temperature/introduction.html",
    "revision": "6e192b52e419fb76261877e7b4ccf8ce"
  },
  {
    "url": "uvcam/introduction.html",
    "revision": "d50027fd97d2ebe62880b40d843f53f4"
  },
  {
    "url": "uvcam/mounting.html",
    "revision": "2c40b7eb57b9f414a2cfeb4bf2e66c3b"
  },
  {
    "url": "uvcam/software.html",
    "revision": "12c49b9d72bf8e08cb9e72de408660e5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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
