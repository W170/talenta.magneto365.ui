import React, {useState} from 'react'
import { ICandidateNavigationBar, ImenuOptions } from './candidateNavigationBar.interface'
import styles from './candidateNavigationBar.module.scss'
import { classNames } from '@shared/utils/common'
import { IconItem } from '@components/UI/atoms'
import { ArrowLeft2, ArrowRight2 }  from '@constants/icons.constants'


const Component: React.FC<ICandidateNavigationBar> = ({ className, menuOptions}) => {
  const [active, setActive] = useState(false);

  const cx = classNames.bind(styles);

  const activeMenu = active && "candidateNavigationBarActive";

  return (
    <div className={cx("candidateNavigationBar", `${activeMenu}`, className && className)}>
      {active &&     <div
        className={cx(
          "candidateNavigationBar__menu",
          `${active && "candidateNavigationBar__menuActive"}`
        )}
      >
        {menuOptions && menuOptions.map(({ icon, label, onClick }: ImenuOptions) => (
          <div
            onClick={() => onClick()}
            className={cx("candidateNavigationBar__menuActive--option")}
          >
            <div className={cx("candidateNavigationBar__menuActive--icon")}>
              <IconItem icon={icon} color="#292F37" />
            </div>
            {label}
          </div>
        ))}
      </div>}
      <div className={cx("candidateNavigationBar__buttons")}>
        <div className={cx("candidateNavigationBar__buttons--decline")}>x</div>
        <div className={cx("candidateNavigationBar__buttons--center")}>Siguiente etapa</div>
        <div
          className={cx("candidateNavigationBar__buttons--menu")}
          onClick={() => setActive(!active)}
        >
          ...
        </div>
      </div>
      <div className={cx("candidateNavigationBar__navigation")}>
        <IconItem icon={ArrowLeft2} />
        <div className={cx("candidateNavigationBar__navigation--center")}>
          Candidato 1 de 1
        </div>
        <IconItem icon={ArrowRight2} />
      </div>
    </div>
  );
};
/**
 * UI Atom component of Candidate Navigation Bar
 */
export const CandidateNavigationBar = Component