import React from "react";

const SingleFaq = ({ item,parent }) => {
  const { question, ans, id, show ,ans1,ans2,ans3,ans4,ans5,ans6} = item || {};
  return (
    <div className="accordion-item">
      <h2 className="accordion-header" id={`heading-${id}`}>
        <button
          className={`accordion-button ${show ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${id}`}
          aria-expanded={show ? "true" : "false"}
          aria-controls={`collapse-${id}`}
        >
          {question}
        </button>
      </h2>
      <div
        id={`collapse-${id}`}
        className={`accordion-collapse collapse ${show ? "show" : ""}`}
        aria-labelledby={`heading-${id}`}
        data-bs-parent={`#${parent}`}
      >
        <div className="accordion-body">
          {ans}
          <div>{ans1}</div>
          <div>{ans2}</div>
          <div>{ans3}</div>
          <div>{ans4}</div>
          <div>{ans5}</div>
          <div>{ans6}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleFaq;
