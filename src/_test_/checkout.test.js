import React from 'react';
import {shallow} from 'enzyme';
import Checkout from '../components/Checkout';
import *as redux from 'react-redux';

describe('Checkout Component', () =>{
    let spyOnUseSelector;
    spyOnUseSelector=jest.spyOn(redux, 'useSelector');
    let component;
    it('Should render without errors', () =>{
        component=shallow(<Checkout/>);
        const wrapper=component.find('.checkout');
        expect(wrapper.length).toBe(1);
    });
});