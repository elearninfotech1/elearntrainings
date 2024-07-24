import React from "react";
import innerStyles from "./innerpage.module.css";
import course from "./cu-2.jpg";
import banner from "./DESK1-min.jpg";
const Home = () => {
  return (
    <main className={innerStyles}>
      <section>
        <div>
          <img src={banner} alt="Banner" className="w-100" />
        </div>
      </section>
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className={`${innerStyles.title} mb-3`}>
                Welcome to <span>Elearn Infotech</span>
              </h1>
              <p>
                Hyderabad IT Trainings is a Hyderabad based IT Software Training
                & Recruitment Company delivering classroom and online trainings
                in India, USA and UK, Australia, Canada, Singapore. Being the
                leader in Software courses classroom training & online training
                sector, Hyderabad IT Trainings holds the top position in short
                time. Our core values are providing high quality and project
                oriented training at affordable fees. We offer classroom and
                online training on all technologies which are in high demand.
                All our trainers are IT professionals with rich experience.
              </p>

              <p>
                Hyderabad IT Trainings is a Hyderabad based IT Software Training
                & Recruitment Company delivering classroom and online trainings
                in India, USA and UK, Australia, Canada, Singapore. Being the
                leader in Software courses classroom training & online training
                sector, Hyderabad IT Trainings holds the top position in short
                time. Our core values are providing high quality and project
                oriented training at affordable fees. We offer classroom and
                online training on all technologies which are in high demand.
                All our trainers are IT professionals with rich experience.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={`${innerStyles.bg_main} py-4`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className={`${innerStyles.title} mb-3`}>
                Our <span>Courses</span>
              </h1>
            </div>
          </div>
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
      </section>
    </main>
  );
};

export default Home;
