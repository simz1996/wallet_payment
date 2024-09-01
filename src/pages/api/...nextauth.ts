// src/pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // Replace with your user authentication logic
        const user = { id: '1', email: credentials.email }; // Example
        if (user) {
          return user;
        } else {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',  // Custom sign-in page
  },
});
