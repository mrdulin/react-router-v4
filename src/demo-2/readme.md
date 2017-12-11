# 使用`import()`语法动态导入模块

## 说明

1. 使用`import()`语法动态导入，`webpack`会将动态导入的模块打包成独立的`chunk`文件，按需加载（去服务器请求）模块。

2. 按需加载模块，会提升应用首次加载速度。并且，还可以优化缓存，当你只修改了属于某一个`chunk`文件的代码，最后打包编译，只有这个`chunk`文件的`hash`
值会变，而其他的`chunk`文件的`hash`不会改变。实验结果：

![打包结果对比](https://ws1.sinaimg.cn/large/006tNc79gy1fmctcgck3qj313o0nujsv.jpg)

左侧是第一次打包编译的输出，右侧是修改`about`模块的代码，再次打包编译的输出。可以看到，只有`2.chunk.js`和`manifest.js`的`hash`值发生了变化。

那么配合`appcache`或者浏览器的静态文件缓存特性，修改`about`模块后发布，应用将只会去服务器重新拉取`2.chunk.js`和`manifest.js`。

3. 使用`appcache-webpack-plugin`可以将生成的`chunk`文件名写入到`manifest.appcache`文件中

## 配合`appcache`

1. 首次加载某个页面，缓存未命中，走网络请求，从服务器拉取`vendor`, `app`和页面相应的`chunk`文件，`appcache`将静态资源缓存到本地`disk`的目录中

2. 再次进入相同的页面，有`appcache`静态资源缓存，缓存命中，走本地缓存资源

3. 应用有新的迭代发布，`webpack`打包编译时，只有被修改文件的`hash`改变。`appcache`将比对`manifest.appcache`文件中`CACHE MANIFEST`描述字段下
的静态资源名称和服务器上最新的静态资源名称。对于`hash`有变化的资源文件，不走本地缓存，再次走网络请求从服务器拉取。`hash`未改变的文件，本地缓存命中，
使用本地缓存文件。

