import {users, comments, posts} from '../db';

const Query = {
  users(parent, args, { DB },  info) {
    if (!args.query) {
      return users;
    }
    const searchUser = args.query.toLowerCase();
    return DB.users.filter(user => {
      return user.name.toLowerCase().includes(searchUser);
    })
  },
  posts(parent, args, { DB },  info) {
    if (!args.query) {
      return posts;
    }
    const searchPost = args.query.toLowerCase();
    return DB.posts.filter(post => {
      return post.title.toLowerCase().includes(searchPost);
    })
  },
  comments(parent, args, ctx, info) {
    return comments;
  }
}

export default Query;