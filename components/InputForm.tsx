'use client'

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { readScopes, writeScopes, adminScopes } from "@/lib/utils"
import ScopeSection from "./ScopeSection"

const formSchema = z.object({
  instance: z.string().trim(),
  clientName: z.string().trim(),
  redirectUris: z.string().url().trim(),
  scopes: z.string().array().nonempty().optional(),
  website: z.string().trim().optional()
})

const InputForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      instance:'https://',
      clientName: '',
      redirectUris: 'urn:ietf:wg:oauth:2.0:oob',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5">M-OAuth</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="instance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instance</FormLabel>
              <FormControl>
                <Input placeholder="mastodon.social" {...field} />
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
              <FormDescription>Use  <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-xs font-semibold">urn:ietf:wg:oauth:2.0:oob</code> for local tests</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="scopes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Scopes</FormLabel>
              <FormControl className="flex flex-col gap-2">
                <div className="flex flex-col gap-2">
                  <ScopeSection method="read" scopes={readScopes} />
                  <ScopeSection method="write" scopes={writeScopes} />
                  <ScopeSection method="admin" scopes={adminScopes} />
                  <ScopeSection method="follow" />
                  <ScopeSection method="push" />
                  <ScopeSection method="crypto" />
                </div>
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
