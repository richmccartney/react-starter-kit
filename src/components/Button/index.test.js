import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

import Button from './'

describe('Button', () => {
  it('should render a default Button', () => {
    const button = renderer.create(
      <div>
        <Button>Button</Button>
      </div>
    )
    const json = button.toJSON()
    expect(json).toMatchSnapshot()
  })

  it('should render an anchor element if href exsists', () => {
    const button = renderer.create(
      <div>
        <Button href="link">Button</Button>
      </div>
    )
    const json = button.toJSON()
    expect(json).toMatchSnapshot()
  })

  it('should render an button with an aria label', () => {
    const button = shallow(<Button ariaLabel="Test">Link</Button>)
    expect(button.find('button').prop('aria-label')).toEqual('Test')
  })

  it('onClick is called', () => {
    const onClick = jest.fn()
    const button = shallow(<Button onClick={onClick}>Ok!</Button>)

    button.find('button').simulate('click')
    expect(onClick.mock.calls.length).toEqual(1)
  })

  it('is not called when is disabled', () => {
    const onClick = jest.fn()
    const button = shallow(
      <Button disabled onClick={onClick}>
        onClick test
      </Button>
    )

    button.find('button').simulate('click')
    expect(onClick.length).toEqual(0)
  })
})
