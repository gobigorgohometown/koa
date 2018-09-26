const Koa = require('koa');
const app = new Koa();
app.use(async(ctx)=>{
    //ctx 相当于上下文对象
    let url = ctx.url;
    //从request中接受request请求
    let request = ctx.request;
    let req_query = request.query;
    let req_querystring= request.querystring;

    //从上下文中直接获取get请求

    let ctx_query = ctx.query;
    let ctx_querystring = ctx.querystring;

    ctx.body = {
        url,
        req_query,
        req_querystring,
        ctx_query,
        ctx_querystring
    }
});

app.listen(3000,()=>{
    console.log('[gettest] server is starting at port 3000');
    
})