import { TextField, withStyles } from "@material-ui/core";

export const CustomTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      backgroundColor: "#ffffff",
      color: "#191919",
      borderRadius: 5,
      fontFamily: "Inter, sans-serif",
      "& .MuiOutlinedInput-input": {
        padding: "13px 15px",
      },
      "&.Mui-focused fieldset": {
        border: "2px solid #4582c3",
        // boxShadow:
        //   "inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(102 175 233 / 60%)",
      },
      "&:hover fieldset": {
        borderColor: "#4582c3",
      },
    },
    "& .MuiOutlinedInput-notchedOutline": {
      border: "1px solid #D4D6D8",
    },
    "&.Mui-disabled": {
      borderColor: "#D4D6D8",
      cursor: "not-allowed",
    },
  },
})(TextField);
