import React from 'react';
import {shallow} from 'enzyme';
import Footer from '../components/Footer';


describe('Header Component', () =>{
    
    let component;
    it('Should render without errors', () =>{
        component=shallow(<Footer/>);
        const wrapper=component.find('.footer');
        expect(wrapper.length).toBe(1);
    });
});