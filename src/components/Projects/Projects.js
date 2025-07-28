import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import fitclub from "../../Assets/Projects/fitclub.PNG"
import notesify from '../../Assets/Projects/notesify.PNG'
import travel from "../../Assets/Projects/travel.PNG"
import aztec from "../../Assets/Projects/aztecwms.PNG"
import aztecsm from "../../Assets/Projects/aztecsm.PNG"
import fadeoclock from "../../Assets/Projects/fadeoclock.PNG"
// import suicide from "../../Assets/Projects/suicide.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aztec}
              isBlog={false}
              title="AZTEC - Warehouse Management System"
              description="A warehouse management app built with React and Firebase.
It offers real-time inventory tracking, role-based access, order handling, low stock alerts, and activity logs to streamline warehouse operations."
              
              demoLink="https://aztecwms.com"              
            />
          </Col>

        
          
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fadeoclock}
              isBlog={false}
              title="Fade'O Clock"
              description="A modern barber appointment booking app built with React Native and Firebase. FadeO'Clock lets users browse barbers, view availability, and book slots in real-time. It features user authentication, appointment tracking, and a clean mobile UI designed for ease of use."
              
              demoLink="https://fadeoclock.co.uk/"   
            />
          </Col> 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={aztecsm}
              isBlog={false}
              title="AZTEC - Attendancce Management System"
              description="An intelligent attendance management system built with React and Firebase. It features user-wise filtering, punch tracking, attendance trends, and analytics dashboards—making it easy for admins to monitor employee presence and engagement in real time."
              demoLink="https://aztecsm.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={notesify}
              isBlog={false}
              title="Notesify"
              description="A secure and responsive note-taking app built with the MERN stack.
Features include JWT-based authentication, note creation, editing, deletion, search, and pinning. Deployed on Vercel and Render for fast and reliable performance."
              ghLink="https://github.com/umer2k200/Notesify"
              demoLink="https://notesify-app-git-main-umer2k200s-projects.vercel.app/"
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel Tide"
              description="A React-based platform designed to simplify travel planning. It offers curated destinations, an intuitive interface, and real-time travel deals to enhance the user experience.Built with modern web technologies for efficiency and reliability, this platform makes travel planning seamless and enjoyable."
              ghLink="https://github.com/umer2k200/TripTide.git"
              demoLink="https://trip-tide-vq6s.vercel.app/"
            />
          </Col>
 
          
          

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitclub}
              isBlog={false}
              title="FitClub"
              description="A comprehensive Fitness App using the MERN stack (MongoDB, Express, React, Node.js) to help users achieve their fitness goals with ease. It features personalized workout plans, real-time progress tracking, and a supportive community for motivation."
              ghLink="https://github.com/umer2k200/FItFlex.git"
              demoLink="https://fit-club-react-alpha.vercel.app/"
            />
          </Col> 
          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
