import React from "react";
import BlueText from "../Components/Common/BlueText";
import abt1 from "../assets/Images/aboutus1.webp";
import abt2 from "../assets/Images/aboutus2.webp";
import abt3 from "../assets/Images/aboutus3.webp";
import "../index.css";
import OrangeText from "../Components/Common/OrangeText";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
import FoundingStory from "../assets/Images/FoundingStory.png";
import StatsData from "../Components/About/StatsData";
import GridSection from "../Components/About/GridSection";
import AboutUsForm from "../Components/About/AboutUsForm";
import RevieBox from "../Components/Home/RevieBox";
import Footer from "../Components/Common/Footer";

const AboutPage = () => {
  return (
    <div className="">
      {/* SECTION1 */}
      <div className=" bg-richblack-800 flex justify-center items-center">
        <div className="relative w-10/12 flex justify-center items-center flex-col gap-5 my-20 mb-40 sm:mb-20 ">
          <p className="text-richblack-5 text-center font-semibold text-4xl leading-[2.7rem] ">
            Driving Innovation in Online Education for a <br />
            <BlueText text={"Brighter Future"} />{" "}
          </p>
          <p className="text-richblack-300 lg:w-[70%] text-center md:mb-5 lg:mb-7">
            Studynotion is at the forefront of driving innovation in online
            education. We're passionate about creating a brighter future by
            offering cutting-edge courses, leveraging emerging technologies, and
            nurturing a vibrant learning community.
          </p>
          <div className="h-[30px] md:h-[50px] lg:h-[150px]"></div>
          <div className="absolute top-[30%]">
            <div className="  codeblock1"></div>
          </div>

          <div className=" absolute  bottom-[-50%] sm:bottom-[-50%] grid grid-cols-3 gap-5">
            <img src={abt1}></img>
            <img src={abt2}></img>
            <img src={abt3}></img>
          </div>
        </div>
      </div>
      <div className=" bg-richblack-900 flex justify-center items-center pt-24 md:pt-44 pb-14 md:pb-20 border-b-[1px] border-richblack-600">
        <p className=" w-10/12 text-center text-3xl md:text-4xl  text-richblack-5 font-semibold md:leading-[3rem] ">
          <span className="text-richblack-400 mb-5 mr-1 italic ">"</span> We are
          passionate about revolutionizing the way we learn. Our innovative
          platform <BlueText text={"combines technology,"} />{" "}
          <span className="orange">expertise</span> , and community to create an{" "}
          <OrangeText text={"unparalleled educational experience."} />
          <span className="text-richblack-400 mb-5 italic">"</span>
        </p>
      </div>
      {/* section2 */}
      <div className=" text-richblack-5 flex flex-col gap-20 md:gap-36 justify-center items-center py-24 bg-richblack-900">
        <div className="w-10/12  flex flex-col lg:flex-row justify-between gap-8 items-center">
          <div className="flex flex-col gap-5">
            <h2 className="redGradient text-4xl font-bold">
              Our Founding Story{" "}
            </h2>
            <p className="text-richblack-300 lg:w-[70%]">
              Our e-learning platform was born out of a shared vision and
              passion for transforming education. It all began with a group of
              educators, technologists, and lifelong learners who recognized the
              need for accessible, flexible, and high-quality learning
              opportunities in a rapidly evolving digital world.
            </p>
            <p className="text-richblack-300 lg:w-[70%]">
              As experienced educators ourselves, we witnessed firsthand the
              limitations and challenges of traditional education systems. We
              believed that education should not be confined to the walls of a
              classroom or restricted by geographical boundaries. We envisioned
              a platform that could bridge these gaps and empower individuals
              from all walks of life to unlock their full potential.
            </p>
          </div>
          <div className="relative">
            <div className=" absolute codeblock3"></div>
            <img
              className="w-[105rem] mt-2 brightness-100"
              src={FoundingStory}
            ></img>
          </div>
        </div>
        <div className="w-10/12  flex flex-col lg:flex-row justify-between gap-14 lg:gap-[22rem] items-center  ">
          <div className="flex flex-col gap-3 md:gap-5">
            <p className=" text-4xl font-bold">
              {" "}
              <OrangeText text={"Our Vision"} />{" "}
            </p>
            <p className="text-richblack-300">
              With this vision in mind, we set out on a journey to create an
              e-learning platform that would revolutionize the way people learn.
              Our team of dedicated experts worked tirelessly to develop a
              robust and intuitive platform that combines cutting-edge
              technology with engaging content, fostering a dynamic and
              interactive learning experience.
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-5  ">
            <p className=" text-4xl font-bold flex ">
              {" "}
              <BlueText text={"Our Mission"} />{" "}
            </p>
            <p className="text-richblack-300    ">
              Our mission goes beyond just delivering courses online. We wanted
              to create a vibrant community of learners, where individuals can
              connect, collaborate, and learn from one another. We believe that
              knowledge thrives in an environment of sharing and dialogue, and
              we foster this spirit of collaboration through forums, live
              sessions, and networking opportunities.
            </p>
          </div>
        </div>
      </div>
      {/* {STATS DATA} */}
      <StatsData />
      {/* GRID SECTION */}
      <GridSection />
      {/* FORM */}
      <AboutUsForm />
      {/* REVIEW */}
      <div className=" bg-richblack-900 flex py-20 pb-14 justify-center item-center">
        <div className=" w-10/12 flex flex-col">
          <p className="text-richblack-5 text-4xl font-semibold mx-auto">
            Reviews from other learners
          </p>
          <div className="my-10">
            <RevieBox />
          </div>
        </div>
      </div>
      {/* FOOTER */}
      <Footer/>
    </div>
  );
};

export default AboutPage;
