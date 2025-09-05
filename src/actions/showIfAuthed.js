import { cookies } from "next/headers";


export default async function ShowIfAuthed({ children }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("landrup_token");
  const userId = cookieStore.get("landrup_userid");
  const role = cookieStore.get("landrup_role");

  if (!token || !userId || !role) return null;
  return <>{children}</>;
}