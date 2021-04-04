import React from 'react'
import Dropdownn from './Dropdown'
import {Button, ButtonNav, GroupBtn, Head, Publising, Title,NavbarCollapses,ButtonNavToggle} from "../Styled/Styled-Header"
import {Navbar,Nav} from 'react-bootstrap'

const Header = () => {
    const [open , setOpen] = React.useState(false)
    return (
        <Head className=" text-white" >
           <div className="container">
           <Navbar expand="lg"  variant="dark" className="d-flex align-items-center">
                <Navbar.Brand href="#home" className="text-light"><h1 className="m-0">Blogr</h1></Navbar.Brand>
                <ButtonNavToggle onClick={()=> setOpen(!open)} aria-controls="basic-navbar-nav navbar-light" validate={open} >
                    <span className="top"></span>
                    <span className="center"></span>
                    <span className="bottom"></span>
                </ButtonNavToggle>
                <NavbarCollapses id="basic-navbar-nav" className="text-white justify-content-between">
                    <Nav className="mr-auto">
                        <Dropdownn/>
                    </Nav>
                    <GroupBtn className="">
                    <ButtonNav className="mx-2 my-2">Log out</ButtonNav>
                    <ButtonNav  className=" mx-2 my-2">Sign In</ButtonNav>
                </GroupBtn>
                </NavbarCollapses>
            </Navbar>
           </div>
            <Publising className="container d-flex flex-column align-items-center">
                <Title className="display-4 text-center mb-2">A modern publishing platform</Title>
                <p className="my-4">Grow your audience and build your online brand</p>
                <div className="mt-2">
                    <Button className="btn btn-outline-light mx-2">Start for Free</Button>
                    <Button className="btn btn-outline-light mx-2">Learn More</Button>
                </div>
            </Publising >
        </Head>
    )
}

export default Header
