// @flow

import * as React from 'react'
import { css } from 'emotion'

type PropsType = {
  children: React.Node,
  name?: string,
  href?: string,
  disabled?: boolean,
  onClick: Function,
  ariaLabel?: string,
}

const className = css({
  appearance: 'none',
  backgroundColor: '#007bff',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '4px',
  boxSizing: 'border-box',
  color: 'white',
  cursor: 'pointer',
  display: 'inline-block',
  fontSize: '1rem',
  fontWeight: '400',
  lineHeight: '1.5',
  padding: '6px 12px',
  textAlign: 'center',
  userSelect: 'none',
  '& .primary': {
    color: 'orange',
  },
  '@media (min-width: 420px)': {
    color: 'blue',
  },
})

class Button extends React.Component<PropsType> {
  static defaultProps = {
    disabled: false,
    onClick: () => {},
  }

  onClick = (e: Event) => {
    const { disabled } = this.props
    if (disabled) {
      return
    }
  }

  render = () => {
    const { children, name, disabled, onClick, href, ariaLabel } = this.props

    const Tag = href ? 'a' : 'button'

    return (
      <Tag
        className={className}
        href={Tag === 'a' ? href : undefined}
        onClick={onClick}
        disabled={disabled}
        name={name}
        aria-label={ariaLabel}
      >
        {children}
      </Tag>
    )
  }
}

export default Button
