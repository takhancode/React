
import './App.css';

function App() {
  return (
    <div className="outer-container">
      <div className="center-container">

        <div className="job-card">

          {/* Top section */}
          <div className="card-top">

            <div className="company-logo">
              <span>a</span>
              <div className="logo-smile"></div>
            </div>

            <button className="save-btn">
              Save ♧
            </button>

          </div>

          {/* Job information */}
          <div className="job-info">

            <div className="company-name">
              <h3>Amazon</h3>
              <span>5 days ago</span>
            </div>

            <h2>Senior Software Engineer</h2>

            <div className="job-tags">
              <span>Part-Time</span>
              <span>Senior Level</span>
            </div>

          </div>

          {/* Bottom section */}
          <div className="card-footer">

            <div className="salary-info">
              <h3>$100/hr</h3>
              <p>Lahore, Pakistan</p>
            </div>

            <button className="apply-btn">
              Apply now
            </button>

          </div>

        </div>

        <div className="job-card">

          {/* Top section */}
          <div className="card-top">

            <div className="company-logo">
              <span>a</span>
              <div className="logo-smile"></div>
            </div>

            <button className="save-btn">
              Save ♧
            </button>

          </div>

          {/* Job information */}
          <div className="job-info">

            <div className="company-name">
              <h3>Amazon</h3>
              <span>5 days ago</span>
            </div>

            <h2>Senior Software Engineer</h2>

            <div className="job-tags">
              <span>Part-Time</span>
              <span>Senior Level</span>
            </div>

          </div>

          {/* Bottom section */}
          <div className="card-footer">

            <div className="salary-info">
              <h3>$100/hr</h3>
              <p>Lahore, Pakistan</p>
            </div>

            <button className="apply-btn">
              Apply now
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
