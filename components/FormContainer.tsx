"use client";
import { useEffect, useState } from "react";
import InputForm from "@/components/InputForm";
import ResultTable from "@/components/ResultTable";
import TokenTable from "@/components/TokenTable";
import useCreateApp from "@/hooks/useCreateApp";
import useAuth from "@/hooks/useAuth";
import { FormSchema } from "@/components/InputForm";

export type AppInfo = Pick<FormSchema, "instanceUrl" | "scopes">;
const FormContainer = () => {
  const { appEntry, createApp } = useCreateApp();
  const [appInfo, setAppInfo] = useState<AppInfo>({
    instanceUrl: "",
    scopes: [""],
  });
  const { token, getAccessToken } = useAuth(appInfo);

  return (
    <>
      <InputForm createApp={createApp} setAppInfo={setAppInfo} />
      {appEntry && <ResultTable appEntry={appEntry} getAccessToken={getAccessToken}/>}
      {/* <TokenTable appInfo={appInfo}  /> */}
    </>
  );
};

export default FormContainer;
