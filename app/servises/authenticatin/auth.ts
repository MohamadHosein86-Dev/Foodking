import { JWT } from "next-auth/jwt";

export async function refreshAccessToken(token: JWT): Promise<JWT> {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ refreshToken: token.refreshToken }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error("Failed to refresh token");

    return {
      ...token,
      accessToken: data.accessToken,
      accessTokenExpires: Date.now() + (data.expiresIn || 3600) * 1000,
      refreshToken: data.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token:", error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export  async function signUp({name, email, phone, password }:{name:string, email:string, phone:string, password :string}) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, password })
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data?.message || "ثبت‌نام ناموفق بود");
}

export  async function signInUser({phone }:{phone:string}) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/v1/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({phone})
        });

    const data = await res.json();
      if (!res.ok) throw new Error(data?.message || "ثبت‌نام ناموفق بود");

    return data ;
}


