import React,{Fragment,useState} from 'react'
import {Dropdown} from 'react-bootstrap'
import { DropButton } from '../Styled/Styled-Header'

const Data =[
    {
        id:1,
        title:"Product",
        dropDownItem:[
            "Overview",
            " Pricing",
            "Marketplace",
            " Features",
            "Integrations"
        ]
    },
    {
        id:2,
        title:" Company",
        dropDownItem:[
            "About",
            "Team",
            " Blog",
            "Careers"
        ]
    },
    {
        id:3,
        title:" Connect",
        dropDownItem:[
            " Contact",
            " Newsletter",
            "LinkedIn"
        ]
    }
]

const Dropdownn = () => {

    const [state,setState] = useState({valido:false})
    function rotate (){
        setState({valido:!state.valido})
    }
    
    return (
        <Fragment>
            {Data.map(item => (
                    <Dropdown className="nav-item mx-4" key={item.id} >
                    <DropButton className="nav-link" title={item.title} variant="" onClick={rotate} validate={state.valido}>
                        {item.dropDownItem.map(description => (
                            <Dropdown.Item>{description}</Dropdown.Item>
                        ))}
                    </DropButton>
                </Dropdown>
            ))}
        </Fragment>
    )
}

export default Dropdownn;
export {Data};
