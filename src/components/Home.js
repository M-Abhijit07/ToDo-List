import { useState, useEffect } from "react";
import Cards from "./Card";
import AddCards from "./AddCard";

export default function Home() {
  const [data, setData] = useState(null);

  return (
    <>
      <img
        style={{ height: "100vh", width: "100vw" }}
        alt="background"
        src="https://picsum.photos/id/20/1920/1080"
      />
      <div
        className="container-fluid"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          height: "100vh",
          width: "100vw",
          backdropFilter: "blur(3px)",
          backgroundColor: "rgba(0,0,0,0.3)",
        }}
      >
        <div className="row w-100 h-100 d-flex justify-content-around align-items-center">
          <div className="col-md-4">
            <h3 className="dispaly-1 text-white fst-italic">
              Manage Yourself and Set Goals
            </h3>
            <AddCards data={data} setData={setData} />
          </div>
          <div className="col-md-6">
            {data ? (
              <div style={{ overflowY: "scroll", height: "60vh" }}>
                <Cards data={data} setData={setData} />
              </div>
            ) : (
              <h3 className="display-2 text-white fw-bold">
                Start Creating Goals
              </h3>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
