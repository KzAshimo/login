import { useEffect, useState } from "react";

const API_URL = 'http://localhost:3000/';

interface Express {
  id: number;
  username: string;
  password: string;
  group: number;
}

const App = () => {

  const [express, setExpress] = useState<Express[]>([]);

  useEffect(() => {
    fetch(API_URL)
      .then((responseData) => {
        if (!responseData.ok) {
          throw new Error("Network response was not ok");
        }
        return responseData.json();
      })
      .then((result) => {
        setExpress(result);
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);

  return (
    <>
      <h1>Express Data</h1>
      <div>
        {express.map((exile) => (
          <ul key={exile.id}>
            <li>ID: {exile.id}</li>
            <li>Username: {exile.username}</li>
            <li>Password: {exile.password}</li>
            <li>Group: {exile.group}</li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default App;
