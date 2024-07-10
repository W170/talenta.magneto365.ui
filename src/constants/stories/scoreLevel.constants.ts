import { IScoreLevel } from '@components/UI/molecules/ScoreLevel/ScoreLevel.interface'
import { IScoreLevelStatic } from '@components/UI/molecules/ScoreLevelStatic/ScoreLevelStatic.interface'

export const scoreProps: IScoreLevel = {
  id: 12313,
  name: 'Pal Futbol Soy',
  onChange: ({ name, level, id }) => console.log({ name, level, id }),
  removeSkill: (name) => console.log(`${name} was removed`),
  levels: ['Basic', 'Professional', 'Expert', 'Prodig'],
  scoreValue: 1
}

export const scorePropsStatic: IScoreLevelStatic = {
  name: 'Pal Futbol Soy',
  levels: ['Basic', 'Professional', 'Expert', 'Prodig'],
  scoreValue: 1
}
