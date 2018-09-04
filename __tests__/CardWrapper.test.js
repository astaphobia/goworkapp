import React from 'react'
import { shallow } from 'enzyme'

import CardWrapper from '@/components/CardWrapper'

describe('Wrapper', () => {
    const items = [
        { name: 'mock' },
        { name: 'mock-2' }
    ]
    it('hope doing well wrapper', () => {
        const comp = shallow(
            <CardWrapper>
                {items.map((item, index) => <CardWrapper.Card item={item} key={index} />)}
            </CardWrapper>
        )
        expect(comp).toMatchSnapshot()
    })
})