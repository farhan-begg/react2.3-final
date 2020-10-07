import React, { Component } from 'react'
import Title from './Title'

export default class Home extends Component {
    render() {
        return (
            <header>
                <h1>{this.props.title}
                    <Title name={"Farhan Begg"} />
                </h1>
            </header>
        )
    }
}

