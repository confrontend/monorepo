import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../modules/resume/resume.styled";
import { IResume } from "../modules/resume/resume.types";

export default function Resume({
  jobs,
  education,
  workshops,
  interests,
  languages,
}: IResume) {
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
          {jobs.map((job, i) => {
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
                {jobs.length - 1 !== i && <hr className="hrSmall" />}
              </span>
            );
          })}
          <hr />
          <h1>Education</h1>
          {education.map((ed, i) => (
            <span key={i}>
              <h3>{ed.uni}</h3>
              <small>{ed.date}</small>
              <p>{ed.major}</p>
              {education.length - 1 !== i && <hr className="hrSmall" />}
            </span>
          ))}
          <hr />
          <h1>Languages</h1>
          <ul>
            {languages.map((lang, i) => (
              <li key={i}>
                <b>{lang.title}:</b>
                {`  ${lang.level}`}
              </li>
            ))}
          </ul>
          <hr />
          <h1>Workshops</h1>
          <ul>
            {workshops.map((workshop, i) => (
              <li key={i}>{workshop.title}</li>
            ))}
          </ul>
          <hr />
          <h1>Interests</h1>
          <ul>
            {interests.map((int, i) => (
              <li key={i}>{int.title}</li>
            ))}
          </ul>
        </>
      </S.Details>
    </S.Container>
  );
}

export async function getStaticProps() {
  const req = await axios.get("http://localhost:3000/resume.json");

  const { jobs, education, workshops, interests, languages } = req?.data;

  return {
    props: { jobs, education, workshops, interests, languages },
  };
}
