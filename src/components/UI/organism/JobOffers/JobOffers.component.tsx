import React from 'react'
import style from './JobOffers.module.scss'
import { IconItem } from '../../atoms'
import { ArrowRight2 } from 'iconsax-react'

const JobOffers = () => {
  return (
    <div className={style['magneto-ui-job-offers']}>
      <div className={style['magneto-ui-job-offers--column1']}>
        <img
          className={style['magneto-ui-job-offers--logo']}
          src="https://static.magneto365.com/lib/assets/a4ae13e7be8fbccc.png"
          alt="company logo"
        />
      </div>

      <div>
        <p className={style['magneto-ui-job-offers--text']}>Comunicador audiovisual</p>
      </div>
      <div>
        <p className={style['magneto-ui-job-offers--text']}>Grupo Exito</p>
      </div>
      <div>
        <p className={style['magneto-ui-job-offers--text']}>
          Hace 10 dias | <span>258 postularon</span>
        </p>
      </div>
      <div>
        <p className={style['magneto-ui-job-offers--text']}>
          Medellin, $2.000.000 a $3.0000.000, 2 anos de experiencia, Profesional
        </p>
      </div>
      <div className={style['magneto-ui-job-offers--tags']}>
        <p>Excel</p>
        <p>Comunicacion interpersonal</p>
        <p>Premier pro</p>
        <p>Fotografia</p>
        <p>Periodismo</p>
      </div>
      <div className={style['magneto-ui-job-offers--arrow']}>
        <IconItem hover={false} Icon={ArrowRight2} />
      </div>
    </div>
  )
}

export default JobOffers
