const InputField = ({ id, label, type = "text", placeholder, required, ...rest }) => {
  return (
    <label htmlFor={id} className="text-[#06152B] text-[16px] flex flex-col">
    {label}
    <input
      type={type}
      id={id}
      name={id}
      placeholder={placeholder}
      required={required}
      {...rest}
      className="ring-[1px] mt-2 ring-[#06152B] placeholder-[#9A9A9A] focus:outline-none hover:border-primary focus:border-primary focus:ring-1 focus:ring-primary rounded-[4px] px-4 py-2"
    />
  </label>
  )
}

export default InputField