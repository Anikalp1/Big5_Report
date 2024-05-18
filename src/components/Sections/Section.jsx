import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import ApexChart from "../Charts/ApexChart";

const Section = ({ title, description, categories, data, children }) => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <Box sx={{ pt: "4rem", borderTop: "1px solid #e0e0e0" }}>
      <Typography
        variant="h5"
        className="Title"
        sx={{ fontWeight: "500", color: "primary.grey", mb: "0.5rem" }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        className="SubTitle"
        sx={{ fontWeight: "400", color: "primary.grey" }}
      >
        {description}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "primary.grey",
          my: "2rem",
          display: showContent ? "block" : "none",
        }}
      >
        {children}
      </Typography>
      {!showContent && (
        <Button
          variant="outlined"
          sx={{
            color: "primary.orange",
            border: "1px solid #f44336",
            my:"0.5rem",
            ":hover": { bgcolor: "#f44336", color: "white" },
            '.pdf-render &': {
              display: 'none', // Hide button in PDF render mode
            },
          }}
          onClick={toggleContent}
        >
          Read More
        </Button>
      )}
      <ApexChart categories={categories} data={data} />
    </Box>
  );
};

export default Section;
