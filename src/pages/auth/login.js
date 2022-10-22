import { Card, Layout } from "../../components";
import { Button, Input, Label } from "../../components/FormAttribute";

export default function Login() {
  return (
    <Layout title={"Login"}>
      <div className="mx-auto max-w-screen-sm">
        <Card header={"Login"}>
          <div className="mb-5">
            <Label htmlFor="email">email</Label>
            <Input type="email" id="email" tabIndex={1} />
          </div>

          <div className="mb-5">
            <Label htmlFor="password">password</Label>
            <Input type="password" id="password" tabIndex={1} />
          </div>

          <Button>Login</Button>
        </Card>
      </div>
    </Layout>
  );
}
