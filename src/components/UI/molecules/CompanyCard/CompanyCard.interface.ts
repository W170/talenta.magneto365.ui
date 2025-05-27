interface IBaseCompanyCardProps {
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
  backgroundColor?: string
}

export interface IWithDescriptionProps extends IBaseCompanyCardProps {
  /**
   * Type of the company card
   */
  companyCardType: 'withDescription'
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
export interface IWithoutDescriptionProps extends IBaseCompanyCardProps {
  /**
   * Type of the company card
   */
  companyCardType: 'withoutDescription'
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
