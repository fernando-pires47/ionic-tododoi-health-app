import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public ORGAOS : Array<any> = [
    {
      id:1,
      title:"Cérebro",
      imagem:"../../assets/img/cerebro.jpg",
      oquee:"Parte do sistema nervoso central situada na caixa craniana dos vertebrados e que recebe estímulos dos órgãos sensoriais, interpretando-os e correlacionando-os com impressões armazenadas, a fim de acionar impulsos motores que, essencialmente, controlam todas as atividades vitais [Nos humanos, é também o órgão do pensamento, dos sentimentos, da memória e da imaginação.].",
      descricao:"Poderíamos dizer que a função cerebral, como parte do Sistema Nervoso Central (CNS) é regular a maioria das funções corporais e mentais. ... Porém, as funções cerebrais supremas, como raciocinar, memorizar e prestar atenção, são controladas pelos hemisférios e os lobos que compõem o córtex."
  },
  {
      id:2,
      title:"Pulmão",
      imagem:"../../assets/img/pulmao.jpg",
      oquee:"O pulmão é o órgão do sistema respiratório, responsável pelas trocas gasosas entre o ambiente e o sangue. Sua principal função é oxigenar o sangue e eliminar o dióxido de carbono do corpo.",
      descricao:"A principal função dos pulmões é oxigenar o sangue e eliminar o dióxido de carbono, permitindo que o ar que respiramos entre em contato com o sangue que circula no corpo. Esse contato possibilita uma troca gasosa essencial para a vida e consiste, basicamente, na absorção do oxigênio pelo sangue a fim de, ligado à hemoglobina, ser transportado para todas as células do organismo, e na eliminação do gás carbônico, que as células produziram para gerar energia."
  },
  {
      id:3,
      title:"Coração",
      imagem:"../../assets/img/coracao.jpg",
      oquee:"O coração é um órgão muscular presente nos humanos e em outros animais que bombeia o sangue através dos vasos sanguíneos do sistema circulatório. O sangue fornece ao corpo oxigénio e nutrientes e ajuda a eliminar resíduos metabólicos..",
      descricao:"Sua função é bombear o sangue oxigenado (arterial) proveniente dos pulmões para todo o corpo e direcionar o sangue desoxigenado (venoso), que retornou ao coração, até os pulmões, onde deve ser enriquecido com oxigênio novamente."
  },
  {
      id:4,
      title:"Figado",
      imagem:"../../assets/img/figado.jpg",
      oquee:"Fígado (do latim ficatu) é a maior glândula e o segundo maior órgão do corpo humano. Funciona tanto como glândula exócrina, liberando secreções num sistema de canais que se abrem numa superfície externa, como glândula endócrina, uma vez que também libera substâncias no sangue ou nos vasos linfáticos.",
      descricao:"O fígado desempenha muitas funções importantes dentro de nosso organismo, como: armazenamento e liberação de glicose, metabolismo dos lipídeos, metabolismo das proteínas (conversão de amônia em ureia), síntese da maioria das proteínas do plasma, processamento de drogas e hormônios, destruição das células sanguíneas desgastadas e bactérias, emulsificação da gordura durante o processo de digestão através da secreção da bile, etc. Além de todas as funções já citadas no parágrafo anterior, o fígado age também no armazenamento de vitaminas e minerais. Ele armazena algumas vitaminas como: A, B12, D, E e K, além de minerais como o ferro e o cobre. O fígado participa também da regulação do volume sanguíneo, possui importante ação antitóxica contra substâncias nocivas ao organismo como o álcool, a cafeína, gorduras, etc."
  },
  {
      id:5,
      title:"Estômago",
      imagem:"../../assets/img/estomago.jpg",
      oquee:"órgão oco do tubo digestivo situado abaixo do diafragma, entre o esôfago e o duodeno, onde os alimentos são depositados, pré-digeridos e esterilizados antes de serem enviados ao intestino.",
      descricao:"ESTÔMAGO E SUCO GÁSTRICO. O estômago é uma bolsa de parede musculosa, localizada no lado esquerdo abaixo do abdome, logo abaixo das últimas costelas. É um órgão muscular que liga o esôfago ao intestino delgado. Sua função principal é a digestão de alimentos protéicos."
  },
  {
      id:6,
      title:"Rim",
      imagem:"../../assets/img/rin.jpg",
      oquee:"Rim (lat. ren, grc. νεφρός) é cada um dos dois órgãos excretores, em forma de feijão, tendo no ser humano, aproximadamente 11 cm de comprimento, 5 cm de largura e 3 cm de espessura. É o principal órgão do sistema excretor e osmoregulador dos vertebrados.",
      descricao:" função dos rins é, entre outras, filtrar o sangue para eliminar substâncias nocivas ao organismo, como amônia, ureia e ácido úrico. Eles também atuam secretando substâncias importantes para nossa saúde. Entre suas funções, pode-se destacar a manutenção do equilíbrio de eletrólitos no corpo, como sódio, potássio, cálcio, magnésio, fósforo, bicarbonato etc.; a regulação do equilíbrio ácido-básico, mantendo o pH sanguíneo constante; a excreção de substâncias exógenas, como medicações; e a produção de hormônios, como aldosterona e prostaglandinas. Os rins recebem sangue das artérias renais, ramos da aorta que vêm diretamente do coração. Depois de circular pelo grande número de vasos existentes nesses órgãos, o sangue sai, livre das toxinas, pelas veias renais rumo ao coração, e a urina desce pelos ureteres até cair na bexiga."
  },
  {
      id:7,
      title:"Intestino Delgado",
      imagem:"../../assets/img/delgado.jpg",
      oquee:"O intestino delgado faz parte do sistema digestivo, se estendendo entre o estômago e o intestino grosso (ou cólon), e é dividido em três partes: duodeno, jejuno e íleo. ... Está ligado diretamente ao estômago, responsável pelo esvaziamento de seu conteúdo.",
      descricao:"O intestino delgado é uma estrutura tubular dentro da cavidade abdominal que leva o alimento na continuação com o estômago até os dois pontos de onde o grande intestino os leva ao recto e fora do corpo através do ânus. A função principal deste órgão é ajudar na digestão."
  },
{
      id:8,
      title:"Intestino Grosso",
      imagem:"../../assets/img/intestino.jpg",
      oquee:"O intestino grosso (simplificadamente e erroneamente chamado de cólon) é a parte final do tubo digestivo. É responsável pelo importante processo de absorção da água, o que determina a consistência do bolo fecal. Possui uma rica flora bacteriana.",
      descricao:"O intestino grosso é dividido em: ceco e apêndice vermiforme, cólon ascendente, cólon transverso, cólon descendente, sigmóide, reto e canal anal. As principais função do intestino grosso é a de formação, transporte e evacuação das fezes e por isso ele é dotado da capacidade de absorção e secreção de muco."
},  
  ]

  public PLANTAS : Array<any> = [
    {
      id:1, 
      title:"Centella Asiática",
      subtitle:"Nativa do Sudeste Asiático, Austrália e Índia, ela é conhecida por aumentar a circulação sanguínea e estimular a memória",
      orgao:this.ORGAOS[0], 
      imagem:"../../assets/img/p1.jpeg", 
      descricao:"Nativa do Sudeste Asiático, Austrália e Índia, ela é conhecida por aumentar a circulação sanguínea e estimular a memória. Mais especificamente, esta é uma erva adaptogênica*, o que significa que ela ajuda o seu corpo a se adaptar a situações do dia-a-dia que geram estresse."
    },
    {
      id:2,
      title:"Alecrim", 
      subtitle:"Deliciosa e amplamente utilizada na cozinha mediterrânea",
      orgao:this.ORGAOS[0],
      imagem:"../../assets/img/p2.jpeg",
      descricao:"Deliciosa e amplamente utilizada na cozinha mediterrânea, o alecrim também é um forte impulsionador cerebral. Seus efeitos são ainda mais potencializados através d0 óleo essencial. Cheirá-lo aumenta a eficiência e competência mental e também ajuda na retenção de memória."
    },
    {
      id:3,
      title:"Cálamo-aromático", 
      subtitle:"O consumo dessa planta aumenta o foco e a concentração mental",
      orgao:this.ORGAOS[0],
      imagem:"../../assets/img/p3.jpeg",
      descricao:"O consumo dessa planta aumenta o foco e a concentração mental, pois ajuda a desintoxicar os tecidos cerebrais. As pessoas que usam esta erva relatam que ela tem um efeito levemente estimulante, por isso é recomendada para pessoas com o raciocínio mais lento."
    },
    {
      id:4,
      title:"Ginseng-indiano", 
      subtitle:"Melhora a função cerebral",
      orgao:this.ORGAOS[0],
      imagem:"../../assets/img/p4.jpeg",
      descricao:"Esta erva sempre foi muito utilizada na medicina ayurveda para rejuvenescer e melhorar a função cerebral. Estudos apontam que ela ajuda a curar o esgotamento nervoso, assim como auxilia o sistema imunológico. É fundamental para pessoas sobrecarregadas e exaustas pois estimula a clareza mental, o processamento de informação e o desempenho cognitivo como um todo."
    },
    {
      id:5,
      title:"Bacopa", 
      subtitle:"Melhora a memória, reduz o estresse, aumenta a capacidade de aprender e estimula a mente",
      orgao:this.ORGAOS[0],
      imagem:"../../assets/img/p5.jpg",
      descricao:"Mais uma erva muito usada pela medicina ayurveda. A bacopa melhora a memória, reduz o estresse, aumenta a capacidade de aprender e estimula a mente como um todo. Já foi reconhecida como uma potente aliada na proteção contra a doença de Alzheimer."
    },
    {
      id:6,
      title:"Rhodiola, ou Raiz-de-ouro", 
      subtitle:"Esta planta é extremamente útil durante períodos de estresse",
      orgao:this.ORGAOS[0],
      imagem:"../../assets/img/p6.jpeg",
      descricao:"Esta planta é extremamente útil durante períodos de estresse, pois assim como a centella asiática é uma erva adaptogênica. Ela estimula a memória e a capacidade de aprender, pois ajuda a reduzir a fadiga mental. Tem ainda a capacidade de melhorar o nosso bem-estar ao reduzir a ansiedade e sintomas de depressão."
    },
    {
      id:7,
      title:"Huperzine-A", 
      subtitle:"Pesquisas recentes apontam que esta erva é capaz de ajudar na prevenção do Alzheimer",
      orgao:this.ORGAOS[0],
      imagem:"../../assets/img/p7.png",
      descricao:"Pesquisas recentes apontam que esta erva é capaz de ajudar na prevenção do Alzheimer. E, mesmo na população saudável, ela também ajuda a estimular o funcionamento do cérebro e melhorar a memória."
    },
    {
      id:8,
      title:"Ginkgo Biloba", 
      subtitle:"Usada há muitos séculos pois oferece vários benefícios cognitivos",
      orgao:this.ORGAOS[0],
      imagem:"../../assets/img/p8.jpeg",
      descricao:"Esta erva é usada há muitos séculos pois oferece vários benefícios cognitivos. A ginkgo biloba ajuda a curar e regenerar as células do cérebro — o que estimula as funções mentais. Estudos apontam que esta planta aumenta também a inteligência."
    },
    {
      id:9,
      title:"Manjericão-sagrado", 
      subtitle:"Ajuda a aumentar o bem-estar e melhorar o humor",
      orgao:this.ORGAOS[0],
      imagem:"../../assets/img/p9.jpeg",
      descricao:"O nosso cérebro é um órgão vascular, portanto, não consegue funcionar de forma adequada sem o fornecimento ideal de sangue. Por isso, o manjericão-sagrado é o seu aliado todo-poderoso, pois impulsiona a circulação sanguínea, oxigenando mais o cérebro. Várias pessoas que ingerem regularmente o manjericão-sagrado relatam também que ele ajuda a aumentar o bem-estar e melhorar o humor."
    },
    {
      id:10,
      title:"Cardo mariano",
      subtitle:"Conhecido em muitas culturas como “guardião do fígado”",
      orgao:this.ORGAOS[3],
      imagem:"../../assets/img/p10.jpg",
      descricao:"Conhecido em muitas culturas como “guardião do fígado”, o cardo mariano é um dos melhores remédios para prevenir e tratar os problemas hepáticos.Está comprovado que contribui para depurar o fígado e a vesícula biliar e, além disso, tem propriedades anti-inflamatórias que ajudam a curá-lo.Seu consumo regular elimina os resíduos prejudiciais e cria uma barreira protetora frente aos radicais livres, o álcool, os fungos e outros elementos prejudiciais.Também protege contra a diabetes, o excesso de colesterol e as doenças do sistema circulatório.Seu consumo não deve ser superior a 250 mg por dia, e pode ser feito através de infusões ou saladas."
    },  
    {
      id:11,
      title:"Alcachofra",
      subtitle:"Este tônico amargo tem substâncias ativas que regeneram os tecidos hepáticos enquanto os apoiam em seus processos de digestão e depuração.",
      orgao:this.ORGAOS[3],
      imagem:"../../assets/img/p11.jpg",
      descricao:"Serve para combater a urticária, as alergias e as alterações no pH sanguíneo. Também previne a hepatite, a insuficiência renal e o excesso de colesterol.Graças a suas propriedades, regula a produção de bile e drena a vesícula biliar para evitar a formação de cálculos.Seu consumo pode ser feito em saladas, pratos cozidos e vitaminas."
    },
    {
      id:12,
      title:"Raiz de dente de leão",
      subtitle:"A raiz de dente de leão é uma erva perene que provém da América do Norte e vários países da Europa.",
      orgao:this.ORGAOS[3],
      imagem:"../../assets/img/p12.jpg",
      descricao:"Muitos consideram esta planta como uma erva ruim, mas as raízes são um poderoso remédio que estimula os processos de desintoxicação do corpo.É aconselhada para evitar o excesso de água nos tecidos hepáticos, assim como a inflamação dos mesmos.Aumenta a produção da bile e impulsiona a eliminação das toxinas para facilitar a digestão.Com essa erva são obtidas quantidades significativas de vitaminas, A, C e D, e minerais como o cálcio e o ferro.Pode ser cozida em água para fazer um chá. Beba duas vezes ao dia."
    },
    {
      id:13,
      title:"Folha de menta",
      subtitle:"A menta é uma planta medicinal que foi empregada para promover o fluxo normal da bile desde o fígado até a vesícula",
      orgao:this.ORGAOS[3],
      imagem:"../../assets/img/p13.jpeg",
      descricao:"Os óleos essenciais que contém apoiam a digestão das gorduras e melhoram a absorção dos nutrientes.Suas vitaminas e minerais impulsionam a expulsão de substâncias prejudiciais e previnem os danos neste órgão.Pode ser tomada em forma de infusão, limonadas ou vitaminas."
    },
    {
      id:14,
      title:"Cúrcuma",
      subtitle:"Também é considerada uma especiaria, e é um dos melhores alimentos para remover as toxinas que ficam presas no sangue e no fígado.",
      orgao:this.ORGAOS[3],
      imagem:"../../assets/img/p14.jpg",
      descricao:"Seu composto ativo, a curcumina, tem um efeito anti-inflamatório e antioxidante que restaura a saúde hepática para um ótimo desempenho de suas funções.Sua ação antioxidante participa da filtragem do sangue e ajuda a eliminar as partículas prejudiciais presentes nele.É utilizada para aliviar as condições que afetam o sistema circulatório e é boa para o crescimento da flora bacteriana.Está comprovado que seu consumo impulsiona a depuração do fígado e freia o crescimento de células anormais.A cúrcuma pode ser adicionada a vitaminas, sopas, saladas e muitas outras receitas."
    },
    {
      id:15,
      title:"Chá verde",
      subtitle:"Rico em catequinas",
      orgao:this.ORGAOS[2],
      imagem:"../../assets/img/p15.jpg",
      descricao:"O chá verde é muito rico em catequinas, substâncias naturais que evitam que a gordura acumule-se nas paredes das artérias, reduzindo o nível de colesterol ruim no organismo. Além disso, esta planta também melhora a circulação sanguínea, reduzindo a pressão sobre o coração e protegendo contra doenças como pressão alta ou insuficiência cardíaca, por exemplo."
    },
    {
      id:16,
      title:"Folhas de oliveira",
      subtitle:"Protegem contra a oxidação do colesterol ruim",
      orgao:this.ORGAOS[2],
      imagem:"../../assets/img/p16.jpg",
      descricao:"Os extratos feitos com folha de oliveira contêm fenóis, como a oleuropeína, que protegem contra a oxidação do colesterol ruim, diminuem a inflamação do corpo, regulam os níveis de glicose no sangue e também ativam a queima de gordura.Esta planta é ainda muitas vezes utilizada para baixar a pressão arterial, sendo que seu efeito é muitas vezes comparado com remédios de farmácia."
    },
    {
      id:17,
      title:"Espinheiro branco",
      subtitle:"Protege o funcionamento do coração",
      orgao:this.ORGAOS[2],
      imagem:"../../assets/img/p17.jpg",
      descricao:"A flor desta planta contém tiramina, uma substância que protege o funcionamento do coração, além de melhorar os batimentos cardíacos, já que aumenta a liberação de catecolaminas. Além disso, as flores, assim como os frutos do espinheiro branco também contêm elevada quantidade de flavonoides que têm ação antioxidante."
    },
    {
      id:18,
      title:"Garcinia Cambogia",
      subtitle:"Muito utilizada para regular o apetite e ajudar no processo de emagrecimento",
      orgao:this.ORGAOS[2],
      imagem:"../../assets/img/p18.jpg",
      descricao:"A garcinia cambogia é uma pequena fruta que é muito usada para regular o apetite e ajudar no processo de emagrecimento, o que acaba tendo benefício sobre a saúde do coração. No entanto, além disso, esta fruta também diminui o colesterol ruim, aumenta o colesterol bom e reduz os triglicerídeos, protegendo contra doenças cardiovasculares graves como AVC ou infarto, por exemplo."
    },
    {
      id:19,
      title:"Chá de hortelã",
      subtitle:" anti-séptico, calmante e analgésica",
      orgao:this.ORGAOS[4],
      imagem:"../../assets/img/p19.jpg",
      descricao:"O chá de hortelã-pimenta, de nome científico Mentha piperita L., possui propriedades anti-sépticas, calmantes e analgésicas muito eficazes no trato de problemas estomacais. A utilização desse remédio caseiro, além de aliviar a dor no estômago, diminui outros sintomas de problemas gastrointestinais, como náuseas, vômitos e diarreia."
    },
    {
      id:20,
      title:"Gengibre",
      subtitle:"Muito praticada nas culturas arábe",
      orgao:this.ORGAOS[4],
      imagem:"../../assets/img/p20.jpg",
      descricao:"Há séculos que o gengibre faz parte da medicina alternativa praticada nas culturas arábe, indiana e asiática, sendo frequentemente utilizada no tratamento de problemas digestivos, nomeadamente para prevenir e tratar náuseas e vómitos, mas também para aliviar dores e mal-estar de estômago. Em termos de frequência de toma e dosagens, recomenda-se a toma de 1 a 4 gramas de gengibre em pó, duas a quatro vezes por dia. Se vai viajar e sofre de cinetose (náuseas, vómitos e mal estar causado pela movimentação de uma viagem de carro, autocarro, comboio, barco ou avião) aconselha-se que inicie a toma de gengibre 1 a 2 dias antes da viagem, continuando o tratamento ao longo da duração da mesma."
    },
    {
      id:21,
      title:"Pimenta-caiena",
      subtitle:"",
      orgao:this.ORGAOS[4],
      imagem:"../../assets/img/p21.jpg",
      descricao:"Como é que uma especiaria picante como a pimenta-caiena pode contribuir positivamente para o alívio da indigestão se, à primeira vista, ela pode ser apontada como responsável por esse mal-estar? A verdade é que as propriedades naturais desta erva – nomeadamente o composto químico capsaicina – são altamente eficazes no processo digestivo, reduzindo o desconforto sentido no estômago, bem como outros sintomas habitualmente associados à indigestão: dores, náuseas e inchaço. Aconselha-se a toma de 0.5 a 1 grama de pimenta-caiena (em forma de cápsula, por exemplo) antes das 3 refeições principais."
    },
    {
      id:22,
      title:"Erva-cidreira",
      subtitle:"Tranquilizante, auxiliadora do sono e estimulante para o apetite",
      orgao:this.ORGAOS[4],
      imagem:"../../assets/img/p22.jpg",
      descricao:"Entre as muitas propriedades terapêuticas da erva-cidreira (tranquilizante, auxiliadora do sono e estimulante para o apetite) está também a sua ação eficaz contra a indigestão e os seus indesejáveis efeitos secundários, caso da flatulência e/ou inchaço. Utilizada em tratamentos alternativos e naturais desde a idade média, a erva-cidreira pode ser consumida em forma de chá (1 colher de chá de erva-cidreira para cada chávena de água fervida, com uma toma de até 4 vezes por dia), cápsulas (300-500mg, 3 vezes por dia) ou extrato (40-90 gotas, 3 vezes por dia)."
    },
    {
      id:23,
      title:"Chapéu-de-couro",
      subtitle:"Utilizado como anti-hipertensivo, depurativo e diurético",
      orgao:this.ORGAOS[5],
      imagem:"../../assets/img/p23.jpg",
      descricao:"O chá dessas folhas, é popularmente utilizado como anti-hipertensivo, depurativo e diurético. Muitas pessoas também utilizam no trato contra problemas de pele, sífilis, fígado e rins. Em especial, problemas com pedras nos rins. Uma planta excelente contra gota e arteriosclerose. Utilizando a mesma como gargarejo, o chá excelente para inflamações nas gengivas, garganta, estômago e amígdalas. Seu extrato apresenta uma ótima ação anti-inflamatória e analgésica."
    },
    {
      id:24,
      title:"Douradinha",
      subtitle:"Conhecida em todo o Brasil",
      orgao:this.ORGAOS[5],
      imagem:"../../assets/img/p24.jpg",
      descricao:"Essa é uma planta extremamente conhecida em todo o Brasil. Tem, em seu currículo, inúmeras funções e é comumente utilizada como bactericida e contra disenterias. Tem uma excelente ação anti-inflamatória, diurética e analgésica, o que é muito útil em casos de infecções urinarias e cistites, além de conseguir controlar muito bem a pressão arterial. Conta ainda com propriedades que fortalecem o coração e expectorantes."
    },
    {
      id:25,
      title:"Quebra-Pedra",
      subtitle:"Extremamente comum e utilizada em enorme quantidade",
      orgao:this.ORGAOS[5],
      imagem:"../../assets/img/p25.jpg",
      descricao:"A quebra-pedra é uma planta extremamente comum e utilizada em enorme quantidade, por ter uma enorme grande fama em conseguir auxiliar no trato de pedras nos rins. Propriedade no qual já foi confirmada através de pesquisas, que realmente demonstram que ela age como um verdadeiro relaxante para os canais que ligam os rins à bexiga. Possui um excelente efeito analgésico em todo o sistema urinário. E como se ainda fosse tudo, essa planta protege o fígado e é um excelente agente em tratos de hepatite B.  A planta também possui ação antitumoral, prevenindo possíveis surgimentos de cânceres no fígado, impedindo o seu desenvolvimento e induzindo as células cancerosas à morte. "
    },
    {
      id:26,
      title:"Folha de abacate",
      subtitle:"Excelente efeito anti-inflamatório",
      orgao: this.ORGAOS[5],
      imagem:"../../assets/img/p26.jpg",
      descricao:"As folhas de abacate possuem um excelente efeito anti-inflamatório, analgésico e antitérmico. Apresenta também um efeito significativo como vaso-relaxante, auxiliando diretamente no controle da arteriosclerose e hipertensão arterial. As folhas agem como diurético, conseguindo aumentar o número de micções, mesmo que não aumentem significativamente o volume de urina. O chá das folhas de abacate possuem função estimuladora da vesícula e do fígado."
    },
    {
      id:27,
      title:"Anis Verde",
      subtitle:"",
      orgao:this.ORGAOS[1],
      imagem:"../../assets/img/p27.jpg",
      descricao:"O anis verde é usado para acalmar a dor de estômago, mantê-lo hidratado e curar a inflamação intestinal, pouco a pouco. Você só vai precisar de uma colher de sopa de cada ervas naturais e ferva-as em um copo de água. Deixe agir por alguns minutos, coe e beba-o pouco a pouco. Você pode beber 3 por dia."
    },
    {
      id:28,
      title:"Chá preto com Limão",
      subtitle:"Clássico para o tratamento de gastroenterite",
      orgao:this.ORGAOS[1],
      imagem:"../../assets/img/p28.jpg",
      descricao:"Este é um dos mais clássicos tratamentos para tratar a gastroenterite pouco a pouco. Ele hidrata, lutas diarréia, alivia a dor, o sentimento de pelúcia, reduz a inflamação… A primeira coisa que você deve fazer é fazer o chá preto. Em seguida, coloque algumas gotas de limão, enquanto tiver certeza de que ele não vai fazer você vomitar."
    },
    {
      id:29,
      title:"Marshmallow Plantas",
      subtitle:"Excelente emoliente e anti-inflamatório",
      orgao:this.ORGAOS[1],
      imagem:"../../assets/img/p29.jpg",
      descricao:"Marshmallow planta é um excelente emoliente e anti-inflamatório. Você pode encontrá-lo em natural lojas. Para fazer uma infusão, você só vai precisar de uma colher de sopa desta planta medicinal por xícara de água. Você pode beber dois copos por dia."
    },
  ]

}
