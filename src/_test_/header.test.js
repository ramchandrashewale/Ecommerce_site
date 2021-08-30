import React from 'react';
import {shallow} from 'enzyme';
import Header from '../components/Header';
import *as redux from 'react-redux';

describe('Header Component', () =>{
    let spyOnUseSelector;
    spyOnUseSelector=jest.spyOn(redux, 'useSelector');
    let component;
    it('Should render without errors', () =>{
        component=shallow(<Header/>);
        const wrapper=component.find('.header');
        expect(wrapper.length).toBe(1);
    });
    it('Should render a logo',()=>{
        component=shallow(<Header/>);
        const logo=component.find('.header_logo');
         expect(logo.length).toBe(1);
    });
    it('Should render search', ()=>{
        component=shallow(<Header/>);
        const search=component.find('.header_search');
        expect(search.length).toBe(1);
    });
    it('Should render headerOption ', ()=>{
        component=shallow(<Header/>);
        const headerOption=component.find('.header_option');
        expect(headerOption.length).toBe(2);
    });
    it('Should render headerOptionBasket ', ()=>{
        component=shallow(<Header/>);
        const headerOptionBasket=component.find('.header_optionBasket');
        expect(headerOptionBasket.length).toBe(1);
    });
})
