import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from './Modal'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard({element}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  

  return (
      <>
    <Card className={classes.root} onClick={handleOpen} className='card'>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={element.img}
          title={element.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {element.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {element.Descreption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='botton'>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
    <Modal open={open} setOpen={setOpen} content={element} />
    </>
  );
}
