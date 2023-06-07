"use client";
import { useState } from "react";
import InputForm from "@/components/InputForm";
import ResultTable from "@/components/tables/ResultTable";
import useCreateApp from "@/hooks/useCreateApp";

import { FormSchema } from "@/components/InputForm";

export type AppInfo = Pick<FormSchema, "instanceUrl" | "scopes">;

const FormContainer = () => {
  const { credentials, createApp } = useCreateApp()

  const [appInfo, setAppInfo] = useState<AppInfo>({
    instanceUrl: "",
    scopes: [""],
  });

  return (
    <>
      <InputForm createApp={createApp} setAppInfo={setAppInfo} />
      {credentials && (
        <ResultTable credentials={credentials} appInfo={appInfo} />
      )}
    </>
  );
};

export default FormContainer;
