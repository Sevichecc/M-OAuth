"use client";
import InputForm from "@/components/InputForm";
import DataDisplay from "@/components/DataDisplay";
import useCreateApp from "@/hooks/useCreateApp";

const FormContainer = () => {
  const { appEntry, createApp } = useCreateApp();

  return (
    <>
      <InputForm createApp={createApp} />
      {appEntry && <DataDisplay appEntry={appEntry} />}
    </>
  );
};
export default FormContainer;
