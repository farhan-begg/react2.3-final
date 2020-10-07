import React, { Component, useState } from 'react';
import Listitems from './Listitems';

export default class Starwars extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: '',
            num: '',
            list: []
        };
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.saveStar = this.saveStar.bind(this)
        this.showAll = this.showAll.bind(this)
    };

    onChange = event => {
        const num = event.target.value
        this.setState({ num })
    }

    onSubmit(e) {
        e.preventDefault()
    }
    showAll(e) {
        return (
            Listitems()
        )
    }

    async onClick() {
        const { num } = this.state
        const response = await fetch(`https://swapi.dev/api/people/${num}/`);
        const data = await response.json();
        if (data.detail !== "None") {
            this.setState({ data })
        }

    }

    async saveStar() {
        let { data, list } = this.state
        list.push(data)
        this.setState({ data, list })
    }

    renderData() {
        const { data } = this.state
        return (
            <div>
                <p>Name:{data.name}</p>
                <p>Height(in) {data.height}</p>
                <p>Weight(kg) {data.mass}</p>
                <p>Eye Color {data.eye_color}</p>
                <p>Hair Color {data.hair_color}</p>
                <button onClick={this.saveStar}>Save {data.name}</button>
            </div>
        )
    }

    render() {
        const { num, list, data } = this.state
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type="number" placeholder="Enter Number" value={num} onChange={this.onChange} />
                    <button type="submit" value="search" onClick={this.onClick}>Search</button>
                </form>
                <div>
                    {data !== '' ? this.renderData() : null}
                </div>
                <Listitems list={list} />
            </div>
        )
    }

}