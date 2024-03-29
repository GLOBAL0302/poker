
interface Props{
    suit: string,
    rank: string,
}


const Card:React.FC<Props> = (props)=>{
    let cardSymbol:string = "";
    switch (props.suit){
        case "hearts":
            cardSymbol = "♥";
            break;
        case "diams":
            cardSymbol = "♦";
            break;
        case "clubs":
            cardSymbol = "♣";
            break;
        case "spades":
            cardSymbol = "♠";
            break;

    }

    return(
        <div className= "playingCards faceImages">
         <span className={"card " + props.suit  + " rank-"+ props.rank}>
          <span className="rank">{props.rank}</span>
          <span className="suit">{cardSymbol}</span>
        </span>
        </div>
    )
}

export default  Card;