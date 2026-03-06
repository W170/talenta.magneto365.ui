import React, { useCallback, useMemo, useState } from 'react'
import { generateID } from '@utils/generateID/generateID.util'
import { IScoreLevel } from './ScoreLevel.interface'
import { Trash } from '../../../../constants/icons.constants'
import styles from './ScoreLevel.module.scss'

const Component: React.FC<IScoreLevel> = ({ name, onChange, removeSkill, scoreValue, levels, color, id }) => {
  const [score, setScore] = useState<number>(scoreValue || 1)
  const [spanHover, setSpanHover] = useState<number>(0)

  const labelScore: string = useMemo(() => {
    return levels[score - 1]
  }, [levels, score])

  const handleScoreChange = useCallback(
    (newScore: number) => {
      setScore(newScore)
      if (id) {
        onChange({ name, level: newScore, id })
        return
      }
      onChange({ name, level: newScore })
    },
    [id, name, onChange]
  )

  const setDinamycColor = useCallback(
    (value: number) => {
      const bkgColor = color || '#090467'
      const props = {
        backgroundColor: bkgColor
      }

      if (value <= score) {
        return { ...props }
      }
      if (value <= spanHover) {
        return { ...props, opacity: '0.4' }
      }
      return { backgroundColor: '#c4c4c4' }
    },
    [color, score, spanHover]
  )

  return (
    <div className={styles['magneto-ui-score-level']}>
      <p className={styles['magneto-ui-score-level__p']}>{name}</p>
      <div className={styles['magneto-ui-score-level__summary']}>
        <div>
          {levels.map((_, index) => (
            <span
              onMouseOver={() => setSpanHover(index + 1)}
              onMouseLeave={() => setSpanHover(0)}
              style={setDinamycColor(index + 1)}
              key={generateID()}
              onClick={() => handleScoreChange(index + 1)}
            />
          ))}
        </div>
        <p>{labelScore}</p>
      </div>
      <button
        className={styles['magneto-ui-score-level__delete-action']}
        onClick={() => removeSkill(name)}
        type="button"
      >
        <img src={Trash} alt="remove-skill-icon" />
      </button>
    </div>
  )
}

export const ScoreLevel = Component
