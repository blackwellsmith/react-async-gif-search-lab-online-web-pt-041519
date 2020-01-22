import React from 'react'

import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component{
    state = { gifs: []}

    componentDidMount() {
        this.fetchGif()
    }

    fetchGif = (search = "apples") => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=S9iOkaPocnAQHKbhg8uYbRXLsQGyGkEw&rating=g&limit=3`)
            .then(res => res.json())
            .then(({data}) => {
                this.setState({ gifs: data.map( gif => ({ url: gif.images.original.url }) ) })
              })
     }
    render() {
        return (
            <div>
              <GifSearch fetchGif={this.fetchGif}/>
              <GifList gifs={this.state.gifs} />
            </div>    
        )
    }
}
export default GifListContainer