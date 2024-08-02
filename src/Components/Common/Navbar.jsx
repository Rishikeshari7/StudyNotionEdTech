import React, { useEffect, useState } from "react";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
import { NavbarLinks } from "../../Data/navbar-links";
import { NavLink, useNavigate } from "react-router-dom";
import "../../index.css";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import fetchData from "../../services/apiConnector";
import { categories } from "../../services/APIs";
import { useDispatch, useSelector } from "react-redux";
import { PiShoppingCartDuotone } from "react-icons/pi";
import BlueText from "../Common/BlueText";
import { FaCaretDown } from "react-icons/fa";
import { Logout } from "../../services/operation/authApi";
import { MdLogout } from "react-icons/md";
import { RiDashboard2Line } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [hamburger,setHamburger]=useState(false);
  const [subLinks, setSubLinks] = useState([]);
  const fetchCategories = async () => {
    try {
      const data = await fetchData("GET", categories.CATEGORIES_API);
      setSubLinks(data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    // Clear all items
    fetchCategories();
    // console.log("subLinks",subLinks)
  }, []);

  const token = localStorage.getItem("token");
  const { user } = useSelector((state) => state.user);
  // useEffect(() => {
  //   console.log("userUSeEffect", user);
  // }, [user]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className="flex z-20 h-[10vh]  justify-around items-center bg-richblack-800 border-b-[1px] border-richblack-600 py-2">
      <img className="w-[10rem]" src={Logo}></img> 
      {/* Switching icons of nav */}
      <div className="  sm:flex hidden gap-5 text-richblack-25">
        {NavbarLinks.map((data, index) =>
          data.title == "Catalog" ? (
            < >
              <div className="group relative" key={index}>
                {subLinks.length > 0 ? (
                  <p className="flex items-center gap-1 pr-3">
                    {data.title}
                    <IoIosArrowDown className="absolute right-[-0.6rem]  text-lg font-bold scale-100 group-hover:scale-0" />
                    <IoIosArrowUp className="absolute right-[-0.6rem] text-lg font-bold scale-0 group-hover:scale-100 " />
                  </p>
                ) : (
                  <p className="flex items-center gap-1 pr-3">
                    {data.title}
                    <IoIosArrowDown className="absolute right-[-0.6rem]  text-lg font-bold scale-100 " />
                  </p>
                )}

                {/* Dropdown Menu */}
                {subLinks.length > 0 && (
                  <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-800 text-xl  opacity-0 transition-all duration-300 group-hover:visible  group-hover:translate-y-[1.65em] lg:text-lg group-hover:opacity-100 lg:w-[280px]">
                    <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>

                    {subLinks.map((link, sindex) => (
                      <NavLink
                        key={sindex}
                        to={`/catalog/${link.name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`}
                      >
                        <p className="text-richblack-900 hover:bg-richblack-50 p-2 rounded-md">
                          {link.name}
                        </p>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <NavLink key={index} activeClassName="active" to={data.path}>
              <p className="">{data.title}</p>
            </NavLink>
          )
        )}
      </div>
      {!token ? (
        <div className="flex gap-3">
          <NavLink to="/login">
            <button className="bg-richblack-800 px-3 py-2 border-[1px] border-richblack-600 rounded-md text-richblack-100 hover:bg-richblack-700 hover:text-white hover:scale-95 transition-all duration-300">
              Login
            </button>
          </NavLink>
          <NavLink to="/signup">
            <button className="bg-richblack-800 px-3 py-2 border-[1px] border-richblack-600 rounded-md text-richblack-100 hover:bg-richblack-700 hover:text-white hover:scale-95 transition-all duration-300">
              Sign up
            </button>
          </NavLink>
        </div>
      ) : user && user.accountType == "Student" ? (
        <div className=" relative flex items-center gap-6">
          <PiShoppingCartDuotone className="text-richblack-100 text-3xl" />
          {/* <span className="absolute text-white -top-0 animate-bounce left-5 bg-pink-300 rounded-full text-sm font-semibold  px-1"> <BlueText text={9}/> </span> */}
          <img
            className="w-10 h-10 hover:shadow-[1px_-1px_20px_-3px] border-[3px] border-yellow-25 p-1 object-fill  rounded-full"
            src={user.image}
          ></img>
          <div className="relative group text-richblack-5">
            <FaCaretDown/>
            <div className="absolute invisible group-hover:visible flex flex-col top-[2.5rem] left-[-6rem] md:top-4 md:left-[-5rem] rounded-lg text-richblack-5 font-semibold p-2 justify-center bg-richblack-800 opacity-90 border-[1px] border-richblack-5 " >
              <NavLink to="/dashboard/my-profile"  className="flex gap-1 items-center hover:underline"> <RiDashboard2Line/> Dashboard</NavLink>
              <button className=" flex gap-1 items-center hover:underline" onClick={()=>dispatch(Logout(navigate))}> <MdLogout/> Logout</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-1"> <img
          className="w-12 h-12 hover:shadow-[1px_-1px_20px_-3px] border-[3px] border-yellow-25 p-1 object-fill  rounded-full"
          src={user.image}
        ></img>
                    <div className="relative group text-richblack-5">
            <FaCaretDown/>
            <div className="absolute invisible group-hover:visible flex flex-col top-[2.5rem] left-[-6rem] md:top-4 md:left-[-5rem] rounded-lg text-richblack-5 font-semibold p-2 justify-center bg-richblack-800 opacity-90 border-[1px] border-richblack-5 " >
              <NavLink to="/dashboard/my-profile"  className="flex gap-1 items-center hover:underline"> <RiDashboard2Line/> Dashboard</NavLink>
              <button className=" flex gap-1 items-center hover:underline" onClick={()=>dispatch(Logout(navigate))}> <MdLogout/> Logout</button>
            </div>
          </div>
        </div>
       
      )}
      {
        token && <p className=" block sm:hidden text-[2rem] text-richblack-5 " onClick={()=>setHamburger(!hamburger)}><RxHamburgerMenu className="absolute top-10 right-14 " /></p>
      
      }
      {
         hamburger && <div className="block sm:hidden absolute top-[10vh] right-0  bg-richblack-800 h-[50vh] border-l-[1px] border-richblack-200 w-[12rem] bg:blur-md" > 
              <div className="flex sm:hidden h-full justify-center items-center flex-col  gap-5 text-richblack-25">
        {NavbarLinks.map((data, index) =>
          data.title == "Catalog" ? (
            < >
              <div className="group relative" key={index}>
                {subLinks.length > 0 ? (
                  <p className="flex items-center gap-1 pr-3">
                    {data.title}
                    <IoIosArrowDown className="absolute right-[-0.6rem]  text-lg font-bold scale-100 group-hover:scale-0" />
                    <IoIosArrowUp className="absolute right-[-0.6rem] text-lg font-bold scale-0 group-hover:scale-100 " />
                  </p>
                ) : (
                  <p className="flex items-center gap-1 pr-3">
                    {data.title}
                    <IoIosArrowDown className="absolute right-[-0.6rem]  text-lg font-bold scale-100 " />
                  </p>
                )}

                {/* Dropdown Menu */}
                {subLinks.length > 0 && (
                  <div className="invisible absolute left-[50%] top-[50%] z-[1000] flex w-[200px] translate-x-[-50%] translate-y-[3em] flex-col rounded-lg bg-richblack-5 p-4 text-richblack-800 text-xl  opacity-0 transition-all duration-300 group-hover:visible  group-hover:translate-y-[1.65em] lg:text-lg group-hover:opacity-100 lg:w-[280px]">
                    <div className="absolute left-[50%] top-0 -z-10 h-6 w-6 translate-x-[80%] translate-y-[-40%] rotate-45 select-none rounded bg-richblack-5"></div>

                    {subLinks.map((link, sindex) => (
                      <NavLink
                        key={sindex}
                        to={`/catalog/${link.name
                          .split(" ")
                          .join("-")
                          .toLowerCase()}`}
                      >
                        <p className="text-richblack-900 hover:bg-richblack-50 p-2 rounded-md">
                          {link.name}
                        </p>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <NavLink key={index} activeClassName="active" to={data.path}>
              <p className="">{data.title}</p>
            </NavLink>
          )
        )}
      </div>
        </div>
      }
    </div>
  );
};

export default Navbar;
