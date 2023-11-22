import {useState} from "react";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";
import card5 from "../assets/card5.png";
import card6 from "../assets/card6.png";
import seeMore from "../assets/seeMore.svg"
const questions = [
  {
    id: 3457,
    answer:
      "High-end, custom residential renovaters serving Fraser Valley homeowners.",
    image: card1,
  },
  {
    id: 7336,
    answer:
      "Accounting and tax services characterized by quality, reliability and trust.",
    image: card2,
  },
  {
    id: 8832,

    answer:
      "JSBlockchain pioneers bringing transparency, trust, and security to supply.X",
    image: card3,
  },
  {
    id: 1297,
    answer:
      "Business savvy tech experts helping forward thinking companies get things done.",
    image: card4,
  },
  {
    id: 9103,
    answer:
      "Vancouver's tower crane rental service and support leader since 1974.",
    image: card5,
  },
  {
    id: 2002,
    answer:
      "Results-oriented, responsive and flexible full service civil engineering firm.",
    image: card6,
  },
];

const Work = () => {
  const [selectionID, setSelectionID] = useState(null);
  function clickHandler(id) {
    setSelectionID(id !== selectionID ? id : null);
  }
  return (
    <>
      <div>
        <div className="worktitle">
          <p className="text-center fs-2 fw-bolder">My Recent Work</p>
          <p className="text-center fs-5 fw-bold">
            Here are a few past design projects I've worked on. Want to see
            more?
            <a href="/"> Email me.</a>
          </p>
        </div>

        <div className="flashcards mx-auto ">
          {questions.map((question) => (
            <div
              key={question.id}
              className={selectionID === question.id ? "selected" : ""}
              onMouseEnter={() => clickHandler(question.id)}
            >
              <p>
                {selectionID === question.id ? (
                  question.answer
                ) : (
                  <img src={question.image} alt="" className="cardimage" />
                )}
              </p>
            </div>
          ))}
        </div>

        <div className="seeMorebtn  mx-auto mt-5 mb-5">
          <a href="/" className="rounded-pill text-center  p-3">
            <img src={seeMore} alt="" className="seeMoreImage" />
            See more on Dribbble
          </a>
        </div>
      </div>
    </>
  );
};

export default Work;