import { Link } from 'react-router-dom';
import ReactionColourIcon from "../assets/reaction-colour.png";
import MemoryColourIcon from "../assets/memory-colour.png";
import '../App.css';
import { motion } from 'framer-motion';

// Landing Page
export default function GamesMenu() {
  const mainMenu = {
    hidden: {
      x: "-200vw"
    },
    visible: {
      x: "1vw",
      transition: {
        delay: 0.5,
        when: "beforeChildren",
        stiffness: 45,
        type:"spring",  
        staggerChildren: 0.3
      },
    }, 
  }

  const gameIcon = {
    hidden: {
      x: -10,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
    }
  }

  return(
    <div style={{ display:"flex", justifyContent: "center" }}>
      <motion.div 
        id="icons" 
        variants={mainMenu}
        animate="visible"
        initial="hidden"
      >
        <div className="games">
          <Link to="/reactionSetting">
            <motion.img src={ReactionColourIcon } alt="reaction game" width="150px" variants={gameIcon}/> 
          </Link>
        </div>
        <div className="games" >
          <Link to="/memoryGame">
            <motion.img src={MemoryColourIcon} alt="memory game" width="150px" variants={gameIcon}/>
          </Link>
        </div>
      </motion.div>
      <div id="imgReference">Icons made by <a href="https://www.freepik.com" title="Freepik">[Freepik]</a> 
      from <a href="https://www.flaticon.com/" title="Flaticon">[www.flaticon.com]</a></div>
    </div>
  );
}
