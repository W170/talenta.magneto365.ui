import { ReactNode } from 'react'

interface IBaseCompanyComponentProps {
  /**
   * Logo of the company
   */
  logo: string
  /**
   * Name of the company
   */
  companyName: string
  /**
   * Link to the company page
   */
  buttonLink: string
  /**
   * Class name for the component
   */
  className?: string
  /**
   * Type of the company card
   */
  companyCardType?: 'withDescription' | 'withoutDescription'
  /**
   * Background color of the card
   */
  backgroundColor?: 'gray' | 'white' | 'transparent'
}
export interface IWithDescriptionProps extends IBaseCompanyComponentProps {
  /**
   * Number of job openings
   */
  jobCount: string
  /**
   * Description of the company
   */
  description: string
  /**
   * Text for the button
   */
  buttonText: string
}
export interface IWithoutDescriptionProps extends IBaseCompanyComponentProps {
  /**
   * Title of the job opening
   */
  vacantTitle: string
  /**
   * Salary for the job opening
   */
  salary: string
}

export type ICompanyCardProps = IWithDescriptionProps | IWithoutDescriptionProps

interface IBaseCardProps {
  /**
   * Class name for the component
   */
  className?: string
  /**
   * Background color of the card
   */
  backgroundColor?: 'gray' | 'white' | 'transparent'
  /**
   * Logo of the company
   */
  logo: string
  /**
   * Name of the company
   */
  companyName: string
  /**
   * Header content to display
   */
  headerContent: ReactNode
}

// Interfaces específicas que extienden la base
export interface IWithDescriptionCardProps extends IBaseCardProps {
  /**
   * Main content to display
   */
  mainContent: ReactNode
  /**
   * Footer content to display
   */
  footerContent: ReactNode
}

export interface IWithoutDescriptionCardProps extends IBaseCardProps {
  /**
   * Link to the company page
   */
  buttonLink: string
}
