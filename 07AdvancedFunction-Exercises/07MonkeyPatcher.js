let result = function monkeyPatcher(action) {
    let obj=this;
    let func = (() => {

        function upvote() {
            obj.upvotes += 1;
        }
        function downvote() {
            obj.downvotes += 1;
        }

        function score() {
            let obfuscated = obj.upvotes + obj.downvotes > 50;
            let votesToAdd = Math.ceil(0.25 * Math.max(obj.upvotes, obj.downvotes));
            let rating;
            if (obj.upvotes / (obj.upvotes + obj.downvotes) > 0.66) {
                rating = "hot";
            } else if ((obj.upvotes > 100 || obj.downvotes > 100) && obj.upvotes >= obj.downvotes) {
                rating = "controversial";
            } else if (obj.downvotes > obj.upvotes) {
                rating = "unpopular";
            } else {
                rating = "new";
            }

            if (obj.upvotes + obj.downvotes < 10) {
                rating = "new";
            }

            if (obfuscated) {
                return [obj.upvotes + votesToAdd, obj.downvotes + votesToAdd, obj.upvotes - obj.downvotes, rating];
            } else {
                return [obj.upvotes, obj.downvotes, obj.upvotes - obj.downvotes, rating];
            }
        }

        return { upvote, downvote, score };
    })();

    return func[action]();
};

/*var forumPost = {
    id: '1',
    author: 'pesho',
    content: 'hi guys',
    upvotes: 0,
    downvotes: 0
};

result.call(forumPost, 'upvote');

var answer = result.call(forumPost, 'score');*/
