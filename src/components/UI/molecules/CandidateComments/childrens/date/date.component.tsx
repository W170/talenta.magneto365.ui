import React, { useContext }  from 'react'
import { classNames } from '@shared/utils/common'
import styles from './date.module.scss'
import { CandidateCommentsContext } from "../../candidateComments.component";

const cx = classNames.bind(styles);

const formatDate = (inputDate: string | number | Date): string => {
  let parsedDate: Date;
  if (inputDate instanceof Date) {
    parsedDate = inputDate; 
  } else if (typeof inputDate === "string" || typeof inputDate === "number") {
    parsedDate = new Date(inputDate);
  } else {
    return "Fecha inválida";
  }
  if (isNaN(parsedDate.getTime())) return "Fecha inválida";
  return new Intl.DateTimeFormat("es-ES", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(parsedDate);
};

const Component: React.FC<{ date: string | number | Date }> = ({ date }) => {
  const context = useContext(CandidateCommentsContext);

  if (date) {
    return <div className={cx("date")}>{formatDate(date)}</div>;
  }
    if (context?.data?.length) {
      return (
        <>
          {context.data.map(({ date }, index) => (
            <div className={cx('date')} key={index}>
                {formatDate(date)}
            </div>
          ))}
        </>
      );
    }
    return null;
  };
  /**
   *  Molecule UI component of Candidate Comments
   */
  export const DateCommets = Component;
