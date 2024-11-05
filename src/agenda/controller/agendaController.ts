import { getAgendas } from '../service/agendaService';

export const buscarAgendas = async () => {
  try {
    const agendas = await getAgendas();
    return {
      statusCode: 200,
      body: JSON.stringify({ medicos: agendas }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ mensagem: 'Erro ao buscar agendas', error }),
    };
  }
};
