import React from 'react';
import Layout from '../layout/Layout';
import ResumeButton from '../common/ResumeButton';
import Tabs from '../common/Tabs';
import styles from './Resume.module.scss';
import layout from '../layout/Layout.module.scss';

export default function Resume() {
  return (
    <Layout>
      <div className={layout['page-container']}>
        <div className={layout['title-container']}>
          <h1 className={layout['page-title']}>My Experience</h1>
        </div>
        <div className={styles['content-container']}>
          <div className={styles['button-container']}>
            <ResumeButton />
          </div>
          <div className={styles['tabs-container']}>
            <Tabs>
              <div tabName='Slalom'>
                <h2>Slalom</h2>
                <h3>Software Engineer Associate Consultant</h3>
                <ul>
                  <li>
                    Collaborated with client and consultant teams to analyze, design, and deliver custom software solutions.
                  </li>
                  <li>
                    Stayed current with industry trends through continuous learning and research, expanding skills in NodeJS, Angular, and GraphQL.
                  </li>
                  <li>
                    GraphQL Migration Project: Improved performance and compatibility for a telecommunications company through the migration from REST API to GraphQL. Reduced technical debt by removing over 50k lines of unused legacy code. Wrote technical documentation, monitored API performance, refactored GraphQL operations, conducted unit tests, and performed code reviews.
                  </li>
                  <li>
                    AI Frontend Project: Led the frontend development for an internal generative AI chatbot prototype using React. Developed the main chat interface, chat history, and clear chat functionality. Led communication between developers, product designer, and project manager to ensure all requirements were met. Researched and implemented Azure’s OpenAI service and contributed to AI prompt engineering.
                  </li>
                  <li>
                    QE Project: Owned all quality engineering for a greenfield government phone portal. Streamlined the development process and increased team efficiency by designing a robust test plan and collaborating with developers to establish testing strategies for a React frontend, NodeJS backend, and Amazon Chime phone service. Performed code reviews and executed all manual testing.
                  </li>
                </ul>
              </div>
              <div tabName='Turing'>
                <h2>Turing</h2>
                <h3>Frontend Engineering Student</h3>
                <ul>
                  <li>
                    7 month immersive, project-based, ACCET accredited software engineering program
                  </li>
                  <li>
                    Focus on frontend development, covering HTML/CSS, JavaScript, and React
                  </li>
                  <li>
                    Emphasis on object-oriented programming, test-driven-development, accessibility, and git best practices
                  </li>
                  <li>
                    Introduction to backend development, covering REST APIs, NodeJS, and Express
                  </li>
                  <li>
                    Unit testing with Mocha/Chai, end-to-end testing with Cypress, accessibility testing with Lighthouse
                  </li>
                </ul>
              </div>
              <div tabName='Green Sprouts'>
                <h2>Green Sprouts</h2>
                <h3>Supply Chain Analyst</h3>
                <ul>
                  <li>
                    Created monthly forecasts for 500+ products, improving forecast accuracy by 23%
                  </li>
                  <li>
                    Independently researched and executed the update of 100k+ product barcodes to meet industry standards, increasing the accuracy of all internal product data
                  </li>
                  <li>
                    Improved the efficiency of recurring tasks by establishing and documenting standard operating procedures
                  </li>
                  <li>
                    Performed timely ad-hoc inventory analysis and presented results in a concise and actionable way
                  </li>
                </ul>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </Layout>
  )
}