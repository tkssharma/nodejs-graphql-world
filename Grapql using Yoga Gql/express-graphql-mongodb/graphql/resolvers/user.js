export default  {
  Query : {
    user: async(parent, {_id}, {models}, info) => {
    return await models.User.findOne({_id}).exec();
    },
    users: async(parent, args, {models}, info) => {
      const users =  await models.User.find({})
      .populate()
      .exec();
      return  users.map(u => {
        return ({
          _id: u._id.toString(),
          name: u.name,
          email: u.email,
          age: u.age,
          posts: u.posts,
          comments: u.comments
        });
      })
    },
  },
  Mutation: {
    createUser: async(parent, {user}, {models}, info) => {
      const newUser = new models.User({
        name: user.name,
        email: user.email,
        age: user.age
      })
      return await newUser.save();
    },
    updateUser: async(parent, {_id, user}, {models}, info) => {
       return await models.User.findByIdAndUpdate(_id, {$set: {...user}}, {new: true}).exec()
    },
    deleteUser: async(parent, {_id}, {models}, info) => {
       return await models.User.findByIdAndDelete(_id).exec()
    }
  },
  User : {
    posts: async ({_id}, args, {models}, info) => {
     return await models.Post.find({author: _id})
    },
    comments: async ({_id}, args, {models}, info) => {
      return await models.Comment.find({author: _id})
     },
  }
}