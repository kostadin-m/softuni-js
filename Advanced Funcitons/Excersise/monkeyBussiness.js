function solution(command) {
    let commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let totalVotes = this.upvotes + this.downvotes;
            let balance = this.upvotes - this.downvotes;
            let changedUpvotes = this.upvotes;
            let changedDownVotes = this.downvotes;
            let rating = "";

            if (totalVotes > 50) {
                let obfuscated = Math.ceil(0.25 * Math.max(this.upvotes, this.downvotes));
                changedUpvotes += obfuscated;
                changedDownVotes += obfuscated;
            }
            if (totalVotes < 10) {
                rating = "new";
            } else if (this.upvotes > totalVotes * 0.66) {
                rating = "hot";
            } else if (totalVotes > 100 && balance >= 0) {
                rating = "controversial";
            } else if (balance < 0) {
                rating = "unpopular";
            } else {
                rating = "new";
            }
            return [changedUpvotes, changedDownVotes, balance, rating];
        },
    };
    return commands[command]();
}
