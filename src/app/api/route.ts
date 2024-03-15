import { getToken } from "next-auth/jwt";
import { logger } from "../../utils";

const secret = process.env.NEXTAUTH_SECRET;

export async function GET(req) {
  // if using `NEXTAUTH_SECRET` env variable, we detect it, and you won't actually need to `secret`
  // const token = await getToken({ req })
  const token = await getToken({ req, secret });
  logger.log("JSON Web Token", token);
  const tokenInfo = JSON.stringify(token);
  const accessToken = JSON.parse(tokenInfo).accessToken;
  logger.log(accessToken);
  const res = await fetch("https://email.api.textybuzzy.com/v0/ping", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();

  return Response.json({ data });
}
