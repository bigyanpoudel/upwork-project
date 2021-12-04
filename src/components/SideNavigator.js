import React from "react";
import { Grid, makeStyles, Paper } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
const style = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    background: " #FFFFFF",
  },
  nav: {
    padding: "1rem 0",
  },
  navItem: {
    height: 40,
    paddingLeft: 15,
    color: "var(--color-3)",
    fontSize: "1rem",
    "&:hover": {
      courser: "pointer",
    },
  },
  activeNavItem: {
    color: "var(--color-4)",
    position: "relative",
    fontWeight: "600",
  },
  title: {
    fontFamily: "var(--font-family)",
    fontWeight: "500",
    "&:hover": {
      color: "var(--color-4) important",
    },
  },
}));
const SideNavigator = () => {
  const classes = style();

  const navItems = [
    {
      title: "Новости",
      url: "/",
    },
    {
      title: "Продажа BTC",
      url: "/Продажа-BTC",
    },
    {
      title: "Покупка BTC",
      url: "/Покупка-BTC",
    },
    {
      title: "Пополнения",
      url: "/Пополнения",
    },
    {
      title: "Автоплатежи",
      url: "/Автоплатежи",
    },
    {
      title: "Кошельки",
      url: "/Кошельки",
    },
    {
      title: "Статистика",
      url: "/Статистика",
    },
    {
      title: "Api",
      url: "/Api",
    },
    {
      title: "FAQ",
      url: "/FAQ",
    },
    {
      title: "Настройки",
      url: "/Настройки",
    },
  ];
  const location = useLocation();
  console.log("location", location);
  return (
    <Paper elevation={0} className={classes.container}>
      <Grid containerjustifyContent="flex-start" alignItems="center">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          //   rowSpacing={3}
          className={classes.nav}
        >
          {navItems.map((el, index) => {
            return (
              <Grid
                item
                container
                xs={12}
                className={
                  el.url === location.pathname
                    ? `${classes.navItem} ${classes.activeNavItem} navItemLine`
                    : classes.navItem
                }
                justifyContent="flex-start"
                alginItems="center"
                alignContent="center"
                
              >
                <Grid item>
                  <Link
                    to={el.url}
                    // activeClassName={classes.activeNavItem}
                    // className={classes.navItem}
                    key={index}
                    style={{
                      textDecoration: "none",
                      color:
                        el.url === location.pathname
                          ? "var(--color-4)"
                          : "var(--color-3)",
                    }}
                    className="navItem"
                  >
                    <h5 classname={classes.title}>{el.title}</h5>
                  </Link>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default SideNavigator;
