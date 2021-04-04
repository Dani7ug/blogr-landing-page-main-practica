import React from 'react'

const Text = ({title,text}) => {
    return (
        <div className="row my-4">
        <h3>{title}</h3>
        <p>
            {text}
        </p>
    </div>
    )
}

export default Text
