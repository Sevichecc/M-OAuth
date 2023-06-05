"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  READ_SCOPES,
  WRITE_SCOPES,
  ADMIN_READ_SCOPES,
  ADMIN_WRITE_SCOPES,
} from "@/lib/utils";
import ScopeSection from "./ScopeSection";

export type MethodType =
  | "read"
  | "write"
  | "follow"
  | "crypto"
  | "follow"
  | "admin"
  | "push";
export interface ScopeInfo {
  method: MethodType;
  label: string;
  scopes?: string[] | string[][];
  description: string;
}

const scopesInfo: ScopeInfo[] = [
  {
    method: "read",
    label: 'Read',
    scopes: READ_SCOPES,
    description: "read account's data",
  },
  {
    method: "write",
    label: 'Write',
    scopes: WRITE_SCOPES,
    description: "modify account's data",
  },
  {
    method: "follow",
    label: 'Follow',
    description: "modify account relationships,deprecated in 3.5.0 and newer.",
  },
  {
    method: "push",
    label: "Push",
    description: "receive push notifications",
  },
  {
    method: "admin",
    label: 'Admin',
    scopes: [ADMIN_READ_SCOPES, ADMIN_WRITE_SCOPES],
    description: "read all data on the server",
  },
  {
    method: "crypto",
    label:  "Crypto",
    description: "use end-to-end encryption",
  },
];

const formSchema = z.object({
  instance: z.string().trim(),
  clientName: z.string().trim(),
  redirectUris: z.string().url().trim(),
  scopes: z.string().array().nonempty().optional(),
  website: z.string().trim().optional(),
});

const InputForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instance: "https://",
      clientName: "",
      redirectUris: "",
      scopes:[]
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="instance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instance</FormLabel>
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
              <FormLabel>Application name</FormLabel>
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
              <FormLabel>Redirect URI</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>
                Use{" "}
                <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold">
                  urn:ietf:wg:oauth:2.0:oob
                </code>{" "}
                for local tests
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
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default InputForm;
