async function readCSV() {
    const response = await fetch('data-0110.csv');
    if (!response.ok) {
        console.error('Failed to fetch the file:', response.statusText);
        return;
    }

    const data = await response.text();
    //build data structure 
    console.log("DATA:", data)

    const ignoreFields = [0, 2, 3, 5, 9, 11, 17, 19, 20, 22,23,26, 27]

    const rows = data.split("\n");
    const myData = rows.map(row => splitRow(row, ignoreFields)).filter(row => row.length != 0)

    console.log(myData)


    myData.forEach((row, rowIndex) => {
        const tr = document.createElement("tr");
        document.getElementById("data").appendChild(tr);
        row.forEach(el => {
            const cell = document.createElement(rowIndex == 0 ? "th": "td");
            cell.innerText = el
            tr.appendChild(cell)
        });
        

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