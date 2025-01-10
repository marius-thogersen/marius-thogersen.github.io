export default class Activity {
    
    constructor(date,distance, time, avg_pace,ascent, descent, moving_time, elapsed_time) {
        this.date = date;               
        this.distance = distance;       
        this.time = time;               
        this.avg_pace = avg_pace;       
        this.ascent = ascent;           
        this.descent = descent;         
                 
        this.moving_time = moving_time; 
        this.elapsed_time = elapsed_time;
    }


    toHtmlTableRow() {
        const tr = document.createElement("tr")
        Object.keys(this).forEach(key => {
            const td = document.createElement("td")
            td.classList.add(key)
            td.textContent = this[key] !== undefined ? this[key] : "";
            tr.appendChild(td);
        })
        return tr;
    }

    static fromObject(data_list) {
        return new Activity(
            data_list[0], // date
            data_list[1], // distance
            data_list[2], // time
            data_list[3], // avg_pace
            data_list[4], // ascent
            data_list[5], // descent
            data_list[6], // moving_time
            data_list[7]  // elapsed_time
        )
    } 
}