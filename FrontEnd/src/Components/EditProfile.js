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


export default function EditProfile(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEditProfile = () => {
       localStorage.setItem("username", document.getElementById("username").value);
       localStorage.setItem("email", document.getElementById("mail").value);
      const data={username : localStorage.getItem("username"), email:localStorage.getItem("email")}
      props.fun(data);
  } ;



  return (
    <div>
      <Button  variant="contained" onClick={handleClickOpen}>
          Edit Profile
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Edit Your Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="Full Name"
            type="text"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="mail"
            label="E-mail"
            type="text"
            fullWidth
          />
           <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Password"
            type="passwprd"
            fullWidth
          />
            <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Confirm Password"
            type="password"
            fullWidth
          />
           
           

        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditProfile} color="primary">
            Save
          </Button>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}