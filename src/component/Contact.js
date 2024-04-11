const Contact = () => {
  return (
    <div className="mt-8 max-w-sm mx-auto">
      <h1 className="font-bold text-2xl text-center">Contact Us</h1>
      <div className="mt-16 bg-blue-200 rounded-lg shadow-2xl w-96 p-4">
        <label className="block px-4 mt-5"> Name </label>
        <input
          placeholder="name"
          className=" px-2 py-1 m-4 w-72 rounded-md"
        ></input>
        <label className="block px-4"> Email </label>
        <input
          type="email"
          placeholder="email"
          className="px-2 py-1 m-4 w-72 rounded-md"
        ></input>
        <label className="block px-4"> Message </label>
        <input
          type="textbox"
          placeholder="message"
          className="px-2 py-5 m-4 w-72 rounded-md"
        ></input>
        <button className="py-2 bg-orange-500 text-white w-full rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
