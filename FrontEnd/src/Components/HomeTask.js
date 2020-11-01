import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import EventAvailableSharpIcon from '@material-ui/icons/EventAvailableSharp';
import PostAddIcon from '@material-ui/icons/PostAdd';
import { Link } from 'react-router-dom';
import NewTask from './NewTask';
import ProfileDrawer from './ProfileDrawer';
import EditProfile from './EditProfile';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


export default function HomeTask() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [task,setTask]=React.useState([{description:"Implement Login Controller", responsable:{username: "Juliana Garzon",email:"juligardu@gamil.com"}, 
  status:"ready",dueDate: Date.now() }]);

  const handleAddTask =(t) =>{

    setTask(task.concat(t));

   
  };

 
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Log In 
      </Button>
      <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Task Planner
            </Typography>
            <Typography variant="h6" className={classes.title}>
              <ProfileDrawer></ProfileDrawer>
            </Typography>
            <Typography variant="h6" className={classes.title}>
             <NewTask fun={handleAddTask}/>
             </Typography>
            <Link to="/">
             <Button variant="contained" onClick={handleClose}> Log Out</Button>
             </Link>

          </Toolbar>
        </AppBar>

          
        {task.map(t => (
        <Card className= "root">
        <CardContent>
          <Typography align="center" className="title" color="primary" gutterBottom>
            {t.description}
          </Typography>
          <Typography align="center" variant="h5" component="h2">
            {t.responsable.username}
          </Typography>
          <Typography align="center" variant="h5" component="h2">
            {t.responsable.email}
          </Typography>
          <Typography align="center" variant="h5" component="h2">
           {t.status}
          </Typography>
          <Typography align="center" variant="h5" component="h2">
           {t.dueDate}
          </Typography>
          <Typography  align="center" variant="body2" component="p">
          
          <EventAvailableSharpIcon></EventAvailableSharpIcon>
           
          </Typography>
        
        </CardContent>
        </Card>
        ))}
    
        
      </Dialog>
    </div>
  );
}