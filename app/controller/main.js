'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        let renderer = this.app.renderer;

        let context = {
            url: this.ctx.request.url
        };

        renderer.renderToString(context, (err, html) => {
            if (err) {
                if (err.code === 404) {
                    this.ctx.body = "404";
                } else {
                    this.ctx.body = process.env.NODE_ENV;
                }
            } else {
                this.ctx.body = html;
            }
        });
    }
}

module.exports = HomeController;