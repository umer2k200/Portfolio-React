import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
import fitclub from "../../Assets/Projects/fitclub.PNG"
import taskmanager from "../../Assets/Projects/taskmanager.PNG"
import travel from "../../Assets/Projects/travel.PNG"
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
              imgPath={taskmanager}
              isBlog={false}
              title="Task Manager"
              description="A React Native task manager designed to streamline daily productivity. It features an intuitive interface for adding and completing tasks, making task management simple and effective. Users can track daily progress, mark tasks as complete, and stay organized with ease."
              ghLink="https://github.com/umer2k200/Task-Manager.git"
              demoLink="https://taskmanager-cwywnzu37-umer2k200s-projects.vercel.app/"
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
{/* 
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
