export default {
  Query: {
    comment: async (parent, { _id }, {models }, info) => {
      return await models.Comment.find({ _id });
    },
    comments: async (parent, args, {models}, info) => {
      const res = await models.Comment.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        text: u.text,
        author: u.author,
        post: u.post
      }));
    }
  },
  Mutation: {
    createComment: async (parent, { comment }, {models}, info) => {
      const newComment =  new models.Comment({
        text: comment.text,
        author: comment.author,
        post: comment.post
      });
      return await newComment.save();
    },
    updateComment: async (parent, { _id, comment }, { models }, info) => {
      return await models.Comment.findByIdAndUpdate(
        _id,
        { $set: { ...comment } },
        { new: true }
      ).exec()
    },
    deleteComment: async (parent, { _id }, { models }, info) => {
      return await models.Comment.findByIdAndDelete( _id).exec()
    }
  },
  Subscription: {
    comment: {
      subscribe: (parent, args, { pubsub }) => {
        //return pubsub.asyncIterator(channel)
      }
    }
  },
  Comment: {
    author: async ({ author }, args, { models }, info) => {
      return await models.User.findById({ _id: author });
    },
    post: async ({ post }, args, { models }, info) => {
      return await models.Post.findById({ _id: post });
    }
  }
};
