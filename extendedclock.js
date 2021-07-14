const { Clock } = require('./clocksol.js');

class ExtClock extends Clock {
    constructor({template, ticks}) {
        super({template});
        this.ticks = ticks;
    }
    start() {
        super.render();
        setInterval(() =>{
            super.render();
        }, this.tick);
    }
}
const eClock = new ExtClock({template: 'h: m: s', tick: 800})
eClock.start();