var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { Mylabel } from "../../components/Mylabel";
export default {
    title: "UI/MyLabel",
    component: Mylabel,
    argTypes: {
        color: { control: 'select' },
        fontColor: { control: 'color' },
        background: { control: 'color' }
    }
};
var Template = function (args) { return _jsx(Mylabel, __assign({}, args), void 0); };
export var basic = Template.bind({});
basic.args = {
    size: 'normal',
    allCaps: false //capitaliza toda la label
};
export var Allcaps = Template.bind({});
Allcaps.args = {
    size: 'normal',
    allCaps: true
};
export var Seconday = Template.bind({});
Seconday.args = {
    size: 'normal',
    color: 'secondary'
};
export var Tertiary = Template.bind({});
Allcaps.args = {
    size: 'normal',
    color: 'tertiary'
};
export var CustomFontColor = Template.bind({});
CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
};
export var CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
    background: 'black',
    fontColor: 'white'
};
