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
      "As usuárias da plataforma falam sobre muitos tópicos que podem (ou não) ser sensíveis. Entendemos que existem abordagens diferentes para os mais diversos assuntos e as pessoas também podem ter opiniões diferentes. Mas lembre-se que sempre existe uma pessoa real do outro lado da tela lendo o que você escreve, que pode precisar do seu apoio e compreensão. Tenha empatia e seja sensível. Pense no que você gostaria (ou não) de ouvir. Se não tiver nada de bom para dizer, não diga nada. Vamos nos respeitar e ter conversas que exercitem o que temos de melhor enquanto comunidade.",
    heading: "Dicas básicas que todo membro deve seguir",
    subHeading: "Todas nós somos humanas.",
  },
  {
    body:
      "Tudo o que as usuárias e participantes da comunidade publicam no espaço está sendo lido e moderado. Nós trabalhamos constantemente para manter o equilíbrio entre a liberdade de expressão e a sensação de segurança de cada mulher aqui. Os debates são permitidos enquanto os diálogos permanecerem no tópico, positivos e respeitosos, sem focar em questões pessoais ou ataques entre as pessoas. Incentivamos  a comunicação não-violenta, o compartilhamento de experiências pessoais e a troca construtiva de opiniões.",
    subHeading: "Seja civilizada e respeitosa.",
  },
  {
    body:
      "Quando quiser pedir conselhos ou compartilhar sua opinião, examine os grupos e os tópicos e escolha o local apropriado para a publicação. Dessa forma, seu comentário será descoberto por outras usuárias muito mais rapidamente e você receberá comentários relevantes e úteis! Isso também ajuda a comunidade a se manter organizada. Se você não fizer isso, seu comentário poderá ser considerado fora do tópico e excluído pelos moderadores. E lembre-se de que os comentários aqui não são conselhos profissionais. Se você tiver alguma dúvida sobre sua saúde (física ou psicológica), é melhor consultar um profissional que possa cuidar do seu caso específico.",
    subHeading: "Mantenha-o relevante.",
  },
  {
    body:
      "Queremos enfatizar que o objetivo principal dos debates é oferecer a oportunidade única de conversar abertamente sobre tópicos relacionados às vidas das mulheres, encontrar apoio e aprender algo novo. A usuária que estiver associada a uma das condutas proibidas - descritas abaixo - estará passível de punição dentro do aplicativo (podendo ser banida da comunidade):",
    heading: "Discursos de ódio serão banidos",
  },
  {
    body:
      "Não toleramos racismo, sexismo, LGBTfobia, capacitismo, etarismo ou outras formas de discurso de ódio e preconceito. O ódio não tem lugar em nossa comunidade - estamos aqui para encontrar e oferecer apoio, compartilhar nossas experiências pessoais e nos ajudarmos, não para sermos julgadas ou criticadas. Quaisquer comentários que promovam ou incentivem a violência contra indivíduos ou grupos com base em raça ou etnia, crenças religiosas, deficiência, sexo, idade, nacionalidade, orientação sexual, identidade de gênero, visões políticas, estado de saúde ou aparência estarão sujeitos a exclusão.",
    subHeading: "Discurso de ódio não é aceito.",
  },
  {
    body:
      "Aqui, mulheres brasileiras de diversos lugares e culturas compartilham suas experiências e falam sobre tópicos que são importantes para elas. Isso significa que os comentários que revelam as informações pessoais de alguém, incitam assédio, ameaças, ataques pessoais ou apresentam comportamento abusivo ou predatório são levados muito a sério e estarão sujeitos a exclusão.",
    subHeading: "Bullying e ataques pessoais são proibidos.",
  },
  {
    body:
      "Encorajamos a publicação do tópico mais apropriado possível. Se você deseja pedir conselhos, procure as perguntas e respostas de outras usuárias sobre tópicos relevantes dentro do post em questão. Sua dúvida, questão ou problema já pode ter sido discutido - e você pode entrar no tópico em questão e postar uma resposta. Cada tópico tem um objetivo específico, que define as expectativas dos membros da comunidade sobre esse tópico. Tente evitar multiposting em diferentes tópicos - já que pode ser considerado spam.",
    heading: "Crie tópicos",
  },
  {
    body:
      "É por isso que excluiremos quaisquer comentários obviamente comerciais ou semelhantes a spam. Isso inclui, mas não se limita a, autopromoção com links para contas sociais, sites, emails, números de telefone; postagem repetitiva do mesmo conteúdo ou links; vender ou distribuir qualquer produto.",
    heading: "Spam não é legal",
  },
  {
    body:
      "Se você tiver sugestões ou perguntas sobre qualquer aspecto da participação aqui, entre em contato com nossa equipe através do formulário de Feedback no aplicativo. Lembre-se de que, ao criar uma conta ou acessar ou usar o aplicativo, você reconhece que aceita e concorda com as Regras da Comunidade.",
    heading: "Feedback",
  },
  {
    body:
      "Acreditamos que a comunidade deva ser um lugar seguro para compartilhar seus pensamentos e experiências. Tirar uma foto da tela com mensagens e posts e compartilhar fora do aplicativo não é uma atitude bem-vinda porque consideramos que todas as usuárias deveriam se sentir seguras para compartilhar suas questões pessoais sem que sejam expostas fora do espaço. Usar o printscreen como ferramenta de exposição de uma usuária pode ser passível de punição (podendo banir a usuária que realizou a ação).",
    heading: "Prints são proibidos porque respeitamos a privacidade",
  },
  {
    body:
      "Para garantir que pessoas de todas as origens se sintam seguras e confortáveis ​​aqui, devemos respeitar as leis locais e internacionais e remover comentários que defendam e promovam atividades ilegais, como drogas, consumo de menores de idade, atividade criminosa, abuso de animais, terrorismo e outros.",
    heading: "Comentários promovendo atividades ilegais serão excluídos",
  },
  {
    body:
      "É por isso que você precisa ter pelo menos 18 anos de idade para usar o aplicativo e contribuir com a nossa comunidade. Sua conta será excluída caso você tenha menos de 18 anos. Você também poderá ser excluída da comunidade caso compartilhe material de menores de 18 anos de idade - não sendo a responsável legal.",
    heading: "Protegemos a segurança das crianças",
  },
  {
    body:
      "Reservamo-nos o direito de excluir comentários inapropriados ou irrelevantes sem notificação prévia. Se o comentário de alguém violar essas regras, nós o excluiremos. Usuárias da Elpis que ignorarem persistentemente as Regras da Comunidade terão acesso restrito ao aplicativo sem aviso prévio.",
    heading: "Protegemos a segurança das crianças",
  },
  {
    body:
      'Você pode denunciar comentários abusivos ou outro comportamento inadequado. Naturalmente, você pode não gostar de tudo que vê. Se você acha que o comentário de alguém é inapropriado ou você percebe comportamento abusivo, use o botão "Denunciar" para enviar um comentário para revisão por nossa equipe de moderação para determinar se há uma violação de nossas regras da comunidade.',
  },
];

const Section = (props: SectionProps) => {
  const { body, heading, subHeading } = props.sectionText;

  return (
    <View style={styles.section}>
      {heading && <Title text={heading} bold small />}
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

const CommunityContent = () => {
  const { title } = labels.communityRules;

  return (
    <View style={styles.container}>
      <Icon name="hands-helping" size={40} colour={colours.navyBlueDark} />
      <Title text={title} large />
      <SectionContainer sectionList={content} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: layout.spacingXL,
  },
  section: {
    marginVertical: layout.spacing,
  },
});

export { CommunityContent };
