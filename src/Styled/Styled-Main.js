import Styled from "styled-components";
import ImgBody from "../images/bg-pattern-circles.svg"

const colorTitle = "hsl(208, 49%, 24%)"

const ImageTwo = Styled.img`
position:relative;
left:-160px;
height:700px;
width:900px;
  @media (max-width:992px){
    display:none;
  }
`;
const ImageMobiletwo = Styled.img`
  display:none;  
  @media (max-width:992px){
    display:block;
  }
`
const GroupImg = Styled.div`
  padding:0 50px;
  display:flex;
  justify-content:center;
  position:relative;
`
const GroupUno = Styled.div`
  h3{
  color:${colorTitle};
  font-weight:600;
  }
  p{
    color:hsl(207, 13%, 34%);
  }
  padding:0 50px;
  text-align:center;
 @media (min-width:992px){
    padding:0 100px;
    transform:translateX(70px);
    text-align:start;
 }
`
const TitleFuture = Styled.h2`
  color:${colorTitle};
  margin:80px 0px;
    @media (min-width:992px){
    margin:80px 0 0 0;
  }
`
const GroupTwo = Styled.div`
  background-image:url("${ImgBody}"), linear-gradient(to right, hsl(237, 17%, 21%), hsl(237, 23%, 32%));
  background-repeat:no-repeat;
  background-position:-40% 80%;
  border-bottom-left-radius:120px;
  border-top-right-radius:120px;
  text-align:start;
  @media (max-width:992px){
    text-align:center;
    background-position:center  top;
    background-size:cover;
    margin-top:150px;
  }
  h3{
  color:hsl(0, 0%, 100%);
  margin-bottom:20px;
  font-weight:600;
  }
  p{
  color:hsl(240, 2%, 79%);
  }
`
const GroupThree = Styled.div`
  h3{
    color:${colorTitle};
    font-weight:600;
  }
  p{
    color:hsl(207, 13%, 34%);
  }
  padding:0 50px;
  text-align:center;
 @media (min-width:1160px){
    text-align:start;
    width:60vh
 }
`
const Group = Styled.div`
 margin:5rem 0;
`;
const ImageOne = Styled.img`
transform:translateX(20%);
display:block;
  @media(max-width:992px){
    display:none;
  }
`;
const ImageMobileOne = Styled.img`
display:none;
 @media(max-width:992px){
   display:block;
   
 }
`;
const Phones = Styled.div`
@media (max-width:992px){
  padding:90px 20px;
  display:flex;
  justify-content:center;
}
text-align:center;
`
const ImagePhone = Styled.img`
 object-fit:cover;
 height:350px;
 position:absolute;
 width:auto;
 top:-160px;
 @media(min-width:992px){
  transform:scale(1.5);
  position:relative;
  height:380px;
  top:0;
 }
`
const Container = Styled.div`
padding:120px 170px 120px 20px;
@media (max-width:992px){
  padding:10px 50px 50px 50px;
}
`

export {ImageTwo,ImageMobiletwo,GroupUno,TitleFuture,GroupTwo,GroupThree,Group,GroupImg,ImageOne,ImageMobileOne,ImagePhone,Container,Phones}