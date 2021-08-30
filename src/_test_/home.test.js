import React from 'react';
import {shallow} from 'enzyme';
import Home from '../components/Home';


describe('Header Component', () =>{
    
    let component;
    it('Should render without errors', () =>{
        component=shallow(<Home/>);
        const wrapper=component.find('.home');
        expect(wrapper.length).toBe(1);
    });
    it('Should render Advertise', () =>{
        component=shallow(<Home/>);
        const homeAdvertise=component.find('.home_advertise');
        expect(homeAdvertise.length).toBe(1);
    });
});