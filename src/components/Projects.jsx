import React from "react";
import "../styles/projects.css"
import GoMeme from "../assets/GoMeme.png";
import TaskTrack from "../assets/TaskTrack.png";
import WeatherApp from "../assets/WeatherApp.png";
import WebsiteMarker from "../assets/WebsiteMarker.png";
import Tesla from "../assets/Tesla.png";


const Projects = ()=>{

    const handleVisit = ()=>{
        window.open("https://task-track-five.vercel.app/");
    }

    return(
        <section id="Projects">
            <h2 className="heading">Projects</h2>
            
                <div class="project_card-container">
                    <div class="project_card">
                        <div class="project_card-content">
                            <h2 class="project_card-title">Task Track</h2>
                            <p class="project_card-description">A task management tool designed to help you organize and prioritize your work efficiently.</p>
                            <div class="project_card-image"> <img src={TaskTrack} /> </div>
                            <div class="project_card-actions">
                                <a href="https://github.com/harishgoudakkala/Task-Track" target="_blank" class="btn btn-secondary">Code  →</a>
                                <button class="btn btn-primary" onClick={handleVisit}>Visit <span style={{color:"#000000"}}>&#8599;</span></button>
                            </div>
                        </div>
                    </div>
                    <div class="project_card">
                        <div class="project_card-content">
                            <h2 class="project_card-title">Website Marker</h2>
                            <p class="project_card-description">Easily bookmark, track, and manage your favorite websites in one place.</p>
                            <div class="project_card-image"> <img src={WebsiteMarker} /> </div>
                            <div class="project_card-actions">
                                <a href="https://github.com/harishgoudakkala/Website_marker" target="_blank" class="btn btn-secondary">Code  →</a>

                            </div>
                        </div>
                    </div>
                    <div class="project_card">
                    <div class="project_card-content">
                        <h2 class="project_card-title">Tesla Clone</h2>
                        <p class="project_card-description">A sleek web application inspired by Tesla's innovative design and cutting-edge technology.</p>
                        <div class="project_card-image"> <img src={Tesla} /> </div>
                        <div class="project_card-actions">
                            <a href="https://github.com/harishgoudakkala/Tesla_Clone" target="_blank" class="btn btn-secondary">Code  →</a>
                        </div>
                    </div>
                </div>
                <div class="project_card">
                    <div class="project_card-content">
                        <h2 class="project_card-title">Weather App</h2>
                        <p class="project_card-description">Get real-time weather updates and forecasts with an intuitive and user-friendly interface.</p>
                        <div class="project_card-image"> <img src={WeatherApp} /> </div>
                        <div class="project_card-actions">
                            <a href="https://github.com/harishgoudakkala/Weather_app" target="_blank" class="btn btn-secondary">Code  →</a>
                        </div>
                    </div>
                </div>
                <div class="project_card">
                    <div class="project_card-content">
                        <h2 class="project_card-title">Go Meme</h2>
                        <p class="project_card-description">Create and share memes effortlessly with a simple yet powerful meme generator.</p>
                        <div class="project_card-image"> <img src={GoMeme} /> </div>
                        <div class="project_card-actions">
                            <a href="https://github.com/harishgoudakkala/Go-Meme" target="_blank" class="btn btn-secondary">Code  →</a>
                        </div>
                    </div>
                </div>
                </div>
            
        </section>
    )
}


export default Projects