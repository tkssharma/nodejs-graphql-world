import { transformPost } from "./merge";


export default {
  Query: {
    post: async (parent, { _id }, {models}, info) => {
      return await models.Post.findOne({ _id }).exec();
    },
    posts: async (parent, args, { models }, info) => {
      const res = await models.Post.find({})
        .populate()
        .exec();

      return res.map(u => ({
        _id: u._id.toString(),
        title: u.title,
        body: u.body,
        published: u.published,
        author: u.author,
        comments: u.comments,
        date: u.date
      }));
    }
  },
  Mutation: {
    createPost: async (parent, { post }, {models}, info) => {
      const newPost = await new models.Post({
        title: post.title,
        body: post.body,
        published: post.published,
        author: post.author,
        date: post.date
      });
      let createdPost;
      try {
        // const result = await newPost.save();
        const result = await newPost.save();
        createdPost = transformPost(result);
        const creator = await models.User.findById(post.author);
        creator.posts.push(newPost);
        await creator.save();
        return createdPost;
      } catch (error) {
        console.log(error);
        throw error;
      }
    },
    updatePost: async (parent, { _id, post }, {models}, info) => {
      return await models.Post.findByIdAndUpdate(_id, { $set: { ...post } }, { new: true }).exec()
    },
    deletePost: async (parent, { _id }, { models}, info) => {
      try {
        // searching for creator of the post and deleting it from the list
        const post = await models.Post.findById(_id);
        const creator = await models.User.findById(post.author);
        if (!creator) {
          throw new Error("user not found.");
        }
        const index = creator.posts.indexOf(_id);
        if (index > -1) {
          creator.posts.splice(index, 1);
        }
        await creator.save();
        return await models.Post.findByIdAndDelete(_id).exec()
      } catch (error) {
        console.log(error);
        throw error;
      }
    }
  },
  Subscription: {
    post: {
      subscribe: (parent, args, { pubsub }) => {
        //return pubsub.asyncIterator(channel)
      }
    }
  },
  Post: {
    author: async ({ author }, args, { models}, info) => {
      return await models.User.findById(author);
    },
    comments: async ({ author }, args, { models }, info) => {
      return await models.Comment.find({ author });
    }
  }
};
