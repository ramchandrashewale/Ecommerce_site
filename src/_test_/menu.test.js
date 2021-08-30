import React from 'react';
import {shallow} from 'enzyme';
import Menu from '../components/Menu';


describe('Header Component', () =>{
    
    let component;
    it('Should render without errors', () =>{
        component=shallow(<Menu/>);
        const wrapper=component.find('.header_menu');
        expect(wrapper.length).toBe(1);
    });
});