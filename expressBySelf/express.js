function express(){
    function app(){};
    app.fns = [];
    //配置中间件
    app.use = function( path, fn ){
        if( typeof path == 'function'){
            fn = path;
            path = "/";
        }
        this.fns.push( {
            path:path,
            fn:fn
        });
    }
    //配置路由
    app.get = function( path, fn ){
        //console.log( "path=" + path );
        this.fns.push( {
            path:path,
            fn:fn
        });

    }


    app.start = function( req, res ){
        //console.log( app.fns );

        var index = 0;//当前路由索引
        //next 函数
        function next(){
            //取出一层路由
            var layer = app.fns[index];
            var length = app.fns.length;
            //console.log( req.url, layer.path );
            if( index < length ){
                index ++;
                //console.log( req.url, layer.path );
                //判断请求路径与当前路径是否匹配
                if( req.url == layer.path ){
                    //如果匹配成功 执行当前路由的回调函数
                    layer.fn( req, res, next );
                }else {
                    //匹配不成功 执行下次递归
                    next();
                }
            }else{//如果所有的都没有匹配上 就返回404
                res.end("404 Not Find!");
            }
        }
        //调用next
        next();

    }

    return app;
}

module.exports = express;
