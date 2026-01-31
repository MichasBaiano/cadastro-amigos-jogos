# 🎮 Sistema de Gerenciamento de Jogos e Empréstimos

Este projeto é uma aplicação web desenvolvida como atividade prática para a disciplina de **Programação para Internet II** do **IFPI - Campus Pedro II**. O sistema permite gerenciar uma coleção de jogos, cadastrar amigos e controlar empréstimos!

## 🚀 Funcionalidades

O sistema atende aos requisitos da atividade avaliativa, incluindo:

* **Autenticação (Login):** Acesso restrito via sessão (Express-Session).
* **CRUD de Amigos:** Cadastro, listagem, edição e exclusão de amigos.
* **CRUD de Jogos:** Cadastro de jogos vinculados a um dono (Amigo), com validação de dados.
* **Controle de Empréstimos:** Registro de data de saída e previsão de devolução.
* **Visualização de Detalhes:** Página específica do jogo exibindo histórico completo de quem já pegou emprestado.
* **Interface Responsiva:** Estilização moderna utilizando **Bootstrap 5**.

## 🛠️ Tecnologias Utilizadas

* **Node.js**: Ambiente de execução.
* **Express**: Framework web.
* **Sequelize (ORM)**: Gerenciamento do banco de dados.
* **SQLite**: Banco de dados relacional (arquivo local).
* **EJS**: Motor de visualização (View Engine).
* **Bootstrap 5**: Framework CSS para o front-end.

## 📦 Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:
* [Node.js](https://nodejs.org/) (Versão 14 ou superior)
* [Git](https://git-scm.com/)

## 🔧 Como Rodar o Projeto

Siga os passos abaixo para baixar e configurar o projeto em sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/MichasBaiano/cadastro-amigos-jogos](https://github.com/MichasBaiano/cadastro-amigos-jogos)
   cd nome-da-pasta

2. **Instale as dependências:**
    ```bash
    npm install

3. **Configure o Banco de Dados: Execute as migrações para criar as tabelas (Amigos, Jogos, Emprestimos):**
    ```bash
    npx sequelize-cli db:migrate

4. **Popule o Banco (Opcional): Insira dados de teste iniciais (Seeders):**
    ```bash
    npx sequelize-cli db:seed:all

5. **Inicie o Servidor:**
    ```bash
    node server.js

6. **Acesse no Navegador: Abra http://localhost:3000**

## 🔐 Acesso ao Sistema

Ao acessar o sistema, será solicitado o login. Utilize as credenciais padrão de administrador:

* **Usuário:** `admin`
* **Senha:** `admin`

## 🗂️ Estrutura do Projeto

* `models/`: Definição das tabelas e relacionamentos (Sequelize).
* `views/`: Páginas HTML renderizadas com EJS.
* `migrations/`: Histórico de alterações do banco de dados.
* `seeders/`: Dados iniciais para preencher o banco.
* `public/`: Arquivos estáticos (CSS, imagens).
* `server.js`: Arquivo principal da aplicação.

## 👥 Autores
**Ananias Carlos**
**Davi Carreiro**
**Michel Junior**
**Sidney Nascimento**
* Curso: Análise e Desenvolvimento de Sistemas (ADS)
* Instituição: IFPI - Campus Pedro II

---
*Projeto desenvolvido em Janeiro/2026.*