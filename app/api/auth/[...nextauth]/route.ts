import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            
            name:"OTP Login",
            credentials:{
                
                phone:{label:"phone" ,type:"text"},
                code:{label:"code" ,type:"text"}
            },
            async authorize(credentials){

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/verify`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      phone: credentials?.phone,
                      code: credentials?.code,
                    }),
                });
                
                if (!res.ok) {
                    return null;
                }
                  
                const text = await res.text(); 
                const user = JSON.parse(text);
                
                
                if (user?.accessToken && user?.refreshToken) {
                    return {
                      id: user.id,
                      accessToken: user.accessToken,
                      refreshToken: user.refreshToken,
                    };
                } 
                else {
                    return null;
                }
                
            },
        }),
    ],
    session:{
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
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
          return session;
        }        
      },
      
    
});

export { handler as GET, handler as POST };
