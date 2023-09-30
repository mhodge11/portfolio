import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { RocketIcon } from "@radix-ui/react-icons";
import { Slot } from "@radix-ui/react-slot";

export function ComingSoonCard({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <Card>
        <CardHeader className="space-y-2 text-center">
          <Slot className="mx-auto h-16 w-16 text-foreground">
            <RocketIcon />
          </Slot>
          <h3 className="text-sm font-semibold text-foreground">
            Coming Soon!
          </h3>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-sm text-muted-foreground">
            This website is a work in progress. Check back soon!
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
