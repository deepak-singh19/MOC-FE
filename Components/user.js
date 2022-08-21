import "../main.css";
import LeftProfile from "./leftprofile";
import StudentChart from "./studentChart";
import Search from "./search";
import ReactSearchBox from "react-search-box"; 


export default function User(){

    return(
        <div className=" flex flex-row w-screen h-screen">

            <LeftProfile/>

            {/* USER PAGE */}

            <div className="user flex flex-col ">

                <div className="flex flex-row flex-wrap justify-between ">

                    <div className="userInfo flex flex-col justify-around ml-8">

                        <p>Total Booked Session:  {5}</p>
                        <p>Total Attended Session: {4}</p>
                        <p>Total Hour of Session: {6} Hrs</p>
                        <p>Previous Session Date: {8399}</p>
                        <p>Upcoming Session Date: {689}</p>

                    </div>
                    <div className="mr-8">
                        <StudentChart/>
                    </div>

                </div>

                <div className="  mt-10 mx-auto ">
                    <Search/>

                </div>


            </div>
           

        </div>
    );
}