import React from "react";
import './Category.css'
import '../Subcategories/Subcategories'
import {Subcategories} from "../Subcategories/Subcategories";

export class Category extends React.Component {

    constructor(props) {
        super(props);

        this.state = {isActive: false}
    }


    wrapper = React.createRef();

    componentWillUnmount() {
        this.removeOutsideClickListener();
    }

    addOutsideClickListener() {
        document.addEventListener('click', this.handleDocumentClick);
    }

    removeOutsideClickListener() {
        document.removeEventListener('click', this.handleDocumentClick);
    }

    onShow() {
        this.addOutsideClickListener();
    }

    onHide() {
        this.removeOutsideClickListener();
    }

    onClickOutside() {
        this.setState({ isActive: false });
    }

    handleDocumentClick = e => {
        if (this.wrapper.current && !this.wrapper.current.contains(e.target)) {
            this.onClickOutside();
        }
    };

    toggleMenu = () => {
        this.setState(
            prevState => ({ isActive: !prevState.isActive }),
            () => {
                this.state.isActive ? this.onShow() : this.onHide();
            },
        );
    };

render() {
    const isActive = this.state.isActive
    return(
        <div ref={this.wrapper}>
            <div className="catValue" onClick={this.toggleMenu}>{this.props.catValue}</div>
            {isActive && (
                    <Subcategories subValue={this.props.subValue}/>
            )}
        </div>)
}
}
