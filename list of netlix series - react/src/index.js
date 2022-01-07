import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from './Cards';
import Sdata from './Sdata';


// function Card(props){
//   return(<>
// <div className='cards'>
//   <div className='card'>
//     <img src ={props.imgsrc} alt = "mypc" className='card_img'/>
//     <div className='cardinfo'>
//       <span className='card_category'>{props.title}
//       </span>
//       <h3 className='card_title'>{props.sname}</h3>
//       <a href={props.link} target="_blank">
//         <button>Watch Now</button>
//       </a>
//     </div>
//   </div>
// </div>
// </>
//   )
// }
ReactDOM.render(<>

<h1>List of top 3 Netflix Series in 2021</h1>
<Card imgsrc="https://wallpapercave.com/wp/wp4056399.jpg"
title="A Netflix Original Series"
sname="DARK"
link="https://www.netflix.com/in/title/80100172"/>,
<Card imgsrc="https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/2021/09/22/3628907031.jpg"
title="A Netflix Original Series"
sname="SQUID GAME"
link="https://www.netflix.com/in/title/81040344"/>,
<Card imgsrc="https://wallpapercave.com/wp/wp5993863.jpg"
title="A Netflix Original Series"
sname="MONEY HEIST"
link="https://www.netflix.com/in/title/80192098"/>,


</>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();






































// // https://www.netflix.com/in/title/80100172 dark
// https://www.netflix.com/in/title/81040344 squid games
// money heist