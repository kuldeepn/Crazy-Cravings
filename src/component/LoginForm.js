import * as Yup from "yup";
import { Formik, Form } from "formik";
import MyTextInput from "./MyTextInput";

const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string()
          .min(4, "Must be atleat 4 digit")
          .max(8, "must be smaller than 8 digit")
          .required("Required"),
      })}
      onSubmit={(values) => {
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form className="max-w-sm mx-auto mt-10">
        <div className="w-96 p-4 bg-slate-200 rounded-md shadow-2xl">
          <h1 className="font-bold font-roboto text-2xl text-center">Login</h1>

          <MyTextInput
            label="Email Address"
            name="email"
            type="email"
            placeholder="example@gmail.com"
          />

          <div className="pwd-label">
            <MyTextInput
              label="Password"
              name="password"
              type="text"
              placeholder="Enter your password..."
            />
          </div>

          <button
            type="submit"
            className="bg-orange-500 text-white w-full text-center rounded-md py-2 font-mono"
          >
            LOGIN
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
