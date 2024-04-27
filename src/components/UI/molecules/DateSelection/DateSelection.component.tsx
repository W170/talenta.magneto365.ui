import React from 'react';
import {DateOptions} from "@components/UI/atoms/DateOptions";
import {MobileDrawer} from "@components/UI/molecules";
import {IDateSelection} from "@components/UI/molecules/DateSelection/DateSelection.interface";
import styles from "./DateSelection.module.scss";

const Component:React.FC<IDateSelection> = ({isOpen, onClose, selectionHeader, cancelSelection, applySelection,  dateOptions, onClick}) => {
  return (
    <MobileDrawer isOpen={isOpen} onClose={onClose}>
      <div className={styles['magneto-ui--date-selection__header']}>
        <h2>{selectionHeader}</h2>
      </div>
      <div className={styles['magneto-ui--date-selection__options']}>
        <DateOptions optionsList={dateOptions} handleOnClick={onClick} />
      </div>
      <div className={styles['magneto-ui--date-selection__btn--wrapper']}>
        <button className={styles['magneto-ui--date-selection__cancel-btn']}>{cancelSelection}</button>
        <button className={styles['magneto-ui--date-selection__apply-btn']}>{applySelection}</button>
      </div>
    </MobileDrawer>
  )
}

export const DateSelection = Component