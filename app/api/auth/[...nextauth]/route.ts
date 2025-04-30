import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
    providers:[
        CredentialsProvider({
            
            name:"credentials",
            credentials:{
                phone:{label:"phone" ,type:"text"},
                code:{label:"code" ,type:"text"}
            },
            async authorize(credentials){

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/verify`, {
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
                console.log(text, "RAW RESPONSE TEXTسسسسسسسسس"); // اول متن میگیری
                if (!text) {
                    return null;  // اگر خالی بود، return null
                }
                  
                const user = JSON.parse(text);
                
                
                if (user && user.token) {
                    return {
                      id: user.id,
                      phone: user.phone,
                      token: user.token,
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
          console.log("JWT CALLBACK", { token, user });
          if (user) {
            token.accessToken = user.token;
          }
          return token;
        },
        async session({ session, token }) {
          console.log("SESSION CALLBACK", { session, token });
          session.accessToken = token.accessToken;
          return session;
        },
      },
      
    
});

export { handler as GET, handler as POST };
