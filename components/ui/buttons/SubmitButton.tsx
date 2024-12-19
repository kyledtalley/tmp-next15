import { Button } from "@/components/ui/buttons/button";

interface SubmitButtonProps {
  label: string;
}

export default function SubmitButton({ label }: SubmitButtonProps) {
  return (
    <Button
      type="submit"
      className="w-full bg-secondary text-secondary-foreground hover:bg-red-600"
    >
      {label}
    </Button>
  );
}
