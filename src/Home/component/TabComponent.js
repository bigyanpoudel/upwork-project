import React from "react";
import { Box, Tab, Tabs, Typography, makeStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import FirstTabPanel from "./FirstTabPanel";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box style={{paddingTop:"1.4rem"}}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const style = makeStyles((theme) => ({
  selected: {
    background: "#D2E8FD",
    color: "var(--color-4)",
    borderRadius: "4px",
    fontFamily: "var(--font-family)",
    fontWeight: "600",
    fontSize:".8rem"
  },
  indicator: {
    display: "flex",
    flexWrap: "wrap",
  },
  root:{
    fontSize:".8rem",
    fontFamily: "var(--font-family)",
    fontWeight: "600",
  }
}));
const TabComponent = () => {
  const classes = style();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabItems = [
    "Активные",
    "На проверке",
    "Пересчитанные",
    "Завершенные",
    "Отмененные",
    "Все",
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons={false}
          classes={{
            indicator: classes.indicator,
          }}
          TabIndicatorProps={{
            style: {
              background: "none",
            },
          }}
        >
          {tabItems.map((el, index) => (
            <Tab
              label={el}
              {...a11yProps(index)}
              classes={{
                  root:classes.root,
                selected: classes.selected,
              }}
            />
          ))}
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <FirstTabPanel title=" Активные заявки"/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <FirstTabPanel title="На проверке"/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <FirstTabPanel title="Пересчитанные"/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <FirstTabPanel title="Завершенные"/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <FirstTabPanel title="Отмененные" subTitle="70 заявок"/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <FirstTabPanel title="Все"/>
      </TabPanel>
    </Box>
  );
};

export default TabComponent;
