import InputForm from "@/components/InputForm";
import ClientOnly from "@/components/ClientOnly";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormContainer from "@/components/FormContainer";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col gap-5">
        <Card className="mt-5">
          <CardHeader>
            <CardTitle>M-OAuth</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <ClientOnly>
              <FormContainer/>
            </ClientOnly>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
