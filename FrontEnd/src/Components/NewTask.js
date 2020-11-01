import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostAddIcon from '@material-ui/icons/PostAdd';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';


export default function NewTask(props) {
  const [open, setOpen] = React.useState(false);
  const[file,setFile]=React.useState();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [options, setOptions] = React.useState('');

  const handleChange = (event) => {
    setOptions(event.target.value);
  };

 const handleInputChange=(e) =>{
  setFile(e.target.files[0]);
  
  
 

 }

  const uploadFile = (task) => {
    addTask(task);
    console.log(file);
    const formData = new FormData();
    formData.append('file', file);
    fetch('http://localhost:8080/api/files', {
      method: 'POST',
      mode:'no-cors',
      body: formData
    }).then(function (response) {
      if (response.ok) {
        response.json().then(function (res) {
          console.log(res);
        })
      } else {
        console.log("")
      }
    }).catch(function (error) {
      console.log("Bad petition:" + error.message);
    });

  }

  const addTask = (task) => {
    fetch('http://localhost:8080/api/todo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 'Accept': 'application/json',
      },
      body: JSON.stringify(task)
    }).then(function (response) {
      if (response.ok) {
        response.json().then(function (res) {
          console.log(res);
        })
      } else {
        console.log("")
      }
    }).catch(function (error) {
      console.log("Bad petition:" + error.message);
    });

  }

  const handleAddTask = () => {
  /*props.fun({description:document.getElementById("description").value,
  responsable:{name:document.getElementById("responsable").value, email:document.getElementById("correo").value},status:document.getElementById("status") , 
  duedate: document.getElementById("duedate")});*/
  let task ={
      description: document.getElementById("description").value,
      priority: document.getElementById("priority").value,
      dueDate: document.getElementById("dueDate").value,
      responsible: document.getElementById("responsible").value,
      status: document.getElementById("standard-select-state").value
  }
  uploadFile(task);
  }
  const selection = [
    {
      value: 'Ready',
      label: 'Ready',
    },
    {
      value: 'In Progress',
      label: 'In Progress',
    },
    {
      value: 'Done',
      label: 'Done',
    },
    
  ]


  return (
    <div>
      <Button  variant="contained" onClick={handleClickOpen}>
        <PostAddIcon></PostAddIcon>
        
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
             Add Your New Task
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="priority"
            label="Priority"
            type="text"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="dueDate"
            type="date"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="responsible"
            label="Responsable"
            type="text"
            fullWidth
          />
       
           <TextField
           id="standard-select-state"
           select
           label="Select"
          value={options}
          onChange={handleChange}
          helperText="Please select status"
         >
          
          {selection.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
          </TextField>
         <br>
         </br>
         <Input type="file" id="file"  onChange={handleInputChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddTask} color="primary">
          Add Task 
          </Button>
          <Button onClick={handleClose} color="primary">
          Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}