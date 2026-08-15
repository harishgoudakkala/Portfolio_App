import React from "react";
import "../styles/Aboutme.css";

const AboutHarish = () => {
    return (
        <section id="MyJourney">
            <h2 className="heading">My Journey</h2>

            <div className="timeline">
                <div className="outer">

                    {/* TCS */}
                    <div className="card">
                        <div className="info">
                            <h3 className="title">
                                <div className="card_title">
                                    <div>Associate Systems Engineer</div>
                                    <div>Aug 2024 - Present</div>
                                </div>

                                <div className="card_title small">
                                    <div>Tata Consultancy Services</div>
                                    <div>Present</div>
                                </div>
                            </h3>

                            <ul>
                                <li>
                                    Worked with QA teams and the AI research division
                                    to test Microsoft Copilot's integration with
                                    Microsoft PowerPoint.
                                </li>
                                <li>
                                    Designed and executed 50+ test cases for
                                    AI-generated slides and contextual recommendations.
                                </li>
                                <li>
                                    Identified and reported UX, performance, and
                                    semantic issues affecting AI-generated content.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Trusty Money */}
                    <div className="card">
                        <div className="info">
                            <h3 className="title">
                                <div className="card_title">
                                    <div>Full Stack Developer Internship</div>
                                    <div>Nov 2023 - May 2024</div>
                                </div>

                                <div className="card_title small">
                                    <div>Trusty Money</div>
                                    <div>7 Months</div>
                                </div>
                            </h3>

                            <ul>
                                <li>
                                    Developed and maintained web applications
                                    using the MERN stack.
                                </li>
                                <li>
                                    Implemented CI/CD pipelines and deployed
                                    applications using Azure DevOps.
                                </li>
                                <li>
                                    Gained industry-level experience in full
                                    stack development and DevOps practices.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* B.Tech */}
                    <div className="card">
                        <div className="info">
                            <h3 className="title">
                                <div className="card_title">
                                    <div>B.Tech (ECE)</div>
                                    <div>2020 - 2024</div>
                                </div>

                                <div className="card_title small">
                                    <div>
                                        Indian Institute of Information
                                        Technology Guwahati
                                    </div>
                                    <div>CGPA: 7.7</div>
                                </div>
                            </h3>

                            <ul>
                                <li>
                                    Part of the core web and creative team for
                                    technical and cultural fests.
                                </li>
                                <li>
                                    Served as a member of the Departmental
                                    Undergraduate Programme Committee (DUPC).
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Class XII */}
                    <div className="card">
                        <div className="info">
                            <h3 className="title">
                                <div className="card_title">
                                    <div>Class XII</div>
                                    <div>2019</div>
                                </div>

                                <div className="card_title small">
                                    <div>Vijaya Ratna Junior College</div>
                                    <div>Percentage: 90%</div>
                                </div>
                            </h3>

                            <ul>
                                <li>
                                    Consistently high academic performance.
                                </li>
                                <li>
                                    Strong foundation in science and mathematics.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutHarish;