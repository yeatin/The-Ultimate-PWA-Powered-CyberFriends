import { shallow } from "enzyme";
import CounterButton from "./CounterButton";
import React from "react";


const mockColor = 'red';
const wrapper = shallow(<CounterButton color={mockColor} />);
it("expect to render CounterButton component", () => {
    expect(wrapper).toMatchSnapshot();
})

it("expect counter to correctly increment", () => {
    wrapper.find('button').simulate('click');
    expect(wrapper.state().count).toEqual(1);
})

it("expect buuton to render the correct count", () => {
    expect(wrapper.find('button').text()).toEqual("Count: 1");
})

it("expect shouldComponentUpdate works successfully", () => {
    let mockNextProps = { count: wrapper.state().count + 1 };
    const mockNextState = {};
    console.log(wrapper.instance());
    expect(wrapper.instance().shouldComponentUpdate(mockNextProps, mockNextState)).toEqual(true);
    mockNextProps = { count: wrapper.state().count };
    expect(wrapper.instance().shouldComponentUpdate(mockNextProps, mockNextState)).toEqual(false);
})

it("expect props to be right", () => {
    expect(wrapper.props().color).toEqual("red");
})