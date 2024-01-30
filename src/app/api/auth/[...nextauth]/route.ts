import nextAuth from "next-auth";
import NextAuth from "next-auth/next";
import Google from "next-auth/providers/google";


//Decirle con que servicios queremos autenticar
const handler = NextAuth({
    providers: [
        Google({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,

        })],
});

//Exportamos como peticion GET o POST esto nos permitira conectarnos con los servicios de Google
export {handler as GET, handler as POST}