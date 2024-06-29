import "./App.css"
import { useState } from "react";
function Cross(){
  return(
    <div>
      <h1 style={{fontWeight:"600",font:"small-caption"}}>X</h1>
    </div>
);
}
function Circle(){
  return(
    <div>
      <h1 style={{fontWeight:"600",font:"small-caption"}}>O</h1>
    </div>
);
}
function PlayArea(props){

  const [status ,setStatus]=useState([0,0,0,0,0,0,0,0,0]);
  const [Player,setPlayer]=useState()

 let l1=[0,1,2,3,4,5,6,7,8];
 function handleClick(){
  props.togglePlayer();
 }
  return(
    <div className="playground">
      {}
      {
        l1.map((l,i)=>(
          <Grid key={i} onClick={handleClick} dhruvansh={status[l]} />
        ))
      }
    </div>
  );
}
function Grid(props){
  return(
    <div className="block">
      {props.dhruvansh?(props.dhruvansh == 1?<Cross />:<Circle />):("") }
    </div>
  );
}

export default function App(){
  const [Player, setPlayer] = useState(false);
  function togglePlayer(){
    setPlayer(!Player)
  }
  return(
    <>
    <h1 style={{textAlign:"center"}}>
    {Player ? "X":"O"}
    </h1>
    <div className="Jagi">
    <PlayArea togglePlayer={()=>togglePlayer()} />
    </div>
    </>
  );
}