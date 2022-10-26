import { useState } from "react";
import { Card, Layout } from "../../components";
import { Button, Input, Label } from "../../components/FormAttribute";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/sanctum/csrf-cookie`
    );

    await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login`, form);

    const { data } = await axios.get(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/me`
    );

    console.log(data);
  };

  return (
    <Layout title={"Login"}>
      <div className="mx-auto max-w-screen-sm">
        <Card header={"Login"}>
          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <Label htmlFor="email">email</Label>
              <Input
                value={form.email}
                onChange={(e) =>
                  setForm((form) => ({ ...form, email: e.target.value }))
                }
                type="email"
                id="email"
                tabIndex={1}
              />
            </div>

            <div className="mb-5">
              <Label htmlFor="password">password</Label>
              <Input
                value={form.password}
                onChange={(e) =>
                  setForm((form) => ({ ...form, password: e.target.value }))
                }
                type="password"
                id="password"
                tabIndex={2}
              />
            </div>

            <div className="mb-5 flex items-center">
              <input
                value={form.remember}
                onClick={(e) =>
                  setForm((form) => ({ ...form, remember: e.target.checked }))
                }
                type="checkbox"
                name="remember"
                id="remember"
                className="form-checkbox cursor-pointer shadow-sm border-gray-300 focus:border-blue-500 transition duration-300 focus:ring focus:ring-blue-200 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 capitalize select-none cursor-pointer"
              >
                remember
              </label>
            </div>

            <Button type="submit">Login</Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
