"use server";
// I have copied some code from "repetition ""
import { z } from "zod";

export async function SignUpAction(prevState, formData) {
     if (!formData) {
    return { success: false, errors: ["Form data is missing"] };
  }
    const firstname = formData.get("firstname")
    const lastname = formData.get("lastname")
    const age = Number(formData.get("age"))
    const username = formData.get("username");
    const password = formData.get("password");
   

    const schema = z.object({
        firstname: z.string().min(1, { message: "Fornavn skal være udfyldt" }),
        lastname: z.string().min(1, { message: "Efternavn skal være udfyldt" }),
        age: z.number({ invalid_type_error: "Alder skal være et tal" }).min(1, { message: "Alder skal være udfyldt" }), 
        username: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
        password: z.string().min(1, { message: "Adgangskode skal være udfyldt" })
    });


    const validated = schema.safeParse({
        firstname, lastname, age, username, password
    });

    if (!validated.success) return {
        ...validated,
        ...(z.treeifyError(validated.error))
    };


  const baseUrl = process.env.BASE_URL;
    try {
     const response = await fetch(`${baseUrl}/api/v1/users`, {
       method: "POST",
       headers: {
         "Content-Type": "application/x-www-form-urlencoded"
       },

       body: new URLSearchParams({
         "firstusername": firstname,
         "lastusername": lastname,
         "age": age,
         "username": username,
         "password": password,
       }),
     });

       if (response.status !== 200) return {
        success: false,
        errors: ['sign up failed, please try again']
    };

    return { success: true };
  } catch (error) {
    throw new Error(error);
  }
}










