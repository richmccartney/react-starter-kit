// @flow
/** @jsx jsx */

import * as React from 'react'
import { css, jsx } from '@emotion/core'

type PropType = {
  children: React.Node,
  name?: string,
  href?: string,
  disabled?: boolean,
  onClick: Function,
  ariaLabel?: string
}

const buttonStyle = css`
  appearance: none;
  background-color: #b0d7ff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  box-sizing: border-box;
  color: #2d3142;
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 12px 6px;
  text-align: center;
  text-decoration: none;
  user-select: none;
`

class Button extends React.Component<PropType> {
  static defaultProps = {
    disabled: false,
    onClick: () => {}
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
        css={css`
          ${buttonStyle}
        `}
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
