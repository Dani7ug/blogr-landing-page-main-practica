import React from 'react'
import {GroupUno, TitleFuture, GroupTwo,GroupThree,ImageTwo,ImageMobiletwo,Group,GroupImg, ImageOne,ImageMobileOne, ImagePhone,Container,Phones} from "../Styled/Styled-Main"
import Image1 from "../images/illustration-editor-desktop.svg"
import ImageMobile1 from "../images/illustration-editor-mobile.svg"
import Image2 from "../images/illustration-laptop-desktop.svg"
import ImageMobile2 from "../images/illustration-laptop-mobile.svg"
import ImagePhones from "../images/illustration-phones.svg"
import Texts from './Texts'
const Main = () => {

    return (
            <main className=" mt-4 ">
            <TitleFuture className="text-center">Designed for the future</TitleFuture>
            <div className="row mb-4 d-flex flex-column-reverse flex-lg-row">
                <GroupUno className="col-lg-6 d-flex justify-content-center flex-column">
                    <Texts 
                    titleOne ="introducing an extensible editor"
                    textOne="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
                    titleTwo = "Robust content managenment"
                    textTwo = "Flexibe content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality. you're in full control."
                    />
                </GroupUno>
                <GroupImg className="col-lg-6 text-center">
                <ImageOne src={Image1} className=""/>
                <ImageMobileOne src={ImageMobile1} className=""/>
                </GroupImg>
            </div>
            <GroupTwo className="row">
                <Phones className="col-lg-6 position-relative">
                    <ImagePhone src={ImagePhones} alt="" className="" />
                </Phones>
                <Container className="col-lg-6 d-flex justify-content-center flex-column ">
                    <h3>State of the Art Infrastructure</h3>
                    <p>With reliability and speed in mind, worldwide data centers provide the backbone for ultra-fast connectivity. This ensures your site will load instantly, no matter where your readers are, keeping your site competitive.</p>
                </Container>
            </GroupTwo>

            <Group className="row">
            <GroupImg className="col-lg-6 mb-4">
                <ImageTwo src={Image2}/>
                <ImageMobiletwo src={ImageMobile2}/>
            </GroupImg>
            <GroupThree className="col-lg-6 d-flex justify-content-center flex-column">
                    <Texts 
                    titleOne ="Free, open, simple"
                    textOne="  Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
                    titleTwo = "Powerful tooling"
                    textTwo = "Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
                    />
            </GroupThree>
            </Group>   
        </main>

    )
}

export default Main
