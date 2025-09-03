"use server";
// I have copied some code from "repetition ""
import { cookies } from "next/headers";
import z from "zod";

export default async function loginAction(prevState, formData) {
	const username = formData.get("username");
	const password = formData.get("password");

	const schema = z.object({
		username: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
		password: z.string().min(1, { message: "Adgangskode skal være udfyldt" })
	});

	const validated = schema.safeParse({
		username, password
	});

	if (!validated.success) return {
		...validated,
		...(z.treeifyError(validated.error))
	}

	//const response = await fetch(`http://localhost:4000/users?username=${validated.data.username}`);
	
    const response = await fetch("http:localhost:4000/auth/token", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const json = await response.json();

	if (!json.length) return {
		success: false,
		errors: ["Brugernavn eller adgangskode er forkert"]
	}

	if (json[0].password === validated.data.password) {
		const cookieStore = await cookies();

            cookieStore.set("landrup_token", json.token ,{
			maxAge: 60 * 30
		});
		cookieStore.set("landrup_userid", json.userId ,{
			maxAge: 60 * 30
		});
    
        cookieStore.set("landrup_role", json.role ,{
			maxAge: 60 * 30
		});
	}

	return validated;
}




