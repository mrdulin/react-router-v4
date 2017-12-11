export default () => new Promise((resolve, reject) => {
  require.ensure([], require => {
    resolve({
      Card: require('./main').default
    });
  }, error => {
    console.error(error);
    reject(error);
  }, 'Card');
});
