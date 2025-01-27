import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { Container } from "./dndContainer";

const SortModal = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h6" gutterBottom>
          Sort Layout
        </Typography>

        <Container onClose={onClose} />
      </Box>
    </Modal>
  );
};

export default SortModal;
