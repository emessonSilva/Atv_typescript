/*Situação-problema: Sistema de Gerenciamento de Tarefas. Neste sistema, você irá definir interfaces para
tarefas e usuários, criar funções para adicionar, listar e atualizar tarefas, armazenar os dados em um array,
usar estruturas de repetição para exibir informações e condicionais para gerenciar as tarefas. Aqui estão os
passos detalhados:
Passo 1: Definição das Interfaces
Crie duas interfaces, Tarefa e Usuario, com as seguintes propriedades:
● Tarefa: id (número), titulo (string), descricao (string), concluida (boolean), responsavel (referência a
um Usuario).
● Usuario: id (número), nome (string), email (string).
Passo 2: Armazenamento de Dados
● Crie um vetor (array) chamado tarefas para armazenar as tarefas.
● Crie um vetor (array) chamado usuarios para armazenar os dados dos usuários.
Passo 3: Funções com Parâmetros
● Crie uma função chamada adicionarTarefa que aceite parâmetros para titulo, descricao e
responsavel. Esta função deve criar uma nova tarefa com um ID único e adicioná-la ao array de
tarefas.
● Crie uma função chamada adicionarUsuario que aceite parâmetros para nome e email. Esta função
deve criar um novo usuário com um ID único e adicioná-lo ao array de usuários.
Passo 4: Estrutura de Repetição
● Crie uma função chamada listarTarefas que não aceite parâmetros e imprima todas as tarefas na
console. Exiba o ID, título, descrição, estado (concluída ou não) e o nome do responsável.
Passo 5: Condicionais
● Na função adicionarTarefa, verifique se o responsável da tarefa existe na lista de usuários antes de
adicionar a tarefa. Se o responsável não existir, exiba uma mensagem de erro. Caso contrário,
adicione a tarefa e defina o responsavel como null.
● Adicione uma propriedade dataCriacao em Tarefa para armazenar a data de criação da tarefa. Na
função adicionarTarefa, defina a data de criação como a data atual.
Passo 6: Atualização de Tarefas
● Crie uma função chamada concluirTarefa que aceite um ID de tarefa como parâmetro. Essa função
deve marcar a tarefa como concluída.

● Adicione uma propriedade dataConclusao em Tarefa para armazenar a data de conclusão da tarefa.
Na função concluirTarefa, defina a data de conclusão como a data atual.
Passo 7: Teste o Sistema
● Crie alguns usuários e tarefas manualmente (fora das funções) para testar seu sistema.
● Use as funções que você criou para adicionar tarefas, listar tarefas, concluir tarefas e verificar as
condições.*/ 

interface Tarefa {
    id: number;
    titulo: string;
    descricao: string;
    concluida: boolean;
    responsavel: Usuario | null;
  }
  
  interface Usuario {
    id: number;
    nome: string;
    email: string;
  }
  
  const tarefas: Tarefa[] = [];
  const usuarios: Usuario[] = [];
  
  
  function adicionarTarefa(titulo: string, descricao: string, responsavel: Usuario) {
    const usuarioExiste = usuarios.find((usuario) => usuario.id === responsavel?.id);
  
    let novaTarefa: Tarefa = {
      id: tarefas.length,
      concluida: true,
      titulo,
      descricao,
      responsavel,
    };
  
    if (!usuarioExiste) {
      console.log("Usuário não encontrado na base de dados.");
      novaTarefa.responsavel = null;
    }
  
    tarefas.push(novaTarefa);
  }
  
  function adicionarUsuario(nome: string, email: string) {
    const novoUsuario: Usuario = {
      id: usuarios.length + 1, 
      nome,
      email,
    };
  
    usuarios.push(novoUsuario);
  }
  
  function listarTarefas() {
    tarefas.forEach((tarefa) => {
      console.log(tarefa);
    });
  }
  
  const usuario1: Usuario = {
    id: 1,
    nome: "Fulano",
    email: "fulano@gmail.com",
  };
  
  const usuario2: Usuario = {
    id: 2,
    nome: "Ciclano",
    email: "ciclano@gmail.com",
  };

  const usuario3: Usuario = {
    id: 3,
    nome: "Beltrano",
    email: "beltrano@gmail.com",
  };
  
  adicionarTarefa("Comprar comida", "-", usuario1);
  adicionarTarefa("Comprar bebida", "-", usuario2);
  adicionarTarefa("Comprar materiais de limpeza", "-", usuario3);

  listarTarefas();
  