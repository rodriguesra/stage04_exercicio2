const estudantes = [
  {
    nome: "Alvaro",
    nota_primeira_prova: 4,
    nota_segunda_prova: 7,
  },
  {
    nome: "Daniel",
    nota_primeira_prova: 9,
    nota_segunda_prova: 6,
  },
  {
    nome: "Rafael",
    nota_primeira_prova: 8.5,
    nota_segunda_prova: 9,
  },
  {
    nome: "Tatiana",
    nota_primeira_prova: 10,
    nota_segunda_prova: 9,
  },
  {
    nome: "Amanda",
    nota_primeira_prova: 7,
    nota_segunda_prova: 3,
  },
];

const average = (nota_primeira_prova, nota_segunda_prova) => {
  return (nota_primeira_prova + nota_segunda_prova) / 2;
};

estudantes.forEach((student) => {
  const media = average(
    student.nota_primeira_prova,
    student.nota_segunda_prova
  );
  if (media >= 7) {
    alert(
      `A média do(a) aluno(a) ${student.nome} é: ${media}\n` + // Aqui foi corrigido
        `Parabéns ${student.nome}! Você foi aprovado(a) no concurso!`
    );
  } else {
    alert(`Não foi dessa vez ${student.nome}. Tente novamente!`);
  }
});
