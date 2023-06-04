"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ReadScope, AdminScope, WriteScope } from "@/lib/types";
import { readScopes, adminScopes, writeScopes } from "@/lib/utils";
import { MethodType } from "@/lib/types";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScopeSectionProps {
  method: MethodType;
  scopes?: ReadScope[] | WriteScope[] | AdminScope[];
}

const ScopeSection: React.FC<ScopeSectionProps> = ({ method, scopes }) => {
  return (
    <Collapsible
      className="
    flex
    flex-col
    rounded-md bg-slate-50 px-4
    py-3
    "
    >
      <div className="flex justify-between">
        <div className="items-top flex space-x-2">
          <Checkbox id="terms1" />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms1"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {method}
            </label>
            <p className="text-sm text-muted-foreground">
              {method === "read" && "read all your account's data"}
              {method === "write" && "modify all your account's data"}
              {method === "admin" && "read all data on the server"}
              {method === "follow" && "modify account relationships"}
              {method === "push" && "receive your push notifications"}
              {method === "crypto" && "use end-to-end encryption"}
            </p>
          </div>
        </div>
        {scopes && (
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        )}
      </div>
      <CollapsibleContent>
        {scopes && (
          <div className="grid grid-cols-1 gap-y-4 pb-2 ps-6 pt-5 md:grid-cols-2 ">
            {scopes.map((scope) => (
              <div
                className="items-top flex space-x-2 hover:cursor-pointer"
                key={`${method}:${scope}`}
              >
                <Checkbox id={`${method + scope}`} />
                <div className="grid gap-1.5 leading-none">
                  <label
                    htmlFor={`${method + scope}`}
                    className="text-sm font-medium leading-none hover:cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {scope}
                  </label>
                </div>
              </div>
            ))}
          </div>
        )}
      </CollapsibleContent>
    </Collapsible>
  );
};

const ScopeInput = (props: any) => {
  return (
    <div className="flex flex-col gap-2">
      <ScopeSection method="read" scopes={readScopes} />
      <ScopeSection method="write" scopes={writeScopes} />
      <ScopeSection method="admin" scopes={adminScopes} />
      <ScopeSection method="follow" />
      <ScopeSection method="push" />
      <ScopeSection method="crypto" />
    </div>
  );
};

export default ScopeInput;
