import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="form_container">
      <div className="form_ui">
        <h3 className="text-center heading_text">
          Let us handle your <br />
          project, professionally.
        </h3>
        <form action="#">
          <div className="dbl-field">
            <div className="field">
              <input type="text" placeholder="First Name" />
              <i className="fas fa-user"></i>
            </div>
            <div className="field">
              <input type="text" placeholder="Last Name" />
              <i className="far fa-user"></i>
            </div>
          </div>
          <div className="dbl-field">
            <div className="field">
              <input type="text" placeholder="Enter Your Email" />
              <i className="fas fa-envelope"></i>
            </div>
            <div className="field">
              <input type="text" placeholder="Enter Your Phone" />
              <i className="fas fa-phone-alt"></i>
            </div>
          </div>
          <div className="message">
            <textarea
              placeholder="write your message"
              name=""
              id=""
              cols="30"
              rows="10"
            ></textarea>
            <i className="far fa-comment-alt"></i>
          </div>
          <div className="button-area">
            <button className="custome_btn" type="submit">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
