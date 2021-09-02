import { Typography } from "@material-ui/core";
import ReactionDemo from "../assets/ReactionDemo.mp4";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    marginTop: "20px"
  },
  video: {
    padding: "20px",
    backgroundColor: "#A484E9",
    borderRadius: "20px",
    width: "38%",
    display: "block",
    margin: "auto",
    marginBottom: "10px"
  }
});

// Explanation for the reaction game (vid)
export default function ReactionExplanation() {
  const classes = useStyles();
  return(
    <div>
      <Typography variant="h5" gutterBottom className={classes.title}>
        How to play 
      </Typography>
      <video className={classes.video} controls > 
        <source src={ReactionDemo} type="video/mp4" />
      </video>
    </div>
  );
}
