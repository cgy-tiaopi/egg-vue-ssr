const { createBundleRenderer } = require('vue-server-renderer');
const serverBundle = require('./app/public/dist/vue-ssr-server-bundle.json');
const clientManifest = require('./app/public/dist/vue-ssr-client-manifest.json');
const path = require('path');
const file = require('fs');

class AppBootHook {
    constructor(app) {
        this.app = app;
    }

    // 配置文件加载完毕事件
    async willReady() {
        let renderer = createBundleRenderer(serverBundle, {
                runInNewContext: false,
                template: file.readFileSync(path.join(__dirname, './app/public/index.html'), 'utf-8'),
                clientManifest
            });

        this.app.renderer = renderer;
    }
}

module.exports = AppBootHook;