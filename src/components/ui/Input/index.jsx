import Input from "./Input";
import Label from "./Label";

const InputForm = (props) => {
    const {label, type, name, placeholder,} = props;
    return (
        <div >
            <Label htmlFor={name}>{label}</Label>
            <Input name={name} type={type} placeholder={placeholder} />
        </div>
    )
}

export default InputForm;
