import React from "react";
import Section from "../Sections/Section";
import { Box } from "@mui/material";
import InfoCard from "../Sections/Card";

const categories = [
  "Trust",
  "Morality",
  "Altruism",
  "Cooperation",
  "Modesty",
  "Sympathy",
];
const data = [14, 13, 16, 12, 4, 14];

const Agreeableness = () => {
  return (
    <Box>
      <Section
        title="Agreeableness"
        description="Agreeableness reflects individual differences in concern with cooperation and social harmony. Agreeable individuals value getting along with others.


        "
        categories={categories}
        data={data}
      >
        They are therefore considerate, friendly, generous, helpful, and willing
        to compromise their interests with others'. Agreeable people also have
        an optimistic view of human nature. They believe people are basically
        honest, decent, and trustworthy.
        <br />
        <br />
        Disagreeable individuals place self-interest above getting along with
        others. They are generally unconcerned with others' well-being, and
        therefore are unlikely to extend themselves for other people. Sometimes
        their skepticism about others' motives causes them to be suspicious,
        unfriendly, and uncooperative.
        <br />
        <br />
        Agreeableness is obviously advantageous for attaining and maintaining
        popularity. Agreeable people are better liked than disagreeable people.
        On the other hand, agreeableness is not useful in situations that
        require tough or absolute objective decisions. Disagreeable people can
        make excellent scientists, critics, or soldiers.
        <br />
        <br />
        Your high level of Agreeableness indicates a strong interest in others'
        needs and well-being. You are pleasant, sympathetic, and cooperative.
      </Section>

      <InfoCard
        title="Trust"
        score="14 (high)
        "
        paragraph="
        A person with high trust assumes that most people are fair, honest, and have good intentions. Persons low in trust see others as selfish, devious, and potentially dangerous.




        "
      />
      <InfoCard
        title="Morality"
        score="13 (high)"
        paragraph="High scorers on this scale see no need for pretense or manipulation when dealing with others and are therefore candid, frank, and sincere. Low scorers believe that a certain amount of deception in social relationships is necessary. People find it relatively easy to relate to the straightforward high-scorers on this scale. They generally find it more difficult to relate to the unstraightforward low-scorers on this scale. It should be made clear that low scorers are not unprincipled or immoral; they are simply more guarded and less willing to openly reveal the whole truth.




        "
      />
      <InfoCard
        title="Altruism"
        score="16 (high)
        "
        paragraph="Altruistic people find helping other people genuinely rewarding. Consequently, they are generally willing to assist those who are in need. Altruistic people find that doing things for others is a form of self-fulfillment rather than self-sacrifice. Low scorers on this scale do not particularly like helping those in need. Requests for help feel like an imposition rather than an opportunity for self-fulfillment.

        "
      />
      <InfoCard
        title="Cooperation"
        score="12 (neutral)

        "
        paragraph="Individuals who score high on this scale dislike confrontations. They are perfectly willing to compromise or to deny their own needs in order to get along with others. Those who score low on this scale are more likely to intimidate others to get their way.



        "
      />
      <InfoCard
        title="Modesty"
        score="4 (low)

        "
        paragraph="High scorers on this scale do not like to claim that they are better than other people. In some cases this attitude may derive from low self-confidence or self-esteem. Nonetheless, some people with high self-esteem find immodesty unseemly. Those who are willing to describe themselves as superior tend to be seen as disagreeably arrogant by other people.



        "
      />
      <InfoCard
        title="Sympathy"
        score="14 (high)
        "
        paragraph="People who score high on this scale are tenderhearted and compassionate. They feel the pain of others vicariously and are easily moved to pity. Low scorers are not affected strongly by human suffering. They pride themselves on making objective judgments based on reason. They are more concerned with truth and impartial justice than with mercy.


        "
      />
    </Box>
  );
};

export default Agreeableness;
