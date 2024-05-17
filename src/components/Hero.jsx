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
    const originalChartWidth = chartElement.offsetWidth;
    const originalChartHeight = chartElement.offsetHeight;

    const pageWidth = 595.28; // A4 page width in points
    const pageHeight = 841.89; // A4 page height in points
    const margin = 20;
    const maxChartWidth = pageWidth - margin * 2;
    const maxChartHeight = pageHeight - (margin + 20 + 40 + 50 + 30); // Adjust based on your layout

    let chartWidth, chartHeight;

    if (originalChartWidth / originalChartHeight > maxChartWidth / maxChartHeight) {
      chartWidth = maxChartWidth;
      chartHeight = (originalChartHeight / originalChartWidth) * chartWidth;
    } else {
      chartHeight = maxChartHeight;
      chartWidth = (originalChartWidth / originalChartHeight) * chartHeight;
    }

    html2canvas(chartElement, { scale: scale })
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "pt", "a4");

        const titleY = margin + 20;
        const userInfoY = titleY + 40;
        const chartY = userInfoY + 50;

        pdf.setFontSize(20);
        pdf.setFont("helvetica", "bold");
        pdf.text("The Big 5 Personality Report", pageWidth / 2, titleY, {
          align: "center",
        });

        pdf.setDrawColor(0, 0, 0);
        pdf.setLineWidth(0.5);
        pdf.line(margin, titleY + 20, pageWidth - margin, titleY + 20);

        pdf.setFontSize(12);
        pdf.setFont("helvetica", "normal");
        const userName = "User Name";
        const userPhone = "12345 67890";
        pdf.text(`Name: ${userName}`, margin, userInfoY);
        pdf.text(`Phone: ${userPhone}`, pageWidth - margin, userInfoY, {
          align: "right",
        });

        pdf.line(margin, userInfoY + 10, pageWidth - margin, userInfoY + 10);

        pdf.addImage(imgData, "PNG", margin, chartY, chartWidth, chartHeight);

        const footerY = chartY + chartHeight + 30;
        pdf.setFontSize(12);
        pdf.setTextColor(0, 0, 0);
        const footerText = "You can see a more detailed report of each trait at ";
        const linkText = "big5 report by edwisely.";
        const linkUrl = "https://big5-report.vercel.app/";

        const textWidth = pdf.getTextWidth(footerText + " ");
        const linkWidth = pdf.getTextWidth(linkText);
        const textX = (pageWidth - (textWidth + linkWidth)) / 2;

        pdf.line(margin, footerY - 15, pageWidth - margin, footerY - 15);

        pdf.text(footerText + " ", textX, footerY);
        pdf.setTextColor(0, 0, 255);
        pdf.textWithLink(linkText, textX + textWidth, footerY, {
          url: linkUrl,
        });

        setIsLoading(false);
        pdf.save("document.pdf");
      })
      .catch(() => {
        setIsLoading(false);
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
