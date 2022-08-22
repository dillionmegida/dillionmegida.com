import Helmet from "../components/Helmet"
import Layout from "../components/Layout"
import React from "react"
import styled from "styled-components"
import { NewTabLink } from "../components/Link"

const jobs = [
  {
    role: "Product Designer (Intern)",
    jobPage:
      "https://ricive.notion.site/Product-Designer-Intern-07993fa1f68e418785b74699964bea9e",
    location: "Remote, Lagos",
    company: {
      name: "Ricive",
      website: "https://ricive.com/",
      careers:
        "https://ricive.notion.site/ricive/Ricive-Careers-b338847d86f7471e86a09e38dfb160db",
    },
  },
  {
    role: "Microsoft Intern Opportunities for Nigerian Students",
    jobPage:
      "https://careers.microsoft.com/us/en/job/1385397/Intern-Opportunities-for-Students-in-Nigeria-Software-Engineering-Start-date-Summer-2023",
    location: "Lagos, Nigeria",
    company: {
      name: "Microsoft",
      website: "microsoft.com",
    },
  },
  {
    role: "Companies hiring designers",
    jobPage:
      "https://twitter.com/joeyabanks/status/1560646395383644162?s=20&t=wtg1H0f0Ag650CTiHyGX1g",
    location: null,
    company: null,
  },
]

const Main = styled.div`
  padding: 40px 0;

  h1 {
    margin: 0;
    position: relative;
    color: white;
  }

  ol {
    list-style: decimal;
    color: white;

    li {
      font-size: 17px;

      h2 {
        margin-bottom: 10px;
      }

      a {
        color: white;
      }
    }
  }
`

export default function OpenJobs() {
  return (
    <Layout>
      <Helmet
        pageTitle="Open jobs I found"
        pageLink="/open-jobs"
        pageDesc="Open jobs I found and I share"
      />
      <Main className="container">
        <h1>Open jobs that I found</h1>
        <ol>
          {jobs.map(job => (
            <li key={job.jobPage}>
              <h2>
                <NewTabLink className="a-link" link={job.jobPage}>
                  {job.role}
                </NewTabLink>
              </h2>
              {job.company && (
                <>
                  <span>
                    Company:{" "}
                    <NewTabLink className="a-link" link={job.company.website}>
                      {job.company.name}
                    </NewTabLink>
                  </span>
                  <br />
                  <br />
                </>
              )}
              {job.location && <span>Location: {job.location}</span>}
              {/* <span>
                All Company Careers
              </span> */}
            </li>
          ))}
        </ol>
      </Main>
    </Layout>
  )
}
