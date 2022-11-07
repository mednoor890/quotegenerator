
import './App.css';
import React, {useState,useEffect} from 'react';

import { FaQuoteLeft, FaQuoteRight,FaTwitterSquare,FaGithub} from "react-icons/fa";

const App=()=>{
           {
            const [quote, setQuote] = useState('');
            const [author,setAuthor] = useState('');
 
            useEffect(() =>{
              getQuote()
            }, [])


          const getQuote =()=>{
            let url="https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";
          fetch(url)
          .then(res=>res.json())
          .then(data=>{
            let dataQuotes =data.quotes
            let randomNumber =Math.floor(Math.random()*dataQuotes.length);
            let randomQuote=dataQuotes[randomNumber];
            setQuote(randomQuote.quote)
            setAuthor(randomQuote.author)
          }
          )
        }
            
    const handleClick=()=>{
      getQuote();
    }
const shareTweet = ()=>
{
  //var url = "twitter.com";
  let text = `"${quote}" -${author} #quotes`;
  window.open(
    "http://twitter.com/intent/tweet?url=" +
     
      
      encodeURIComponent(text),
    "_blank",
   
  );
}
  
  
  
  return (
    <>
  
     
      <div className="App">
      
                 <div id="quote-box">
       
                <h1 id="text">
              <blockquote><FaQuoteLeft style={{color:'white'}}/> {quote} <FaQuoteRight style={{color:'white'}}/></blockquote>  
                
                <br/>
                
                
              </h1>
              <h4 id="author">{author}</h4>
              <button onClick={handleClick} id="new-quote">New Quote</button>
              <a className="twitter-hashtag-button" onClick={shareTweet} target="_top" href="twitter.com/intent/tweet"id="tweet-quote"><FaTwitterSquare color="black" size="2.5em"/></a>
      </div>
    <footer><a className="me" href="https://github.com/mednoor890"><FaGithub style={{position:"relative",top:"5px"}}color="white" size="1.3em"/>By Med Noor</a></footer>  
      </div>
   
   
    </>);
  }        
}
export default App ;
