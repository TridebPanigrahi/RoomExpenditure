import React, { useState } from "react";
import "./App.css";
import Camera from "./components/Camera";

function App() {
  const [data, setData] = useState([]);
  const handelChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  console.log(data);
  const handelSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8080/usersData", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const res = response.json();
    console.log(res);
  };
  return (
    // <>
    //   <form onSubmit={handelSubmit}>
    //     <input
    //       type="text"
    //       name="userName"
    //       placeholder="Enter Name"
    //       onChange={handelChange}
    //     />
    //     <input
    //       type="password"
    //       name="password"
    //       placeholder="Enter Password"
    //       onChange={handelChange}
    //     />
    //     <button type="submit">SUBMIT</button>
    //   </form>
    // </>
    <>
      <header className="App-header">
        <h1>Camera App</h1>
      </header>
      <main>
        <Camera />
      </main>
    </>
  );
}

export default App;
