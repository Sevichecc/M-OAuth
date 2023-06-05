"use client";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

import { ScopeInfo } from "./InputForm";
import ScopeCheckbox from "./ScopeCheckbox";
interface ScopeSectionProps {
  info: ScopeInfo;
  field: any;
}

const ScopeSection: React.FC<ScopeSectionProps> = ({ info, field }) => {
  const { method, description, scopes } = info;

  return (
    <Collapsible className="flex flex-col rounded-md bg-slate-50 px-4 py-3">
      <div className="flex justify-between">
        <div className="items-top flex space-x-2 ">
          <Checkbox id={method} />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor={method}
              className="text-sm font-medium leading-none hover:cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {method}
            </label>
            <p className="text-xs text-muted-foreground">{description}</p>
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
      {scopes && (
        <CollapsibleContent>
          <div
            className={`grid grid-cols-1 pb-2 ps-6 pt-5 md:grid-cols-2 ${
              method === "admin" ? "" : "gap-2"
            }`}
          >
            {method === "admin"
              ? (scopes as string[][]).map((items) => (
                  <div
                    key={`${items}${method}`}
                    className="flex flex-col gap-2"
                  >
                    {items.map((item) => (
                      <ScopeCheckbox scope={item} key={item} method={method} />
                    ))}
                  </div>
                ))
              : (scopes as string[]).map((scope) => (
                  <ScopeCheckbox scope={scope} key={scope} method={method} />
                ))}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
};

export default ScopeSection;
