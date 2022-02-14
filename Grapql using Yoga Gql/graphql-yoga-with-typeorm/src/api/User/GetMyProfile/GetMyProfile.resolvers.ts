import User from "../../../entities/User";
import { GetMyProfileResponse } from "../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";

const resolvers: Resolvers = {
  Query: {
    GetMyProfile: privateResolver(
      async (_, __, { req }): Promise<GetMyProfileResponse> => {
        const user: User = req.user;

        try {
          const profile = await User.findOne({ id: user.id });
          if (profile) {
            return {
              ok: true,
              error: null,
              profile
            };
          } else {
            return {
              ok: false,
              error: "User Not Found",
              profile: null
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            profile: null
          };
        }
      }
    )
  }
};

export default resolvers;
