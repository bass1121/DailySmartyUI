import React, { Component } from 'react';


export default class Logo extends Component {
    render() {
        const size = {
            height: this.props.size ? this.props.size : 105,
            width: this.props.size ? this.props.size : 125
        }
        return (
            <div className="logo-main">
                <img style={size} src="../../assets/DailySmartyOwl.png" alt="owl logo" />
            </div>
        )
    }
}