import User from "../../../entities/User";
import { Resolvers } from "../../../types/resolvers";
import createJWT from "../../../utils/createJWT";
import {
  EmailSignInMutationArgs,
  EmailSignInResponse
} from "./../../../types/graph.d";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (
      _,
      args: EmailSignInMutationArgs
    ): Promise<EmailSignInResponse> => {
      const { email, password } = args;

      try {
        const user = await User.findOne({ email });

        // if the email isn't found from User
        if (!user) {
          return {
            ok: false,
            error: "there is no account with that email, please sign up first",
            token: null
          };
        }

        const passwordCheck = await user.comparePassword(password);

        if (passwordCheck) {
          const token = await createJWT(user.id);
          return {
            ok: true,
            error: null,
            token
          };
        } else {
          return {
            ok: true,
            error: "wrong password",
            token: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;
