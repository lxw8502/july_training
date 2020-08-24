import React, {useRef} from 'react';


function Input() {
    const ref = useRef();

    const handleClick = function(){
        let value = ref.current.value;
        alert(value);
    }
    return (
        <div>
            <input type="text" ref={ref}></input>
            <button onClick={handleClick}>show in alert</button>
        </div>
    )
}

export default Input