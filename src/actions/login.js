"use server";
// I have copied some code from "repetition ""
import { cookies } from "next/headers";
import { z } from "zod";

export async function loginAction(prevState, formData) {
     if (!formData) {
    return { success: false, errors: ["Form data is missing"] };
  }
	const username = formData.get("username");
	const password = formData.get("password");
  const cookieStore = await cookies();

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
	};


  const baseUrl = process.env.BASE_URL;
    try {
     const response = await fetch(`${baseUrl}/auth/token`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username: validated.data.username,
        password: validated.data.password,
      }),
    });

       if (response.status !== 200) return {
        success: false,
        errors: ['you are not a valid user, please sign up first']
    };

    const data = await response.json();

    console.log(data);

    cookieStore.set("landrup_token", data.token , {maxAge: 60 * 30});
    cookieStore.set("landrup_userid", data.userId, {maxAge: 60 * 30});
    cookieStore.set("landrup_role", data.role, {maxAge: 60 * 30});
    return { success: true };
    
  } catch (error) {
    throw new Error(error);
  }
}
