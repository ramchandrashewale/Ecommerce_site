import React from 'react';
import {shallow} from 'enzyme';
import Product from '../components/Product';
import *as redux from 'react-redux';

describe('Product Component', () =>{
    let spyOnUseDispatch;
    spyOnUseDispatch=jest.spyOn(redux, 'useDispatch');
    let component;
    it('Should render without errors', () =>{
        component=shallow(<Product/>);
        const wrapper=component.find('.product');
        expect(wrapper.length).toBe(1);
    });
    it('Should render Image', () =>{
        component=shallow(<Product/>);
        const image=component.find('.product_img');
        expect(image.length).toBe(1);
    });
    it('Should render Info', () =>{
        component=shallow(<Product/>);
        const Info=component.find('.product_info');
        expect(Info.length).toBe(1);
    });
    it('Should render Rating', () =>{
        component=shallow(<Product/>);
        const Rating=component.find('.product_rating');
        expect(Rating.length).toBe(1);
    });
});