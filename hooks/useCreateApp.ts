import { FormSchema } from "@/components/CreatAppForm";
import { useCallback, useState } from "react";
import { Credentials, MError } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

const useCreateApp = () => {
  const [credentials, setCredentials] = useState<Credentials>();
  const { toast } = useToast();

  const createApp = useCallback(
    async ({
      instanceUrl,
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
        let request = await fetch(`${instanceUrl}/api/v1/apps`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(app),
        });

        if (!request.ok || request.status === 424) {
          throw new Error((await request.json()).error);
        }
        setCredentials(await request.json());
      } catch (error) {
        const mError = error as MError;
        toast({
          title: mError.error,
          description: mError.error_description,
        });
        throw new Error(mError.error);
      }
    },
    [toast]
  );

  return {
    credentials,
    createApp,
  };
};

export default useCreateApp;
