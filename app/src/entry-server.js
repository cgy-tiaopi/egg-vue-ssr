import { createApp } from './app';

// const { createApp } = require('./app');

console.log(createApp);

export default context => {
    // const { app } = createApp(); 
    // return app;

    return new Promise((resolve, reject) => {
        const { app, router } = createApp();

        router.push(context.url);

        router.onReady(() => {
            const matchedComponents = router.getMatchedComponents();

            if (!matchedComponents.length) {
                return reject({
                    code: 404
                });
            }

            // 返回app实例，使应用程秀开始渲染
            resolve(app);
        }, reject);
    });
};