import React from "react";
import innerStyles from "./innerpage.module.css";
import course from "./cu-2.jpg";
const Courses = () => {
  return (
    <>
      <div className={innerStyles.breadcrumb}>
        <h3>Courses</h3>
      </div>
      <div className="container mt-5 mb-3">
        <div className="row">
          <div className="col-lg-3">
            <div className={innerStyles.bx_shadow}>
              <img src={course} alt="Course Name" />
              <h6>Web Design</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={innerStyles.bx_shadow}>
              <img src={course} alt="Course Name" />

              <h6>Web Design</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={innerStyles.bx_shadow}>
              <img src={course} alt="Course Name" />
              <h6>Web Design</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={innerStyles.bx_shadow}>
              <img src={course} alt="Course Name" />
              <h6>Web Design</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={innerStyles.bx_shadow}>
              <img src={course} alt="Course Name" />
              <h6>Web Design</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={innerStyles.bx_shadow}>
              <img src={course} alt="Course Name" />
              <h6>Web Design</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={innerStyles.bx_shadow}>
              <img src={course} alt="Course Name" />
              <h6>Web Design</h6>
            </div>
          </div>
          <div className="col-lg-3">
            <div className={innerStyles.bx_shadow}>
              <img src={course} alt="Course Name" />
              <h6>Web Design</h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
