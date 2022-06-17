import React from "react"
import ReactDOM from "react-dom"
import IndiNft from "./IndiNft"

function NftCont({data}) {
    console.log (data[0])
    // data.map(data => console.log(data.meta))
    // console.log (typeof(data.items))
    return (
        <div className="NftContainer">   
            {data.map((data, index) =>{
              return <IndiNft data={data} key={index}/>  
            })}
        </div> 
    )

}

export default NftCont; 