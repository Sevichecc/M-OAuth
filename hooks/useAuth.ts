import { useCallback, useState, useMemo } from "react";
import { AppEntry, MError } from "@/lib/types";
import { FormSchema } from "@/components/InputForm";
import { AppInfo } from "@/components/FormContainer";

const useAuth = (appInfo: AppInfo) => {
  const { instanceUrl, scopes} = appInfo
  const [token, setToken] = useState("");

  const getCode = useCallback(
    (client_id: string, redirect_uri: string) => {
      const code = new URLSearchParams(window.location.search).get("code");

      if (!code) {
        const params = {
          response_type: "code",
          client_id,
          redirect_uri,
        };
        
        if (scopes) {
          const scope = 1
        }
      
        const queryString = new URLSearchParams(params).toString();
        window.location.href = `${instanceUrl}/oauth/authorize?${queryString}`;
      } else {
        return code;
      }
    },
    [instanceUrl, scopes]
  );

  const getAuth = useCallback(
    async (
      code: string,
      client_id: string,
      redirect_uri: string,
      client_secret: string
    ) => {
      const body = new URLSearchParams({
        grant_type: "authorization_code",
        client_id,
        client_secret,
        redirect_uri,
        code,
      });

      try {
        const response = await fetch(`${instanceUrl}/oauth/token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: body.toString(),
        });

        const result = await response.json();
        if (!response.ok) throw new Error((result as MError).error);

        return result.access_token;
      } catch (error) {
        console.error(error);
      }
    },
    [instanceUrl]
  );

  const getAccessToken = useCallback(
    async (appEntry: AppEntry) => {
      const { client_id, redirect_uri, client_secret } = appEntry;
      const code = getCode(client_id, redirect_uri);
      if (code) {
        const accessToken = await getAuth(
          code,
          client_id,
          redirect_uri,
          client_secret
        );
        setToken(accessToken);
      }
    },
    [getCode, getAuth]
  );

  return {
    token,
    getAccessToken,
  };
};

export default useAuth;
