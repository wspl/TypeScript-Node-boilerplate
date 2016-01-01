'use strict';

var world_1 = require('./hello/world');
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return 'Hello, ' + this.greeting;
    }
}
const greeter = new Greeter('world');
console.log(greeter.greet());
world_1.Hello();
//# sourceMappingURL=index.js.map
