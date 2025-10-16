# banco-api-performance

Este projeto realiza testes de performance em uma API de operações bancárias utilizando [k6](https://k6.io/).

## Estrutura do Projeto

- `fixtures/`: Dados de entrada para os testes (ex: credenciais de login).
- `tests/`: Scripts de teste de performance.
  - `login.test.js`: Teste de login de usuário.
  - `transferencia.test.js`: Teste de transferência entre contas.
  - `helpers/auth.js`: Funções auxiliares para autenticação.
- `utils/variaveis.js`: Funções utilitárias, como definição da URL base.

## Pré-requisitos

- [Node.js](https://nodejs.org/)
- [k6](https://k6.io/docs/getting-started/installation/)

## Como executar os testes

1. Instale o k6 no seu computador.
2. Execute os testes com o comando:

   ```sh
   k6 run tests/login.test.js
   k6 run tests/transferencia.test.js
3. Para executar e gerar o relatório em tempo real:
   ```sh 
   K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run script.js

## Dicas e Solução de Problemas
Se aparecer o erro Automatic extension resolution is enabled but it failed to analyze the dependencies, verifique se os caminhos dos imports estão corretos e se todos os arquivos possuem a extensão .js ou .mjs explicitamente.
Certifique-se de que todas as dependências estão instaladas e que o k6 está atualizado.
