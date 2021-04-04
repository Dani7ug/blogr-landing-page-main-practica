import Styled,{css} from "styled-components";
import {DropdownButton} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from "react-bootstrap/esm/NavbarToggle"
import ImageOne from "../images/bg-pattern-intro.svg"

const Head= Styled.header`
  width:100%;
  border-bottom-left-radius:100px;
  background-image: url("${ImageOne}"), linear-gradient(45deg,hsl(13, 100%, 72%),hsl(353, 100%, 62%)) ;
  background-position:30%; 
  padding:20px 0 140px 0;
  font-family: 'Overpass', sans-serif;
  @media (max-width:992px){
    background-image: url("${ImageOne}"), linear-gradient(180deg, hsl(13, 100%, 72%),hsl(353, 100%, 62%)) ;
    background-repeat:no-repeat;
    background-position:35% 35%;
    background-size:275% 275%;
    padding:40px 25px 140px 25px;
    text-align:center;
  }
}
`
const Publising = Styled.div`
  margin-top:50px;
`
const Button = Styled.button`
  border-radius:30px;
  &:hover{
      color:hsl(353, 100%, 62%);
  }
  font-weight:600;
`
const ButtonNav = Styled.button`
  color:#fff;
  background:none;
  font-weight:600;
  border-radius:30px;
  box-shadow:none;
  border:none;
  padding:10px 20px;
  width:120px;
  transition:all .3s ease;
    &:hover{
      color:hsl(353, 100%, 62%);
      background-color:#f8f9fa;
    }
    @media (max-width:990px){
      color:hsl(208, 49%, 24%);
      &:hover{
      color:#f8f9fa;
      background: linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
    }
  }
`
const Title = Styled.h1`
 font-weight:600;
`
const DropButton = Styled(DropdownButton)`
  .btn{
    color:white;
    box-shadow:none;
  }
  @media (max-width:990px){
    text-align:center;
    .btn{
    color:hsl(208, 49%, 24%);
    box-shadow:none;
  }
  .btn::after{
    color:hsl(13, 100%, 72%);
  }
  .btn:focus{
   &::after{
      ${props =>
        props.validate &&
         css`
            transform:rotate(190deg)
          `
        }
      }
    }
  } 
  .dropdown-menu{
    border:none;
    text-align:center;
    padding-top:20px;
    a{
      color:hsl(208, 49%, 24%)
    }
  }
  }
}
`
const ButtonNavToggle = Styled(NavbarToggle)`
    background:none;
    border:none;
    &:focus{
      box-shadow:none;
    }
    .top,.bottom,.center{
      transition:all .3s ease;
    }
    ${props =>
    props.validate &&
    css`
    .bottom{
      transform:translateY(-3px) rotate(-45deg);
    }
    .center{
      display:none;
    }
    .top{
      transform:translateY(3px) rotate(45deg);
    }
    `
  }
  cursor:pointer;
  width: 80px;
  height: 80px;
  span{
    border-radius:5px;
    background:white;
    display:block;
    width:60%;
    margin:5px auto;
    height: 2px;
  }
`
const NavbarCollapses = Styled(NavbarCollapse)`
  @media (max-width:990px){
    margin:20px 15px 0 15px;
    background:white;
    border-radius:5px;
    padding:20px 0;
    position:absolute;
    top:0;
    right:0;
    left:0;
    transform:translateY(60px);
    box-shadow:  0px 1px 10px  rgb(60,60,60);
  }
`
const GroupBtn = Styled.div`
@media (max-width:990px){
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top:20px;
  }
`
export {Head,Publising,Button,ButtonNav,Title,DropButton,GroupBtn,NavbarCollapses,ButtonNavToggle}