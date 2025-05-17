import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        phone: { label: "phone", type: "text" },
        code: { label: "code", type: "text" },
      },
      async authorize(credentials) {
        // مرحله اول: تایید شماره و کد
        const user = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/verify` , {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone: credentials?.phone,
              code: credentials?.code,
            }),
          }
        );
        
        
        if (!user.ok) return null;
        const userText =await user.text();
        const verifyData = JSON.parse(userText);

        // مرحله دوم: دریافت توکن از endpoint جداگانه
        const tokenRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/token` ,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              phone: credentials?.phone,
            }),
          }
        );

        if (!tokenRes.ok) return null;

        const tokenText = await tokenRes.text();
        const tokenData = JSON.parse(tokenText);

        if (tokenData?.accessToken && tokenData?.refreshToken) {
          return {
            id: verifyData?.user?.id || "user",
            accessToken: tokenData.accessToken,
            refreshToken: tokenData.refreshToken,
          };
        }
         else {
          return null;
        }
      },
    }),
  ],
 
  callbacks: {
  async jwt({ token, user }) {
    if (user) {
      token.accessToken = user.accessToken;
      token.refreshToken = user.refreshToken;
    }
    return token;
  },
  async session({ session, token }) {
    session.accessToken = token.accessToken;
    session.refreshToken = token.refreshToken;
    session.user = { id: token.sub }; // یا user id
    return session;
  },
},
 session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,

});

export { handler as GET, handler as POST };