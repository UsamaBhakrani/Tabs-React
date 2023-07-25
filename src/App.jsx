import { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const url = "https://course-api.com/react-tabs-project";

function App() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(0);
  const [userData, setUserData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, dates, duties, title, id } = userData[user];

  return (
    <section className="jobs-center">
      <div className="btn-container">
        {userData.map((data, index) => {
          return (
            <button
              onClick={() => {
                setUser(index);
              }}
              key={data.id}
              className="job-btn"
            >
              {data.company}
            </button>
          );
        })}
      </div>
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
    </section>
  );
}

export default App;
