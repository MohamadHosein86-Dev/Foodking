import NextAuth, { NextAuthOptions, User, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { refreshAccessToken } from "@/app/servises/auth/refreshAccessToken/refreshAccessToken";

declare module "next-auth" {
  interface User {
    phone?: string | null;
    name?: string | null;
    email?: string | null;
  }

  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      phone?: string | null;
    };
    accessToken?: string;
    refreshToken?: string;
  }
}

interface ExtendedUser extends User {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
}

interface ExtendedToken extends JWT {
  accessToken: string;
  refreshToken: string;
  accessTokenExpires: number;
  user: {
    name?: string | null;
    email?: string | null;
    phone?: string | null;
  };
}

interface ExtendedSession extends Session {
  accessToken: string;
  refreshToken: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        phone: { label: "Phone", type: "text" },
        code: { label: "Code", type: "text" },
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "text" },
      },
      async authorize(credentials) {
        if (!credentials) return null;

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/verify`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            phone: credentials.phone,
            code: credentials.code,
          }),
        });

        if (!res.ok) return null;

        const data = await res.json();

        if (data?.accessToken && data?.refreshToken) {
          return {
            id: credentials.phone,
            phone: credentials.phone,
            name: credentials.name ,
            email: credentials.email ,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            accessTokenExpires: Date.now() + (data.expiresIn || 3600) * 1000,
          } as ExtendedUser;
        }

        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      const extendedToken = token as ExtendedToken;

      if (user) {
        const u = user as ExtendedUser;
        extendedToken.accessToken = u.accessToken;
        extendedToken.refreshToken = u.refreshToken;
        extendedToken.accessTokenExpires = u.accessTokenExpires;
        extendedToken.user = {
          name: u.name ?? null,
          email: u.email ?? null,
          phone: u.phone ?? null,
        };
        return extendedToken;
      }

      if (Date.now() < (extendedToken.accessTokenExpires ?? 0)) {
        return extendedToken;
      }

      return await refreshAccessToken(extendedToken);
    },

    async session({ session, token }) {
      const extendedToken = token as ExtendedToken;

      const extendedSession: ExtendedSession = {
        ...session,
        user: {
          name: extendedToken.user.name,
          email: extendedToken.user.email,
          phone: extendedToken.user.phone,
          image: null,
        },
        accessToken: extendedToken.accessToken,
        refreshToken: extendedToken.refreshToken,
      };

      return extendedSession;
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
