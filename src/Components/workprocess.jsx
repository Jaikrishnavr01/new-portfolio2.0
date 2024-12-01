import React from 'react';
import './workSection.css';

export default function Workprocess() {
    return (
        <div className='container1'>
        <div className="work-process-grid">
            <div className="text-content">
                <h1 className="title">Work Process</h1>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet.
                </p>
            </div>
            <div className="steps-container">
                <div className="step">
                    <div className="icon1">🔍</div>
                    <h2 className="step-title">1. Research</h2>
                    <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                    </p>
                </div>
                <div className="step">
                    <div className="icon1">🎨</div>
                    <h2 className="step-title">2. Design</h2>
                    <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                    </p>
                </div>
                <div className="step">
                    <div className="icon1">📊</div>
                    <h2 className="step-title">3. Analyze</h2>
                    <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                    </p>
                </div>
                <div className="step">
                    <div className="icon1">🚀</div>
                    <h2 className="step-title">4. Launch</h2>
                    <p className="step-description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
}
