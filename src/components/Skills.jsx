import "../styles/Skill.css";

const Skills = () => {
    return (
        <section id="Skills">
            <h2 className="heading">My Skills</h2>

            <div className="skillsContainer">

                {/* Languages & Frameworks */}
                <div className="skills">
                    <h3 className="sub-heading">Languages & Frameworks</h3>

                    <li>
                        <h3>Python</h3>
                        <span className="bar"><span className="python"></span></span>
                    </li>

                    <li>
                        <h3>JavaScript</h3>
                        <span className="bar"><span className="javascript"></span></span>
                    </li>

                    <li>
                        <h3>React JS</h3>
                        <span className="bar"><span className="react"></span></span>
                    </li>

                    <li>
                        <h3>Node JS</h3>
                        <span className="bar"><span className="node"></span></span>
                    </li>

                    <li>
                        <h3>Express JS</h3>
                        <span className="bar"><span className="express"></span></span>
                    </li>

                    <li>
                        <h3>C/C++</h3>
                        <span className="bar"><span className="ccpp"></span></span>
                    </li>

                    <li>
                        <h3>HTML/CSS</h3>
                        <span className="bar"><span className="html-css"></span></span>
                    </li>

                </div>

                {/* Data Science & ML */}
                <div className="skills">
                    <h3 className="sub-heading">Data Science & ML</h3>

                    <li>
                        <h3>Pandas & NumPy</h3>
                        <span className="bar"><span className="pandas"></span></span>
                    </li>

                    <li>
                        <h3>Matplotlib & Seaborn</h3>
                        <span className="bar"><span className="visualization"></span></span>
                    </li>

                    <li>
                        <h3>Scikit-learn</h3>
                        <span className="bar"><span className="sklearn"></span></span>
                    </li>

                    <li>
                        <h3>Machine Learning</h3>
                        <span className="bar"><span className="machine-learning"></span></span>
                    </li>

                    <li>
                        <h3>KNN & Decision Trees</h3>
                        <span className="bar"><span className="knn-dt"></span></span>
                    </li>

                    <li>
                        <h3>Random Forest</h3>
                        <span className="bar"><span className="random-forest"></span></span>
                    </li>

                    <li>
                        <h3>AdaBoost & Gradient Boosting</h3>
                        <span className="bar"><span className="boosting"></span></span>
                    </li>

                </div>

                {/* Cloud, DevOps & Databases */}
                <div className="skills">
                    <h3 className="sub-heading">Cloud, DevOps & Databases</h3>

                    <li>
                        <h3>Azure</h3>
                        <span className="bar"><span className="azure"></span></span>
                    </li>

                    <li>
                        <h3>DevOps</h3>
                        <span className="bar"><span className="devops"></span></span>
                    </li>

                    <li>
                        <h3>Docker</h3>
                        <span className="bar"><span className="docker"></span></span>
                    </li>

                    <li>
                        <h3>Kubernetes</h3>
                        <span className="bar"><span className="kubernetes"></span></span>
                    </li>

                    <li>
                        <h3>Nginx</h3>
                        <span className="bar"><span className="nginx"></span></span>
                    </li>

                    <li>
                        <h3>MongoDB</h3>
                        <span className="bar"><span className="mongodb"></span></span>
                    </li>

                    <li>
                        <h3>MySQL</h3>
                        <span className="bar"><span className="mysql"></span></span>
                    </li>

                    <li>
                        <h3>Git/GitHub</h3>
                        <span className="bar"><span className="git-github"></span></span>
                    </li>

                    <li>
                        <h3>Linux</h3>
                        <span className="bar"><span className="linux"></span></span>
                    </li>

                </div>

            </div>
        </section>
    );
};

export default Skills;