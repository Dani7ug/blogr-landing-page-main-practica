import Styled from "styled-components";


const FooterStyle = Styled.footer`
border-top-right-radius:120px;
background:hsl(240, 10%, 16%);
padding:60px 160px 60px 100px;
font-family: 'Overpass', sans-serif;
@media (max-width:992px){
    padding:50px 50px;
    text-align:center;
}
`
const A = Styled.a`
color:hsl(240, 2%, 79%);
text-decoration:none;
&:hover{
    color:white;
}
`
const Title = Styled.p`
 margin-bottom:60px;
`

export {FooterStyle,A,Title};