import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText,DialogTitle, Slide} from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const JobModal = ({job, open, handleClose}) => {
  if(!job.title){
      return <div />
  }
  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">
           {job.title} -
           {job.company}
           <img className='detail-logo' src={job.company_logo} alt="logo"/>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description"
             dangerouslySetInnerHTML={{__html: job.description}} 
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <a href={job.url} target="_blank">
             <Button  color="primary">
               Apply
             </Button>
          </a>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default JobModal;