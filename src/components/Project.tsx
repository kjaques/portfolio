import React from "react";
import priceofpremium from '../assets/images/priceofpremium.png';
import cms from '../assets/images/cms.png';
import hrDashboard from '../assets/images/HRDashboard.png';
import mentalhealthburden from '../assets/images/mentalhealthburden.png';
import hearthy from '../assets/images/hearthy.png';
import portfolio from '../assets/images/screenshot.png';
import vsafe from '../assets/images/vsafe.jpg';
import brfss from '../assets/images/brfss.jpg';
import chai from '../assets/images/chai.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                {/* <a href="#" target="_blank" rel="noreferrer"><img src={alertDashboard} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a href="https://www.hpdwv.com" target="_blank" rel="noreferrer"><h2>Huntington Police Department's ALERT (Analytic Law Enforcement Reporting Tool) Dashboard</h2></a>
                <p>An internal criminal intelligence platform that transforms raw police incident data into actionable spatial and temporal crime pattern analyses by designing ETL procedures to ingest datasets from police CAD and RMS systems, ensuring high data integrity for critical command-staff strategic staffing and investigation decisions</p>
            </div>
            <div className="project">
                {/* <a href="#" target="_blank" rel="noreferrer"><img src={bloombergHarvard} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a href="https://www.cityleadership.harvard.edu/" target="_blank" rel="noreferrer"><h2>Bloomberg Harvard City Leadership Initiative Data Track: Homelessness Response</h2></a>
                <p>A cross-departmental performance management initiative under Johns Hopkins University guidance and mayoral strategic direction where I identified data gaps, defined intervention metrics, and built a baseline data snapshot that revealed repeat individuals accounted for one-third of peak Crisis Intervention Team responses, directly shaping resource planning to target a 20% reduction in related calls</p>
            </div>
            <div className="project">
                {/* <a href="#" target="_blank" rel="noreferrer"><img src={publicSafetyDashboard} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a href="https://www.publicsafetydashboard.com" target="_blank" rel="noreferrer"><h2>City of Huntington Public Safety Dashboard</h2></a>
                <p>An interactive public dashboard designed to promote municipal transparency and community engagement by translating complex, multi-agency public safety data into accessible visual trends that allow residents to monitor historical and current community safety metrics</p>
            </div>
            <div className="project">
                {/* <a href="#" target="_blank" rel="noreferrer"><img src={financeRecalc} className="zoom" alt="thumbnail" width="100%"/></a> */}
                <a href="https://www.cityofhuntington.com/assets/pdf/document-center/Collections_Request_for_Relief_3.29.22.pdf" target="_blank" rel="noreferrer"><h2>Municipal Fees Request for Relief 5-Year Financial Recalculation</h2></a>
                <p>A data-driven financial automation tool that allows the finance department to look up accounts by number, address, or customer to pull database records, automatically assess forgiveness windows, and recalculate penalties and 12-month installment plans for overdue refuse and municipal service fees, cutting the manual processing workflow by up to 95%</p>
            </div>
            <div className="project">
                <a href="https://www.youtube.com/watch?v=EM7v9Z3pTjA" target="_blank" rel="noreferrer"><img src={priceofpremium} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kjaques/the-price-of-premium" target="_blank" rel="noreferrer"><h2>The Price of Premium: An Analysis of Hospital Markups and Quality</h2></a>
                <p>A data analytics project exploring the relationships between hospital costs, charges, and patient care quality using CMS datasets which includes SQL and Python-based data integration, statistical analyses, an interactive dashboard, and presentation</p>
            </div>
            <div className="project">
                <a href="https://github.com/kjaques/prescriber-project-sql/blob/main/prescribers-MVP.sql" target="_blank" rel="noreferrer"><img src={cms} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kjaques/prescriber-project-sql/blob/main/prescribers-MVP.sql" target="_blank" rel="noreferrer"><h2>CMS Prescriber and Prescription Data Analysis</h2></a>
                <p>Designed and executed a SQL-based analysis of Centers for Medicare & Medicaid Services (CMS) prescriber and prescription data to answer questions which evaluated healthcare utilization, drug costs, and opioid prescribing trends</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/posts/kyle-jaques_mentalhealth-publichealth-dataanalysis-activity-7366188200756789250-aUv0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFj_owBV-a_CxuGUEJhQBNsJ89KVQR9u1U" target="_blank" rel="noreferrer"><img src={mentalhealthburden} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/posts/kyle-jaques_mentalhealth-publichealth-dataanalysis-activity-7366188200756789250-aUv0?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFj_owBV-a_CxuGUEJhQBNsJ89KVQR9u1U" target="_blank" rel="noreferrer"><h2>Global Mental Health Trends (1990–2019)</h2></a>
                <p>An analysis of publicly available mental health survey aggregates using Power BI to visualize global and regional prevalence rates of mental health disorders, disease burdens, and treatment gaps across three decades</p>
            </div>
            <div className="project">
                <a href="https://www.linkedin.com/posts/kyle-jaques_dataanalysis-businessintelligence-peopleanalytics-activity-7367320555428954112-LpCn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFj_owBV-a_CxuGUEJhQBNsJ89KVQR9u1U" target="_blank" rel="noreferrer"><img src={hrDashboard} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.linkedin.com/posts/kyle-jaques_dataanalysis-businessintelligence-peopleanalytics-activity-7367320555428954112-LpCn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEFj_owBV-a_CxuGUEJhQBNsJ89KVQR9u1U" target="_blank" rel="noreferrer"><h2>People, Places, Performance, and Pennies (HR Analytics Dashboard)</h2></a>
                <p>A Tableau dashboard designed to analyze a simulated dataset of over two million employees in a global corporation, showcasing how people analytics can uncover workforce trends, highlight disparities, and support data-driven human resources and leadership decisions</p>
            </div>
            <div className="project">
                <a href="https://www.cdc.gov/vaccine-safety-systems/monitoring/covid-preg-reg.html" target="_blank" rel="noreferrer"><img src={vsafe} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.cdc.gov/vaccine-safety-systems/monitoring/covid-preg-reg.html" target="_blank" rel="noreferrer"><h2>V-safe COVID-19 Vaccine Pregnancy Registry</h2></a>
                <p>A cohort of CDC's v-safe program that I coordinated where we collected additional health information from participants who were pregnant at the time of COVID-19 vaccination or reported a positive pregnancy test after vaccination, helping the CDC monitor the safety of COVID-19 vaccines in pregnant individuals by gathering detailed health data to assess potential impacts of the vaccine</p>
            </div>
            <div className="project">
                <a href="https://www.publichealth.va.gov/epidemiology/studies/CHAI-study.asp" target="_blank" rel="noreferrer"><img src={chai} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.publichealth.va.gov/epidemiology/studies/CHAI-study.asp" target="_blank" rel="noreferrer"><h2>Comparative Health Assessment Interview</h2></a>
                <p>A research study whose data collection I coordinated to investigate the health and well-being of post-9/11 veterans compared to a similar group of civilians to understand the effects of military service, including deployment and combat, on various aspects of health and social life</p>
            </div>
            <div className="project">
                <a href="https://cdc.gov/brfss" target="_blank" rel="noreferrer"><img src={brfss} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://cdc.gov/brfss" target="_blank" rel="noreferrer"><h2>Behavioral Risk Factor Surveillance System</h2></a>
                <p>Coordinated and supervised data collection operations for BRFSS - a state-based system of telephone surveys by the CDC which collects data on health-related risk behaviors, chronic health conditions, and the use of preventative services among adults which is used to monitor health trends, support health promotion and disease prevention programs, and track progress towards health objectives at the state and national levels</p>
            </div>
            <div className="project">
                <a href="https://hearthy.net" target="_blank" rel="noreferrer"><img src={hearthy} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://hearthy.net" target="_blank" rel="noreferrer"><h2>Hearthy</h2></a>
                <p>Designed and developed a custom content management system for user-submitted recipes as well as food and gardening blogs using a MERN stack (MongoDB, Express, React, Node)</p>
            </div>
            <div className="project">
                <a href="https://github.com/kjaques/portfolio" target="_blank" rel="noreferrer"><img src={portfolio} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/kjaques/portfolio" target="_blank" rel="noreferrer"><h2>React Portfolio</h2></a>
                <p>Created a simple, responsive portfolio website to showcase my skillsets, experience, and some of my work</p>
            </div>
        </div>
    </div>
    );
}

export default Project;