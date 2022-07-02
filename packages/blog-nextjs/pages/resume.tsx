import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "../modules/resume/resume.styled";
import { IResume } from "../modules/resume/resume.types";

// https://react-icons.github.io/react-icons/search?q=react
import {
  FaReact,
  FaGithub,
  FaHtml5,
  FaSass,
  FaAws,
  FaDocker,
} from "react-icons/fa";

import { TbBrandNextjs } from "react-icons/tb";
import { GiJasmine } from "react-icons/gi";
import {
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiCsswizardry,
  SiWebpack,
  SiCypress,
  SiAngular,
  SiMicrosoftazure,
  SiIntellijidea,
  SiBabel,
  SiKubernetes,
  SiVisualstudio,
} from "react-icons/si";
import { getResume } from "../modules/global/utils";

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
      <S.TechCloud>
        <h1>Tech Stack</h1>
        <S.TechCloudIcons>
          <span data-content="React">
            <FaReact title="React" />
          </span>
          <span data-content="Angular">
            <SiAngular title="Angular" />
          </span>
          <span data-content="Redux">
            <SiRedux title="Redux" />
          </span>
          <span data-content="JS">
            <SiJavascript title="Javascript" />
          </span>
          <span data-content="Nextjs">
            <TbBrandNextjs title="Nextjs" />
          </span>
          <span data-content="TS">
            <SiTypescript title="Typescript" />
          </span>
          <span data-content="Github">
            <FaGithub title="Github" />
          </span>
          <span data-content="Html5">
            <FaHtml5 title="Html5" />
          </span>
          <span data-content="Sass">
            <FaSass title="Sass" />
          </span>
          <span data-content="Css">
            <SiCsswizardry title="Css" />
          </span>
          <span data-content="Webpack">
            <SiWebpack title="Webpack" />
          </span>
          <span data-content="Kubernetes">
            <SiKubernetes title="Kubernetes" />
          </span>
          <span data-content="Jasmine">
            <GiJasmine title="Jasmine" />
          </span>
          <span data-content="Cypress">
            <SiCypress title="Cypress" />
          </span>
          <span data-content="Aws">
            <FaAws title="Aws" />
          </span>
          <span data-content="Docker">
            <FaDocker title="Docker" />
          </span>
          <span data-content="Azure">
            <SiMicrosoftazure title="MS Azure" />
          </span>
          <span data-content="VSCode">
            <SiVisualstudio title="VS Code" />
          </span>
          <span data-content="Intellij">
            <SiIntellijidea title="Intellij" />
          </span>
          <span data-content="Babel">
            <SiBabel title="Babel" />
          </span>
        </S.TechCloudIcons>
      </S.TechCloud>
      <S.Details>
        <hr />
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

/**
 * If you export a function called getStaticProps (Static Site Generation) from a page,
 * Next.js will pre-render this page at build time using the props returned by getStaticProps
 * You should use getStaticProps if:
 * - The data required to render the page is available at build time ahead of a user’s request
 * - The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files,
 *   both of which can be cached by a CDN for performance
 */
export async function getStaticProps() {
  const data = await getResume();

  const { jobs, education, workshops, interests, languages } = data;

  return {
    props: { jobs, education, workshops, interests, languages },
  };
}
