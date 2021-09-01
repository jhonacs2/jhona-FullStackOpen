import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { fireEvent, prettyDOM } from '@testing-library/dom'
import { CreateForm } from '../components/CreateForm'

test('should call the submit', () => {
  const createBlog = jest.fn()

  const component = render(<CreateForm addBlog={createBlog} />)

  const input = component.container.querySelector('#title')
  const form = component.container.querySelector('form')

  fireEvent.change(input, {
    target: { value: 'new title 2.0' },
  })
  fireEvent.submit(form)

  expect(createBlog.mock.calls).toHaveLength(1)
})
