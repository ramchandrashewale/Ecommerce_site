import React from 'react';
import {shallow} from 'enzyme';
import CheckoutProduct from '../components/CheckoutProduct';
import *as redux from 'react-redux';

describe('Product Component', () =>{
    let spyOnUseDispatch;
    spyOnUseDispatch=jest.spyOn(redux, 'useDispatch');
    let component;
    it('Should render without errors', () =>{
        component=shallow(<CheckoutProduct/>);
        const wrapper=component.find('.checkoutProduct');
        expect(wrapper.length).toBe(1);
    });
    it('Should render Image', () =>{
        component=shallow(<CheckoutProduct/>);
        const image=component.find('.checkoutProduct_image');
        expect(image.length).toBe(1);
    });
    it('Should render Info', () =>{
        component=shallow(<CheckoutProduct/>);
        const Info=component.find('.checkoutProduct_info');
        expect(Info.length).toBe(1);
    });
    it('Should render Rating', () =>{
        component=shallow(<CheckoutProduct/>);
        const Rating=component.find('.checkoutProduct_rating');
        expect(Rating.length).toBe(1);
    });
});