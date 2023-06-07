import ClientOnly from "@/components/ClientOnly";
import FormContainer from "@/components/FormContainer";
import Brand from "@/components/Brand";

export default function Home() {
  return (
    <main className="flex max-w-2xl flex-col gap-4">
      <Brand />
      <ClientOnly>
        <FormContainer />
      </ClientOnly>
    </main>
  );
}
