import React from 'react';
//import {Component} from 'react';
import Jobs from './components/Jobs';
import './App.css';

const JOB_API_URL = 'http://localhost:3001/jobs';

/*const mockJobs = [
  
  {title:'SWE 1', company: 'Google' },
  {title:'SWE 1', company:'Facebook'},
  {title:'SWE 1', company: 'Apple'}
] */

const fetchJobs = async (updateCallback) =>{
       const response = await fetch(JOB_API_URL);
       const json = await response.json();
       
       updateCallback(json); 

  }

const App = () =>{
    
    const [jobLists, updateJobs] = React.useState([]);

    React.useEffect(() => {
      fetchJobs(updateJobs);
    }, [])

    return(
      <div className="App">
         <Jobs jobs={jobLists} />
      </div>

    );
}

export default App;
