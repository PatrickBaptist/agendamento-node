# Agenda médica - Desenvolvedor Backend

Este repositório contém a implementação de uma API desenvolvida em **Node.js** com **TypeScript** utilizando o **Serverless Framework** e **AWS Lambda**. A API possui dois endpoints para busca de agendas de médicos e agendamentos de consultas.

## Tecnologias Utilizadas

- Node.js (v14 ou superior)
- TypeScript
- Serverless Framework
- AWS Lambda
- Jest (para testes)
- Prettier e ESLint (para formatação e linting)

## Endpoints

### 1. Buscar agendas e horários dos médicos

- **Rota**: `GET /agendas`
- **Descrição**: Retorna uma lista de médicos com suas respectivas agendas e horários disponíveis.
- **Resposta esperada**:

    ```json
    {
      "medicos": [
        {
          "id": 1,
          "nome": "Dr. João Silva",
          "especialidade": "Cardiologista",
          "horarios_disponiveis": [
            "2024-10-05 09:00",
            "2024-10-05 10:00",
            "2024-10-05 11:00"
          ]
        },
        {
          "id": 2,
          "nome": "Dra. Maria Souza",
          "especialidade": "Dermatologista",
          "horarios_disponiveis": [
            "2024-10-06 14:00",
            "2024-10-06 15:00"
          ]
        }
      ]
    }
    ```

### 2. Marcar agendamento do paciente

- **Rota**: `POST /agendamento`
- **Descrição**: Permite que o paciente marque um horário de consulta com um médico.
- **Payload esperado**:

    ```json
    {
      "medico_id": 1,
      "paciente_nome": "Carlos Almeida",
      "data_horario": "2024-10-05 09:00"
    }
    ```

- **Resposta esperada**:

    ```json
    {
      "mensagem": "Agendamento realizado com sucesso",
      "agendamento": {
        "medico": "Dr. João Silva",
        "paciente": "Carlos Almeida",
        "data_horario": "2024-10-05 09:00"
      }
    }
    ```

## Como Rodar o Projeto Localmente

Para rodar o projeto localmente, siga os passos abaixo:

1. **Clone o repositório**:

   ```bash
   git clone https://github.com/seuusuario/agendamento-node.git
   cd agendamento-node

2. **Instale as dependências:**:

npm install

3. **Execute o projeto em modo offline**:

npm run serverless offline

## Testes

npm test

## Boas Práticas

O código segue boas práticas de programação e padrões de design, incluindo a utilização de TypeScript para garantir a tipagem correta e a implementação de arquitetura limpa.
# agendamento-node
