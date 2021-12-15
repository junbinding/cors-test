'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      code: 0,
      msg: '请求成功',
    };
  }
}

module.exports = HomeController;
