import React from "react";
import { useState } from "react";

const Home = () => {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(method, url, JSON.stringify(JSON.parse(body)));
  };
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div>
            <select
              className="border rounded-2xl p-2 m-2 bg-blue-400"
              value={method}
              onChange={(e) => setMethod(e.target.value)}
            >
              {["GET", "POST", "PUT", "DELETE", "PATCH"].map((m) => (
                <option className="text-center" key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <input
              type="text"
              className="border-1 rounded-2xl p-2 m-2 w-2xl"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <button
              type="submit"
              className="border-1 rounded-2xl p-2 m-2 bg-green-400 font-semibold"
            >
              Send
            </button>
          </div>
          <div className="flex">
            <textarea
              className="flex-1 h-40 border-1 rounded-2xl p-2"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Home;
