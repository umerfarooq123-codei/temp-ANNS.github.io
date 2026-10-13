'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "a3b02de8633175b8d0d1b8dc35d60e84",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"et_logo.png": "b035d1e23aa983a5e4bf7f4197526530",
"flutter_bootstrap.js": "3fd5b79fb1e189a74bb2950356af4655",
"assets/AssetManifest.bin.json": "49d303fbbce9cc4ff8839728ab3d21ee",
"assets/AssetManifest.json": "342b527bb07c761ad66ede7fd3bd352c",
"assets/assets/svg/add-edit-student-admission.svg": "3ae0e4120b4f794b83082de55e8e1e8f",
"assets/assets/svg/reports-icon.svg": "b5559f344b3694e9d962ef21b1d01674",
"assets/assets/svg/back-button-top-bar.svg": "edbea8541ce32b56d3f1835ca844589b",
"assets/assets/svg/portal-settings-marketing-crm.svg": "2c5d079cceaf620f281a0ae88c19d451",
"assets/assets/svg/dashboard-menu-red.svg": "6edb77c3b945e747290cd3720786063f",
"assets/assets/svg/warning-appeals-admission.svg": "4ae3bdacd6090f8e4556746143700514",
"assets/assets/svg/dasboard-top-bar.svg": "0bd074b40c0ec91ac7d4b4faaed345d1",
"assets/assets/svg/help-documents-menu-red.svg": "9d7cf1cf561347391d5d94d76b96ed5f",
"assets/assets/svg/downloadable-material-top-bar.svg": "93c23a07ee476f8d3d4d443f4f4538c8",
"assets/assets/svg/all-student-admission.svg": "2ac2470cacb66951b00f74f716f6631b",
"assets/assets/svg/portal-settings-dashboard.svg": "2c5d079cceaf620f281a0ae88c19d451",
"assets/assets/svg/download-materials-white.svg": "a95556dbd20e45624dd9ba12133cbb2f",
"assets/assets/svg/digital-materials-download-materials.svg": "21ee3447454535513e43092a0132dbcd",
"assets/assets/svg/admission-dashboard.svg": "582913874ebb36f83cffb0b140a5b3fb",
"assets/assets/svg/letter-request.svg": "e9b4ced4748cb9b0c6f579984f545e1c",
"assets/assets/svg/placement-test-dashboard.svg": "eca7728fa56d583737c68179c6bddfae",
"assets/assets/svg/campaigne-download-materials.svg": "503d51caf6c61ced7b99e2938e90f761",
"assets/assets/svg/student-inquiry.svg": "39bbc97f280aef7b4a397c62cd5ecf14",
"assets/assets/svg/admisson-menu-white.svg": "bd27f19cd03434267e42fd437528d8a7",
"assets/assets/svg/email-campeignes-marketing-crm.svg": "8e81f12043a2f2f5feea74b95227d9c6",
"assets/assets/svg/create-ticket-dashboard.svg": "ae2ceb8633fdd330d545a2331853c3b8",
"assets/assets/svg/flyer-brochures-download-materials.svg": "84948d8d87e96e125fa267d9a92c0e08",
"assets/assets/svg/admission-top-bar.svg": "8692fbb69b76c35d430e01110bbf9d3c",
"assets/assets/svg/social-media-items-dashboard.svg": "b7acfa44267b15ffeeac38d981d0af94",
"assets/assets/svg/social-media-items-download-materials.svg": "b7acfa44267b15ffeeac38d981d0af94",
"assets/assets/svg/attendance-admission.svg": "67c138594de5bd7c8536e3707f4de87b",
"assets/assets/svg/expo-fair-materials-dashboard.svg": "8889bd4c0f044fb13927ffc627914176",
"assets/assets/svg/brand-logo-download-materials.svg": "f39e28bb05ea14f26ea3a53edcd6cccd",
"assets/assets/svg/help-centre-top-bar.svg": "ead3aafc5941ae0191b41c8d9c4a9970",
"assets/assets/svg/create-letter-admission.svg": "da77c99e3027da332ea667e743760cdd",
"assets/assets/svg/active-student-admission.svg": "710d4e669bb847b175c025a2241c4e87",
"assets/assets/svg/do-you-have-question-download-materials.svg": "9ccb6582c165a5ebb0eb501978df5ead",
"assets/assets/svg/marketing-crm-top-bar.svg": "80f83adf78a8016039bcf38c2d40d7c2",
"assets/assets/svg/admisson-menu-red.svg": "bd27f19cd03434267e42fd437528d8a7",
"assets/assets/svg/dashboard-menu-white.svg": "a90890ef0e91c65b0f260ff695280261",
"assets/assets/svg/help-documents-menu-white.svg": "84ded05b41a8fbdcb845bdc415efd09f",
"assets/assets/svg/digital-marketing-marketing-crm.svg": "da07d904aab7d5ea88e64ace942d1f41",
"assets/assets/svg/price-list-download-materials.svg": "44b21b2fe9cac5fd13f1a1fe1f0558d2",
"assets/assets/svg/other-materials-download-materials.svg": "8fb2a4af15e919f52f3a57c9d6d95c9f",
"assets/assets/svg/marketing-CRM-menu-white.svg": "6de460c1081ef5c78f0494a0edac1b29",
"assets/assets/svg/download-materials-red.svg": "a95556dbd20e45624dd9ba12133cbb2f",
"assets/assets/svg/insurances-dashboard.svg": "ae7ad54a1734edaae02064503e6d3a60",
"assets/assets/svg/Lead-management-marketing-crm.svg": "ded15dbd357e6f5ff5076a02a431b7b7",
"assets/assets/svg/report-analysis-dashboard.svg": "3cdb935e999ba0324d43a397fc9c4d39",
"assets/assets/svg/expo-fair-download-materials.svg": "f92083f0abff1215f2343cfccc91e88d",
"assets/assets/svg/download-materials-dashboard.svg": "f0ddfec742921e4d019ff1b5f3cac664",
"assets/assets/svg/marketing-crm-dashboard.svg": "84e4042012839368f0621798824d4996",
"assets/assets/svg/ready-letters-admission.svg": "aca29e6c1e536d3324aba6ab70d7a1ce",
"assets/assets/svg/help-documents-admission.svg": "4e1f08daec39d9751d6726be6051241f",
"assets/assets/svg/marketing-CRM-menu-red.svg": "9c427fd042dc1196b00a9db8f74280e5",
"assets/assets/svg/deregistration.svg": "216cd572d06db36a3157a8b14d63a049",
"assets/assets/images/et_logo_progress.png": "b035d1e23aa983a5e4bf7f4197526530",
"assets/assets/images/error.jpg": "09b0f1d653d9befded8371591617bdba",
"assets/assets/images/ET_logo.png": "da95a76ef2c67f010cf31c5eb4fe9033",
"assets/assets/images/map.png": "0ef0e3d1f03c730889f9c025700e4fd9",
"assets/assets/images/ET_logo_1.png": "eb90e02bcecc87a4b0c16e18a7017e33",
"assets/NOTICES": "729161d7160004ba0ad7f0de0eff1a63",
"assets/AssetManifest.bin": "c6d9f4f2304b721b26931e9839e3b8f1",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "3759b2f7a51e83c64a58cfe07b96a8ee",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/youtube_player_iframe/assets/player.html": "663ba81294a9f52b1afe96815bb6ecf9",
"assets/FontManifest.json": "b4ff7443faeba2572a71e1a92005546e",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "a7d8b1fee684d0c8dc4a7ed4a98605b1",
"index.html": "3497890079007f010fafc91bb5d151e1",
"/": "3497890079007f010fafc91bb5d151e1",
"version.json": "690b7bba490cb114cdc846af43e2f2eb",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "7eee90b47fa3873a717fbe029764d6ce",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
