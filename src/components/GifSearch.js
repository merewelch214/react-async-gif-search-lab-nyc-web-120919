import React from 'react'

export default class GifSearch extends React.Component {
    state = {
        searchTerm: ''
    }

    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <form onSubmit={() => this.props.submit(this.state.searchTerm)}>
                <input type='text' value={this.state.searchTearm} name='searchTerm' onChange={this.handleChange} />
                <input type='submit' />
            </form>
        )
    }

}
