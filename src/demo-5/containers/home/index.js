// 报错: Uncaught ReferenceError: React is not defined

// 最后编译出来的代码是这样的，
// exports.default = function () {
//     return React.createElement(
//         "div",
//         null,
//         React.createElement(
//             "h2",
//             null,
//             "Home"
//         )
//     );
// };

// 这里稍具迷惑性，虽然看起来stateless functional component是一个普通的箭头函数，
// 好像没有用到React，不用引入React模块，
// 但是别忘了，返回的并不是普通的html，而是JSX，JSX会经过babel-preset-react转换，
// 转换后的代码就如上面所示，调用了React.createElement方法，所以这里是需要引入React模块的
// 如下，但是如果每个component都写这样引入模块的代码，重复劳动，这也说明了webpack的ProviderPlugin的典型用途。

import React from 'react';

export default () => (
  <div>
    <h2>Home</h2>
  </div>
)



