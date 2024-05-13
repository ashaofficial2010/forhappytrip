"use server";
import { revalidatePath } from "next/cache";
import executeQuery from "@/config/mysqldb";
import { z } from 'zod';

const Mysqlserveraction = async (prevState, formData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const bname = formData.get("submit");
    const userschema = z.object({
        name:z.string().min(5),
        email:z.string().email(),
        password:z.string().min(5),
    })

    try {
        userschema.parse({name});
        
        if (bname === "insert") {
            if (name != "" && email != "" && password != "") {
                const result = await executeQuery("insert into users (name, email, password) values (?, ?, ?)", [name, email, password]);
                
                if (result.affectedRows) {
                    revalidatePath("/signup");
                    return { message: "Record Inserted" };
                } else {
                    revalidatePath("/signup");
                    return { message: "Record not Inserted" };
                }
            } else {
                revalidatePath("/signup");
                return { message: "Field can not be empty" };
            }
        } 
        
    } catch(error) {
        console.log(error);
        revalidatePath("/signup");
        return { message: error.errors[0].message || "Error" };
    }
};

export default Mysqlserveraction;
