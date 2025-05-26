import TextArea from "./Input";
import Label from "./Label";

const TextAreaForm = (props) => {
  const { label, value, name, placeholder } = props;
  return (
    <div>
      <Label htmlFor={name}>{label}</Label>
      <TextArea
        label={name}
        name={name}
        value={value}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
};

export default TextAreaForm;
