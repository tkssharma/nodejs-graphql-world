import {users, comments, posts} from '../db';

const Comment = {
  author(parent, args, ctx, info) {
    return users.find((i) => i.id === parent.author);
  },
  post(parent, args, ctx, info) {
    return posts.find((i) => i.id === parent.post);
  }
}

export default Comment;