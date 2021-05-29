const Comment = {
  author(parent, args, { DB }, info) {
    return DB.users.find((i) => i.id === parent.author);
  }
}

export default Comment;