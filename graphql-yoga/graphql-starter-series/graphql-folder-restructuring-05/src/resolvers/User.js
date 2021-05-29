import {users, comments, posts} from '../db';

const User = {
  posts(parent, args, ctx, info) {
      return users.posts.filter((post) => {
          return post.author === parent.id
      })
  },
  comments(parent, args, ctx, info) {
      return users.comments.filter((comment) => {
          return comment.author === parent.id
      })
  }
}

export default User;