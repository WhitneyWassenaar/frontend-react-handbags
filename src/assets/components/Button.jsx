import logMenuButtonText from "../helpers/logMenuButtonText.js";



// eslint-disable-next-line react/prop-types
function Button({text,disabled}) {
    return (
        <button
            type="button"
            onClick={() => logMenuButtonText(text)}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;