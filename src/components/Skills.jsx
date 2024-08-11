import "../styles/Skill.css"

const Skills = () => {
    return(
    <section id="Projects">
        <h2 className="heading">My Skills</h2>

        <div className="skillsContainer">

        <div className="skills">
            <h3 className="sub-heading">Languages and Frameworks</h3>
            
            <li>
            <h3>JavaScript</h3><span class="bar"><span class="javascript"></span></span>
            </li>
            
            
            <li>
            <h3>React JS</h3><span class="bar"><span class="react"></span></span>
            </li>
            
            <li>
            <h3>Express JS</h3><span class="bar"><span class="express"></span></span>
            </li>
            
            <li>
            <h3>Node</h3><span class="bar"><span class="node"></span></span>
            </li>
            <li>
            <h3>Java</h3><span class="bar"><span class="java"></span></span>
            </li>
            <li>
            <h3>C/C++</h3><span class="bar"><span class="ccpp"></span></span>
            </li>
            
            <li>
            <h3>HTML/CSS</h3><span class="bar"><span class="html-css"></span></span>
            </li>
            
            <li>
            <h3>MongoDB</h3><span class="bar"><span class="mongodb"></span></span>
            </li>
            
            <li>
            <h3>MySQL</h3><span class="bar"><span class="mysql"></span></span>
            </li>
            
            </div>
            
            <div className="skills">
            <h3 className="sub-heading">Other Skills</h3>
            <li>
                <h3>Nginx</h3><span class="bar"><span class="nginx"></span></span>
            </li>

            <li>
                <h3>Azure</h3><span class="bar"><span class="azure"></span></span>
            </li>

            <li>
                <h3>DevOps</h3><span class="bar"><span class="devops"></span></span>
            </li>

            <li>
                <h3>Docker</h3><span class="bar"><span class="docker"></span></span>
            </li>

            <li>
                <h3>Kubernetes</h3><span class="bar"><span class="kubernetes"></span></span>
            </li>

            <li>
                <h3>Git/GitHub</h3><span class="bar"><span class="git-github"></span></span>
            </li>

            <li>
                <h3>Linux</h3><span class="bar"><span class="linux"></span></span>
            </li>
        
        </div>
        
        </div>

        
    </section>
    )
}

export default Skills;