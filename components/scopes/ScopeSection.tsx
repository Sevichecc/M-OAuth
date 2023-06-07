"use client";

import { ChevronsUpDown } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import ScopeItem from "@/components/scopes/ScopeItem";

import { ScopeInfo } from "@/lib/types";

interface ScopeSectionProps {
  info: ScopeInfo;
  field: any;
}

const ScopeSection: React.FC<ScopeSectionProps> = ({ info, field }) => {
  const { method, description, scopes, label } = info;
  const isNested = scopes && scopes.length !== 0;
  return (
    <Collapsible className="flex flex-col rounded-md bg-slate-50 px-4 py-3 dark:bg-muted">
      <div className="flex justify-between">
        <div className="items-top flex space-x-2 ">
          <Checkbox
            id={method}
            checked={field.value?.includes(method)}
            onCheckedChange={(checked) => {
              return checked
                ? field.onChange([...field.value, method])
                : field.onChange(
                    field.value?.filter((value: string) => value !== method)
                  );
            }}
          />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor={method}
              className="text-sm font-medium leading-none hover:cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              {label}
            </label>
            <p className="text-xs text-muted-foreground">{description}</p>
          </div>
        </div>
        {isNested && (
          <CollapsibleTrigger asChild>
            <Button variant="ghost" size="sm" className="w-9 p-0">
              <ChevronsUpDown className="h-4 w-4" />
              <span className="sr-only">Toggle</span>
            </Button>
          </CollapsibleTrigger>
        )}
      </div>
      {isNested && (
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
                    className="mb-2 flex flex-col gap-2 md:mb-0"
                  >
                    {items.map((item) => (
                      <ScopeItem
                        scope={item}
                        key={item}
                        method={method}
                        field={field}
                      />
                    ))}
                  </div>
                ))
              : (scopes as string[]).map((scope) => (
                  <ScopeItem
                    scope={scope}
                    key={scope}
                    method={method}
                    field={field}
                  />
                ))}
          </div>
        </CollapsibleContent>
      )}
    </Collapsible>
  );
};

export default ScopeSection;
