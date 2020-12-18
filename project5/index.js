let elem = document.getElementsByClassName("flex-item")

let times = [[0,0], [-6,0], [-6,0], [9, 0], [-8,0], [5, 30], [-5,0], [10,0], [1,0]]
let cities = [
    "Time in London(GMT/UTC)",
    "Time in Mexico(CST)",
    "Time in Chicago(CST)",
    "Time in Japan(JST)",
    "Time in California(PST)",
    "Time in India(IST)",
    "Time in New York(EST)",
    "Time in Australia(AEST)",
    "Time in Germany(CET)"
]


setInterval(() => { 
    a = new Date();
    let addhours;
    let addmins;
    let hour = a.getHours()-6;
    let minutes = a.getMinutes()+30;
    let date = a.toLocaleDateString();

    for (i=0; i<cities.length; i++){
        addhours = times[i][0];
        addmins = times[i][1]
        elem[i].innerHTML = '<div>'+cities[i]+'</div>'
        createE = document.createElement('p')
        if (minutes + addmins >= 60 ){
            addmins -= 60
            addhours += 1
        }
        if (hour + addhours >= 24) {
            addhours -= 24
            date = a.toLocaleDateString().replace(a.toLocaleDateString()[3] + a.toLocaleDateString()[4], Number(a.toLocaleDateString()[3] + a.toLocaleDateString()[4]) + 1)
        }
        else if (hour + addhours < 0) {
            addhours += 24
            date = a.toLocaleDateString().replace(a.toLocaleDateString()[3] + a.toLocaleDateString()[4], Number(a.toLocaleDateString()[3] + a.toLocaleDateString()[4]) - 1) 
        }

        createE.innerHTML = (hour + addhours) + ':'+ (minutes + addmins) + ':' + a.getSeconds() + '<br>'+' on ' +date

        elem[i].appendChild(createE)
    }
}, 1000);
