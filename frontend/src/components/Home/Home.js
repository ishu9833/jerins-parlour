import React from "react";
import './Home.css'
import Form from "./GetInTouch/Form";
import Footer from "./Footer/Footer";
import Services from "./Services/Services";
import Portfolio from './Portfolio/Portfolio';
import Testimonial from './Tastimonial/Testimonial';
import Header from "./Header/Header";
import Navbar from "./Navbar/Navbar";
import { connect } from "react-redux";

const Home = ({projects}) => {
  console.log(projects)
  return (
    <div>
      <div className="bg_pink">
      <Navbar/>
      <Header/>
      </div>
      <Services projects={projects}/>
      <Portfolio/>
      <Testimonial/>
      <Form/>
      <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.project.projects
  }
}

export default connect(mapStateToProps)(Home);
