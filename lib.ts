import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function decrypt(token: string): Promise<any> {
  try {
    const isAdmin = await fetch(`${API_URL}/verifyToken`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    }).then((res) => res.json());
    return isAdmin;
  } catch (error) {
    console.error("Network error:", error);
  }
}

export async function login(formData: FormData) {
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  try {
    const res = await fetch(`${API_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (res.ok) {
      const data = await res.json();

      const decodedToken = jwtDecode(data.token);

      const expires = decodedToken.exp
        ? new Date(decodedToken.exp * 1000)
        : new Date();

      // Save the session in a cookie
      cookies().set("session", data.token, {
        expires,
        httpOnly: true,
        secure: true,
      });
    } else {
      const errorData = await res.json();
      console.error("Login failed:", errorData.error);
    }
  } catch (error) {
    console.error("Network error:", error);
  }
}

export async function logout() {
  // Destroy the session
  cookies().set("session", "", { expires: new Date(0) });
}

export async function getSession() {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}
