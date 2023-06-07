import ClientOnly from "@/components/ClientOnly";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormContainer from "@/components/FormContainer";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col">
        <ClientOnly>
          <FormContainer />
        </ClientOnly>
      </div>
    </main>
  );
}
