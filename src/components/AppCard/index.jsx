import { Card } from "@/components/ui/card";

export function AppCard({ item }) {
  return (
    <>
      <div className="grid cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {item.map((item) => (
          <Card className="w-full max-w-lg ">
            <h3 className="leading-none">{item.title}</h3>
            <span className="text-muted-foreground">
              {item.description}
            </span>
          </Card>
        ))}
      </div>
    </>
  );
}

export default AppCard;
