import React, {useEffect} from "react"

export default ({idx}) => {

    const htmlCode = ""
    
    console.log({idx});
    
    return (
        <div dangerouslySetInnerHTML={{__html:htmlCode}}></div>

    )
}