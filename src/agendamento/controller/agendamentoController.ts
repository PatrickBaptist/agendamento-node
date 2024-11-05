import { APIGatewayProxyHandler } from 'aws-lambda';
import { AgendamentoRequest } from '../dto/agendamentoRequest';
import { marcarAgendamentoService } from '../service/agendamentoService';

export const marcarAgendamento: APIGatewayProxyHandler = async (event) => {
  try {
    const data: AgendamentoRequest = JSON.parse(event.body || '{}');
    const agendamento = marcarAgendamentoService(data);

    if (!data.medico_id || !data.paciente_nome || !data.data_horario) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          mensagem:
            'Todos os campos (medico_id, paciente_nome, data_horario) são obrigatórios.',
        }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        mensagem: 'Agendamento realizado com sucesso',
        agendamento,
      }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        mensagem: 'Erro ao marcar agendamento',
        error: error instanceof Error ? error.message : 'Erro desconhecido',
      }),
    };
  }
};
