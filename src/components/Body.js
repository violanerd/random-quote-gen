import React, { useEffect, useState, useRef } from 'react';
// on first render, get first quote...

function Body(){
    let quoteData = useRef();
    let i = useRef(0);
    const [quoteCurrent, setQuoteCurrent] = useState(null);
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
   
    useEffect(() => {
        fetch(url)
        .then(function(response) {
            // Convert to JSON object
            return response.json();
        })
        .then(function(data) {
            quoteData.current = data.quotes;
            setQuoteCurrent(quoteData.current[0])
            console.log(quoteData.current[0])
        })
        
       
    }, []);

    function random() {
        return Math.floor(Math.random() * quoteData.current.length) 
    }

    function getNewActivity () { 

      
        i.current = random();
        setQuoteCurrent(quoteData.current[i.current]);
     
        i.current = random();
    }

    return(
        <div className="card" id="quote-box">
            <div className="card-header text-center">
                <button type="button" id="new-quote" onClick={getNewActivity} className="btn btn-info btn-lg w-100">New Quote</button>
            </div>
            {quoteCurrent && (
                 <>
                  <div className="card-body">
            <p id="text" className="card-text bg-secondary text-light text-center h-50">{quoteCurrent.quote}</p>
            <p id="author" className="card-text bg-secondary text-light text-center h-50">{quoteCurrent.author}</p>
            </div>
                 
                 </>
            )}
      </div>       
    )
}
export default Body;