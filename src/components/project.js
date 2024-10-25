import React from 'react'
import './project.css'

function Project() {
    return (
        <>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                
                <div className='project-col'>
                <div className='projects project1'>
                    <h2>Calculator using HTML5,CSS3,JS</h2>
                    <p>A simple and responsive calculator built with JavaScript, providing smooth, accurate arithmetic operations.</p>
                    <a href='https://github.com/rabia-maryam/calculator-using-html5-css3-js' target='_blank' rel="noopener noreferrer"><button>Go To Git Repo</button></a>
                </div>

                <div className='projects project2'>
                    <h2>Stopwatch using HTML5,CSS3,JS</h2>
                    <p>A responsive stopwatch built with HTML5, CSS3, and JavaScript, featuring start, stop, and reset functionality.</p>
                    <a href='https://github.com/rabia-maryam/Stop-watch-using-html5-css3-js' target='_blank' rel="noopener noreferrer"><button>Go To Git Repo</button></a>
                </div>

                <div className='projects project3'>
                    <h2>Weather App using HTML5,CSS3,JS</h2>
                    <p>A weather app built with HTML5, CSS3, and JavaScript, using a Weather API to display real-time weather data for any location.</p>
                    <a href='https://github.com/rabia-maryam/weather-app' target='_blank' rel="noopener noreferrer"><button>Go To Git Repo</button></a>
                </div>
            </div>

            <div className='project-col'>
                <div className='projects project4'>
                    <h2>quiz App using HTML5,CSS3,JS</h2>
                    <p>
                    A quiz app built with HTML5, CSS3, and JavaScript, featuring dynamic questions, scoring, and instant feedback.</p>
                    <a href='https://github.com/rabia-maryam/Quiz-App' target='_blank' rel="noopener noreferrer"><button>Go To Git Repo</button></a>
                </div>

                <div className='projects project5'>
                    <h2>Currency Exchange using HTML5,CSS3,JS</h2>
                    <p>
                    A currency exchange app built with HTML5, CSS3, and JavaScript, allowing users to check real-time conversion rates between US Dollars and Pakistani Rupees.</p>
                    <a href='https://github.com/rabia-maryam/currency-exchange' target='_blank' rel="noopener noreferrer"><button>Go To Git Repo</button></a>
                </div>

                <div className='projects project6'>
                    <h2>Housing Website using HTML5,CSS3,JS</h2>
                    <p>
                    A housing website built with HTML5, CSS3, and JavaScript, allowing users to browse, search, and filter property listings for buying or renting homes.</p>
                    <a href='https://github.com/rabia-maryam/Housing-website' target='_blank' rel="noopener noreferrer"><button>Go To Git Repo</button></a>
                </div>
            </div>

           
            </div>
        </>
    )
}

export default Project
