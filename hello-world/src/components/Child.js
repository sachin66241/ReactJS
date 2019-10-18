import React from 'react'

function Child(props) {

    return (
        <div>
            <button onClick={()=>props.greehan('Child')}>greet parent</button>
        </div>
    )
}

export default Child
