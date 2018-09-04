import React from 'react'
import { shallow } from 'enzyme'

import Ads from '@/components/Ads'

describe('Ads', () => {
    it('hope doing well on Composing component', () => {
        const comp = shallow(<Ads />)
        expect(comp).toMatchSnapshot()
    })
})