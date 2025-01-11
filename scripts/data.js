import Activity from "./Activity.js";

async function readCSV() {
    const response = await fetch('data-0110.csv');
    if (!response.ok) {
        console.error('Failed to fetch the file:', response.statusText);
        return;
    }

    const csvData = await response.text();
    //build data structure 
    console.log("DATA:", csvData)

    const ignoreFields = [0, 2, 3, 5, 7, 8, 9, 10, 11, 13, 16, 17, 18, 19, 20, 21, 22, 23, 26, 27]

    const rows = csvData.split("\n").map(row => splitRow(row, ignoreFields)).filter(row => row.length != 0);


    /** @type {Array<String>} */
    const header = rows[0];

    /** @type {Array<Activity>} */
    const activities = rows.slice(1).map(row => Activity.fromObject(row))

    //table header
    const headerElement = document.createElement("tr");
    document.getElementById("data").appendChild(headerElement);
    header.forEach(name => {
        const cell = document.createElement("th");
        cell.innerText = name
        headerElement.appendChild(cell)
    });
    // populate the table
    activities.forEach(activity => {
        const row = activity.toHtmlTableRow()
        document.getElementById("data").appendChild(row);
    })

    //table footer
    const footerElement = document.createElement("tr")
    // todo sum up  the data


    document.querySelectorAll(".time, .moving_time, .elapsed_time").forEach(timeCell => {
        const pre3 = timeCell.innerText.substring(0, 3)
        if (pre3 === "00:")
            timeCell.innerText = timeCell.innerText.substring(3);
        else if (pre3[0] === "0")
            timeCell.innerText = timeCell.innerText.substring(1);
    })
}



function splitRow(data, ignoreFields) {

    let current = "";
    const result = []
    data.split("").forEach((c, i) => {
        //start and end is a single pair of ""
        if (i == 0 && c == "\"") return;
        if ((c == ',' && current.substring(0, 2) != "\"\"") || (c == ',' && current.substring(0, 2) == "\"\"" && current.slice(-2) == "\"\"")) {
            // console.log(i, current.replaceAll("\"", "").replaceAll("\n",""))
            result.push(current.replaceAll("\"", "").replaceAll("\n", ""))
            current = ""
        } else {
            current += c;
        }
    })
    return result.filter((d, i) => !ignoreFields.includes(i));
}

addEventListener("DOMContentLoaded", readCSV)
// readCSV();