import axios from "axios";
import { Card, DarkThemeToggle } from "flowbite-react";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

type Country = {
  name: {
    common: string;
  };
  capital: string;
  region: string;
  subregion: string;
  flags: {
    png: string;
  };
};

function App() {
  const [countries, setCountries] = useState<Country[]>();

  const getData = async () => {
    try {
      const res = await axios.get("https://restcountries.com/v3.1/all");
      setCountries(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        {
          email: "admin@gmail.com",
          password: "Abc!123Abc",
        },
      );
      console.log(res.data);
      toast.success("login successful");
      localStorage.setItem("token", res.data);
    } catch (error) {
      toast.error("login was failed!!!");
    }
  };

  const getAllUsers = async () => {
    axios.defaults.headers.common['x-auth-token'] = localStorage.getItem('token');
    const res = await axios.get(
      "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
    );
    console.log(res.data);
  };

  useEffect(() => {
    getData();
    login();
    getAllUsers();
    toast.error("App Started");
  }, []);

  return (
    <main className="flex min-h-screen flex-row items-center justify-center gap-2 dark:bg-gray-800 max-md:flex-col">
      {countries?.map((item, index) => {
        return (
          <Card key={index}>
            <img src={item.flags.png} alt={item.name.common} />
            <h1>{item.name.common}</h1>
            <p>{item.capital}</p>
            <p>{item.region}</p>
            <p>{item.subregion}</p>
          </Card>
        );
      })}
      <ToastContainer />
    </main>
  );
}

export default App;
