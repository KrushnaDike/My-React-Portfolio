import React, { Component } from "react";
import "./ExperienceCard.css";

class ExperienceCard extends Component {
  render() {
    const experience = this.props.experience;
    const theme = this.props.theme;
    return (
      <div
        className="experience-card"
        style={{ border: `1px solid ${experience["color"]}` }}
      >
        <div className="experience-card-logo-div">
          <img
            className="experience-card-logo"
            src={require(`../../assests/images/${experience["logo_path"]}`)}
            alt=""
          />
        </div>
        <div className="experience-card-body-div">
          <div className="experience-card-header-div">
            <div className="experience-card-heading-left">
              <h3
                className="experience-card-title"
                style={{ color: theme.text }}
              >
                {experience["title"]}
              </h3>
              <p
                className="experience-card-company"
                style={{ color: theme.text }}
              >
                <a
                  href={experience["company_url"]}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {experience["company"]}
                </a>
              </p>
            </div>
            <div className="experience-card-heading-right">
              <p
                className="experience-card-duration"
                style={{ color: theme.secondaryText }}
              >
                {experience["duration"]}
              </p>
              <p
                className="experience-card-location"
                style={{ color: theme.secondaryText }}
              >
                {experience["location"]}
              </p>
            </div>
          </div>

          <hr style={{ width: "80%", marginBottom: "25px", marginTop: "35px", border: `0.1px solid lightgray` }} />

          {
            experience["projects"].map((project) => {
              return (
                <div className="experience-card-heading-left">
                  <h3
                    className="project-title"
                    style={{ color: theme.text }}
                  >
                    {project.projectName}
                  </h3>
                  <p
                    className="experience-card-company"
                    style={{ color: theme.text }}
                  >
                    ({project.clientName})
                  </p>
                  <p
                    className="experience-card-description"
                    style={{ color: theme.text }}
                  >
                    {project.projectDescription}
                  </p>

                </div>
              );
            })
          }

        </div>
      </div>
    );
  }
}

export default ExperienceCard;
