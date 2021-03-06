import { Typography } from "@material-ui/core";
import MemoryDemo from "../assets/MemoryDemo.mp4";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    textAlign: "center"
  },
  video: {
    padding: "20px",
    backgroundColor: "#A484E9",
    borderRadius: "20px",
    width: "60%",
    display: "block",
    margin: "auto",
    marginBottom: "10px"
  }
});

// Explanation for the memory game (vid)
export default function MemoryExplanation() {
  const classes = useStyles();
  return(
    <div>
      <Typography variant="h4" gutterBottom className={classes.title}>
        How to play 
      </Typography>
      <video className={classes.video} controls > 
        <source src={MemoryDemo} type="video/mp4" />
      </video>
    </div>
  );
}
