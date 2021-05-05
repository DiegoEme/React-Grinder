import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class  App extends React.Component {
    onSearchSubmit(term){
        axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID gCIXIBLBwsfSypwzUNneI1ZH-SftGBseatx6M_IFVck'
            }
        })
    }

    render() {
        return(

            <div className="ui container">
                <SearchBar busqueda={this.onSearchSubmit} />
            </div>
        )
    }
}

export default App
