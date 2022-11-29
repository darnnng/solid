// without open-closed

class Assistant {
    sayHi() {
      console.log('Hi! Nice to meet you.');
    }
    sayGoodbye() {
      console.log('Bye! See you later.');
    }
  }

// with open-closed

const phrases = {
    hi: 'Hi! Nice to meet you.',
    bye: 'Bye! See you later.',
  };
  
class Assistant {
    say(phrase) {
        console.log(`${phrase}`);
    }
}

const Sara = new Assistant();


