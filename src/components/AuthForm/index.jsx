import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { LoaderCircle } from "lucide-react";

export function AuthForm({
  header,
  button,
  setEmail,
  setPassword,
  setName,
  handle,
  loading,
}) {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader className="text-center">
        <h2>{header}</h2>
      </CardHeader>
      <CardContent>
        <div>
          <div className="flex flex-col gap-6">
            <div className={`grid gap-2 ${header === "Login" ? "hidden" : ""}`}>
              <Label className="text-muted-foreground">Name</Label>
              <Input
                type="text"
                placeholder="Enter your full name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-muted-foreground">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="name@example.com"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label className="text-muted-foreground">Password</Label>
              </div>
              <Input
                placeholder="Enter your password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button disabled={loading} onClick={() => handle()} className="w-full bg-[#0b66ff]">
          <div className="flex gap-2 items-center">
            <LoaderCircle className={`animate-spin ${loading ? "" : "hidden"}`} /> {button}
          </div>
        </Button>
        <div className="mt-4">
          <div className={`${header === "Login" ? "hidden" : ""}`}>
            Already have an account?{" "}
            <Link className="text-[#3a6ed5]" to="/sign-in">
              Login
            </Link>
          </div>
          <div className={`${header === "Login" ? "" : "hidden"}`}>
            Dont have an account?{" "}
            <Link className="text-[#3a6ed5]" to="/sign-up">
              Sign up
            </Link>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default AuthForm;
