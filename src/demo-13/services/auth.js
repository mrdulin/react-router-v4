import { config } from '../config';

function queryParams(params) {
  return Object.keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&');
}
class Auth {
  isAuthenticated = false;
  user = {};
  authenticate() {
    const { ClientID } = config;
    const params = {
      client_id: ClientID,
      state: Math.random()
    };

    // const url = '/login/oauth/authorize?' + queryParams(params);

    const url = '//api.github.com/users/mrdulin';

    return new Promise((resolve, reject) => {
      return fetch(url)
        .then(res => res.json())
        .then(res => {
          console.log('authenticate res: ', res);
          const user = { name: res.name, bio: res.bio };
          this.isAuthenticated = true;
          this.user = user;
          resolve(user);
        });
    });
  }

  signout() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.user = {};
        this.isAuthenticated = false;
        resolve();
      }, 500);
    });
  }
}

export default new Auth();
