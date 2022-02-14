import jwt from "jsonwebtoken";
import User from "../entities/User";

const decodeJWT = async (token: string): Promise<User | undefined> => {
  try {
    const decodedToken: any = jwt.verify(token, process.env.JWT_SECRET || "");
    const { id } = decodedToken;
    const user = await User.findOne({ id });
    if (user) {
      return user;
    } else {
      return undefined;
    }
  } catch (error) {
    return undefined;
  }
};

export default decodeJWT;
