const Button = (props) => {
    const {children, classname} = props;
    return (
        <button
        className={`px-4 py-2 rounded ${classname}`}
        type = "submit"
        >
        {children}
        </button>
    );
}

export default Button;