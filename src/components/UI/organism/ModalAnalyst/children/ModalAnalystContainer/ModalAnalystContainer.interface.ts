import { IModalAnalystProps } from '../../ModalAnalyst.interface'

export interface IModalAnalystContainerProps extends IModalAnalystProps {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
}
