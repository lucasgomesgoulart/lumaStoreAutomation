# Automation Luma Store

### Estes testes servem como uma demonstração do que pode ser automatizado, mas não são testes finais ou completos.

- CRUD de Conta: Testa a criação de conta, validação da persistência dos dados e edição de perfil.
- Fluxo de Compras: Simula o processo de compra, incluindo:
- Adição de itens ao carrinho
- Verificação da quantidade de itens
- Finalização do checkout
- Adição de um novo endereço e vinculação à compra.

##  Pré-requisitos

- Node.js (v16 ou superior)
- Gerenciador de pacotes: npm ou yarn
- Cypress (instalado via dependências do projeto)

##  Instalação

1. Clone o repositório:
    - Acesse a pasta do projeto.

2. Instale as dependências:
   `npm install`

##  Executando os testes

### Via interface do Cypress:
1. Abra a interface do Cypress:
   `npx cypress open`
2. Selecione o ambiente desejado e clique no teste que deseja executar.

### Via linha de comando:
- Execute todos os testes:
  `npx cypress run`

- Execute testes em um navegador específico:
  `npx cypress run --browser chrome`

##  Estrutura do projeto

- **`cypress/e2e`**: Contém os casos de teste organizados por funcionalidades.
- **`cypress/support`**: Arquivos de suporte e configurações globais.
- **`cypress.config.js`**: Configurações gerais do Cypress.
- **`cypress.env.json`**: Configurações de variáveis de ambiente.

---
 Desenvolvido por [Lucas Gomes Goulart](https://github.com/lucasgomesgoulart).
