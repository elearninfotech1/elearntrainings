import React, { Component } from "react";
import innerStyles from "./innerpage.module.css";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      phone: "",
      email: "",
    };
  }
  changeName = (e) => {
    this.setState({
      uname: e.target.value,
    });
  };
  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  changePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  subminHandler = (e) => {
    e.preventDefault();
    let { uname, phone, email } = this.state;
    let alphaExp = /^[a-zA-Z]+$/;
    let numExp = /^[0-9]+$/;
    let emailExp = /^[a-zA-Z0-9]+@[a-zA-Z]+.[a-zA-Z]+$/;

    if (uname === "") {
      document.getElementById("unameNote").innerHTML = "please enter uname";
    } else {
      if (uname.match(alphaExp)) {
        document.getElementById("unameNote").innerHTML = "";
      } else {
        document.getElementById("unameNote").innerHTML =
          "please enter charectors only";
      }
    }

    if (phone === "") {
      document.getElementById("phoneNote").innerHTML = "please enter phone";
    } else {
      if (phone.match(numExp)) {
        document.getElementById("phoneNote").innerHTML = "";
      } else {
        document.getElementById("phoneNote").innerHTML =
          "please enter digits only";
      }
    }

    if (email === "") {
      document.getElementById("emailNote").innerHTML = "please enter email id";
    } else {
      if (email.match(emailExp)) {
        document.getElementById("emailNote").innerHTML = "";
      } else {
        document.getElementById("emailNote").innerHTML =
          "please enter valid emiail format";
      }
    }
  };
  render() {
    return (
      <div className={innerStyles.contactus}>
        <div className={innerStyles.breadcrumb}>
          <h3>Contact Us</h3>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-lg-8">
              <form onSubmit={this.subminHandler}>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="uname"
                      placeholder="Name"
                      className="form-control"
                      value={this.state.uname}
                      onChange={this.changeName}
                    />
                    <div id="unameNote" className={innerStyles.errMsg}></div>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      className="form-control"
                      value={this.state.email}
                      onChange={this.changeEmail}
                    />
                    <div id="emailNote" className={innerStyles.errMsg}></div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Phone"
                      className="form-control"
                      value={this.state.phone}
                      onChange={this.changePhone}
                    />
                    <div id="phoneNote" className={innerStyles.errMsg}></div>
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="form-control"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <textarea
                      name="message"
                      placeholder="Message"
                      className="form-control"
                    ></textarea>
                    <input
                      type="submit"
                      value="Send Message"
                      className="btn btn-success"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4">
              <h6>Elearn Infotech</h6>
              <p>House No 40, Third Floor, </p>
              <p>Vittalrao Nagar,</p>
              <p> Madhapur, Hitech City</p>
              <p> Telangana- 081</p>
              <p>+91 81439 56849</p>
              <p>info@hyderabadittrainings.com</p>
            </div>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.3242008306556!2d78.3819167749361!3d17.444190283452674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb91ed2dea4c17%3A0xd49a55db035ba737!2sElearn%20Infotech%20-%20MERN%20Java%20Python%20Fullstack%20%7C%20UI%20Development%20React%20JS%20%7C%20PHP%20Web%20Development%20UI%20UX%20Courses%20Training%20Hyderabad!5e0!3m2!1sen!2sin!4v1718975240806!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="Elearn Infotech Map"
          ></iframe>
        </div>
      </div>
    );
  }
}
