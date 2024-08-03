import { Container, Row, Col } from "react-bootstrap";
import { FaReact, FaPython, FaGithub } from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiOpenai } from "react-icons/si";
import {
  TbBrandCSharp,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandBootstrap,
} from "react-icons/tb";
import { motion } from "framer-motion";

function Skills() {
  const animationProps = {
    whileHover: { scale: 1.3 },
    transition: { type: "tween", stiffness: 200, damping: 10 },
  };

  return (
    <Container>
      <Row>
        <Col className="skill--column">
          <motion.div {...animationProps}>
            <FaReact className="skills--icons" />
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col className="skill--column">
          <motion.div {...animationProps}>
            <VscAzure className="skills--icons" />
          </motion.div>
        </Col>
        <Col className="skill--column">
          <motion.div {...animationProps}>
            <SiOpenai className="skills--icons" />
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col className="skill--column">
          <motion.div {...animationProps}>
            <FaPython className="skills--icons" />
          </motion.div>
        </Col>
        <Col className="skill--column">
          <motion.div {...animationProps}>
            <TbBrandCSharp className="skills--icons" />
          </motion.div>
        </Col>
        <Col className="skill--column">
          <motion.div {...animationProps}>
            <TbBrandTypescript className="skills--icons" />
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col className="skill--column">
          <motion.div {...animationProps}>
            <TbBrandJavascript className="skills--icons" />
          </motion.div>
        </Col>
        <Col className="skill--column">
          <motion.div {...animationProps}>
            <TbBrandBootstrap className="skills--icons" />
          </motion.div>
        </Col>
      </Row>
      <Row>
        <Col className="skill--column">
          <motion.div {...animationProps}>
            <FaGithub className="skills--icons" />
          </motion.div>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
