import React from 'react'
import { classMUI } from '../../../../constants/stories.constants'
import style from './JobCard.module.scss'
import { IconItem } from '../../atoms'
import { ArrowRight2 } from '../../../../constants/icons.constants'

const JobCard = () => {
  return (
    <div className={style[`${classMUI}-card-jobs`]}>
      <div className={style[`${classMUI}-card-jobs--row1`]}>
        <div className={style[`${classMUI}-card-jobs--brand`]}>
          <img
            className={style[`${classMUI}-card-jobs--brand__img`]}
            alt="company-brand"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Grupo_Exito_logo.svg/1200px-Grupo_Exito_logo.svg.png"
          />
        </div>
      </div>
      <div className={style[`${classMUI}-card-jobs--data`]}>
        <div className={style[`${classMUI}-card-jobs--row2`]}>
          <p>Comunicador Visual</p>
          <div className={style[`${classMUI}-card-jobs--row2__variant`]}>
            <p>Grupo Exito </p>
            <p>Hace 10 dias</p>
          </div>
          <p>Hace 10 dias</p>
        </div>
        <div className={style[`${classMUI}-card-jobs--row3`]}>
          <p>Medellín, Bogota, Barranquilla, Cali, Manizales, Otras</p>
        </div>
        <div className={style[`${classMUI}-card-jobs--row4`]}>
          <p>Término indefinido, </p>
          <p>$2’000.000 a $3’000.000, </p>
          <p>2 años de experiencia, </p>
          <p>Profesional</p>
        </div>
      </div>

      <div className={style[`${classMUI}-card-jobs--arrow`]}>
        <IconItem Icon={ArrowRight2} />
      </div>
    </div>
  )
}

export default JobCard
