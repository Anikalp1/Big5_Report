import React from "react";
import { Container } from "@mui/material";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ApexChart from "./components/Charts/ApexChart";
import Neuroticism from "./components/Categories/Neuroticism";
import Extraversion from "./components/Categories/Extraversion";
import OpennessToExperience from "./components/Categories/OpennessToExperience";
import Agreeableness from "./components/Categories/Agreeableness";
import Conscientiousness from "./components/Categories/Conscientiousness";

function App() {
  return (
    <Container>
      <Navbar />
      <hr style={{ border: "1px solid #0002" }} />
      <div id="pdf-content">
        <Hero />
        <hr style={{ border: "1px solid #0002" }} />
        <ApexChart />
      </div>
      <Neuroticism />
      <Extraversion />
      <OpennessToExperience />
      <Agreeableness />
      <Conscientiousness />
    </Container>
  );
}

export default App;
