"use server";
import { revalidatePath } from "next/cache";
import executeQuery from "@/config/mysqldb";

const Mysqlserveraction = async (prevState, formData) => {
    console.log(formData.get("submit"));
  const name = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");
  const bname = formData.get("submit");
  if (bname === "insert") {
    console.log("insert");
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
  console.log("insert exit");
};

export default Mysqlserveraction;