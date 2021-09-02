import PropTypes from 'prop-types';
import { Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

TitleBar.propTypes = {
  title: PropTypes.string
}

// Title and button to navigate back to main menu
export default function TitleBar({title} : {title: string}) {
  return(
    <Typography variant="h3" gutterBottom style={{ margin: "15px" }}>
      {title} 
        <Link to="/gameMenu" style={{  textDecoration: "none", float:"right", marginRight: "10px" }}>
          <Button style={{ color: "#8C8185"}} > 
            <span id="menuButton">Switch games</span>
          </Button>   
        </Link>
    </Typography>
  );
}
