'use client'

import { MethodType } from "./InputForm";
import { Checkbox } from "@/components/ui/checkbox";

interface ScopeCheckboxProps {
  scope: string;
  method: MethodType;
}

const ScopeItem: React.FC<ScopeCheckboxProps> = ({ scope, method }) => {
  return (
    <div className={`items-top flex space-x-2 hover:cursor-pointer`}>
      <Checkbox id={`${scope}`} />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor={`${scope}`}
          className="text-sm font-medium leading-none hover:cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          {method == "admin" && (
            <span className="text-slate-500">{scope.split(":")[1]} : </span>
          )}
          {scope.split(":").slice(-1)}
        </label>
      </div>
    </div>
  );
};

export default ScopeItem;