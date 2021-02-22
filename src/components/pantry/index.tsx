import { useState } from "react";

function Pantry() {
    const [value, setValue] = useState('')
    const [list, setList] = useState<string[]>([])

    return <div>
        <form onSubmit={(e) => {
            e.preventDefault()

            addItem(value)
            setValue('')
        }}>
            <input type="text" value={value} onChange={(e) => {
                setValue(e.target.value)
            }} />
            <button type="submit">Submit</button>
        </form>

        <ul>
            {list.map((item, index) => {
                return (<li key={index}>{item}<button onClick={() => removeItem(index)}>delete</button></li>)
            })}
        </ul>
    </div>

    function addItem(item: string) {
        setList([...list, item])
    }

    function removeItem(index: number) {
        setList(list.filter((item, i) => i !== index))
    }
}




export default Pantry