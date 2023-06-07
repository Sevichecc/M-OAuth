"use client";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { scopesInfo } from "@/lib/scopes";
import { Dispatch, SetStateAction } from "react";
import { AppInfo } from "./FormContainer";

const formSchema = z.object({
  instanceUrl: z.string().url().trim(),
  clientName: z.string().trim(),
  redirectUris: z.string().trim(),
  scopes: z.string().array().nonempty().optional(),
  website: z.string().url().trim().optional(),
});

export type FormSchema = z.infer<typeof formSchema>;
interface InputFormProps {
  createApp: ({}: FormSchema) => Promise<void>;
  setAppInfo: Dispatch<SetStateAction<AppInfo>>;
}

const InputForm: React.FC<InputFormProps> = ({ createApp, setAppInfo }) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instanceUrl: "https://",
      clientName: "",
      redirectUris: "urn:ietf:wg:oauth:2.0:oob",
      scopes: ["read"],
    },
  });

  const onSubmit = async (values: FormSchema) => {
    setAppInfo(values);
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
                for local tests or for getting access token
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
                        {scopesInfo.map((info) => (
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
        <Button type="submit" className="w-ful">
          Submit
        </Button>
      </form>
    </Form>
  );
};
export default InputForm;
