import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const OptionBox = ({ option, isSelected, onClick }) => {
    return (_jsxs("div", { className: `option-box ${isSelected ? "highlighted" : ""}`, onClick: onClick, children: [_jsx("p", { children: option.text }), _jsx("small", { children: option.timestamp })] }));
};
export default OptionBox;
