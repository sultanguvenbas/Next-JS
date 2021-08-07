export default function InputComponent(props: { type: string, placeholder: string, name: string, id: string, onChange?: (value: string) => void }) {

    return (
        <>
            <label htmlFor="name" className="text-pink-800 text-opacity-80 ">{props.name}
                <input type={props.type} id={props.id} placeholder={props.placeholder}
                       onChange={v => props.onChange?.(v.target.value)}
                       className="bg-gray-400
                outline-none
                rounded-xl m-3 p-3
                text-black
                hover:shadow-lg
                hover:bg-pink-600
                placeholder-gray-700
                transition-all
                "
                /></label>
        </>
    )
}