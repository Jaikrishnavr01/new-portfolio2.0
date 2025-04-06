import React from 'react';
import './workSection.css';

export default function Workprocess() {
    return (
        <div className='container1' id='process'>
        <div className="work-process-grid">
            <div className="text-content">
                <h1 className="title">Work Process</h1> 
                <p className="description">
                Every project I work on follows a simple yet effective process. As a fresher, I believe in learning by doing and this step-by-step approach helps me stay organized and focused.
                </p>
            </div>
            <div className="steps-container">
                <div className="step">
                    <div className="icon1">🔍</div>
                    <h2 className="step-title">1. Research</h2>
                    <p className="step-description">
                    Understand the goals, explore ideas, and gather inspiration.
                    </p>
                </div>
                <div className="step">
                    <div className="icon1">🎨</div>
                    <h2 className="step-title">2. Design</h2>
                    <p className="step-description">
                    Plan a clean layout focused on usability and user experience.
                    </p>
                </div>
                <div className="step">
                    <div className="icon1">📊</div>
                    <h2 className="step-title">3. Analyze</h2>
                    <p className="step-description">
                    Test the features, fix issues, and refine the flow.
                    </p>
                </div>
                <div className="step">
                    <div className="icon1">🚀</div>
                    <h2 className="step-title">4. Launch</h2>
                    <p className="step-description">
                    Deploy the project and make it live for the world to see.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}
