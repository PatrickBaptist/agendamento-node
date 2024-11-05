import { AgendamentoRequest } from '../dto/agendamentoRequest';
import { AgendasMock } from '../../agenda/mocks/agendaMocks';

export const marcarAgendamentoService = (data: AgendamentoRequest) => {
  const medico = AgendasMock.find((m) => m.id === data.medico_id);

  if (!medico) {
    throw new Error('Médico não encontrado!');
  }

  return {
    medico: medico.nome,
    paciente: data.paciente_nome,
    data_horario: data.data_horario,
  };
};
