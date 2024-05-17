import React from "react";
import Section from "../Sections/Section";
import { Box } from "@mui/material";
import InfoCard from "../Sections/Card";

const categories = [
  "Self-Efficacy",
  "Orderliness",
  "Dutifulness",
  "Achievement-Striving",
  "Self-Discipline",
  "Cautiousness",
];
const data = [17, 5, 12, 14, 7, 5];

const Conscientiousness = () => {
  return (
    <Box>
      <Section
        title="Conscientiousness"
        description="Conscientiousness concerns the way in which we control, regulate, and direct our impulses.

        "
        categories={categories}
        data={data}
      >
        Impulses are not inherently bad; occasionally time constraints require a
        snap decision, and acting on our first impulse can be an effective
        response. Also, in times of play rather than work, acting spontaneously
        and impulsively can be fun. Impulsive individuals can be seen by others
        as colorful, fun-to-be-with, and zany.
        <br />
        <br />
        Nonetheless, acting on impulse can lead to trouble in a number of ways.
        Some impulses are antisocial. Uncontrolled antisocial acts not only harm
        other members of society, but also can result in retribution toward the
        perpetrator of such impulsive acts. Another problem with impulsive acts
        is that they often produce immediate rewards but undesirable, long-term
        consequences. Examples include excessive socializing that leads to being
        fired from one's job, hurling an insult that causes the breakup of an
        important relationship, or using pleasure-inducing drugs that eventually
        destroy one's health.
        <br />
        <br />
        Impulsive behavior, even when not seriously destructive, diminishes a
        person's effectiveness in significant ways. Acting impulsively disallows
        contemplating alternative courses of action, some of which would have
        been wiser than the impulsive choice. Impulsivity also sidetracks people
        during projects that require organized sequences of steps or stages.
        Accomplishments of an impulsive person are therefore small, scattered,
        and inconsistent.
        <br />
        <br />
        A hallmark of intelligence, what potentially separates human beings from
        earlier life forms, is the ability to think about future consequences
        before acting on an impulse. Intelligent activity involves contemplation
        of long-range goals, organizing and planning routes to these goals, and
        persisting toward one's goals in the face of short-lived impulses to the
        contrary. The idea that intelligence involves impulse control is nicely
        captured by the term prudence, an alternative label for the
        Conscientiousness domain. Prudent means both wise and cautious.
        <br />
        <br />
        Persons who score high on the Conscientiousness scale are, in fact,
        perceived by others as intelligent. The benefits of high
        conscientiousness are obvious. Conscientious individuals avoid trouble
        and achieve high levels of success through purposeful planning and
        persistence. They are also positively regarded by others as intelligent
        and reliable. On the negative side, they can be compulsive
        perfectionists and workaholics. Furthermore, extremely conscientious
        individuals might be regarded as stuffy and boring.
        <br />
        <br />
        Unconscientious people may be criticized for their unreliability, lack
        of ambition, and failure to stay within the lines, but they will
        experience many short-lived pleasures and they will never be called
        stuffy.
        <br />
        <br />
        Your score on Conscientiousness is low, indicating you like to live for
        the moment and do what feels good now. Your work tends to be careless
        and disorganized.
      </Section>

      <InfoCard
        title="Self-Efficacy"
        score="17 (high)

        "
        paragraph="
        Self-Efficacy describes confidence in one's ability to accomplish things. High scorers believe they have the intelligence (common sense), drive, and self-control necessary for achieving success. Low scorers do not feel effective, and may have a sense that they are not in control of their lives.


        "
      />
      <InfoCard
        title="Orderliness"
        score="5 (low)
        "
        paragraph="Persons with high scores on orderliness are well-organized. They like to live according to routines and schedules. They keep lists and make plans. Low scorers tend to be disorganized and scattered.

        "
      />
      <InfoCard
        title="Dutifulness"
        score="12 (neutral)"
        paragraph="This scale reflects the strength of a person's sense of duty and obligation. Those who score high on this scale have a strong sense of moral obligation. Low scorers find contracts, rules, and regulations overly confining. They are likely to be seen as unreliable or even irresponsible.

        "
      />
      <InfoCard
        title="Achievement-Striving"
        score="14 (high)"
        paragraph="Individuals who score high on this scale dislike confrontations. They are perfectly willing to compromise or to deny their own needs in order to get along with others. Those who score low on this scale are more likely to intimidate others to get their way.        "
      />
      <InfoCard
        title="Self-Discipline"
        score="7 (low)"
        paragraph="Self-discipline-what many people call will-power-refers to the ability to persist at difficult or unpleasant tasks until they are completed. People who possess high self-discipline are able to overcome reluctance to begin tasks and stay on track despite distractions. Those with low self-discipline procrastinate and show poor follow-through, often failing to complete tasks-even tasks they want very much to complete."
      />
      <InfoCard
        title="Cautiousness"
        score="5 (low)"
        paragraph="Cautiousness describes the disposition to think through possibilities before acting. High scorers on the Cautiousness scale take their time when making decisions. Low scorers often say or do first thing that comes to mind without deliberating alternatives and the probable consequences of those alternatives."
      />
    </Box>
  );
};

export default Conscientiousness;
