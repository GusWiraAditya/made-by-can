const Label = (props) => {
    const {htmlFor, children} = props;
    return (
        <label htmlFor={htmlFor}
            className="block text-sm font-inter text-slate-700 font-bold mb-2">
              {children}
            </label>
            
    )
}

export default Label;