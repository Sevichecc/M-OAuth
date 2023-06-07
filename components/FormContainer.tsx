"use client";

import { useState } from "react";
import CreateAppForm from "@/components/CreatAppForm";
import ResultTable from "@/components/tables/ResultTable";
import useCreateApp from "@/hooks/useCreateApp";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FormSchema } from "@/components/CreatAppForm";

export type AppInfo = Pick<FormSchema, "instanceUrl" | "scopes">;

const FormContainer = () => {
  const { credentials, createApp } = useCreateApp();

  const [appInfo, setAppInfo] = useState<AppInfo>({
    instanceUrl: "",
    scopes: [""],
  });

  return (
    <>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>M-OAuth</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <CreateAppForm createApp={createApp} setAppInfo={setAppInfo} credentials={credentials}/>
        </CardContent>
      </Card>
      {credentials && (
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>Result</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <ResultTable credentials={credentials} appInfo={appInfo} />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FormContainer;
