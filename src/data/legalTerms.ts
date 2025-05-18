
import type { LegalTermProps } from "../components/TermCard";

const legalTerms: LegalTermProps[] = [
  {
    id: "habeas-corpus",
    termo: "Habeas Corpus",
    definicao: "Remédio constitucional que visa proteger o direito de ir e vir do cidadão quando este sofre ou se acha ameaçado de sofrer violência ou coação em sua liberdade de locomoção, por ilegalidade ou abuso de poder.",
    exemplo_uso: "O advogado impetrou habeas corpus em favor do cliente que foi preso sem ordem judicial."
  },
  {
    id: "usucapiao",
    termo: "Usucapião",
    definicao: "Modo de aquisição da propriedade ou de outros direitos reais pelo exercício da posse prolongada e ininterrupta, com ânimo de dono, por determinado tempo, nas condições estabelecidas pela lei.",
    exemplo_uso: "Após 15 anos morando no imóvel, ela entrou com uma ação de usucapião para regularizar a propriedade."
  },
  {
    id: "jurisprudencia",
    termo: "Jurisprudência",
    definicao: "Conjunto de decisões judiciais reiteradas que servem como precedente para solução de casos análogos. É uma das fontes do Direito.",
    exemplo_uso: "O advogado fundamentou sua petição na jurisprudência consolidada do Supremo Tribunal Federal sobre o tema."
  },
  {
    id: "litisconsorcio",
    termo: "Litisconsórcio",
    definicao: "Pluralidade de partes no mesmo polo do processo judicial, ativo ou passivo, quando duas ou mais pessoas litigam, no mesmo processo, em conjunto, ativa ou passivamente.",
    exemplo_uso: "Foi formado um litisconsórcio passivo entre a empresa e seus diretores na ação de responsabilidade civil."
  },
  {
    id: "prescricao",
    termo: "Prescrição",
    definicao: "Perda do direito de ação em virtude da inércia de seu titular no prazo determinado em lei. É a extinção da pretensão pelo decurso do tempo.",
    exemplo_uso: "A ação foi julgada improcedente porque o juiz reconheceu a prescrição do direito, já que o fato ocorreu há mais de cinco anos."
  },
  {
    id: "dolo",
    termo: "Dolo",
    definicao: "Vontade livre e consciente dirigida à realização de um comportamento proibido pela norma penal. No âmbito civil, é a vontade deliberada de causar o prejuízo.",
    exemplo_uso: "O réu agiu com dolo ao planejar meticulosamente o golpe financeiro contra a vítima."
  },
  {
    id: "culpa",
    termo: "Culpa",
    definicao: "Conduta negligente, imprudente ou imperita que causa dano a outrem. Difere do dolo por não haver a intenção deliberada de causar o resultado danoso.",
    exemplo_uso: "O médico foi condenado por culpa ao realizar o procedimento sem os cuidados necessários, causando sequelas no paciente."
  },
  {
    id: "coisa-julgada",
    termo: "Coisa Julgada",
    definicao: "Qualidade que torna imutável e indiscutível a decisão judicial contra a qual não caiba mais recurso, não podendo mais ser modificada.",
    exemplo_uso: "O advogado não pode mais recorrer, pois a sentença já transitou em julgado, operando-se a coisa julgada."
  },
  {
    id: "litigancia-ma-fe",
    termo: "Litigância de Má-fé",
    definicao: "Comportamento processual desonesto que visa prejudicar a parte contrária ou obstruir o andamento do processo, como deduzir pretensão contra fato incontroverso ou usar o processo para objetivo ilegal.",
    exemplo_uso: "O juiz aplicou multa por litigância de má-fé ao autor que alterou a verdade dos fatos em sua petição."
  },
  {
    id: "agravo",
    termo: "Agravo",
    definicao: "Recurso processual contra decisão interlocutória (aquela que não põe fim ao processo). Pode ser de instrumento, quando processa em autos separados, ou retido, quando permanece no processo e só é apreciado em eventual apelação.",
    exemplo_uso: "Como o juiz indeferiu a produção de prova pericial, a defesa interpôs agravo de instrumento para tentar reverter essa decisão."
  },
  {
    id: "tutela-antecipada",
    termo: "Tutela Antecipada",
    definicao: "Medida processual que permite ao juiz antecipar, total ou parcialmente, os efeitos da decisão final pretendida, quando houver elementos que evidenciem a probabilidade do direito e o perigo de dano ou risco ao resultado útil do processo.",
    exemplo_uso: "O paciente obteve tutela antecipada para que o plano de saúde custeasse imediatamente o tratamento médico necessário."
  },
  {
    id: "custas",
    termo: "Custas Processuais",
    definicao: "Despesas relativas ao processo judicial, como taxas judiciárias, emolumentos, honorários de peritos e outros gastos necessários ao desenvolvimento do processo.",
    exemplo_uso: "A parte vencida foi condenada ao pagamento das custas processuais e dos honorários advocatícios."
  }
];

export default legalTerms;
