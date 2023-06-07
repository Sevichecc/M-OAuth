import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAuth = (
  instanceUrl: string,
  client_id: string,
  scopes: any,
) => {
  const params: any = {
    response_type: "code",
    client_id,
    redirect_uri: "urn:ietf:wg:oauth:2.0:oob",
  };

  if (scopes) {
    params.scopes = scopes.join(" ");
  }
  const queryString = new URLSearchParams(params).toString();
  window.location.href = `${instanceUrl}/oauth/authorize?${queryString}`;
};

