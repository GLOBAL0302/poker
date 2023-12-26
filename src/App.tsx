import './App.css';
import Card from "./component/card";
import {useState} from "react";
import cardDeck from "./lib/cardDeck";

function App() {

    const [cards, setCards] = useState(
        [
            {suit: "diams", rank:"6"},
            {suit: "hearts", rank:"2"},
            {suit: "spades", rank:"2"},
            {suit: "hearts", rank:"4"},
            {suit: "hearts", rank:"6"}]
    )

    const changeCard = ()=>{
        let cardList = new cardDeck([]);
        console.log(cardList.getCards(5))
        console.log(cards)
        setCards(cardList.getCards(5))
    }

    if (cards.length < 1){
        return (
            <>
                <div><button onClick={changeCard}>Раздать карты</button></div>
            </>
        )
    }
    else{
        return (
            <div className="gamer">
                <Card rank={cards[0].rank} suit={cards[0].suit}/>
                <Card rank={cards[1].rank} suit={cards[1].suit}/>
                <Card rank={cards[2].rank} suit={cards[2].suit}/>
                <Card rank={cards[3].rank} suit={cards[3].suit}/>
                <Card rank={cards[4].rank} suit={cards[4].suit}/>
                <div className="appBtn">
                    <button onClick={changeCard}>Раздать карты</button>
                </div>
            </div>
        )
    }


}

export default App
