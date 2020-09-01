var fetch = require('node-fetch');

const redis = require("redis");
const client = redis.createClient();

const { promisify } = require("util");
const setAsync = promisify(client.set).bind(client)

//getAsync.then(console.log).catch(console.error);

const baseUrl='https://jobs.github.com/positions.json';

const fetchGithub = async () =>{
    console.log('fetching github')
    
    let resultCount = 1, onPage = 0;
    const allJobs = [];
    // fetch all pages
    while(resultCount > 0){
        const response = await fetch(`${baseUrl}?page=${onPage}`);
        const jobs = await response.json();
        allJobs.push(...jobs);

        resultCount = jobs.length;
        console.log('got', resultCount, 'jobs');
        onPage++;

    }
    console.log('got', allJobs.length, 'jobs total');
    // filter algorithm
    const jrJobs = allJobs.filter(job =>{
        const jobTitle = job.title.toLowerCase();
        //algorithm logic
        if(
            jobTitle.includes('senior') ||
            jobTitle.includes('manager')||
            jobTitle.includes('sr.')||
            jobTitle.includes('architect')
            ){
                return false
            }
        return true;
    })
    console.log('filtered down to', jrJobs.length);


    //set in redis(memurai)
    const success = await setAsync('github', JSON.stringify(jrJobs));
    console.log({success});
}
module.exports = fetchGithub;


