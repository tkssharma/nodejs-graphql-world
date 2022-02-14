const Mutation = {
  createUser(parent, args, { DB }, info) {
    const { email } = args.data;
    const emailTaken = DB.users.some(user => user.email === email);
    if(emailTaken) {
      throw new Error('Email already taken...')
    }
  },
  updateUser(parent, args, { DB }, info) {
    const { email } = args.data;
    const emailTaken = DB.users.some(user => user.email === email);
    if(emailTaken) {
      throw new Error('Email already taken...')
    }
  }
}

export default Mutation;