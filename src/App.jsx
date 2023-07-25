import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [user, setUser] = useState(1);
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setUserData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="jobs-center">
      <div className="btn-container">
        {userData.map(({ company, dates, duties, id, order, title }) => {
          return (
            <button key={id} className="job-btn">
              {company}
            </button>
          );
        })}
      </div>
      {userData.map(({ company, dates, duties, id, order, title }) => {
        return (
          <article key={id} className="job-info">
            <h3>{title}</h3>
            <span className="job-company">{company}</span>
            <p className="job-date">{dates}</p>
            <div>
              {duties.map((duty, index) => {
                return (
                  <div key={index} className="job-desc">
                    <FaAngleDoubleRight className="job-icon" />
                    <p>{duty}</p>
                  </div>
                );
              })}
            </div>
          </article>
        );
      })}
    </section>
  );
}

export default App;
