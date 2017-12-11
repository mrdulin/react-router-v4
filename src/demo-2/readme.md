# 使用`import()`语法动态导入模块

## 说明

1. 使用`import()`语法动态导入，`webpack`会将动态导入的模块打包成独立的`chunk`文件，按需加载（去服务器请求）模块。

2. 按需加载模块，会提升应用首次加载速度。并且，还可以优化缓存，当你只修改了属于某一个`chunk`文件的代码，最后打包编译，只有这个`chunk`文件的`hash`
值会变，而其他的`chunk`文件的`hash`不会改变。实验结果：

![打包结果对比](https://ws1.sinaimg.cn/large/006tNc79gy1fmctcgck3qj313o0nujsv.jpg)

左侧是第一次打包编译的输出，右侧是修改`about`模块的代码，再次打包编译的输出。可以看到，只有`2.chunk.js`和`manifest.js`的`hash`值发生了变化。

那么配合`appCache`或者浏览器的静态文件缓存特性，修改`about`模块后发布，应用将只会去服务器重新拉取`2.chunk.js`和`manifest.js`。

