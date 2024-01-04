import React from "react";
import { Box, Pagination, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import "./pagination.scss";

const useStyles = makeStyles(() => ({
  ul: {
    "& .MuiPaginationItem-root": {
      color: "#fff",
      // backgroundColor: "#C3C4AC",
    },
  },
}));

const CustomPagination = () => {
  const classes = useStyles();
  return (
    <>
      <Box className="pagination-main-container t-pointer">
        <Stack spacing={2}>
          <Pagination
            classes={{ ul: classes.ul }}
            className="pagination-number"
            count={9}
            defaultPage={1}
            siblingCount={0}
            boundaryCount={1}
          />
        </Stack>
      </Box>
    </>
  );
};

export default CustomPagination;
