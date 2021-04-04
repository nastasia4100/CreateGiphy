import React from "react";
import './GifsContent.css'

export class GifsContent extends React.Component {
    render() {
        return (
            <>
                <ul className='container'>
                    {this.props.data.map((gif) => (
                        <img width={200} height={150} key={gif.id} src={gif.images.original.url} className='gifs_design' alt="description"></img>)
                    )}
                </ul>
                </>
        )
    }
}