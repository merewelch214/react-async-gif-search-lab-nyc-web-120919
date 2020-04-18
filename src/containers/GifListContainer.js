import React from 'react'
import GifList from './components/GifList'

export default class GifListContainer extends React.Component {
    state = {
        gifs: []
    }

    componentDidMount() {

    }

    submit = (searchTerm) => {
       fetch(`https://api.giphy.com/v1/gifs/search?q=Y${searchTerm}&api_key=csuF2lGqMHYBr8V1toCE5rKWBYeovt5W&rating=g`)
       .then(resp=>resp.json())
       .then(data=> console.log(data))
    }
    
    render() {
        return (
            <div>
                < GifSearch submit={this.submit}/>
                <ul>
                    {this.state.gifs.map(gif => < GifList {...gif} key={gif.id} />)} 
                </ul>
            </div>
        )
    }
};