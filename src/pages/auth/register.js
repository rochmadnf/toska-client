import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { Card, Layout } from "../../components";
import {
  Button,
  ErrorMessage,
  Input,
  Label,
} from "../../components/FormAttribute";
import { authCheckState } from "../../store/authentication";

export default function Register() {
  const setAuthCheck = useSetRecoilState(authCheckState);
  const { replace } = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errors, setErrors] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/register", form);
      setAuthCheck(form);
      replace("/dashboard");
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };
  return (
    <Layout title="Register">
      <div className="mx-auto max-w-screen-sm">
        <Card header={"Register"}>
          <form onSubmit={submitHandler}>
            <div className="mb-5">
              <Label htmlFor="name">name</Label>
              <Input
                value={form.name}
                onChange={(e) =>
                  setForm((form) => ({ ...form, name: e.target.value }))
                }
                type="text"
                id="name"
                tabIndex={1}
              />
              {errors && errors.name && <ErrorMessage message={errors.name} />}
            </div>

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
                tabIndex={1}
              />
              {errors && errors.password && (
                <ErrorMessage message={errors.password} />
              )}
            </div>

            <div className="mb-5">
              <Label htmlFor="password_confirmation">confirm password</Label>
              <Input
                value={form.password_confirmation}
                onChange={(e) =>
                  setForm((form) => ({
                    ...form,
                    password_confirmation: e.target.value,
                  }))
                }
                type="password"
                id="password_confirmation"
                tabIndex={1}
              />
            </div>

            <Button>Register</Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
}
