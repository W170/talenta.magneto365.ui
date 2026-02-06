import { TypographyLink } from './TypographyLink'
import { TypographyParagraph } from './TypographyParagraph'
import { TypographyText } from './TypographyText'
import { TypographyTitle } from './TypographyTitle'

/**
 * Typography component for rendering text elements with consistent design tokens.
 * Includes sub-components: Title, Text, Paragraph, Link
 *
 * @example
 * ```tsx
 * <Typography.Title level={1} color="blue-dark-500" size="4xl">
 *   Heading
 * </Typography.Title>
 *
 * <Typography.Text color="grey-900" size="md" weight="bold">
 *   Bold text
 * </Typography.Text>
 *
 * <Typography.Paragraph ellipsis={{ rows: 3 }}>
 *   Long paragraph...
 * </Typography.Paragraph>
 *
 * <Typography.Link href="#" color="blue-light-400" underline>
 *   Click here
 * </Typography.Link>
 * ```
 */
export const Typography: {
  Link: typeof TypographyLink
  Paragraph: typeof TypographyParagraph
  Text: typeof TypographyText
  Title: typeof TypographyTitle
} = Object.assign(
  {},
  {
    Link: TypographyLink,
    Paragraph: TypographyParagraph,
    Text: TypographyText,
    Title: TypographyTitle
  }
)
