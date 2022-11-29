// without single responsibility principle
class UserSettings {
    constructor (user) {
      this.user = user;
    }
  
    changeSettings (settings) {
      if (this.verifyCredentials()) {
        //
      }
    }
  
    verifyCredentials () {
      //
    }
  }
  
// with single responsibility principle 
class UserAuth {
    constructor (user) {
        this.user = user;
    }

    verifyCredentials () {
        //
    }
}
  
class UserSettings {
    constructor (user) {
        this.user = user;
        this.auth = new UserAuth(user);
    }

    changeSettings (settings) {
        if (this.auth.verifyCredintials()) {
        //
        }
}
}