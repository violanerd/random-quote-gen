import React, { useEffect, useState, useRef } from 'react';



function Body() {
    let quoteData = useRef();
    let i = useRef(0);
    const [quoteCurrent, setQuoteCurrent] = useState(null);
    const url = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

    useEffect(() => {
        fetch(url)
            .then(function (response) {
                // Convert to JSON object
                return response.json();
            })
            .then(function (data) {
                quoteData.current = data.quotes;
                setQuoteCurrent(quoteData.current[0])
                console.log(quoteData.current[0])
            })


    }, []);

    function random() {
        return Math.floor(Math.random() * quoteData.current.length)
    }

    function getNewActivity() {


        i.current = random();
        setQuoteCurrent(quoteData.current[i.current]);

        i.current = random();
    }

    return (
        <div className="card" id="quote-box">
            {quoteCurrent && (
                <>
                    <div className="card-body">
                        <p id="text" className="card-text-quote">"{quoteCurrent.quote}"</p>
                        <p id="author" className="card-text">--{quoteCurrent.author}</p>
                    </div>

                </>
            )}
            <div className="buttons">
                <a id="tweet-quote" href="https://twitter.com/intent/tweet" rel="me" target="_blank">
                    <i class="icon fab fa-twitter"></i>
                </a>
                <button type="button" id="new-quote" onClick={getNewActivity} className="btn">new quote</button>
            </div>

        </div>
    )
}
export default Body;