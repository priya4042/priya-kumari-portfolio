import { FaMicrosoft, FaJsSquare, FaDatabase, FaCode, FaPlug, FaLayerGroup, FaReact, FaGitAlt, FaHtml5, FaCss3Alt } from 'react-icons/fa';

const techItems = [
  { name: '.NET Core', icon: <FaMicrosoft /> },
  { name: 'ASP.NET MVC', icon: <FaLayerGroup /> },
  { name: 'C#', icon: <FaCode /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'SQL Server', icon: <FaDatabase /> },
  { name: 'REST API', icon: <FaPlug /> },
  { name: 'jQuery', icon: <FaCode /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'Entity Framework', icon: <FaMicrosoft /> },
];

const TechMarquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-track">
        {[...techItems, ...techItems].map((item, i) => (
          <span key={i}>
            <span className="marquee-item">
              {item.icon}
              {item.name}
            </span>
            {i < techItems.length * 2 - 1 && <span className="marquee-dot" />}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
