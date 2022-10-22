import { Card, Layout } from "../../components";
import { Button, Input, Label } from "../../components/FormAttribute";

export default function Register() {
  return (
    <Layout title="Register">
      <div className="mx-auto max-w-screen-sm">
        <Card header={"Register"}>
          <div className="mb-5">
            <Label htmlFor="name">name</Label>
            <Input type="text" id="name" tabIndex={1} />
          </div>

          <div className="mb-5">
            <Label htmlFor="email">email</Label>
            <Input type="email" id="email" tabIndex={1} />
          </div>

          <div className="mb-5">
            <Label htmlFor="password">password</Label>
            <Input type="password" id="password" tabIndex={1} />
          </div>

          <div className="mb-5">
            <Label htmlFor="confirm_password">confirm password</Label>
            <Input type="password" id="confirm_password" tabIndex={1} />
          </div>

          <Button>Register</Button>
        </Card>
      </div>
    </Layout>
  );
}
