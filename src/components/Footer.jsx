import React from 'react'
import FooterInfo from './FooterInfo'
import {FooterStyle,Title} from "../Styled/Styled-Footer"

const Footer = () => {
    return (
        <FooterStyle className="row">
            <Title className="col-lg-3 text-white h1">Blogr</Title>
            <FooterInfo/>
        </FooterStyle>
    )
}

export default Footer
