import { resume as resumeDetailText } from "./resume-text";

import * as S from "./resume.styled";

export default function Resume() {
  return (
    <S.Container>
      <S.Summary>
        <S.SummaryImage src="hamed.png" />
        <S.SummaryInfo>
          Hamed Fatehi M.Sc. Stuttgart University 🇩🇪 Software Architect
        </S.SummaryInfo>
      </S.Summary>
      <S.Details>
        <>
          <h1>Work Experience</h1>
          {resumeDetailText.jobs.map((job, i) => {
            return (
              <span key={i}>
                <h3>{job.company}</h3>
                <small>{job.date}</small> <br /> <br />
                {job.projects.map((project, j) => {
                  return (
                    <span key={j}>
                      <b>{project.project}</b>
                      <br />
                      <small>{project.date}</small>
                      <p>{project.desc}</p>
                      <p>
                        <strong>{project.skills}</strong>
                      </p>
                    </span>
                  );
                })}
                {resumeDetailText.jobs.length - 1 !== i && (
                  <hr className="hrSmall" />
                )}
              </span>
            );
          })}
          <hr />
          <h1>Education</h1>
          {resumeDetailText.education.map((ed, i) => (
            <span key={i}>
              <h3>{ed.uni}</h3>
              <small>{ed.date}</small>
              <p>{ed.major}</p>
              {resumeDetailText.education.length - 1 !== i && (
                <hr className="hrSmall" />
              )}
            </span>
          ))}
          <hr />
          <h1>Languages</h1>
          <ul>
            {resumeDetailText.languages.map((lang, i) => (
              <li key={i}>
                <b>{lang.title}:</b>
                {`  ${lang.level}`}
              </li>
            ))}
          </ul>
          <hr />
          <h1>Workshops</h1>
          <ul>
            {resumeDetailText.workshops.map((workshop, i) => (
              <li key={i}>{workshop.title}</li>
            ))}
          </ul>
          <hr />
          <h1>Interests</h1>
          <ul>
            {resumeDetailText.interests.map((int, i) => (
              <li key={i}>{int.title}</li>
            ))}
          </ul>
        </>
      </S.Details>
    </S.Container>
  );
}
