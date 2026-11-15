const axios = require("axios")

async function getConstest() {
    try{
        const response = await axios.get(
            "https://codeforces.com/api/contest.list"
        );
        const constest = response.data.result;
        const upcomingContest = constest.filter(
            constest => constest.phase == "BEFORE"
        );

        upcomingContest.forEach(contest => {    
            console.log("~~~~~~~~~~~~~~~~~~~~~~~");
            console.log("Name: ", contest.name);
            console.log("ID: ", contest.id);
            console.log("Start: ",
                new Date(contest.startTimeSeconds * 1000)
                .toLocaleString()
            );
            console.log("Duration: ",
                contest.durationSeconds / 3600, " hours"
            );
            
        });
    }catch(error){
        console.log("Error fetching contests: ", error.message);
        
    }
}

getConstest();