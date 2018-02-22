let myModule = (function () {
    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    class Card {

        constructor(inFace, inSuit) {
            let face;
            let suit;

            this.getFace = function () {
                return face;
            };
            this.setFace = function (value) {
                if (!Card.validFaces.includes(value)) {
                    throw new Error('Invalid card face:' + value);
                }
                face = value;
            }

            this.getSuit = function () {
                return suit;
            };
            this.setSuit = function (value) {
                if (!Object.keys(Suits).map(k => Suits[k]).includes(value)) {
                    throw new Error('Invalid card suit:' + suit);
                }
                suit = value;
            };

            this.setFace(inFace);
            this.setSuit(inSuit);
        }


        toString() {
            return this.face + this.suit;
        }


    }

    let validFaces=["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    validFaces.push=undefined;
    
    Object.defineProperty(Card, 'validFaces', {
       // get:()=>["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"],
       value:validFaces,
        writable:false,
        enumerable:false,
        configurable:false
    });
    return { Suits, Card };
}());
