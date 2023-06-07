import ClientOnly from "@/components/ClientOnly";
import FormContainer from "@/components/FormContainer";
import Brand from "@/components/Brand";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-4">
        <Brand/>
        <ClientOnly>
          <FormContainer />
        </ClientOnly>
      </div>
    </main>
  );
}
