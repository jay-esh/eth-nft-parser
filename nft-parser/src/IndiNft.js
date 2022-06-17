import React from "react"
import ReactDOM from "react-dom"

export default function IndiNft({data}) {
    console.log(data.meta.content[0].url)
    return (
        <div className="individualNfts" >
            <img src={data.meta.content[0].url} />
            <div className="nftname">
                {data.meta.name}
            </div>
            
            {/* <div className="collectionname">
                {data.collection}
            </div> */}

            <div className="descriptionnft">
                {data.meta.description}
            </div>
            
        </div>
    )
} 