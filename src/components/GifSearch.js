import React from 'react'


class GifSearch extends React.Component {
    state = { search: "" } 

    handleSubmit = event => {
        event.preventDefault()
        this.props.fetchGif(this.state.search)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="test" value={this.state.search} onChange={event => this.setState({search: event.target.value})}/>
                </form>
                

            </div>
        )
    }
}

export default GifSearch