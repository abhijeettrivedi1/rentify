// // app/api/auth/[...nextauth]/route.ts
// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
// import clientPromise from "@/lib/mongodb";
// import { connectDB } from "@/lib/db";
// import User from "@/models/user";

// // Configure NextAuth
// const handler = NextAuth({
//   adapter: MongoDBAdapter(clientPromise),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
//     }),
//   ],
//   callbacks: {
//     async session({ session }) {
//       // Attach user role to session object
//       await connectDB();
//       const dbUser = await User.findOne({ email: session.user?.email });
//       if (dbUser) {
//         session.user.role = dbUser.role;
//       }
//       return session;
//     },
//     async signIn({ user }) {
//       await connectDB();

//       // First-time user creation hook
//       const existingUser = await User.findOne({ email: user.email });
//       if (!existingUser) {
//         await User.create({
//           name: user.name,
//           email: user.email,
//           image: user.image,
//           role: 'renter', // Default role
//         });
//       }
//       return true;
//     },
//   },
//   secret: process.env.NEXTAUTH_SECRET,
// });

// export { handler as GET, handler as POST };
