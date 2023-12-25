import React from "react";

interface Props{
    suit: string,
    rank: string,
}

const Card:React.FC<Props> = (props)=>{
    return(
        <div className= "playingCards faceImages">
         <span className={"card diams " + "rank-"+ props.rank }>
          <span className="rank">{props.rank}</span>
          <span className="suit">{props.suit}</span>
        </span>
        </div>
    )
}

export default  Card;