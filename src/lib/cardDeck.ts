import Card from "./gamingCard";
interface CardHolder{
    suit: string;
    rank: string;
}
class CardDeck{
    allRanks:string[] = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "q", "k", "a"];
    allSuits:string[] =["diams", "hearts", "clubs", "spades"];
    constructor(
        public allCard:CardHolder[]
    ){
       for(const i of this.allSuits){
           for(const j of this.allRanks){
               let oneCard:CardHolder = new Card(j, i);
               allCard.push(oneCard);
           }
       }
    }
    getCard(){
        let randomCardnum = Math.floor(Math.random() * this.allCard.length);
        let randomCard:CardHolder = this.allCard[randomCardnum];
        this.allCard.splice(randomCardnum, 1);
        return randomCard
    }

    getCards(num:number){
        let cardList:CardHolder[] = [];
        for(let i = 0; i < num; i++){
            cardList.push(this.getCard())
        }
        return cardList
    }

}


export default CardDeck;