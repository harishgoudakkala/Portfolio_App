import dpImg from '../assets/dp.jpg';
import { React, useEffect, useState } from 'react';
import downloadLogo from '../assets/download.svg';
import '../styles/home.css';
import { database } from '../firebase';
import { ref, set, push } from 'firebase/database';

const Home = () => {
    const [detail, setDetail] = useState({});

    useEffect(() => {
        async function visitordetail() {
            try {
                const response = await fetch('https://ipapi.co/json/');
                const json = await response.json();
                setDetail(json);
                if (localStorage.getItem('key') === null) {
                    localStorage.setItem('key', JSON.stringify(json));
                    const visitorsRef = ref(database, 'visitors');
                    const newVisitorRef = push(visitorsRef);
                    await set(newVisitorRef, { json });
                }
            } catch (error) {
               console.log('Error getting details:', error); 
            }
            
        }
        visitordetail();
    }, [detail.ip]);

    const handleDownloadResume = () => {
        const pdfUrl = 'Akkala_Harish_Goud_Resume.pdf';
        window.open(pdfUrl, '_blank'); // Open the PDF in a new window
    };

    return (
        <section id="Home" className="home">
            <div className="home_container">
                <div className="home_content">
                    <h1>Hello!</h1>
                    <h1>I'm Akkala Harish Goud,</h1>
                    <p>A Full Stack Developer turning brilliant ideas into simple code.</p>
                    <div className="buttonContainer">
                        <button onClick={handleDownloadResume} className="download_btn">
                            <img width={25} src={downloadLogo} alt="" /> My Resume
                        </button>
                    </div>
                </div>
                <div className="imageContainer">
                    <img src={dpImg} alt="dp" className="dp_image"></img>
                </div>
            </div>
        </section>
    );
};

export default Home;
