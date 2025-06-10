const users = {};

module.exports = {
  createUser: (username, password) => {
    users[username] = {
      username,
      password,
      temp_secret: null,
      secret: null,
    };
  },

  getUser: (username) => users[username],

  setTempSecret: (username, secret) => {
    users[username].temp_secret = secret;
  },

  setSecret: (username) => {
    users[username].secret = users[username].temp_secret;
    users[username].temp_secret = null;
  },
};
