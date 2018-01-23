// import { config } from "../config";

class Auth {
  isAuthenticated = false;
  user = {};
  authenticate() {
    // const { ClientID } = config;
    // const params = {
    //   client_id: ClientID,
    //   state: Math.random()
    // };

    const url = "//api.github.com/users/mrdulin";

    return new Promise(resolve => {
      return fetch(url)
        .then(res => res.json())
        .then(res => {
          const user = { name: res.name, bio: res.bio };
          this.isAuthenticated = true;
          this.user = user;
          resolve(user);
        });
    });
  }

  signout() {
    return new Promise(resolve => {
      setTimeout(() => {
        this.user = {};
        this.isAuthenticated = false;
        resolve();
      }, 500);
    });
  }
}

export default new Auth();
