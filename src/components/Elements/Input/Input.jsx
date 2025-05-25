const Input = (props) => {
    const {id, type , placeholder, name} = props;
    return (
        <input
              type={type}
              id={name}
              className="text-m font-normal border border-primary rounded w-full py-2 px-3 text-black placeholder: opacity-50 placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder= {placeholder}
              name = {name}
            />
    )
}

export default Input;
