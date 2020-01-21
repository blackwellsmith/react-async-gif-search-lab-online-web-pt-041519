import React from 'react'

import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends React.Component{
    state = { gifs: []}

    componentDidMount() {
        fetch()
    }
    render() {
        return (
            <GifSearch />
            <GifList gifs={this.state.gifs} />
        )
    }
}
export default GifListContainer