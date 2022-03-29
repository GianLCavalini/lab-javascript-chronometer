class Chronometer {
  constructor() {
    this.intervalId = null;
    this.currentTime = 0;
  }
  start(callback) {
    this.intervalId = setInterval(() => {
     return this.currentTime += 1;
    }, 1000)
  }
  getMinutes() {
    const totalMinutes = Math.floor(this.currentTime / 60)
    return totalMinutes;
  }
  getSeconds() {
    const totalSeconds = this.currentTime % 60
    return totalSeconds;
  }
  computeTwoDigitNumber(value) {
    if (value.toString().length === 1){
      return `0${value}`
    }
    else if (value.toString().length === 2){
      return`${value}`
    }
  }
  stop() {
    clearInterval(this.intervalId);
  }
  reset() {
    this.currentTime = 0;
  }
  split() {
    return `${this.computeTwoDigitNumber(this.getMinutes())}:${this.computeTwoDigitNumber(this.getSeconds())}`
  }
}
// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}