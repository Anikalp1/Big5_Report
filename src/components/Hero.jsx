import React, { useState } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import renderToPDF from '../utils/renderToPDF';

export default function Hero() {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownloadPDF = () => {
    setIsLoading(true);
    renderToPDF()
      .then(() => {
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        marginBottom: '20px',
        padding: { xs: '10px', md: '20px' },
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
        The Big Five Personality Test Report
      </Typography>
      <hr style={{ width: '50%', margin: 'auto' }} />
      <Typography variant="body1" sx={{ margin: '10px 0' }}>
        Name: User Name 
      </Typography>
      <Typography variant="body1" sx={{ margin: '10px 0' }}>
        Contact Number: 12345 67890
      </Typography>
      <hr style={{ width: '50%', margin: 'auto' }} />
      <Box sx={{ position: 'relative', marginTop: '20px' }}>
        <Button
          id="downloadPDF"
          variant="outlined"
          onClick={handleDownloadPDF}
          disabled={isLoading}
          sx={{
            color: 'primary.orange',
            ':hover': { bgcolor: '#f44336', color: 'white' },
            border: '1px solid #f44336',
            minWidth: 'fit-content',
            '@media print': {
              display: 'none', 
            },
            '.pdf-render &': {
              display: 'none', 
            },
            position: 'relative',
          }}
        >
          {isLoading ? (
            <>
              <CircularProgress size={24} sx={{ color: '#f44336', marginRight: '8px' }} />
              <span>Preparing your Report</span>
            </>
          ) : (
            'Download PDF'
          )}
        </Button>
      </Box>
    </Box>
  );
}
