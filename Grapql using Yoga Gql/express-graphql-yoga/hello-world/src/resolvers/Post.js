import {users, comments, posts} from '../db';

const Post = {
  author(parent, args, ctx, info) {
    return users.find((i) => i.id === parent.author);
  },
  comments(parent, args, ctx, info) {
    return comments.comments.filter((comment) => {
        return comment.post === parent.id
    })
}
}

export default Post;