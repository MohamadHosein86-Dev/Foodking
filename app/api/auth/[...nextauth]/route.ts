import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// تابع رفرش توکن
async function refreshAccessToken(oldToken: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: oldToken.refreshToken }),
    });

    if (!res.ok) throw new Error("Failed to refresh token");

    const data = await res.json();

    return {
      ...oldToken,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken || oldToken.refreshToken,
      accessTokenExpires: Date.now() + (data.expiresIn || 3600) * 1000,
    };
  } catch (error) {
    console.error("Refresh token error:", error);
    return { ...oldToken, error: "RefreshTokenError" };
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        code: { label: "Code", type: "text" },
      },
      async authorize(credentials) {
        const verifyRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: credentials?.phone,
            code: credentials?.code,
          }),
        });

        if (!verifyRes.ok) return null;
        const verifyData = await verifyRes.json();
        const emailFromCredentials =credentials?.email;
        const phoneFromCredentials =credentials?.phone;
        const nameFromCredentials = credentials?.name;

        
        if (verifyData?.accessToken && verifyData?.refreshToken) {
          return {
            accessToken: verifyData.accessToken,
            refreshToken: verifyData.refreshToken,
            accessTokenExpires: Date.now() + (verifyData.expiresIn || 3600) * 1000,
            name: nameFromCredentials,
            email:emailFromCredentials,
            phone: phoneFromCredentials
          };
          
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          phone: user.phone,
          accessTokenExpires: user.accessTokenExpires,
          user,
        };
      }

      // اگر توکن هنوز منقضی نشده
      if (Date.now() < (token.accessTokenExpires || 0)) {
        return token;
      }

      // اگر منقضی شده، برو برای رفرش
      return await refreshAccessToken(token);
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.refreshToken = token.refreshToken;
      session.user = token.user;
       console.log("SESSION CALLBACKطسش", { session, token });
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };