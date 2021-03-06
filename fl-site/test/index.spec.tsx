import * as React from 'react'
import {mount} from 'enzyme'
import IndexPage from '../pages/index'
import { getTestSelector } from '../etc/globals'

describe('Pages', () => {
  describe('Index', () => {
    it('should show the right title', function () {
      const wrap = mount(<IndexPage/>)
      expect(wrap.find('h1').text()).toBe('Foody.Land')
    })

    it('should show a list of recipes', function () {
      const wrap = mount(<IndexPage/>)
      expect(wrap.find(getTestSelector('recipe-list')).exists()).toBeTruthy()
    })

    it('should show show 5 recipes', function () {
      const wrap = mount(<IndexPage />)
      expect(wrap.find(getTestSelector('recipe-list-item')).length).toBe(5)
    })
  })
})
