import React from 'react'
import {Data} from "../components/Dropdown"
import {A} from "../Styled/Styled-Footer"

const FooterInfo = () => {
    return (
        <>
           {Data.map(item => (
               <div className="col-lg-3 mb-4" key={item.id}>
                   <p className="text-white mb-4">{item.title}</p>
                   <ul className="list-group mt-4 ">
                        {item.dropDownItem.map(item =>(
                            <li><A href="#" className="">{item} </A></li>
                        ))}
                   </ul>
               </div>
           ))}
        </>
    )
}

export default FooterInfo
