// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
// import bcrypt from "bcryptjs";

// import { getUserByEmail } from "../../../../lib/user";

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {
//         email: { label: "Email", type: "email" },
//         password: { label: "Password", type: "password" },
//       },

//       async authorize(credentials) {
//         if (!credentials?.email || !credentials?.password) return null;

//         // find user
//         const user = await getUserByEmail(credentials.email);
//         if (!user) return null;

//         // google users may not have password
//         if (!user.password) return null;

//         // check password
//         const isValid = await bcrypt.compare(
//           credentials.password,
//           user.password
//         );
//         if (!isValid) return null;

//         // login success
//         return { id: user.id, email: user.email, name: user.name };
//       },
//     }),

//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     }),
//   ],

//   pages: {
//     signIn: "/login",
//   },

//   session: {
//     strategy: "jwt",
//   },

//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.id = user.id;
//       }
//       return token;
//     },

//     async session({ session, token }) {
//       if (session.user) {
//         session.user.id = token.id;
//       }
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };
