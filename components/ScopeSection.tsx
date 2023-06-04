"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

import { ReadScope, AdminScope, WriteScope } from "@/lib/types";
import { MethodType } from "@/lib/types";
import { ControllerRenderProps } from "react-hook-form";

interface ScopeSectionProps {
  method: MethodType;
  scopes?: ReadScope[] | WriteScope[] | AdminScope[];
}

const ScopeSection: React.FC<ScopeSectionProps> = ({ method, scopes}) => {

  return (
    <Collapsible className="flex flex-col rounded-md bg-slate-50 px-4 py-3">
      <div className="flex justify-between">
        <div className="items-top flex space-x-2 ">
          <Checkbox id={method}/>
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor={method}
              className="text-sm font-medium leading-none hover:cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {method}
            </label>
            <p className="text-xs text-muted-foreground">
              {method === "read" && "read your account's data"}
              {method === "write" && "modify your account's data"}
              {method === "admin" && "read data on the server"}
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

export default ScopeSection;
