export default class Activity {
    constructor(headers = [], laps = []) {
        this.headers = headers;
        this.laps = laps;
      }

      addLap(lap) {
        this.laps.push(lap)
      }
}