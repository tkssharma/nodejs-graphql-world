import User from "../../../entities/User";
import {
  EmailSignUpMutationArgs,
  EmailSignUpResponse
} from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignUp: async (
      _,
      args: EmailSignUpMutationArgs
    ): Promise<EmailSignUpResponse> => {
      try {
        const { email } = args;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return {
            ok: false,
            error: "This email has signed up already, please sign in",
            user: null
          };
        } else {
          const user = new User();
          user.email = email;
          await user.setPassword(password);
          user.firstName = firstName;
          user.lastName = lastName;
          await user.save();

          if (user) {
            return {
              ok: true,
              error: null,
              user
            };
          } else {
            return {
              ok: false,
              error: "Registering Failed",
              user: null
            };
          }
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          user: null
        };
      }
    }
  }
};

export default resolvers;
