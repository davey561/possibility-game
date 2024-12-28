import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import OptionBox from "./OptionBox";
const Row = ({ options, selectedIndex, onSelectOption, onGenerateMoreOptions, }) => {
    return (_jsxs("div", { className: "row", children: [options.map((option, optIndex) => (_jsx(OptionBox, { option: option, isSelected: selectedIndex === optIndex, onClick: () => onSelectOption(optIndex) }, optIndex))), _jsx("div", { className: "plus-box", onClick: onGenerateMoreOptions, children: "..." })] }));
};
export default Row;
