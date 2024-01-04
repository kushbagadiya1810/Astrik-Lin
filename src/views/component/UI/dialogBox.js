import React from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  Grow,
  IconButton,
  Typography,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import "./ui.scss";

const DialogBox = ({ handleClose, open, title, content, closeIcon }) => {
  return (
    <Dialog
      className="custom-dialog"
      // maxWidth="md"
      onClose={handleClose}
      open={open}
      TransitionComponent={Grow}
      scroll={"paper"}
    >
      <Box className="dialog-content-box">
        <DialogTitle>
          <Box className="custom-dialog-title">
            <Typography variant="h3" className="dialog-title">
              {title}
            </Typography>
            {closeIcon !== false && (
              <IconButton className="dialog-close" onClick={handleClose}>
                <Close />
              </IconButton>
            )}
          </Box>
        </DialogTitle>
      </Box>
      {content}
    </Dialog>
  );
};

export default DialogBox;
