function Card() {
  return (
    <div className="job-card">

      <div className="card-top">
        <div className="company-logo">
          <span>a</span>
          <div className="logo-smile"></div>
        </div>

        <button className="save-btn">Save ♧</button>
      </div>

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

      <div className="card-footer">
        <div className="salary-info">
          <h3>$100/hr</h3>
          <p>Lahore, Pakistan</p>
        </div>

        <button className="apply-btn">Apply now</button>
      </div>

    </div>
  );
}

export default Card;