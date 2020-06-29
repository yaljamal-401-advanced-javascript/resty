import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Form from '../../../components/form/form.js';
describe('<Form />',()=>{
    it(' test if the application alive ',()=>{
        const form=shallow(<Form />);
        expect(form.find('main').exists()).toBeTruthy();
    });
    it('test get method ',()=>{
        const form = mount(<Form/>);
        const get=form.find('#get');
        get.simulate('click');
        expect(form.state('method')).toEqual('GET');
    });
    it('test post method ',()=>{
        const form = mount(<Form/>);
        const post=form.find('#post');
        post.simulate('click');
        expect(form.state('method')).toEqual('POST');
    });
    it('test PUT method ',()=>{
        const form = mount(<Form/>);
        const put=form.find('#put');
        put.simulate('click');
        expect(form.state('method')).toEqual('PUT');
    });  it('test delete method ',()=>{
        const form = mount(<Form/>);
        const deleteB=form.find('#delete');
        deleteB.simulate('click');
        expect(form.state('method')).toEqual('DELETE');
    });
    it('take URL',()=>{
        const form = mount(<Form/>);
        const urlInput=form.find('#url');
        urlInput.simulate('change',{target:{value:'google.com'}});
        expect(form.state('URL')).toBe('google.com');
    });


    it('Render',()=>{
        const tree=renderer.create(<Form/>).toJSON();
        expect(tree).toMatchSnapshot();
    });

});