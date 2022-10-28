import { useState } from "react";
import { Card, Layout } from "../../components";
import {
  Button,
  ErrorMessage,
  Input,
  Label,
} from "../../components/FormAttribute";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { authCheckState } from "../../store/authentication";
import { useRouter } from "next/router";

export default function Login() {
  const setAuth = useSetRecoilState(authCheckState);
  const { replace } = useRouter();

  const [errors, setErrors] = useState([]);
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`sanctum/csrf-cookie`);
      await axios.post(`login`, form);
      setAuth(form);
      replace("/dashboard");
    } catch (error) {
      setErrors(error.response.data.errors);
    }
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
              {errors && errors.email && (
                <ErrorMessage message={errors.email} />
              )}
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

              {errors && errors.password && (
                <ErrorMessage message={errors.password} />
              )}
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
