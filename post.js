const Koa  = require('koa');
const app = new Koa();
app.use(async (ctx) =>{
    if (ctx.url === '/' && ctx.method === 'GET') {
        //显示表单页面
        let html = `
            <h1>Koa2 request POST</h1>
            <form action='/' method='POST'>
                <p>username</p>
                <input type="text" name = 'userName'>
                <p>age</p>
                <input type="text" name = 'age'>
                <p>websites</p>
                <input type="text" name = 'websites'>
                <button type='submit'>Submit</button>
            </form>
        `;
        ctx.body = html;
    }else if(ctx.url === '/' && ctx.method == 'POST'){
        ctx.body='接收到POST请求'
        
    }else{
        ctx.body = '<h1>404 Error!</h1>'
    }
})

app.listen(3000,()=>{
    console.log(' server is starting at 3000 port');
    
})