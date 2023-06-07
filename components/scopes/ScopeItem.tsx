"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { MethodType } from "@/lib/types";

interface ScopeCheckboxProps {
  scope: string;
  method: MethodType;
  field: any;
}

const ScopeItem: React.FC<ScopeCheckboxProps> = ({ scope, method, field }) => {
  const scopes = scope.split(":");
  const adminIsReadAll =
    field.value?.includes("admin:read") &&
    method === "admin" &&
    scopes[1] === "read" &&
    scopes.length !== 2;
  const adminIsWriteAll =
    field.value?.includes("admin:write") &&
    method === "admin" &&
    scopes[1] === "write" &&
    scopes.length !== 2;

  const isCovered = field.value?.includes(method);

  return (
    <div className="items-top 'hover:cursor-pointer flex space-x-2 hover:cursor-pointer">
      <Checkbox
        disabled={isCovered || adminIsReadAll || adminIsWriteAll}
        id={scope}
        checked={field.value?.includes(scope)}
        onCheckedChange={(checked) => {
          return checked
            ? field.onChange([...field.value, scope])
            : field.onChange(
                field.value?.filter(
                  (value: string) => value !== scope && value !== method
                )
              );
        }}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={scope}
          className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${
            isCovered
              ? "opacity-70 hover:cursor-not-allowed"
              : "hover:cursor-pointer"
          }`}
        >
          {method === "admin" && (
            <span className="text-slate-500">{scopes[1]} : </span>
          )}
          {scope === "admin:read" || scope === "admin:write" ? (
            <span className="text-slate-500">All </span>
          ) : (
            scopes.slice(-1)
          )}
        </label>
      </div>
    </div>
  );
};

export default ScopeItem;
