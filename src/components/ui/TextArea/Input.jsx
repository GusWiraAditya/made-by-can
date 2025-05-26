const TextArea = ({ label, name, value, onChange, placeholder, rows = 4, className = "" }) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label htmlFor={name} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brown-500 focus:border-transparent resize-none text-sm ${className}`}
      />
    </div>
  );
};

export default TextArea;
