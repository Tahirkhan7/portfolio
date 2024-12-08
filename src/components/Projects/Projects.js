import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import food from "../../Assets/Projects/food.png";
import task from "../../Assets/Projects/task.png";
import meal from "../../Assets/Projects/meal.png";

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
              imgPath={task}
              isBlog={false}
              title="Task Management (like JIRA)"
              description="Developed a robust Task Management System using MERN stack, enabling users to create tasks, assign subtasks, prioritize them, and track statuses. Designed a collaborative Board Management feature allowing task boards to be shared with other users, with builtin analytics for progress tracking and insights."
              ghLink="https://github.com/Tahirkhan7/project_management_frontend"
              demoLink="https://project-management-mocha.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={food}
              isBlog={false}
              title="Food Order App"
              description=" Built a feature-rich Food Ordering Application using MERN stack, enabling users to browse food items, search dishes, add them to a shared cart, and collaborate with friends to edit or add items. Implemented seamless order processing with options to add delivery addresses, select payment methods, and complete purchases, ensuring an intuitive and efficient user experience."
              ghLink="https://github.com/Tahirkhan7/food-order-online-frontend"
              demoLink="https://food-order-online-frontend.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={meal}
              isBlog={false}
              title="Meal Sharing App"
              description="Developed a feature-rich Meal Sharing App using Next.js, facilitating users to share meals with others. Integrated MongoDB to efficiently manage and store user data, including meal details. Implemented image storage and retrieval by leveraging AWS S3 buckets, ensuring reliable and scalable management of meal images."
              ghLink="https://github.com/Tahirkhan7/nextjs-meals"
              demoLink="https://nextjs-meals-six.vercel.app/"              
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
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
