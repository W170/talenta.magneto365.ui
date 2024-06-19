import { IScoreLevel } from '@components/UI/molecules/ScoreLevel/ScoreLevel.interface'

export const scoreProps: IScoreLevel = {
  name: 'Pal Futbol Soy',
  onChange: ({ name, score }) => console.log({ name, score }),
  removeSkill: (name) => console.log(`${name} was removed`),
  levels: ['Tronco', 'Ahi Maso', 'Hace lo que puede', 'Calidoso', 'El Propio Tigre', 'Chuck Norris'],
  scoreValue: 1
}
