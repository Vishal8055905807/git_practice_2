import { useState } from "react";

function Counter () {
    let [count , setCount ] = useState(0)
    let handleClick = () => {
        setCount(prev => prev +1)
    }

    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={handleClick} > Click here
            </button>
        </div>
    )

}

export default Counter