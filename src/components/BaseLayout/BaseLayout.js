import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import {NotificationsNone,RepeatOne,Telegram} from "@material-ui/icons"
import SideNavigator from "../SideNavigator";
import Header from "../Header";
import Home from "../../Home/Home";
import SwitchComponent from "../UI/SwitchComponent";
import {CARDDATA} from "../../utils/data"
import CardComponent from "../UI/CardComponent";
const style = makeStyles((theme) => ({
  container: {
    padding: "2rem 1rem",
    background: "#E5E5E5",
    width: "100%",
    [theme.breakpoints.down("xs")]: {
      padding: "2rem .4rem",
    },
  },
  paper: {
    width: "100%",
    background: "white",
  },
  padding: {
    padding: ".8rem 1.5rem",
    [theme.breakpoints.down("sm")]:{
        padding:".8rem 1rem"
    }
  }, fontStyle: {
    fontSize: ".9rem",
    fontWeight: "600",
    fontFamily: "var(--font-family)",
    [theme.breakpoints.down("sm")]:{
        fontSize: ".7rem",
    }
  },
  btn:{
      border:"none",
      outline:"none",
      background:"none",
      color:"var(--color-7)",
      "&:hover":{
        cursor: "pointer"
      }
  },
  icon:{
      marginRight:8,
      color:"var(--color-1)",
      "&:hover":{
        cursor: "pointer"  
      },
      [theme.breakpoints.down("sm")]:{
        marginRight:7,
    }
  },
  divider:{
      width:"100%",
      height:"1px",
      background:"var(--color-8)"
  },
  displayGrid:{
    width:"100%",
    display:"grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(200px,278px))",
    justifyContent:"space-evenly",
    gridGap:".7rem",
    [theme.breakpoints.down("xs")]:{
      gridTemplateColumns: "repeat(1,1fr)",
  }
}
}));
const BaseLayout = ({ children }) => {
  const classes = style();
  return (
    <Grid container>
      <Grid container>
        <Header />
      </Grid>
      <Grid container className={classes.container} justifyContent="center">
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12} md={2}>
            <SideNavigator />
          </Grid>
          <Grid item xs={12} md={10}>
            <Paper elevation={0} className={classes.paper}>
              <Grid container>
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  //   wrap="wrap"
                  className={classes.padding}
                  spacing={3}
                >
                  <Grid item>
                    <button className={`${classes.btn} ${classes.fontStyle}`}>
                      GET BOOST
                    </button>
                  </Grid>
                  <Grid item>
                    <SwitchComponent title="Сделки" />
                  </Grid>
                  <Grid item>
                    <NotificationsNone className={classes.icon} />
                    <Telegram className={classes.icon} />
                  </Grid>
                  <Grid item>
                    <h5 className={classes.fontStyle}>Выход</h5>
                  </Grid>
                </Grid>
                <Grid container xs={12} className={classes.divider}></Grid>
                <Grid container xs={12} className={classes.padding}>
            <div className={classes.displayGrid}>
            {
                CARDDATA.map((el,index)=> <CardComponent data={el} key={index}/>)
            }
            </div>
        </Grid>
                    {children}
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default BaseLayout;
