import { AppBar, Tab, Tabs, Box, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#cdedf6",
    color: "#191919",
    fontFamily: "Inter, sans-serif",
    margin: "18px 0",
    borderRadius: "5px",
    "& .MuiTab-root": {
      fontFamily: "Inter, sans-serif",
      borderRight: "1px solid #ffffff",
      textTransform: "capitalize",
      fontSize: "16px",
      opacity: 1,
      fontWeight: 600,
      minWidth: "146px",
    },
    "& .MuiTab-root:last-child": {
      borderRight: 0,
    },
    "& .MuiTabs-indicator": {
      height: "3px",
      backgroundColor: "#4582c3",
    },
  },
}));

const a11yProps = (index) => {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
};
const TabBars = ({ tabs, handleChange, value }) => {
  const classes = useStyles();
  // const [value, setValue] = useState(0);

  // const handleChange = (e, newValue) => {
  //   setValue(newValue);
  // };
  return (
    <>
      <AppBar position="static" color="default" className={classes.root}>
        <Tabs
          variant="scrollable"
          scrollButtons="on"
          value={value}
          onChange={handleChange}
        >
          {tabs?.map((item, i) => (
            <Tab key={i} label={item?.label} {...a11yProps(i)} />
          ))}
        </Tabs>
      </AppBar>
      <Box>
        {tabs?.map((item, i) => (
          <TabPanel key={i} value={value} index={i}>
            {item?.content}
          </TabPanel>
        ))}
      </Box>
    </>
  );
};

export default TabBars;
