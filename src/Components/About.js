import React from 'react';

export default function About(props) {
  const myStyle = {
    backgroundColor: props.mode === 'dark' ? 'rgb(60, 60, 60)' : '#f1f1f1',
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  const bodyStyle = {
    backgroundColor: props.mode === 'dark' ? '#696969' : 'white',
    color: props.mode === 'dark' ? 'white' : 'black',
  };

  return (
    <div className="container rounded" style={myStyle}>
      <h2 className="my-3">About QuickText Utils</h2>
      <div className="accordion" id="accordionExample">
        
        {/* Section 1: What is QuickText Utils? */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              What is QuickText Utils?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              <strong>QuickText Utils</strong> is a fast and simple web-based utility for transforming and analyzing your text. Whether you're a student, developer, content creator, or just someone who works with a lot of text — QuickText Utils helps you format, clean, and inspect your content effortlessly.
            </div>
          </div>
        </div>

        {/* Section 2: Features */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Features of QuickText Utils
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              Here's what you can do with QuickText Utils:
              <ul>
                <li>Convert text to <strong>uppercase</strong> or <strong>lowercase</strong></li>
                <li><strong>Copy</strong> formatted text to clipboard</li>
                <li><strong>Clear</strong> the text area in one click</li>
                <li><strong>Count</strong> words and non-whitespace characters</li>
                <li>Estimate <strong>reading time</strong></li>
                <li>Switch between <strong>light</strong> and <strong>dark mode</strong></li>
                <li>Customize dark mode <strong>color themes</strong></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Why Use QuickText Utils */}
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={myStyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Why Use QuickText Utils?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={bodyStyle}>
              <strong>QuickText Utils</strong> is:
              <ul>
                <li><strong>Free</strong> and open-source</li>
                <li><strong>Browser-based</strong> — no installation required</li>
                <li><strong>Fast</strong> and easy to use</li>
                <li>Perfect for editing content, cleaning inputs, or analyzing text</li>
              </ul>
              It’s a handy tool for writers, programmers, teachers, students, or anyone dealing with text regularly.
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
