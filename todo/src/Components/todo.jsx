import { useEffect, useState } from "react";

const Todos = () => {
  function gettingDataLS() {
    let dataLS = localStorage.getItem("data");
    if (dataLS) {
      return JSON.parse(dataLS);
    } else {
      return [];
    }
  }
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState();
  const [data, setData] = useState(gettingDataLS);

  const namechangehandler = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };

  const designationchnagehandler = (e) => {
    setDesignation(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const addMe = () => {
    setData([...data, { name, designation }]);
    setName("");
    setDesignation("");
  };

  const removeData = (i) => {
    setData(data.filter((x) => x.name !== i));
  };
  return (
    <>
      <div className="fs-1 fw-bold bg-dark text-white text-center">
       TODOS
      </div>
      <div className="d-flex justify-content-around mt-5">
        <input
          type="text"
          className="rounded border border-success p-2 border-opacity-25 w-25"
          value={name}
          onChange={namechangehandler}
          placeholder="Title..."
        />
        <input
          type="text"
          className="rounded border border-success p-2 border-opacity-25 w-25"
          value={designation}
          onChange={designationchnagehandler}
          placeholder="Description..."
        />
        <button className="btn btn-primary btn-lg" onClick={addMe}>
          Add
        </button>
      </div>
      <hr className="m-5" />

      {data.map((item) => {
        return (
          <div>
            <p className="fs-4 fw-semibold m-5 text-capitalize">
              {item.name} : <br /> <span className="mx-4"> {item.designation}</span>
              <buton
                onClick={() => {
                  removeData(item.name);
                }}
                className="remove btn btn-danger mx-4"
              >
                Delete
              </buton>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default Todos;
