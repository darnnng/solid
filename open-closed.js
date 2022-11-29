// without open-closed

class Assistant {
    sayHi() {
      console.log('Hello');
    }
    sayGoodbye() {
      console.log('Goodbye');
    }
  }

// with open-closed

const phrases = {
    hi: 'Hello',
    bye: 'Goodbye',
  };
  
class Assistant {
  say(phrase) {
    console.log(`${phrase}`);
  }
}

const Daria = new Assistant();



