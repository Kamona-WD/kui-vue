/**
 * @jest-environment jsdom
 */

import { mount } from '@vue/test-utils'
import { createKUI } from '../kui'

it('should return install function', () => {
  const kui = createKUI({})

  expect('install' in kui).toBe(true)
})

it('should install provided components', () => {
  const Foo = { name: 'Foo', template: '<div />' }

  const kui = createKUI({
    components: {
      Foo,
    },
  })

  const AppComponent = {
    name: 'AppComponent',
    template: '<foo />',
  }

  mount(AppComponent, {
    global: {
      plugins: [kui],
    },
  })

  const warn = jest.spyOn(global.console, 'warn')

  expect(warn).not.toHaveBeenCalled()
})
