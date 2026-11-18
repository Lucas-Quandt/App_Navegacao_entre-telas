// Arquivo: src/data/cursos.js
export const CATEGORIAS = ['Todos', 'Mobile', 'Back-end', 'Dados', 'Infraestrutura'];

export const LISTA_CURSOS = [
  {
    id: '101',
    titulo: 'Desenvolvimento Mobile com React Native',
    categoria: 'Mobile',
    nivel: 'Iniciante',
    cargaHoraria: '60h',
    instrutor: 'Prof. Joelson Silva',
    vagas: 12,
    descricao: 'Construa aplicativos multiplataforma para Android e iOS utilizando JavaScript ES6+ e Expo.',
    ementa: [
      'Fundamentos de Flexbox e StyleSheet',
      'Gerenciamento de Estado com useState e useEffect',
      'Listas performáticas com FlatList',
      'Componentização, Props e Navegação Stack',
    ],
  },
  {
    id: '102',
    titulo: 'APIs RESTful com Node.js e Express',
    categoria: 'Back-end',
    nivel: 'Intermediário',
    cargaHoraria: '40h',
    instrutor: 'Prof. Joelson Silva',
    vagas: 8,
    descricao: 'Crie servidores robustos, rotas, middlewares e integração com bancos relacionais.',
    ementa: [
      'Arquitetura HTTP e verbos REST',
      'Criação de rotas e middlewares no Express',
      'Validação de dados e tratamento de erros',
      'Conexão com banco de dados PostgreSQL',
    ],
  },
  {
    id: '103',
    titulo: 'Banco de Dados PostgreSQL na Prática',
    categoria: 'Dados',
    nivel: 'Iniciante',
    cargaHoraria: '32h',
    instrutor: 'Profa. Camila Rocha',
    vagas: 15,
    descricao: 'Modelagem relacional, consultas SQL avançadas, índices e boas práticas de persistência.',
    ementa: [
      'Modelagem Conceitual e Lógica (DER)',
      'Comandos DDL e DML na prática',
      'Consultas com JOIN, GROUP BY e Subqueries',
      'Otimização de desempenho com Índices',
    ],
  },
  {
    id: '104',
    titulo: 'Automação de Redes e Windows com PowerShell',
    categoria: 'Infraestrutura',
    nivel: 'Intermediário',
    cargaHoraria: '24h',
    instrutor: 'Prof. Joelson Silva',
    vagas: 10,
    descricao: 'Gerencie laboratórios, implante softwares silenciosamente e automatize tarefas administrativas.',
    ementa: [
      'Cmdlets essenciais e Pipeline de objetos',
      'Manipulação de arquivos, serviços e registro',
      'Scripts de implantação silenciosa em rede',
      'Agendamento de tarefas administrativas',
    ],
  },
];
