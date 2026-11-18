# 📱 App de Catálogo de Cursos — Navegação entre Telas

Aplicativo mobile desenvolvido em **React Native** com **Expo** que demonstra na prática os conceitos de **componentização**, **gerenciamento de estado (`useState`)**, **listas performáticas (`FlatList`)**, **passagem de propriedades (`props`)** e **navegação em pilha (Stack Navigation)** utilizando o `@react-navigation/native-stack`.

---

## 🎯 Sobre o Projeto

O aplicativo consiste em um **Catálogo de Cursos de Tecnologia**, permitindo que o usuário visualize uma lista de cursos disponíveis, filtre os cursos por área de conhecimento (categoria) e navegue para uma tela dedicada com todas as informações detalhadas do curso selecionado, incluindo ementa completa e simulação de inscrição em tempo real.

### Principais Conceitos Aplicados
- **Navegação Stack (`@react-navigation/native-stack`)**: Transição entre as telas `Catalogo` e `Detalhes`, com envio de parâmetros via `route.params` (`navigation.navigate('Detalhes', { curso: item })`) e retorno programático (`navigation.goBack()`).
- **Componentização e Reuso**: Separação da interface em componentes independentes e reutilizáveis (`CursoCard` e `FiltroCategoria`).
- **Gerenciamento de Estado Local (`useState`)**:
  - Controle da categoria ativa para filtragem dinâmica na tela de catálogo.
  - Controle do status de inscrição e atualização automática da contagem de vagas disponíveis na tela de detalhes.
- **Renderização Performática**: Uso de `FlatList` para listagem dos cartões de cursos e `ScrollView` horizontal para a barra de filtros.

---

## 🖥️ Telas e Funcionalidades

| Catálogo de Cursos (`CatalogoScreen`) | Detalhes do Curso (`DetalhesCursoScreen`) |
| :---: | :---: |
| ![Tela de Catálogo de Cursos](./assets/screenshots/catalogo.png) | ![Tela de Detalhes do Curso](./assets/screenshots/detalhes.png) |

### 1. Tela de Catálogo de Cursos (`CatalogoScreen`)
A tela inicial do aplicativo apresenta todos os cursos cadastrados de forma organizada e interativa:
- **Filtro Horizontal por Categoria (`FiltroCategoria`)**: Barra deslizante no topo com pílulas (*chips*) das categorias (**Todos**, **Mobile**, **Back-end**, **Dados** e **Infraestrutura**). Ao tocar em uma categoria, a lista é filtrada instantaneamente exibindo apenas os cursos correspondentes.
- **Listagem de Cursos (`FlatList` + `CursoCard`)**: Cada curso é exibido em um card contendo:
  - *Badge* com a categoria do curso;
  - Carga horária e nível de dificuldade (ex.: `60h • Iniciante`);
  - Título e resumo descritivo (limitado a 2 linhas para manter o padrão visual);
  - Nome do(a) instrutor(a) responsável e o botão de ação **"Ver detalhes →"**.
- **Navegação com Parâmetros**: Ao tocar em qualquer card, o aplicativo navega para a tela de detalhes enviando o objeto completo do curso selecionado.

### 2. Tela de Detalhes do Curso (`DetalhesCursoScreen`)
Exibe as informações completas do curso recebido via `route.params`:
- **Cabeçalho Informativo**: Exibe a *tag* combinando categoria e nível (`Mobile • Iniciante`), o título em destaque e a descrição completa do curso.
- **Painel de Informações Gerais**: Quadro resumo contendo:
  - **Instrutor(a)** responsável;
  - **Carga Horária** total;
  - **Vagas Disponíveis**, cujo valor diminui automaticamente quando o aluno confirma a inscrição.
- **Conteúdo Programático (Ementa)**: Lista numerada com todos os tópicos que serão abordados ao longo do curso.
- **Botão de Confirmação de Inscrição**: Permite realizar ou cancelar a inscrição no curso. Ao confirmar, o botão muda de cor (para verde) e exibe `"✓ Inscrição Confirmada!"`, decrementando em `1` o número de vagas disponíveis.
- **Retorno ao Catálogo**: Além da seta nativa no cabeçalho da barra superior, conta com o botão **"← Voltar para o Catálogo"** que aciona `navigation.goBack()`.

---

## 📂 Estrutura do Projeto

```text
app-navegacao/
├── assets/
│   └── screenshots/              # Capturas de tela utilizadas na documentação
├── src/
│   ├── components/
│   │   ├── CursoCard.js          # Card individual de exibição resumida do curso
│   │   └── FiltroCategoria.js    # Barra horizontal de filtros por categoria
│   ├── data/
│   │   └── cursos.js             # Base de dados estática (categorias e lista de cursos)
│   └── screens/
│       ├── CatalogoScreen.js     # Tela principal com filtro e FlatList de cursos
│       └── DetalhesCursoScreen.js# Tela de detalhes, ementa e confirmação de inscrição
├── App.js                        # Configuração do NavigationContainer e Stack.Navigator
├── index.js                      # Ponto de entrada da aplicação Expo
└── package.json                  # Dependências e scripts do projeto
```

---

## 🚀 Tecnologias Utilizadas

- **[React Native](https://reactnative.dev/)** (`0.88.1`) & **[React](https://react.dev/)** (`19.3.0`)
- **[Expo](https://expo.dev/)** (`~58.0.26`)
- **[React Navigation](https://reactnavigation.org/)** (`@react-navigation/native` e `@react-navigation/native-stack`)
- **React Native Screens** & **React Native Safe Area Context**

---

## ⚙️ Como Rodar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado (versão LTS recomendada)
- Gerenciador de pacotes `npm` (já incluso com o Node.js)
- Aplicativo **Expo Go** instalado no seu celular (Android ou iOS) **ou** um emulador Android / simulador iOS configurado no computador.

### Passo a passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Lucas-Quandt/App_Navegacao_entre-telas.git
   cd App_Navegacao_entre-telas
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento do Expo:**
   ```bash
   npx expo start
   ```

4. **Execute o aplicativo:**
   - **No celular físico:** Abra o aplicativo **Expo Go** e escaneie o QR Code exibido no terminal.
   - **No Emulador Android:** Pressione a tecla `a` no terminal.
   - **No Navegador (Web):** Pressione a tecla `w` no terminal.
