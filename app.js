const Koa = require('koa')
const Router = require('koa-router')
const static = require('koa-static');

const app = new Koa()
const router = new Router()


router.get('/', (ctx, next) => {
  ctx.body = `您的网址路径为:${ctx.request.url}`
});
//静态资源
app.use(static(__dirname + '/static'))

//路由
app  
  .use(router.routes())
  .use(router.allowedMethods())

//端口
app.listen(80)