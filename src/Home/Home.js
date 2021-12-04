import React from "react";
import { Grid, makeStyles,} from "@material-ui/core";
import TabComponent from "./component/TabComponent";
const style = makeStyles((theme) => ({
  paper: {
    width: "100%",
    background: "white",
  },
  padding: {
    padding: ".8rem 1.5rem",
    [theme.breakpoints.down("sm")]:{
        padding:".8rem 1rem"
    }
  },
  tabPadding: {
    padding: ".8rem 1.8rem",
    [theme.breakpoints.down("sm")]:{
        padding:".8rem 1rem"
    }
  },
 
  
}));
const Home = () => {
  const classes = style();
 
  
  return (
    <Grid container>
        <Grid container xs={12} className={classes.tabPadding}>
            <TabComponent/>
        </Grid>
        </Grid>
  );
};

export default Home;
