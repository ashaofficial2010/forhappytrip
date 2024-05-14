import Credentials from "next-auth/providers/credentials";
import executeQuery from "@/config/mysqldb";
export const authOptions = {
  session: {
    strategy: "jwt",
    maxAge: 2 * 24 * 60 * 60, //2 Days
  },
  providers: [
    Credentials({
      type: "credentials",
      credentials: {
        email: {
          label: "Your Email",
          type: "email",
          placeholder: "Enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Enter your password",
        },
      },
      async authorize(credentials) {
        console.log("authorize");
        const { email, password } = credentials;
        const query = `select * from users where email="${email}" and password="${password}"`;
        const user = await executeQuery(query, []);
        if (Object.keys(user).length > 0) {
            console.log("success");
            return { user }
        } else {
            console.log("errrr")
            return null;
        }
      },
    }),    
  ],  
};