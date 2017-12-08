const path = require('path');

const resolve = (...args) => path.resolve(process.cwd(), ...args);

const getTarget = () => {
  let target;
  try {
    const npm_config_argv = JSON.parse(process.env.npm_config_argv);
    target = npm_config_argv.remain[0]
    // .split('=')[1];
    target = resolve(target);
  } catch (e) {
    throw new Error('参数解析失败');
  }
  if (!target) throw new Error('请指定构建target, 例如: npm run build:dev src/demo-1');
  return target;
}

module.exports = {
  resolve,
  getTarget
};
