import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useFormContext } from "react-hook-form";

export function FormSubmit({ children }: { children?: React.ReactNode }) {
  const { formState } = useFormContext();
  const { isSubmitting, isLoading } = formState;

  return (
    <Button type="submit" disabled={isSubmitting || isLoading}>
      {(isSubmitting || isLoading) && (
        <Icons.spinner className="mr-2 animate-spin" />
      )}
      {children ?? "Submit"}
    </Button>
  );
}
