import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import Clock from "../assets/projects/CLOCK.jpg";
import MysteryNumber from "../assets/projects/MysteryN.jpg";
import Chess from "../assets/projects/chess.jpg";
import Portofolio from "../assets/projects/portofolio.jpg";








export const HERO_CONTENT = `Portofolio`;

export const ABOUT_TEXT = `Assis devant un PC depuis petit, j'ai très vite découvert le monde du gaming et joué à plusieurs jeux (EA Sports). J'ai atteint un haut niveau sur chacun d'entre eux afin de participer à des tournois et de jouer de manière compétitive. L'outil qui me permettait de jouer m'a très vite intéressé. Le fonctionnement de beaucoup de ses concepts m'a poussé à me renseigner, jusqu'à découvrir le code, ce qui m'a donné l'envie de poursuivre cette voie après le lycée. Mes mains sont sûrement la partie de mon corps la plus sollicitée durant mes journées. Quand je quitte enfin mon PC, je reste toujours pour autant derrière un clavier 🎵. Debout derrière un ballon, je fais du basket depuis petit et j'ai joué en club pendant quelques années. Fin et rapide, on m'a attribué le rôle d'ailier.

`;

export const EXPERIENCES = [
  {
    year: "29/04/2024 - Present",
    role: "BootCamp React",
    company: "La Fabrique Du Numerique.",
    description: `Formation accélérée, orientée développement web, cette expérience m'a permis de rafraîchir et de renforcer les connaissances acquises lors de mon alternance en filière DevOps. `,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB" , "Tailwind" , 'HTML/CSS'],
  },
  {
    year: "sept-2021 oct-2022",
    role: "Alternance DEVOPS",
    company: "Terega / TeregaSolution/Cesi.",
    description: `Cette alternance était ma première expérience professionnelle en tant que développeur. La tâche principale qui m'a été confiée concernait la création d'une IHM sur un Ewon et le développement de ses fonctionnalités. `,
    technologies: ["HTML/CSS", "VisualBasic(Ewon)", "Javascript , C#"],
  },
  {
    year: "sept-2020 juin-2021",
    role: "L1 Math/Informatique",
    company: "Université UPPA",
    description: `Premier pas vers le monde de l'informatique, c'est lors de ma première année de fac que j'ai découvert l'informatique tout en développant mes connaissances en mathématiques au cours de cette double licence.`,
    technologies: ["C", "C++", "Algorithme", "HTML/CSS"],
  },

];

export const PROJECTS = [
  {
    title: "Horloge Numérique",
    image: Clock,
    description1 :
      "https://watiwares.github.io/Clock/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "NombreMystere",
    image: MysteryNumber,
    description2:
      "https://watiwares.github.io/NomreMystere/",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "jeu d'échec",
    image: Chess,
    description3:
      "https://watiwares.github.io/Chess/",
    technologies: ["HTML", "CSS", "JS"],
  },
  {
    title: "Portofolio",
    image: Portofolio,
    description4:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "React" , "Vite" , "Tailwind"],
  },
];

export const CONTACT = {
  address: "8 chemins des vignes Lescar",
  phoneNo: "07 71 04 24 20 ",
  email: "Anthonyn.cordelle@hotmail.fr",
};
