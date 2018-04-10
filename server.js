var express = require('express');
var webpack = require('webpack');

var path = require('path');
var webpackConfig = require('./build/webpack.config');

var isProd = process.env.NODE_ENV === 'production';

var app = express();

if (isProd) {
    app.get('/', function (req, res) {
        res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
    });

} else {
    var compiler = webpack(webpackConfig);
    var devMiddleWare = require('webpack-dev-middleware')(compiler, {
        publicPath: webpackConfig.output.publicPath,
        stats: {
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }
    });
    app.use(devMiddleWare);
    app.use(require('webpack-hot-middleware')(compiler));
    var mfs = devMiddleWare.fileSystem;
    var file = path.join(webpackConfig.output.path, 'index.html');
    app.get('*', function (req, res) {
        devMiddleWare.waitUntilValid(function () {
            var html = mfs.readFileSync(file);
            res.end(html);
        })
    })
}

var port = isProd ? (process.env.PORT || 80) : 3000;

app.listen(port, function (err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Server running on http://localhost:' + port);
});
