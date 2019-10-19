import React from 'react'

function List() {

    const names = ['sachin','prayag','jithin']
    const map = names.map(x=><div>{x}</div>)

    return (
        <div>
            <div>{map}</div>
        </div>
    )
}

export default List

