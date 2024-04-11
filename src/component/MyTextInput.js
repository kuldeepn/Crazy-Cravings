import { useField } from "formik";

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className="">
      <label className="px-4 block mt-3 " htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className="border w-72 rounded-md focus:outline-none focus:ring-0 focus:border-orange-500 px-2 py-1 m-4"
        {...field}
        {...props}
      ></input>
      {meta.touched && meta.error ? (
        <p className="text-red-600">{meta.error}</p>
      ) : null}
    </div>
  );
};

export default MyTextInput;
