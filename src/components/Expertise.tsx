import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faPython } from '@fortawesome/free-brands-svg-icons';
import { faClipboardQuestion } from '@fortawesome/free-solid-svg-icons'
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "Python",
    "Excel",
    "SQL",
    "Power BI",
    "Tableau",
    "Powerpoint",
    "Publisher",
    "Git",
    "GitHub",
    "Slack",
    "Zoom"
];

const labelsSecond = [
    "Outlook",
    "Excel",
    "Word",
    "Powerpoint",
    "Teams",
    "Webex",
    "Information Systems",
    "REDCap",
    "Confirmit",
    "Voxco",
    "Quancept"
];

const labelsThird = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "MongoDB",
    "Node",
    "Express",
    "Redux",
    "Nginx",
    "Photoshop"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Data Analysis</h3>
                    <p><b>I enjoy finding the story hidden in the numbers.</b> Whether working with public health data or operational metrics, I've built a career on turning raw information into insights people and organizations can actually use. My goal is always to make data approachable, clear, and practical, helping teams and stakeholders see the bigger picture and move forward with confidence.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faClipboardQuestion} size="3x"/>
                    <h3>Project Coordination</h3>
                    <p><b>Good projects run on on teamwork, communication, and organization.</b> For a decade and a half, I've helped research teams bring complex projects to life by coordinating people, processes, timelines, and budgets so everything stays on track. I'm at my best when organizing moving parts, keeping operations smooth, and making sure every project not only meets its goals but does so with integrity and care.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p><b>I build web apps that bring ideas and communities to life.</b> From personal projects to community platforms like Hearthy, I enjoy creating digital spaces that feel welcoming and intuitive. For me, web development is about more than code. It's about crafting experiences where people can share, connect, and discover something new together.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;