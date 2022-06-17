import React from "react";
import "./App.css" 

class Display extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value:""};

        this.handleChng = this.handleChng.bind(this);
        this.submit = this.submit.bind(this);
        // this.parseMetadata = this.parseMetadata.bind(this);
    }

    handleChng(event) {
        this.setState({value: event.target.value});
    }

    async getData(nfturl) {

        const request = await fetch("https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:"+(nfturl));
        const data = await request.json();
        console.log(data);

    }

    submit(event) {
        // alert('U Entered the nft: ' + this.state.value)
        event.preventDefault();
        console.log(this.state.value)
        this.getData(this.state.value);
        
    }


    render(){
        return (
            <form onSubmit={this.submit}>
                <label>
                    Give NFT URL:
                    <input type='text' value={this.state.value} onChange={this.handleChng} />
                </label>
                <input type="submit" value="Submit"/>
                {/* <textbox>The Truth</textbox> */}
            </form>
        );
    }

}

export default Display;