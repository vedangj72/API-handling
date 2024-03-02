import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import useFetchdata from "./hooks/useFetchdata";

function App() {
  const { loading, data, error } = useFetchdata(
    "https://jsonplaceholder.typicode.com/photos"
  );

  return (
    <div className="App">
      <h1>Welcome to the photo gallery</h1>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Something went wrong</h1>}
      <div>
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className=" text-center m-4"
              style={{ border: "2px solid black", borderRadius: "300px" }}
            >
              {/* <ul className="text-start "> {item.id}</ul> */}
              <p>{item.title}</p>
              <img
                src={item.thumbnailUrl}
                alt={item.albumId}
                className=" m-3"
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
