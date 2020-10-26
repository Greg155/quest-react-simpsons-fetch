import React from 'react';

 function DisplayQuote({ Quote }) {
    return (
        <div>
            <div>{Quote.quote}</div>
            <div>{Quote.character}</div>
            <img src= {Quote.image}/>
            <div>{Quote.characterDirection}</div>
        </div> 
    )
}




export default DisplayQuote;