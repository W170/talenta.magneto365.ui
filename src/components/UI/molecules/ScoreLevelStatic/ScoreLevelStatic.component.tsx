import React, { useCallback, useMemo } from 'react'
import { generateID } from '@utils/generateID/generateID.util'
import { IScoreLevelStatic } from './ScoreLevelStatic.interface'
import styles from './ScoreLevelStatic.module.scss'

const Component: React.FC<IScoreLevelStatic> = ({ name, scoreValue, levels, color }) => {
  const labelScore: string = useMemo(() => {
    return levels[scoreValue - 1]
  }, [levels, scoreValue])

  const setDinamycColor = useCallback(
    (value: number) => {
      const bkgColor = color || 'rgb(26, 50, 76)'
      const props = {
        backgroundColor: bkgColor
      }

      if (value <= scoreValue) {
        return { ...props }
      }

      return { backgroundColor: '#c4c4c4' }
    },
    [color, scoreValue]
  )

  return (
    <div className={styles['magneto-ui-score-level']}>
      <p>{name}</p>
      <div className={styles['magneto-ui-score-level__summary']}>
        <div>
          {levels.map((_, index) => (
            <span style={setDinamycColor(index + 1)} key={generateID()} />
          ))}
        </div>
        <p>{labelScore}</p>
      </div>
    </div>
  )
}

export const ScoreLevelStatic = Component
