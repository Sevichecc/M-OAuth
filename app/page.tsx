import InputForm from "@/components/InputForm";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  return (
    <main>
      <ClientOnly>
        <InputForm />
      </ClientOnly>
    </main>
  );
}
