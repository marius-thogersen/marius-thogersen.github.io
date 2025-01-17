import Activity from "../models/Activity";
import Lap from "../models/lap";

const activities =
    [
        '241230',
        '241231',
        '250101',
        '250102',
        '250103',
        '250104',
        '250105',
        '250106',
        '250107',
        '250108_1',
        '250108_2',
        '250109',
        '250110',
        '250111',
        '250112_1',
        '250112_2',
        '250113',
        '250114_1',
        '250114_2',
        '250115_1',
        '250115_2',
        '250116'
    ];

// Function to fetch the file
const fetchFile = async (path) => {
    const includeIndex = (i) => [
        0,1,4,9,10,11,18,19,23,27,28,29
      ].includes(i)
      
      const delay = (ms) => new Promise((resolve)=> setTimeout(resolve, ms));

    try {
        await delay(200);
      const response = await fetch("activities/" + path + ".csv"); // Adjust path to match your file location
      if (!response.ok) {
        throw new Error(`Failed to fetch file: ${response.statusText}`);
      }
      const content = await response.text(); // Update the reactive variable
      //handle data
      const data = content.split("\n")
  
      const laps = data.map((row, i) => {
        const result = [];
        let current = "";
        row.split("").forEach((c) => {
          if (c === ",") {
            const completedWith = current.startsWith("\"") && current.endsWith("\"")
            const completedWithout = !current.startsWith("\"") && !current.endsWith("\"")
            if (completedWith || completedWithout) {
              result.push(current.replaceAll("\"", ""));
              current = "";
            }
          } else {
            current += c;
          }
        });
        result.push(current)
        return result.filter((_, i) => includeIndex(i));
      });
  
      const header = laps.shift()
        const activity = new Activity(header)
      laps.forEach(data => activity.addLap(Lap.fromArray(data)));
    
    return activity;

    } catch (error) {
      console.error(error);
    }
  };



  async function allData(){
    const activities = activities.map(file => {
        fetchFile(file);
    })
    return activities;
  }

export {activities, fetchFile, allData};