
import React from 'react';

const { useState } = React
const Button = ({ increment, onClickFunction }) => {

    const handleClick = () => {
    onClickFunction(increment)
    }
    return (
     <button onClick={handleClick}>+{increment}</button>
    )
    }

    const Button2 = ({ dicrement, onClickFunction }) => {

        const handleClick = () => {
        onClickFunction(dicrement)
        }
        return (
         <button onClick={handleClick}>-{dicrement}</button>
        )
        }
        
const Counter = () => {
const [count, setCount] = useState(0)


const incrementCount = increment => {
setCount(count + increment)
}

const dicrementCount = dicrement => {
    setCount(count  > 0 ? (count - dicrement) : null)
    }

return (
<div>
<Button2 dicrement={1} onClickFunction={dicrementCount} />
<Button increment={1} onClickFunction={incrementCount} />
<span className='margin'> En el carrito: {count}</span>
</div>
)
}


export default Counter