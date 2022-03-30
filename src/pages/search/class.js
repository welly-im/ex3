//create react class component for search giphy witout useEffect
import React, { Component } from 'react';

class ClassSearch extends Component{
    state = {
        text: '',
        gifts: []
    }
    

    getGifts(){
        fetch(
            `https://api.giphy.com/v1/stickers/search?api_key=Ts1gtv0VAvnEBEcTVh4x4hz1QPddwTq2&q=${this.state.text}&limit=12&offset=0&rating=G&lang=en`
        ).then((response) => response.json())
        .then((response) => this.setState({ gifts: response.data }))
        .catch((error) => console.log(error));
    }

    handleSubmit(e){
        e.preventDefault();
        this.getGifts();
    }

    handleChange(e){
        this.setState({ text: e.target.value });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" onChange={this.handleChange.bind(this)} value={this.state.text}/>
                    <button type="submit">Search</button>
                </form>
                <div>
                    {this.state.gifts.map((gift) => {
                        return(
                            <div key={gift.id}>
                                <img src={gift.images.downsized_medium.url} alt={gift.title}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        )
    }
    

}

export {ClassSearch};