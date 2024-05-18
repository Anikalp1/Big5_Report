import React from 'react';
import { createRoot } from 'react-dom/client'; // React 18
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import PDFContent from '../components/PDFContent/PDFContent';

const renderToCanvas = async (element) => {
  const canvas = await html2canvas(element, {
    useCORS: true,
    scale: 1.5,
  });
  return canvas;
};

const checkChartsRendered = (elements) => {
  return elements.every(element => {
    const svg = element.querySelector('svg');
    return svg && svg.clientWidth > 0 && svg.clientHeight > 0;
  });
};

const renderToPDF = async () => {
  const rootElement = document.createElement('div');
  rootElement.classList.add('pdf-render');
  document.body.appendChild(rootElement);

  // Create a React root and render PDFContent
  const root = createRoot(rootElement);
  root.render(<PDFContent />);

  // Wait for charts to render properly
  await new Promise(resolve => setTimeout(resolve, 3000)); // Increased delay

  const elements = [
    document.querySelector('#hero-chart-section'),
    document.querySelector('#neuroticism-section'),
    document.querySelector('#extraversion-section'),
    document.querySelector('#openness-section'),
    document.querySelector('#agreeableness-section'),
    document.querySelector('#conscientiousness-section'),
  ];

  if (!checkChartsRendered(elements)) {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Additional wait if charts are not rendered
  }

  const pdf = new jsPDF('p', 'mm', 'a4');
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const padding = 10;

  for (let i = 0; i < elements.length; i++) {
    if (!elements[i]) continue;

    const canvas = await renderToCanvas(elements[i]);
    const imgData = canvas.toDataURL('image/jpeg', 0.7);
    const imgProps = pdf.getImageProperties(imgData);
    const imgWidth = pdfWidth - padding * 2;
    const imgHeight = (imgProps.height * imgWidth) / imgProps.width;

    if (i > 0) pdf.addPage();
    pdf.addImage(imgData, 'JPEG', padding, padding, imgWidth, imgHeight);
  }

  pdf.save('Personality_Report.pdf');
  document.body.removeChild(rootElement);
};

export default renderToPDF;
