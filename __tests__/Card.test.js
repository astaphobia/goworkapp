import React from 'react'
import { shallow } from 'enzyme'

import Card from '@/components/Card'

describe('Card', () => {
    it('hope doing well Card', () => {
        const comp = shallow(<Card renderBody={() => {
            return <h1>Mock</h1>
        }}/>)
        expect(comp).toMatchSnapshot()
    })
})