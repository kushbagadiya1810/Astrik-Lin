import { Tooltip, withStyles } from "@material-ui/core";

export const CustomTooltip = withStyles({
  tooltip: {
    maxWidth: "318px",
    color: "#191919",
    backgroundColor: "#ffffff",
    border: "1px solid #d4d6d8",
    borderRadius: "9px",
    padding: "18px",
    // left: "15px",
    // margin: "0 6.43px",
  },
  arrow: {
    color: "#ffffff",
    fontSize: "22px",
    marginTop: 0,
    marginBottom: 0,
    "&:before": {
      border: "1px solid #d4d6d8",
      borderRadius: "3px",
    },
  },
})(Tooltip);
