"use client";
import * as z from "zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import Image from "next/image";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import ScopeSection from "@/components/scopes/ScopeSection";
import { AppInfo } from "@/components/FormContainer";

import { getScopes } from "@/lib/scopes";
import { Credentials } from "@/lib/types";

const formSchema = z.object({
  instanceUrl: z.string().url().trim(),
  instanceType: z.enum(["mastodon", "akkoma", "misskey", "pleroma"]),
  clientName: z.string().trim(),
  redirectUris: z.string().trim(),
  scopes: z.string().array().nonempty().optional(),
  website: z.string().url().trim().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
export type InstanceType = FormSchema["instanceType"];
interface CreateAppFormProps {
  createApp: ({}: FormSchema) => Promise<void>;
  setAppInfo: Dispatch<SetStateAction<AppInfo>>;
  credentials: Credentials | undefined;
}

const CreateAppForm: React.FC<CreateAppFormProps> = ({
  createApp,
  setAppInfo,
  credentials,
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instanceUrl: "https://",
      instanceType: "mastodon",
      clientName: "",
      redirectUris: "urn:ietf:wg:oauth:2.0:oob",
      scopes: ["read"],
      website: "",
    },
    mode: "onChange",
  });

  const watchInstancType = form.watch("instanceType");

  const onSubmit = async (values: FormSchema) => {
    console.log(values);
    setAppInfo(values);
    setIsSubmitted(true);
    await createApp(values);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-6 flex flex-col space-y-6"
      >
        <FormField
          control={form.control}
          name="instanceUrl"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Instance<span className="text-sm text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="instanceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instance Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your instance's type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="mastodon" className="flex">
                    <span className="flex">
                      <Image
                        src="https://cdn.simpleicons.org/mastodon"
                        width="15"
                        height="15"
                        alt="Github"
                        className="mr-2"
                      />
                      Mastodon
                    </span>
                  </SelectItem>
                  <SelectItem value="pleroma">
                    <span className="flex">
                      <Image
                        src="https://cdn.simpleicons.org/pleroma"
                        width="15"
                        height="15"
                        alt="Github"
                        className="mr-2"
                      />
                      Pleroma
                    </span>
                  </SelectItem>
                  <SelectItem value="akkoma">
                    <span className="flex">
                      <Image
                        src="/akkoma.svg"
                        width="15"
                        height="15"
                        alt="Github"
                        className="mr-2"
                      />
                      Akkoma
                    </span>
                  </SelectItem>
                  {/* <SelectItem value="misskey">
                    <span className="flex">
                      <Image
                        src="https://cdn.simpleicons.org/misskey"
                        width="15"
                        height="15"
                        alt="Github"
                        className="mr-2"
                      />
                      Misskey
                    </span>
                  </SelectItem> */}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="clientName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Application name<span className="text-sm text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Application Website</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="redirectUris"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Redirect URI<span className="text-sm text-red-400">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Use{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold">
                  urn:ietf:wg:oauth:2.0:oob
                </code>{" "}
                for local tests or to obtaining an access token.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="scopes"
          render={() => (
            <FormItem>
              <FormLabel>Scopes</FormLabel>
              <FormControl className="flex flex-col gap-2">
                <FormField
                  control={form.control}
                  name="scopes"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex flex-col gap-2">
                        {getScopes(watchInstancType).map((info) => (
                          <ScopeSection
                            key={info.method}
                            info={info}
                            field={field}
                          />
                        ))}
                      </div>
                    </FormItem>
                  )}
                ></FormField>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {!credentials && isSubmitted ? (
          <Button disabled className="w-ful">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
        ) : (
          <Button type="submit" className="w-ful">
            Create
          </Button>
        )}
      </form>
    </Form>
  );
};
export default CreateAppForm;
