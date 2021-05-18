import React, { Component } from 'react';
import './SearchBar.css';

export class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value: event.target.value});
    }

    handleSubmit(event){
        alert("This was what was written there: " + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <>
                <div className='input-wrapper'>
                    <form onSubmit={this.handleSubmit}>
                        <input type='text' value={this.state.value} onChange={this.handleChange} placeholder='Type book name here' className='book-name-input'></input>
                        <i class="fas fa-search search-icon"></i>
                        {/* <input type='submit' value='Search' className='submit-button'></input> */}
                    </form>
                </div>
            </>
        )
    }
}

export default SearchBar;
