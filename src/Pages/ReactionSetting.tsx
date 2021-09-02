import { useState, ChangeEvent } from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
import { TwitterPicker } from 'react-color';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
  Typography,
  Button,
  Popover 
} from '@material-ui/core';
import { Icon } from '@iconify/react';
import InfoIcon from '@iconify/icons-eva/info-outline';
import TitleBar from "../Components/TitleBar"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
    typography: {
      padding: theme.spacing(2),
      width: "200px"
    },
    beginGame: {
      position: "absolute",
      margin: "24px",
      top: 40,
      right: 0,
    },
    setting: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
    },
    modes: {
      display: "flex", 
      flexDirection: "column", 
      flexWrap: "wrap", 
      alignContent: "center",
      marginTop: "auto", 
      marginBottom: "auto"
    },
    inputs: {
      width:"200px", 
      backgroundColor: "white", 
      padding: "10px", 
      borderRadius: "15px", 
      marginRight: "20px", 
      marginLeft: "20px"
    }
  }),
);

interface CircleStats {
  circleSize: string;
  shrinkRate: string;
  goal: number;
}

export default function ReactionSetting() {
  const classes = useStyles();
  const [colour, setColour] = useState("#ff0000");
  const [currentMode, setCurrentMode] = useState("Normal");
  const [circleValues, setCircleValues] = useState<CircleStats>({
    circleSize: "30",
    shrinkRate: "2",
    goal: 15
  });
  const handleChange = (prop: keyof CircleStats) => (event: ChangeEvent<HTMLInputElement>) => {
    setCircleValues({ ...circleValues, [prop]: event.target.value });
  };

  const changeModes = (mode: string) => {
    if (document.getElementById(currentMode) !== undefined 
      && document.getElementById(currentMode) !== null) document.getElementById(currentMode)!.style.opacity = "1";
    if (document.getElementById(mode) !== undefined) document.getElementById(mode)!.style.opacity = "0.4";
    setCurrentMode(mode);
    if (mode === "Easy") {
      setCircleValues({
        circleSize: "40",
        shrinkRate: "2",
        goal: 10
      })
    } else if (mode === "Hard") {
      setCircleValues({
        circleSize: "25",
        shrinkRate: "1",
        goal: 20
      })
    } else {
      setCircleValues({
        circleSize: "30",
        shrinkRate: "1.5",
        goal: 15
      })
    }
  }
  
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return(
    <div>
        <TitleBar title={"Reaction Game"}/>
        <div>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Typography className={classes.typography}>
              {/* This game test your reaction by displaying circles that will
              continue to shrink until it disappers. Your goal is to click on
              the click as fast as possible before the circle disappears. */}
              3 pre-set modes available. Feel free to alter to your preference.
            </Typography>
          </Popover>
        </div>
      <div className={classes.setting}>
        <div className={classes.modes}>
          <Button id="Easy" onClick={()=>{changeModes("Easy")}}>Easy</Button>
          <Button id="Normal" onClick={()=>{changeModes("Normal")}}>Normal</Button>    
          <Button id="Hard" onClick={()=>{changeModes("Hard")}}>Hard</Button> 
          <Button onClick={handleClick}>
            <Icon icon={InfoIcon} width="23" height="23" />
          </Button>
        </div> 
        <div className={classes.inputs}>
          <FormControl className={classes.margin} variant="outlined">
            <InputLabel htmlFor="circleSize">Circle Size</InputLabel>
            <OutlinedInput
                id="circleSize"
                onChange={handleChange("circleSize")}
                value={circleValues.circleSize}
                endAdornment={<InputAdornment position="end">px</InputAdornment>}
                labelWidth={80}
              />
          </FormControl>
          <FormControl className={classes.margin} variant="outlined">
            <InputLabel htmlFor="shrinkRate">Shrink Rate</InputLabel>
            <OutlinedInput
              id="shrinkRate"
              onChange={handleChange("shrinkRate")}
              value={circleValues.shrinkRate}
              endAdornment={<InputAdornment position="end">sec</InputAdornment>}
              labelWidth={90}
            />
          </FormControl>
          <FormControl className={classes.margin} variant="outlined">
            <InputLabel htmlFor="goal">Target Goal</InputLabel>
            <OutlinedInput
              id="goal"
              onChange={handleChange("goal")}
              value={circleValues.goal}
              endAdornment={<InputAdornment position="end">circles</InputAdornment>}
              labelWidth={90}
            />
          </FormControl>
        </div>
        <div>
          <TwitterPicker 
              triangle="hide"
              color={colour}
              onChangeComplete={(colour) => {setColour(colour.hex)}}
            />
          <div id="settingsCircle" style={{ 
              backgroundColor: colour, 
              width: circleValues.circleSize+"px",
              height: circleValues.circleSize+"px",
          }}></div>
        </div>
      </div>
      <Link to={{
        pathname: "/reactionGame",
        state: {
          colour: colour,
          size: circleValues.circleSize,
          rate: circleValues.shrinkRate,
          goal: circleValues.goal
        }
      }}>
        <Button className={classes.beginGame} >
          <Typography style={{ color: "#8C8185" }}> Begin Game</Typography>
        </Button>   
      </Link>
    </div>
  );
}
