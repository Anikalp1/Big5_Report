import React from 'react';
import Hero from '../Hero';
import ApexChart from '../Charts/ApexChart';
import Neuroticism from '../Categories/Neuroticism';
import Extraversion from '../Categories/Extraversion';
import OpennessToExperience from '../Categories/OpennessToExperience';
import Agreeableness from '../Categories/Agreeableness';
import Conscientiousness from '../Categories/Conscientiousness';

const textStyle = {
  fontFamily: 'Arial, sans-serif',
  fontSize: '12px',
  color: '#000',
};

const PDFContent = () => (
  <div id="pdf-content" style={{ padding: '20px', backgroundColor: '#fff', ...textStyle }}>
    <div id="hero-chart-section" style={{ marginBottom: '20px' }}>
      <Hero />
      <ApexChart forceLargeScreen />
    </div>
    <div id="neuroticism-section" style={{ marginBottom: '20px', ...textStyle }}>
      <Neuroticism />
    </div>
    <div id="extraversion-section" style={{ marginBottom: '20px', ...textStyle }}>
      <Extraversion />
    </div>
    <div id="openness-section" style={{ marginBottom: '20px', ...textStyle }}>
      <OpennessToExperience />
    </div>
    <div id="agreeableness-section" style={{ marginBottom: '20px', ...textStyle }}>
      <Agreeableness />
    </div>
    <div id="conscientiousness-section" style={{ marginBottom: '20px', ...textStyle }}>
      <Conscientiousness />
    </div>
  </div>
);

export default PDFContent;
