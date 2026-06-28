import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { users } from "@/mocks/users";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const user = users.find(
          (user) =>
            user.email === credentials?.email &&
            user.password === credentials?.password
        );

        if (!user) {
          return null;
        }

        return {
          id: user.id,
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],

  session: {
    strategy: "jwt",
  },

  pages: {
    signIn: "/login",
  },
};
