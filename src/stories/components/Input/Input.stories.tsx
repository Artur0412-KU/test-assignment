import React from "react";
import Input from "../../../components/Input/Input";

export default {
    title: 'Components/Input',
    component: Input,
}

export const Basic = () => <Input placeholder="Type something..." />;
export const Clearable = () => <Input placeholder="Clearable input" clearable />;
export const Password = () => <Input type="password" placeholder="Secret password" />;
export const ClearablePassword = () => <Input type="password" clearable placeholder="Password with clear" />;
export const Number = () => <Input type="number" placeholder="Enter a number" />;