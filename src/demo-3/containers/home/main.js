export default () => {
  return new Promise((resolve, reject) => {
    require.ensure(['./'], function (require) {
      resolve(require('./'));
    }, function (err) {
      console.error(err);
      reject(err);
    }, 'home');
  })
}
