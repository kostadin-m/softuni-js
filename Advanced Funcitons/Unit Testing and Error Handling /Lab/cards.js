function printDeckOfCards(cards) {
    function createCard(card) {
        let face = card.length > 2 ? card.slice(0, 2) : card.slice(0, 1);
        let suit = card[card.length - 1];
        if (!validFaces.includes(face) || !Object.keys(validSuits).includes(suit)) {
            throw new Error(`Invalid card: ${card}`);
        }
        return {
            face: validSuits[suit],
            toString() {
                return `${face}${validSuits[suit]}`;
            },
        };
    }
    const validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const validSuits = { S: "\u2660", H: "\u2665", D: "\u2666", C: "\u2663" };
    let invalid = false;
    let validCards = [];
    cards.forEach((x) => {
        try {
            let cardObj = createCard(x);
            validCards.push(cardObj);
        } catch (err) {
            invalid = true;
            console.log(err.message);
        }
    });
    if (!invalid) {
        validCards.forEach((x) => console.log(x.toString()));
    }
}
