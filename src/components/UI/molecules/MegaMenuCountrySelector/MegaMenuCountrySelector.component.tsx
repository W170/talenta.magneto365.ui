import React from 'react'
import { Field, IconItem, Typography } from '@components/UI/atoms'
import { useMediaQuery } from '@components/hooks'
import { Select2 } from '@components/UI/organism/Select2'
import { ArrowDown2 } from '@constants/icons.constants'
import { IMegaMenuCountrySelector } from './MegaMenuCountrySelector.interface'
import styles from './MegaMenuCountrySelector.module.scss'

const Component: React.FC<IMegaMenuCountrySelector> = ({ selectCountry }) => {
  const isMobile = useMediaQuery(false, { xs: true, sm: true, md: true })
  const selectedCountry = selectCountry.currentFields?.[0] ?? selectCountry.selectList?.[0]

  if (isMobile) {
    return (
      <Field className={styles['mega-menu-country-selector__field']}>
        <Field.List.Wrapper>
          <Field.Input
            type="button"
            value={''}
            prefix={
              selectedCountry?.img ? (
                <img
                  src={selectedCountry.img}
                  alt={selectedCountry.name}
                  className={styles['mega-menu-country-selector__flag']}
                />
              ) : undefined
            }
            suffix={({ opened }) => (
              <div
                className={`${styles['mega-menu-country-selector__arrow']} ${
                  opened ? styles['mega-menu-country-selector__arrow--opened'] : ''
                }`}
              >
                <IconItem size={16} icon={ArrowDown2} />
              </div>
            )}
          />
          <Field.List value={selectedCountry} onChange={(country) => selectCountry.onChange([country])}>
            <Field.List.Body>
              {selectCountry.selectList?.map((country) => (
                <Field.List.Item
                  key={country.id}
                  value={country}
                  className={styles['mega-menu-country-selector__option']}
                >
                  {country.img && (
                    <img src={country.img} alt={country.name} className={styles['mega-menu-country-selector__flag']} />
                  )}
                  <Typography.Text>{country.name}</Typography.Text>
                </Field.List.Item>
              ))}
            </Field.List.Body>
          </Field.List>
        </Field.List.Wrapper>
      </Field>
    )
  }

  return (
    <Select2
      haveTags={false}
      isMultiple={false}
      {...selectCountry}
      className={`${styles['mega-menu-country-selector__select']} ${selectCountry.className || ''}`}
    />
  )
}

export const MegaMenuCountrySelector = Component
