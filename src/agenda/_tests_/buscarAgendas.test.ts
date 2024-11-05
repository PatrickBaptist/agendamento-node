import { AgendasMock } from '../mocks/agendaMocks';

test('Deve retornar a lista mockada de agendas', () => {
  const agendas = AgendasMock;
  expect(agendas).toHaveLength(2);
  expect(agendas[0].nome).toBe('Dr. João Silva');
});
