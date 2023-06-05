import { FormSchema } from "@/components/InputForm";
import { useCallback, useState } from "react";
import { AppEntry } from "@/lib/types";

type MError = {
  error: string;
};

const useCreateApp = () => {
  const [appEntry, setAppEntry] = useState<AppEntry>();

  const createApp = useCallback(
    async ({
      instance,
      website,
      clientName,
      redirectUris,
      scopes,
    }: FormSchema) => {
      const app = {
        website,
        client_name: clientName,
        redirect_uris: redirectUris,
        scopes: scopes?.join(" "),
      };

      try {
        let request = await fetch(`${instance}/api/v1/apps`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(app),
        });

        if (!request.ok || request.status === 424) {
          throw new Error((await request.json()).error);
        }
        setAppEntry(await request.json());
      } catch (error) {
        throw new Error((error as MError).error);
      }
    },[]
  );

  return {
    appEntry,
    createApp,
  };
};

export default useCreateApp;