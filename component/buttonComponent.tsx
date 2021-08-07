export default function ButtonComponent(props: { name: string, id: string, onClick: () => void }) {

    return (
            <button onClick={props.onClick}
                    id={props.id} type="submit"
                    className="bg-pink-700 text-white rounded-xl m-3 p-4
                    hover:bg-pink-700
                    outline-none
                    hover:bg-pink-800
                    shadow
                    transition-all ">{props.name} </button>

    )
}