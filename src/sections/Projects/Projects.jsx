import styles from './ProjectsStyles.module.css';
import discord from '../../assets/discord-fitnessbot.png';
import evalme from '../../assets/evalme.png';
import fitHub from '../../assets/fithub2.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={discord}
          link="https://github.com/praveensonesha/Discord-FitnessBot.git"
          h3="Discord Fitness Bot"
          p="Fitness Coach Bot"
        />
        <ProjectCard
          src={evalme}
          link="https://github.com/praveensonesha/bitroot-backend.git"
          h3={<a href="https://evalmeorg.netlify.app/" target="_blank" rel="noopener noreferrer">Eval Me</a>}
          p="Recruiter-Test Evaluator Hub"
        />
        <ProjectCard
          src={fitHub}
          link="https://github.com/praveensonesha/FitHub.git"
          h3="FitHub"
          p="Gym Management System"
        />
        
      </div>
    </section>
  );
}

export default Projects;
