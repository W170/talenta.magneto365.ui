import React from 'react';
import {IOptionValues} from "@components/UI/atoms/DateOptions";

export interface IDateSelection {
  /*
   */
  isOpen: boolean;
  /*
   */
  onClose: () => void;
  /*
   */
  selectionHeader: string
  /*
   */
  cancelSelection: string
  /*
   */
  applySelection: string
  /*
   */
  dateOptions: IOptionValues[]
  /*
   */
  onClick: (event: React.MouseEvent<HTMLLIElement>) => void
}