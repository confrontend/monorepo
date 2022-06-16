import React from "react";
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
          <span>
            {resumeDetailText.jobs.map((job, i) => {
              return (
                <>
                  <span key={i}>
                    <>
                      <h2>{job.company}</h2>
                      {job.date} <br />
                      {job.projects.map((project, j) => {
                        return (
                          <>
                            <span key={j}>
                              {project.project}
                              <br />
                              {project.date}
                              <p>{project.desc}</p>
                              <code>{project.skills}</code>
                              <br />
                            </span>
                            <br />
                          </>
                        );
                      })}
                    </>
                  </span>
                </>
              );
            })}
          </span>
        </>
      </S.Details>
    </S.Container>
  );
}
