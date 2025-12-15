import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import warningIcon from "../../assets/error.svg";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const SignUpForm = () => {
  const initialValues: FormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .max(30, "Maximum 30 characters")
      .required("First Name cannot be empty"),

    lastName: Yup.string()
      .max(50, "Maximum 50 characters")
      .required("Last Name cannot be empty"),

    email: Yup.string()
      .email("Looks like this is not an email")
      .required("Email is required"),

    password: Yup.string()
      .min(8, "Minimum 8 symbols")
      .required("Password cannot be empty"),
  });

  const fields: Array<{
    name: keyof FormValues;
    placeholder: string;
    type: string;
  }> = [
    { name: "firstName", placeholder: "First Name", type: "text" },
    { name: "lastName", placeholder: "Last Name", type: "text" },
    { name: "email", placeholder: "Email Address", type: "email" },
    { name: "password", placeholder: "Password", type: "password" },
  ];

  const baseInputClasses =
    "p-[15px_0px_15px_32px] w-69.75 md:w-115 rounded-[5px] text-[14px] font-semibold leading-6.5 tracking-[0.25px] outline-none focus:border-[#5E54A4]";

  return (
    <div className="p-6 md:p-10 bg-white rounded-[10px] shadow-[0px_8px_#00000025] flex flex-col items-center justify-center">
      <Formik<FormValues>
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values, actions) => {
          console.log("Submitted:", values);
          actions.resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-5">
            {fields.map(({ name, placeholder, type }) => (
              <div key={name} className="relative">
                <Field
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  className={`${baseInputClasses} ${
                    errors[name] && touched[name]
                      ? "border-2 border-[#FF7979] text-[#FF7979]"
                      : "border border-[#DEDEDE]"
                  }`}
                />

                {errors[name] && touched[name] && (
                  <img
                    src={warningIcon}
                    alt="error"
                    className="absolute right-6.75 top-7.5 -translate-y-1/2 w-6 h-6"
                  />
                )}

                <ErrorMessage
                  name={name}
                  component="div"
                  className="text-[#FF7979] text-[11px] text-right mt-1.5"
                />
              </div>
            ))}

            <button
              type="submit"
              className="w-69.75 md:w-115 h-14 bg-[#38CC8B] text-white font-semibold text-[15px] tracking-[1px] rounded-[5px] hover:bg-[#77E2B3] transition mb-2"
            >
              CLAIM YOUR FREE TRIAL
            </button>
          </Form>
        )}
      </Formik>

      <p className="text-[11px] text-[#BAB7D4] leading-6.5 md:w-auto w-62.25">
        By clicking the button, you are agreeing to our{" "}
        <span className="text-[#FF7979] font-bold cursor-pointer">
          Terms and Services
        </span>
      </p>
    </div>
  );
};

export default SignUpForm;
