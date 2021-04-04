import React from 'react'
import './SearchInput.css'
import {
    Link
} from "react-router-dom";

export class SearchInput extends React.Component {
    render() {
        const inputControl = this.props.searchString;
        let button;
        if (inputControl!= null && inputControl !== "") {
            button = <button className='button' onClick = {this.props.fetchSearch} value={this.props.data}>Search</button>
        } if (inputControl!= null && inputControl === "") {
            button = <button className='button' onClick = {this.props.fetchGifs} value={this.props.data}>Random</button>
        }

        return (
            <div className='search_bar'>
                <input onChange={this.props.handleInputChange} value={this.props.searchString} className='search' />
                <Link to="/">{button}</Link>
            </div>
        )
    }
}

