import React from "react";
import Group from "../assets/grou.png";
import "./styles/SectionView.scss";
// import AddForm from "./AddForm";

const CustomerView = () => {
  // const [view, setView] = useState(true);

  const handleChange = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div className="section_page">
        <div className="container flex">
          {/* {view && <AddForm />} */}

          <div className="left">
            <img src={Group} alt="img" id="img_small" />
          </div>

          <div className="right">
            <h5>Tolu & Joy’s Experience</h5>
            <h6>CUSTOMER</h6>
            <p>
              I had the best experience shopping with vasiti. Usability of the
              website was great, very good customer service, an all round great
              experience. I would definately be coming back! I had the best
              experience shopping with vasiti. Usability of the website was
              great, very good customer service, an all round great experience.
              I would definately be coming back!
            </p>
            <button onClick={handleChange}>
              Share your own story!
              <svg
                width="297"
                height="12"
                viewBox="0 0 297 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 11.2012C71.3333 5.86791 228.8 -3.19875 296 3.20125"
                  stroke="#FF5C00"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerView;
