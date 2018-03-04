function solve() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\n`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let baseStr = super.toString();
            let result = baseStr+`Rating: ${this.likes - this.dislikes}`;
            if (this.comments.length > 0)
                result += '\nComments:\n' + this.comments.map(c => ` * ${c}`).join('\n');
            return result;
        }

    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let baseStr = super.toString();
            return baseStr + `Views: ${this.views}`;
        }
    }

    return { Post, SocialMediaPost, BlogPost};
}

let result = new solve();
let post = new result.Post("Post", "Content");

console.log(post.toString());

// Post: Post
// Content: Content

let scm = new result.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

 // Post: TestTitle
 // Content: TestContent
 // Rating: -5
 // Comments:
 //  * Good post
 //  * Very good post
 //  * Wow!

 let bp=new result.BlogPost('TestBlog',"TestContent", 25);
 console.log(bp.toString());
 
 bp.view().view().view();
 console.log(bp.toString());

