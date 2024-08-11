
import React from "react";
import "../styles/Aboutme.css"


const AboutHarish = ()=>{
    return(
        <section id="Aboutme">
        <h2 className="heading">My Journey</h2>
        <div class="timeline">
        <div class="outer">
        <div class="card">
            <div class="info">
              <h3 class="title"><div className="card_title"><div>Full Stack Developer Internship</div><div>Nov 2023 - May 2024</div></div><div className="card_title small"><div>Trusty Money</div><div>7 Months</div></div></h3>
              <ul>
                  <li>Developed and maintained web applications using the MERN stack.</li>
                  <li>Implemented CI/CD pipelines and deployed applications using Azure DevOps.</li>
                  <li>Gained industry-level experience in full stack development and DevOps practices.</li>
              </ul>
            </div>
          </div>   
          
          <div class="card">
            <div class="info">
              <h3 class="title"><div className="card_title"><div>B.Tech (ECE)</div><div>2020-2024</div></div><div className="card_title small"><div>Indian Institute of Information Technology Guwahati</div><div>CGPA:7.7</div></div></h3>
                <ul>
                    <li>Part of the core web and creative team for technical and cultural fests.</li>
                    <li>DUPC (Department Undergraduate Program Committee) member.</li>
                </ul>
            </div>
          </div>
          
          <div class="card">
            <div class="info">
              <h3 class="title"><div className="card_title"><div>Class XII</div><div>2019</div></div><div className="card_title small"><div>Vijaya Ratna Junior College</div><div>Percentage:90%</div></div></h3>
                <ul>
                    <li>Consistently high academic performance.</li>
                    <li>Strong foundation in science and mathematics.</li>
                </ul>  
            </div>
          </div>

        </div>
      </div>
        </section>
    )
}


export default AboutHarish