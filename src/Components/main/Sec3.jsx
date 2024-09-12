import React from "react";
import group from "../../assets/Nigeria.png";
import Button from "../Button";
import Marquee from "react-fast-marquee";

function Sec3() {
  return (
    <div>
        <div className="mx-10">
          <div className="flex justify-center items-center flex-col mt-20">
            <h1 className="text-[#0E1674] font-bold text-5xl  mb-8">
              Trending Research
            </h1>
            <p className="mb-10 text-[#000000]">
              Gather facts and insights on topics that truly matter
            </p>
          </div>
          <Marquee>
          <div className="flex-row flex gap-4 bg-[#D9D9D9]">
            <div className="basis-2/4">
              <img src={group} alt="" srcset="" />
            </div>
            <div className="basis-2/4 flex justify-center  flex-col">
              <h1 className="text-[#575C8D] text-4xl font-bold">
                Jul 20, 2024
              </h1>
              <h1 className="text-2xl font-medium text-[#000000] mt-6">
                Nigeria is a country ranked 124th out of 137 countries in terms
                of quality of education
              </h1>
              <p className="font-normal text-base text-[#333333] mt-10 w-590 h-162">
                On July 20, 2024, a report was released, revealing that Nigeria
                ranked 124th out of 137 countries in terms of quality of
                education. The news sent shockwaves across the nation, igniting
                debates on the state of the educational system.For years,
                educators, parents, and students had voiced concerns over
                outdated curriculums, overcrowded classrooms, and insufficient
                funding.
              </p>
              <Button text="Learn more" className="w-32 h-10" />
            </div>
          </div>
          </Marquee>
        </div>
  
    </div>
  );
}

export default Sec3;
