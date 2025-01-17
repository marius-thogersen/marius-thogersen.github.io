export default class Lap {
    constructor(
      timestamp = null, //0 --> 0
      messageIndex = null, //1 --> 1
      startTime = null, //2 --> 4
      totalElapsedTime = null,//3 --> 9
      totalTimerTime = null,//4 --> 10
      totalDistance = null,//5 --> 11
      totalAscent = null,//6 --> 18 
      totalDescent = null,//7 --> 19
      avgTemperature = null,//8 --> 23
      enhancedAvgSpeed = null,//9 --> 27
      enhancedMaxSpeed = null,//10 --> 28
      minTemperature = null//11 --> 29
    ) {
      this.timestamp = new Date(timestamp);
      this.messageIndex = messageIndex;
      this.startTime = startTime;
      this.totalElapsedTime = parseInt(totalElapsedTime);
      this.totalTimerTime = parseInt(totalTimerTime) / 1000;
      this.totalDistance = parseInt(totalDistance) / 100;
      this.totalAscent = parseInt(totalAscent);
      this.totalDescent = parseInt(totalDescent);
      this.avgTemperature = parseInt(avgTemperature);
      this.enhancedAvgSpeed = parseInt(enhancedAvgSpeed);
      this.enhancedMaxSpeed = parseInt(enhancedMaxSpeed);
      this.minTemperature = parseInt(minTemperature);
    }
  
    static fromArray(attributes) {
      return new Lap(
        attributes[0], //timestamp
        attributes[1], //messageIndex aka. lap number
        attributes[2], // startTime
        attributes[3], // totalElapsedTime
        attributes[4], // totalTimerTime
        attributes[5], //totalDistance
        attributes[6], //totalAscent
        attributes[7], //totalDescent
        attributes[8], //totalAvgTemperature
        attributes[9], //enhenacedAvgSpeed
        attributes[10], //enhancedMaxSpeed
        attributes[11] //minTemperature
      );
    }
  }