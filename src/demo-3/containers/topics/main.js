export default () => {
  return new Promise((resolve, reject) => {
    require.ensure(['./'], function (require) {
      return Promise.reject('topics页面加载失败');
      // resolve(require('./'));
    }, function (err) {
      console.error(err);
      reject(err);
    }, 'topics');
  })
}
