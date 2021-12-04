import React from "react";
import { makeStyles } from "@material-ui/core";
const styles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: 70,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "var(--font-family)",
    padding:".8rem auto",
    borderBottom:"1px solid transparent"
  },
  heading: {
    fontSize: "1rem",
    color: "var(--color-3)",
    marginBottom: ".3rem",
    [theme.breakpoints.down("xs")]: {
      fontSize: ".8rem",
      textAlign:"center",
    },
  },
  subHeading: {
    fontSize: ".9rem",
    color: "var(--color-4)",
  },
  subHeadingColor: {
    color: "var(--color-6)",
  },
}));
const Header = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <p className={classes.heading}>
        Blockchain BTC-RUB: <strong>3 432 349</strong> | Ваша ставка:{" "}
        <strong>3 775 583</strong> RUB (10.0%)
      </p>
      <h6 className={classes.subHeading}>
        Qiwi - <span className={classes.subHeadingColor}>включено</span>{" "}
        (qiwi-btc)
      </h6>
    </div>
  );
};

export default Header;
