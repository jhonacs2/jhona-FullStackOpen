import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import { fireEvent, prettyDOM } from '@testing-library/dom'
import { Blog } from '../components/Blog'

test('should render author and title without the url and likes', () => {
  const newBlog = {
    title: 'The Adventures',
    author: 'Pony',
    url: 'pony.com',
  }

  const component = render(<Blog blog={newBlog} />)
  const show = component.container.querySelector('.Links')

  expect(component.container).toHaveTextContent('The Adventures')
  expect(component.container).toHaveTextContent('Pony')
  expect(show).toHaveStyle('display:none;')
})

test('should show url and likes ', () => {
  const newBlog = {
    title: 'The new Adventures',
    author: 'Pony',
    url: 'pony.com',
    likes: 10,
  }

  const component = render(<Blog blog={newBlog} />)

  const button = component.getByText('Show Details')
  fireEvent.click(button)
  const showDetail = component.container.querySelector('.Links')
  expect(showDetail).toHaveStyle('display: block ')
})

test('should double click in like', () => {
  const newBlog = {
    id: '61215a545200720053bf5829',
    title: 'The new Adventures',
    author: 'Pony',
    url: 'pony.com',
    likes: 10,
  }
  const like = jest.fn()
  const component = render(<Blog blog={newBlog} updateLike={like} />)

  const button = component.getByText('Show Details')
  fireEvent.click(button)
  const button1 = component.getByText('Like')
  fireEvent.click(button1)
  fireEvent.click(button1)

  expect(like.mock.calls).toHaveLength(2)
})
