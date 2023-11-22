import "./style.css";
import jinah from "./imran-khan.png";
import flag from "./pti-flag.png";
const Tribute = () => {
  return (
    <>
      <div className=" maincontainer ">
        <div className="title bg-dark">
          <div>
            <h1 className="text-center ">
              <span className="text-success">Imran </span>
              <span className="text-danger">Khan</span>
              <img src={flag} className="flagImg" alt="" />
            </h1>
          </div>
          <div>
            <h2 className="text-white text-center mt-5 pb-5 ">1952-Present</h2>
          </div>
        </div>
        <div className="row bg-light">
          <div className="col text-center">
            <p className="fs-1 mt-5 pt-4 ">
              I have always believed that one should not be scared of losing,I
              think that really is the key.
            </p>
          </div>
          <div className="col mx-auto h-32">
            <img className="khanImage  " src={jinah} alt="img" />
          </div>
        </div>
        <div className="biography">
          <h1 className="text-white  text-center mb-4">BIOGRAPHY</h1>
          <p className="  text-center text-white d-flex mx-auto lh-lg">
            Imran Ahmad Khan Niazi ( عمران احمد خان نیازی; born 5 October 1952)
            is a Pakistani politician and former cricketer who served as the
            22nd prime minister of Pakistan from August 2018 until April 2022.
            He is the founder and chairman of the political party Pakistan
            Tehreek-e-Insaf (PTI). Khan graduated from Keble College, Oxford. He
            began his international cricket career in a 1971 Test series against
            England. Khan played until 1992, served as the team's captain
            intermittently between 1982 and 1992, and won the 1992 Cricket World
            Cup, Pakistan's only victory in the competition. Considered one of
            cricket's greatest all-rounders, Khan was later inducted into the
            ICC Cricket Hall of Fame.
          </p>
        </div>
      </div>
    </>
  );
};

export default Tribute;
