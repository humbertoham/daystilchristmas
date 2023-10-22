"use client"
import { useState, useEffect } from "react";




export default function Home() {
  const [random, setRandom] = useState('')
  const [remainingDays, setRemainingDays] = useState(0)
  const messages = ['te quiero muchoooo <333', 'te extraño :3', 'q bonita eres :D', 'me gustas muchooo!!!', 'ya casi es navidaaaad!!', 'preciosaaaa', 'estoy pensando en ti pero pq literalmente siempre pienso en ti lol...'
  ,'muAaa:*', 'mandame un beso!!!', 'q haces?', 'si tienes sugerencias o algo que quieras q le agregue dime! :3', 'te quiero mucho mucho mucho', 'CHULAAAA :*', 'PRECIOSAAAA!!!'


]
  const [tay1, setTay1] = useState('')
  const [tay2, setTay2] = useState('')
  function enter () {

     
  setTay1('./images/tay' + String(Math.ceil(Math.random() * 8)) + '.png')    
  setTay2('./images/tay' + String(Math.ceil(Math.random() * 8)) + '.png')    

    setRandom(messages[Math.floor(Math.random() * messages.length)])

let today = new Date();
let christmasYear = today.getFullYear();

if (today.getMonth() == 11 && today.getDate() > 25) {
  christmasYear = christmasYear + 1;
}

if (today.getMonth() == 11 && today.getDate() == 25) {
   setRandom('FELIZ NAVIDAD TE DESEAMOS TAYLOR SWIFT Y YO!!!, TE QUEREMOS MUCHOS<33333')
}

let christmasDate = new Date(christmasYear, 11, 25);
let dayMilliseconds = 1000 * 60 * 60 * 24;
setRemainingDays(Math.ceil(
  (christmasDate.getTime() - today.getTime()) /
   (dayMilliseconds))
);




  }

  useEffect(() => {


    enter()


  }, [remainingDays])


  return (
    <div className="main">
    <div className="center">
      <h1 className="title">days til christmas: </h1>
      <p className="days">
      {remainingDays}
      </p>
      <h1 className="title">{random}</h1>
      <button className="btn" onClick={enter}>press me press me</button>

      </div>
        <img src={tay1} className="tay1"/>
        <img src={tay2} className="tay2"/>
      </div>
      
  )
}
