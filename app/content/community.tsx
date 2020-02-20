import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { Icon, Title } from "components";
import { labels } from "labels";
import { colours, layout } from "styles";

type SectionProps = {
  sectionText: {
    body: string;
    heading: string;
    subHeading: string;
  };
};

const content = [
  {
    body:
      "Bem-vinda à Elpis - um ambiente digital seguro onde você pode discutir tópicos importantes para você e obter suporte de outras usuárias da comunidade. Com sua participação ativa, nossas discussões podem ser um ótimo espaço para compartilhar experiências e opiniões pessoais e, finalmente, obter uma noção mais ampla do que outras usuárias como você vivenciam. Nosso desejo é que você encontre suporte e informações úteis e se divirta ao longo do caminho. Como em qualquer plataforma, precisamos seguir algumas regras. Familiarize-se com as diretrizes abaixo, que ajudarão a manter as coisas seguras e agradáveis ​​para todas nós. ",
    heading: "Introdução",
    subHeading: null,
  },
  {
    body:
      "As usuárias da Elpis falam sobre muitos tópicos que podem (ou não) ser sensíveis. Entendemos que existem abordagens diferentes para os mais diversos assuntos e as pessoas também podem ter opiniões diferentes. Mas lembre-se que sempre existe uma pessoa real do outro lado da tela, que pode precisar do seu apoio. Vamos nos respeitar e ter conversas que honrem nossa humanidade.",
    heading: "Dicas básicas que todo membro deve seguir",
    subHeading: "Todas nós somos humanas.",
  },
];

const Section = (props: SectionProps) => {
  const { body, heading, subHeading } = props.sectionText;

  return (
    <View style={styles.section}>
      <Title text={heading} small />
      <Text>
        {subHeading && (
          <Text style={{ fontWeight: "bold" }}>{subHeading} </Text>
        )}
        {body}
      </Text>
    </View>
  );
};

const SectionContainer = ({ sectionList }) => {
  return sectionList.map((item, index) => (
    <Section sectionText={item} key={index} />
  ));
};

const Community = () => {
  const { title } = labels.communityRules;

  return (
    <View>
      <Icon name="hands-helping" size={40} colour={colours.navyBlueDark} />
      <Title text={title} large />
      <SectionContainer sectionList={content} />
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    marginVertical: layout.spacingL,
  },
});

export { Community };
