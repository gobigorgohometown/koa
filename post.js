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
        
        let postData = await parsePostData(ctx);   
        ctx.body=postData; 
        
    }else{
        ctx.body = '<h1>404 Error!</h1>'
    }
})

let parsePostData = (ctx) =>{
    return new Promise((resolve,reject)=>{
        try {
            let postData = ""; //放置post参数
            ctx.req.addListener('data',(data)=>{
                postData +=data;
            })
            ctx.req.on('end',()=>{
                let parseData = parseQryStr(postData)
                resolve(parseData);
            })

        } catch (error) {
            reject(error)
        }
    })
}

let parseQryStr = (str)=>{
    let qryData = {};
    let qryStrList = str.split('&');
    for (const [index,value] of qryStrList.entries()) {
        let indexList = value.split('=');
        qryData[indexList[0]] = decodeURIComponent(indexList[1])
    }
    return qryData;
}

app.listen(3000,()=>{
    console.log(' server is starting at 3000 port');
    
})