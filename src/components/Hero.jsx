import React, { useState } from "react";
import { Box, Button, Typography, CircularProgress } from "@mui/material";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadPDF = () => {
    setIsLoading(true);
    const scale = 2; 
    const chartElement = document.getElementById("chart");
    const width = chartElement.offsetWidth;
    const height = chartElement.offsetHeight;

    html2canvas(chartElement, { scale: scale }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'pt', 'a4');

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 20;
      const titleY = margin + 20; 
      const userInfoY = titleY + 40; // User info position (below title)
      const chartY = userInfoY + 50; // Chart position (below user info)
      const chartWidth = pageWidth - margin * 2;
      const chartHeight = (height / width) * chartWidth;

      // Add title
      pdf.setFontSize(20);
      pdf.setFont('helvetica', 'bold');
      pdf.text("The Big 5 Personality Report", pageWidth / 2, titleY, { align: 'center' });

      // Add horizontal line below the title
      pdf.setDrawColor(0, 0, 0);
      pdf.setLineWidth(0.5);
      pdf.line(margin, titleY + 20, pageWidth - margin, titleY + 20);

      // Add user name and phone number
      pdf.setFontSize(12);
      pdf.setFont('helvetica', 'normal');
      const userName = "User Name"; // Replace with actual user name
      const userPhone = "12345 67890"; // Replace with actual user phone number
      pdf.text(`Name: ${userName}`, margin, userInfoY);
      pdf.text(`Phone: ${userPhone}`, pageWidth - margin, userInfoY, { align: 'right' });

      // Add horizontal line below the user info
      pdf.line(margin, userInfoY + 10, pageWidth - margin, userInfoY + 10);

      // Add chart
      pdf.addImage(imgData, 'PNG', margin, chartY, chartWidth, chartHeight);

      // Add footer
      const footerY = chartY + chartHeight + 30; // Move the footer up a bit
      pdf.setFontSize(12);
      pdf.setTextColor(0, 0, 0);
      const footerText = "You can see a more detailed report of each trait at ";
      const linkText = "localhost";
      const linkUrl = "http://localhost:5173/";

      const textWidth = pdf.getTextWidth(footerText + " ");
      const linkWidth = pdf.getTextWidth(linkText);
      const textX = (pageWidth - (textWidth + linkWidth)) / 2;

      // Add horizontal line above the footer
      pdf.line(margin, footerY - 15, pageWidth - margin, footerY - 15);

      pdf.text(footerText + " ", textX, footerY);
      pdf.setTextColor(0, 0, 255);
      pdf.textWithLink(linkText, textX + textWidth, footerY, { url: linkUrl });

      setIsLoading(false);
      pdf.save("document.pdf");
    }).catch(() => {
      setIsLoading(false); // Ensure to reset loading state on error as well
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { md: "row", xs: "column" },
        alignItems: "center",
        justifyContent: "space-between",
        my: "2rem",
        maxWidth: "1145px",
      }}
    >
      <Typography
        variant="h4"
        component="h1"
        sx={{ fontWeight: "bold", textAlign: { md: "left", xs: "center" } }}
      >
        The Big Five Personality Test
      </Typography>

      <Box sx={{ position: "relative" }}>
        <Button
          id="downloadPDF"
          variant="outlined"
          onClick={handleDownloadPDF}
          disabled={isLoading}
          sx={{
            color: "primary.orange",
            ":hover": { bgcolor: "#f44336", color: "white" },
            border: "1px solid #f44336",
            minWidth: "fit-content",
            mt: { md: "0", xs: "1rem" },
            "@media print": {
              display: "none", // Hide the button on print
            },
          }}
        >
          {isLoading ? (
            <CircularProgress size={24} sx={{ color: "#f44336" }} />
          ) : (
            "Download PDF"
          )}
        </Button>
      </Box>
    </Box>
  );
}