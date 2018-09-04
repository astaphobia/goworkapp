import React from 'react'
import { shallow } from 'enzyme'

import Loader from '@/components/Loader'

describe('Loader', () => {
    it('hope doing well Loader', () => {
        const comp = shallow(<Loader />)
        expect(comp).toMatchSnapshot()
    })
})