import React from "react";
import './CategoryContent.css'
import {Category} from "../Category/Category";
import {
    Link
} from "react-router-dom";

export class CategoryContent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            category: [],
            error: null,
        }
    }

    componentDidMount() {
        fetch("https://api.giphy.com/v1/gifs/categories?api_key=GyZEUJvjpxVhvqz7yWGTj6SvAtGRjE7p", {
            method: 'GET',
            cors: '*',
        }).then(res => res.json())
            .then((result) => this.setState({category: result.data}),
                (error) => this.setState({error})
            )
    }

    render() {
        return(
            <div>
            <button className='back'><Link to="/">Назад</Link></button>
            <div className='catContainer'>
            {this.state.category.map(cat => (
                <Category key={cat}
                          catValue={cat.name}
                          subValue={cat.subcategories}
                          gifValue={cat.gif}/>
                ))}
            </div>
            </div>
        )
    }
}
