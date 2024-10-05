interface Props {
    label?: string
    placeholder?: string
    type?: string
    name?: string
    className?: string
}

export default function TextInput({ label, placeholder, type, name, className }: Props) {
  return (
    <div className="w-full">  
        {label && <p className="text-primary text-sm font-semibold mb-2">{label}</p>}
        <input 
            name={name || ''}
            type={type || 'text'} 
            placeholder={placeholder}
            className={`text-sm border-[1.5px] border-primary rounded-xl w-full px-5 ${className} h-[45px]`}
        />
    </div>
  )
}
