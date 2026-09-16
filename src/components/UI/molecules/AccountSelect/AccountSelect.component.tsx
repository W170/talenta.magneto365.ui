import { Avatar, Collapse, IconItem, Typography } from '@components/UI/atoms'
import React, { useState } from 'react'
import styles from './AccountSelect.module.scss'
import { ArrowDown3, Repeat } from '@constants/icons.constants'
import { Tooltip } from '../Tooltip'
import { IAccountSelect } from './AccountSelect.interface'
import { classNames } from '@shared/utils/common'

const cx = classNames.bind(styles)

const Component = ({ profileImage, user, emails, labels, onSelectAccount, className }: IAccountSelect) => {
  const [accountsOpen, setAccountsOpen] = useState(false)

  return (
    <div className={cx('account-select', className)}>
      <div className={cx('user-info')}>
        <Avatar {...profileImage} />
        <div className={cx('user-info__name')}>
          <Typography.Text color="grey-800" size={'md-2'} strong>
            {user.name}
          </Typography.Text>
          <Typography.Text color="grey-800" size={'md-2'}>
            {user.lastName}
          </Typography.Text>
        </div>
      </div>
      {emails.length > 0 && (
        <Collapse className={cx('collapse')} open={accountsOpen} onChangeOpen={setAccountsOpen}>
          <Collapse.Header className={cx('collapse__header')}>
            <Typography.Text color="grey-800" size={'md-2'} strong={accountsOpen}>
              {labels.sectionTitle}
            </Typography.Text>
            <Collapse.Toggler>
              <IconItem icon={ArrowDown3} size={16} />
            </Collapse.Toggler>
          </Collapse.Header>
          <Collapse.Body className={cx('collapse__body')}>
            {emails.map((account) => (
              <button key={account.id} onClick={() => onSelectAccount(account)}>
                <Tooltip title={labels.tooltips.currentAccount} visible={account.isCurrent}>
                  <Typography.Text
                    color={`${account.isCurrent ? 'grey-800' : 'grey-600'}`}
                    size={'md-2'}
                    strong={account.isCurrent}
                  >
                    {account.email}
                  </Typography.Text>
                </Tooltip>
                {!account.isCurrent && (
                  <Tooltip title={labels.tooltips.changeAccount} position="left">
                    <IconItem icon={Repeat} size={16} />
                  </Tooltip>
                )}
              </button>
            ))}
          </Collapse.Body>
        </Collapse>
      )}
    </div>
  )
}

export const AccountSelect = Component
