import { jsx as _jsx } from "react/jsx-runtime";
const InputBar = ({ value, onChange, onSubmit }) => {
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && value.trim()) {
            onSubmit();
        }
    };
    return (_jsx("input", { type: "text", value: value, onChange: (e) => onChange(e.target.value), onKeyDown: handleKeyDown, placeholder: "Type your main idea, press Enter...", className: "text-input" }));
};
export default InputBar;
