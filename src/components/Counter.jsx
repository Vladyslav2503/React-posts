import React, {useState} from 'react'

const Counter = function () {
    const [count, setCount] = useState(0)

    function incrument() {
        setCount(count + 1)
    }

    function decrument() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incrument}>incrument</button>
            <button onClick={decrument}>decpiment</button>
        </div>
    )
}

export default Counter

