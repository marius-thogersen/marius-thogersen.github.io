async function readCSV() {
    const response = await fetch('data-0110.csv');
    if (!response.ok) {
        console.error('Failed to fetch the file:', response.statusText);
        return;
    }

    const data = await response.text();
    //build data structure 
    console.log("DATA:", data)

    const ignoreFields = [0, 2, 3, 5, 9, 11, 17, 19, 20, 23, 26, 27]

    const rows = data.split("\r");
    const myData = rows.map(row => splitRow(row, ignoreFields)).filter(row => row.length != 0)

    console.log(myData)

    // console.log(splitRow(data))
    //build and render html



    // dataArr.forEach((row, rowIndex) => {
    //     const rowDiv = document.createElement("tr");
    //     rowDiv.classList.add("row")
    //     rowDiv.dataset.index = rowIndex;
    //     splitRow(row).forEach((data, index) => {
    //         if (ignoreFields.includes(index)) return;
    //         const text = rowIndex == 0 ? "" + index + ". " + data : data;
    //         const textNode = document.createTextNode(text)
    //         const el = document.createElement(rowIndex != 0 ? "td" : "th")
    //         el.appendChild(textNode)
    //         rowDiv.appendChild(el)
    //     })

    //     document.getElementById("data-table").appendChild(rowDiv);
    // })

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