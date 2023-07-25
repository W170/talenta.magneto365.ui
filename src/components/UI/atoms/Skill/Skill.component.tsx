import React, { useState, useEffect, useRef } from 'react'
import { ISkill } from './Skill.interface'
import styles from './Skill.module.scss'

const Component: React.FC<ISkill> = ({ skillText, skillLevel }) => {
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

  const fillAnimation = animationApplied && skillLevel ? styles[skillLevel.toLowerCase()] : ''

  return (
    <div ref={skillRef} className={styles.SkillComponent}>
      <div className={styles['SkillWrapper']}>
        <h3>{skillText}</h3>
        <div className={`${styles.SkillBar} ${fillAnimation || styles['NoAnimation']}`}></div>
      </div>
    </div>
  )
}

export const Skill = Component