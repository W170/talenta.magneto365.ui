import React, { useState, useEffect, useRef } from 'react'
import { ISkill } from './Skill.interface'
import styles from './Skill.module.scss'

const Component: React.FC<ISkill> = ({ name, score }) => {
  const [animationApplied, setAnimationApplied] = useState(false)
  const skillRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const skillElement = skillRef.current

    if (!skillElement) return

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 1
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimationApplied(true)
        } else {
          setAnimationApplied(false)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    observer.observe(skillElement)

    return () => {
      observer.unobserve(skillElement)
    }
  }, [])

  const scoreToLevel: { [key: number]: string } = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four'
  }

  const levelClass = scoreToLevel[score || 0] || ''

  const fillAnimation = animationApplied ? styles[levelClass] : ''

  return (
    <div ref={skillRef} className={styles['magneto-ui-skill']}>
      <div className={styles['magneto-ui-skill__wrapper']}>
        <p>{name}</p>
        <div
          className={`${styles['magneto-ui-skill__bar']} ${fillAnimation || styles['magneto-ui-skill--no-animation']}`}
        ></div>
      </div>
    </div>
  )
}

export const Skill = Component
