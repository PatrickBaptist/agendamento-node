import { marcarAgendamentoService } from '../service/agendamentoService';

test('Deve retornar um agendamento mockado com o nome do paciente e do médico', () => {
  const agendamento = marcarAgendamentoService({
    medico_id: 1,
    paciente_nome: 'Carlos Almeida',
    data_horario: '2024-10-05 09:00',
  });

  expect(agendamento.paciente).toBe('Carlos Almeida');
  expect(agendamento.medico).toBe('Dr. João Silva');
});

test('Deve lançar um erro se o médico não existir', () => {
  const request = {
    medico_id: 3,
    paciente_nome: 'Carlos Almeida',
    data_horario: '2024-10-05 09:00',
  };

  expect(() => marcarAgendamentoService(request)).toThrow(
    'Médico não encontrado'
  );
});
