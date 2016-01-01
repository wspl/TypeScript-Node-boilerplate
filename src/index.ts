import { Hello } from './hello/world';

class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return 'Hello, ' + this.greeting;
  }
}

const greeter = new Greeter('world');
console.log(greeter.greet());

Hello();