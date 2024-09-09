import { mount } from '@vue/test-utils'
import { expect, test, vi } from 'vitest'
import App from './App.vue'

test('showcase bug', () => {
  const warn = vi.fn(console.log)
  window.console = { warn } as any
  mount(App)
  expect(warn.mock.calls).toEqual([])
})

