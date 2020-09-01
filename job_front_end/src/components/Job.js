import React from 'react';
import {Paper, Typography} from '@material-ui/core';

const Job = ({job, onClick}) =>{
    return(
        <Paper onClick={onClick} className="job card">
            <div>
                <Typography variant='h5'>{job.title}</Typography>
                <Typography >{job.company}</Typography> 
                <Typography>{job.location}</Typography>
            </div>
            <div>
                <Typography> {job.created_at.split(' ').slice(0,3).join(' ')}</Typography>
            </div>
             
        </Paper>
    )
}
export default Job;