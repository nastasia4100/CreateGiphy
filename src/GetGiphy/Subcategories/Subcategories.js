import React from "react";
import './Subcategories.css'

export class Subcategories extends React.Component {

    render() {

        return (
            <div className='subCat'>
                {this.props.subValue.map(sub => (
                    <div key={sub} className='subValue'>{sub.name}</div>
                ))}
            </div>
                )}
    }
