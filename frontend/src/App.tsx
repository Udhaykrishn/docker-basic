import { useState } from "react";
import axios from "axios";
import "./App.css";
import Input from "./components/Input";
import toast, { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:3005";

type Data = {
  first: string;
  last: string;
};

function App() {

  const [data, setData] = useState<Data>({
    first: "",
    last: "",
  });

  const loginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { first, last } = data;

    try {
      const res = await axios.post('/login', { first, last });
      const responseData = res.data;
      if (responseData.error) {
        toast.error(responseData.error);
      } else {
        toast.success("Everything is Good")
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
      <form onSubmit={loginSubmit}>
        <Input
          type="text"
          name="first"
          placeholder="Enter First Name"
          setInputData={(value) => setData({ ...data, first: value as string })}
          value={data.first}
        />
        <Input
          type="text"
          name="last"
          placeholder="Enter Last Name"
          setInputData={(value) => setData({ ...data, last: value as string })}
          value={data.last}
        />
        <button type="submit">Click</button> 
      </form>
    </>
  );
}

export default App;
