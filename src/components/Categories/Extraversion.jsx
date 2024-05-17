import React from "react";
import Section from "../Sections/Section";
import { Box } from "@mui/material";
import InfoCard from "../Sections/Card";

const categories = [
  "Friendliness",
  "Gregariousness",
  "Assertiveness",
  "Activity Level",
  "Excitement-Seeking",
  "Cheerfulness",
];
const data = [6, 5, 17, 11, 16, 15];

const Extraversion = () => {
  return (
    <Box>
      <Section
        title="Extraversion"
        description="Extraversion is marked by pronounced engagement with the external world."
        categories={categories}
        data={data}
      >
        Extraverts enjoy being with people, are full of energy, and often
        experience positive emotions. They tend to be enthusiastic,
        action-oriented, individuals who are likely to say "Yes!" or "Let's go!"
        to opportunities for excitement. In groups they like to talk, assert
        themselves, and draw attention to themselves.
        <br />
        <br />
        Introverts lack the exuberance, energy, and activity levels of
        extraverts. They tend to be quiet, low-key, deliberate, and disengaged
        from the social world. Their lack of social involvement should not be
        interpreted as shyness or depression; the introvert simply needs less
        stimulation than an extravert and prefers to be alone.
        <br />
        <br />
        The independence and reserve of the introvert is sometimes mistaken as
        unfriendliness or arrogance. In reality, an introvert who scores high on
        the agreeableness dimension will not seek others out but will be quite
        pleasant when approached.
        <br />
        <br />
        Your score on Extraversion is low, indicating you are introverted,
        reserved, and quiet. You enjoy solitude and solitary activities. Your
        socialization tends to be restricted to a few close friends.
      </Section>

      <InfoCard
        title="Friendliness"
        score="6 (low)
        "
        paragraph="Friendly people genuinely like other people and openly demonstrate positive feelings toward others. They make friends quickly and it is easy for them to form close, intimate relationships. Low scorers on Friendliness are not necessarily cold and hostile, but they do not reach out to others and are perceived as distant and reserved."
      />
      <InfoCard
        title="Gregariousness"
        score="5 (low)"
        paragraph="Gregarious people find the company of others pleasantly stimulating and rewarding. They enjoy the excitement of crowds. Low scorers tend to feel overwhelmed by, and therefore actively avoid, large crowds. They do not necessarily dislike being with people sometimes, but their need for privacy and time to themselves is much greater than for individuals who score high on this scale.

        "
      />
      <InfoCard
        title="Assertiveness"
        score="17 (high)
        "
        paragraph="High scorers Assertiveness like to speak out, take charge, and direct the activities of others. They tend to be leaders in groups. Low scorers tend not to talk much and let others control the activities of groups.

        "
      />
      <InfoCard
        title="Activity Level"
        score="11 (low)
        "
        paragraph="Active individuals lead fast-paced, busy lives. They move about quickly, energetically, and vigorously, and they are involved in many activities. People who score low on this scale follow a slower and more leisurely, relaxed pace.

        "
      />
      <InfoCard
        title="Excitement-Seeking"
        score="16 (high)
        "
        paragraph="High scorers on this scale are easily bored without high levels of stimulation. They love bright lights and hustle and bustle. They are likely to take risks and seek thrills. Low scorers are overwhelmed by noise and commotion and are adverse to thrill-seeking.

        "
      />
      <InfoCard
        title="Cheerfulness"
        score="15 (high)
        "
        paragraph="This scale measures positive mood and feelings, not negative emotions (which are a part of the Neuroticism domain). Persons who score high on this scale typically experience a range of positive feelings, including happiness, enthusiasm, optimism, and joy. Low scorers are not as prone to such energetic, high spirits.

        "
      />
    </Box>
  );
};

export default Extraversion;
