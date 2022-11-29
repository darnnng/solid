// without single responsibility principle
class UserSettings {
  constructor (user) {
    this.user = user;
  }
  verify () {/**/}
  changeSettings (settings) {
    if (this.verifyCredentials()) {
      //
    }
  }
  }
  
// with single responsibility principle 
class UserAuth {
  constructor (user) {
    this.user=user
  }
  verify() {/**/
  }
}

class UserSettings {
  constructor (user) {
    this.user=user;
    this.auth=new UserAuth(user)
  }
  changeSettings(settings) {
    if (this.auth.verify()) {
        /**/
    }
  }
}


