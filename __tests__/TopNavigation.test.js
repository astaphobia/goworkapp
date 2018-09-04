import React from 'react'
import { shallow } from 'enzyme'

import TopNavigation from '@/components/TopNavigation'

describe('TopNav', () => {
    it('hope doing well TopNav', () => {
        const comp = shallow(<TopNavigation />)
        expect(comp).toMatchSnapshot()
    })
})