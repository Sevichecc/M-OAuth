import InputForm from "@/components/InputForm";
import ClientOnly from "@/components/ClientOnly";

export default function Home() {
  return (
    <main>
      <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        M-OAuth
      </h1>
      <ClientOnly>
        <InputForm />
      </ClientOnly>
    </main>
  );
}
