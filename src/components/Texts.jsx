import React from 'react'
import Text from './Text'

const Texts = ({titleOne,textOne,titleTwo,textTwo}) => {
    return (
        <>
            <Text title={titleOne} text={textOne} />
            <Text title={titleTwo} text={textTwo}/>
        </>
    )
}

export default Texts
