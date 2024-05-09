import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { animate, motion } from "framer-motion";

function Myexperience() {
  const animations = {
    h1: {
      initial: {
        y: "-10vh", // Move up by 10% of viewport height initially
        opacity: 0,
      },
      whileInView: {
        y: 0, // Return to original position
        opacity: 1,
        transition: {
          duration: 2,
        },
      },
    },
  };

  return (
    <>
      <div
        id="myexperience"
        className="experience flex flex-col justify-center items-center gap-2 text-white bg-[#000111] w-full max-h-[100vh] p-8 md:p-16 lg:p-24 sm:mt-9"
      >
        <div class="text-lg md:text-xl lg:text-2xl font-semibold md:mt-0 mt-[30vh]">
          <motion.h1 {...animations.h1}>
            <h1>My Experience</h1>
          </motion.h1>
        </div>
        <div class="text-xl md:text-3xl lg:text-4xl font-bold pb-3">
          <motion.h1 {...animations.h1}>
            <h1 class="flex gap-3">
              Where <span class="text-[#88ab8e]">I have worked</span>
            </h1>
          </motion.h1>
        </div>

        <div className="w-full">
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                align="right"
                variant="body2"
                color="#b3b3b8"
                fontWeight={"bold"}
              >
                Dec 2023 - March 2024
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot className="h-12vw md:h-10vh w-12vw md:w-10vw"></TimelineDot>

                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography variant="h6" component="span">
                  <div className="text-[2rem] font-semibold flex gap-2">
                    Freelance <span className="text-[#88ab8e]">Project</span>
                  </div>
                </Typography>
                <Typography>
                  <div className="text-[1.1rem] text-[#dcdcdc] bg-[#191919] border-2 border-y-white border-x-black font-medium rounded-xl p-6 max-w-[50vw] sm:max-w-[70vw] lg:max-w-[50vw]">
                    In my freelance role as a frontend developer, I leveraged my
                    expertise in HTML, CSS, JavaScript, React.js, Tailwind CSS,
                    and Bootstrap to deliver high-quality and responsive user
                    interfaces. <br /> Collaborating closely with clients and
                    project stakeholders.
                  </div>
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: "auto 0" }}
                variant="body2"
                color="#b3b3b8"
                fontWeight={"bold"}
              >
                2022 - 2025
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot className="h-12vw md:h-10vh w-12vw md:w-10vw"></TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <Typography>
                  <div className="text-[2rem] font-semibold flex gap-2">
                    <span className="text-[#88ab8e]">College</span> Student
                  </div>
                </Typography>
                <Typography>
                  <div className="text-[1rem] text-start text-[#dcdcdc] bg-[#191919] border-2 border-y-white border-x-black font-medium rounded-xl p-6 max-w-[50vw] sm:max-w-[70vw] lg:max-w-[80vw]">
                    I'm a passionate second-year BCA student diving deep into
                    Full Stack Web Development. With skills spanning front-end
                    to back-end technologies, I create seamless digital
                    experiences that blend creativity with functionality.
                    Explore my projects and let's connect to collaborate on
                    exciting ventures!
                  </div>
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </div>
    </>
  );
}

export default Myexperience;
