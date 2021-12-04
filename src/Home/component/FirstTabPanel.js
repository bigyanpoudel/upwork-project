import React from "react";
import { Grid, makeStyles, withStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
const style = makeStyles((theme) => ({
  container: {
    fontFamily: "var(--font-family)",
    fontWeight: "500",
    fontSize: "1.2rem",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1rem",
    },
  },
  root: {
    width: "95%",
    margin: "0 auto",
  },
  table: {
    width: "100vw",
    overflow: "hidden",
    overflowX: "scroll",
    borderWidth: "1px",
    "&::-webkit-scrollbar": {
        display: "none",
      },
      "-ms-overflow-style": "none",
      scrollbarWidth:"none",
  },
  row: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.background.default,
    },
  },
  fontStyle:{
      fontSize:".8rem",
      fontFamily:"var(--font-family)",
      fontWeight:"600"
  }
}));
const CustomTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F6F9FC",
    color: theme.palette.common.black,
    border: "none",
    outline: "none",
    fontFamily: "var(--font-family)",
    fontWeight: "600",
  },
  body: {
    fontSize: 14,
    backgroundColor: "white",
  },
}))(TableCell);

const FirstTabPanel = ({title,subTitle}) => {
  const classes = style();
  return (
    <Grid container className={classes.container} >
      <Grid container xs={12}>
        <h5 style={{marginBottom:"1.4rem"}}>
          {title}
          <span style={{ color: "var(--color-1)",paddingLeft:".4rem" }}> { subTitle || "1 заявок"}</span>
        </h5>
      </Grid>
      <Grid container xs={12} className={classes.table}>
        <Table >
          <TableHead>
            <TableRow>
              <CustomTableCell align="center">Статус</CustomTableCell>
              <CustomTableCell align="center">Id</CustomTableCell>

              <CustomTableCell align="center">Реквизиты</CustomTableCell>
              <CustomTableCell align="center">Отправляем</CustomTableCell>
              <CustomTableCell align="center">Получаем</CustomTableCell>
              <CustomTableCell align="center">Дата</CustomTableCell>
              <CustomTableCell align="center">Действия</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className={classes.row}>
              <CustomTableCell align="center" component="th" scope="row">
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={1}
                >
                  <Grid item>
                    <div
                      style={{
                        height: "8px",
                        width: "8px",
                        borderRadius: "50%",
                        background: "var(--color-7)",
                      }}
                    ></div>
                  </Grid>
                  <Grid item>
                    <p className={classes.fontStyle}>Hello</p>
                  </Grid>
                </Grid>
              </CustomTableCell>
              <CustomTableCell align="center" component="th" scope="row">
                <p className={classes.fontStyle} style={{ color: "var(--color-1)" }}>Hello</p>
              </CustomTableCell>
              <CustomTableCell align="center" component="th" scope="row">
                <p className={classes.fontStyle} style={{ color: "var(--color-7)" }}>Hello</p>
              </CustomTableCell>
              <CustomTableCell align="center" component="th" scope="row">
                <ColumnCellItem
                  title="0.00188017"
                  subTile="3776254(+10%)"
                  color="var(--color-1)"
                />
              </CustomTableCell>
              <CustomTableCell align="center" component="th" scope="row">
                <ColumnCellItem
                  title="7100"
                  subTile="Кош.: +79004296081"
                  color="var(--color-7)"
                />
              </CustomTableCell>
              <CustomTableCell align="center" component="th" scope="row">
                <ColumnCellItem
                  title="04.10.21,17:52"
                  subTile="35 минут на оплату"
                  color="var(--color-7)"
                />
              </CustomTableCell>
              
              <CustomTableCell align="center" component="th" scope="row">
                <p className={classes.fontStyle}>Hello</p>
              </CustomTableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Grid>
    </Grid>
  );
};

export default FirstTabPanel;

const ColumnCellItem = ({ title, subTile, color }) => {
    const classes = style()
  return (
    <Grid container direction="column">
      <Grid item>
        <p className={classes.fontStyle}>{title}</p>
      </Grid>
      <Grid item>
        <p className={classes.fontStyle} style={{ color: color }}>{subTile}</p>
      </Grid>
    </Grid>
  );
};
