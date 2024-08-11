import dpImg from '../assets/dp.jpg'
import React from "react";
import downloadLogo from '../assets/download.svg'
import "../styles/home.css"


const Home = ()=>{

    const handleDownloadResume = () => {
        const pdfUrl = "Akkala_Harish_Goud_Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        window.open(pdfUrl, "_blank" ) // open the pdf in a new window)
    }

    return(
        <section id="Home" className='home'>
            <div className='home_container'>
                <div className='home_content'>
                    <h1>Hello!</h1>
                    <h1>I'm Akkala Harish Goud,</h1>
                    <p>A Full Stack Developer turning brilliant ideas into simple code.</p>
                    <div className='buttonContainer'>
                        <button onClick={handleDownloadResume} className='download_btn'> <img width={25} src={downloadLogo} alt="" /> My Resume</button>
                    </div>
                </div>
                <div className='imageContainer'>
                    <img src={dpImg} alt="dp" className='dp_image'></img>
                </div>
            </div>
        </section>
    )
}


export default Home