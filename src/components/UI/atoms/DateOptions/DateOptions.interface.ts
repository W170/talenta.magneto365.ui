import React from "react";

export interface IDateOption {
  optionsList: IOptionValues[]
  /*
   */
  handleOnClick: (event:  React.MouseEvent<HTMLLIElement>) => void;
  /*
   */
  selected?: number | string
}

export interface IOptionValues {
  /**
   * The value of the option.
   */
  optionValue: string | number
  /**
   * The label to display for the option.
   */
  optionLabel: string
}
