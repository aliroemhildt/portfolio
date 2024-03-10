import React, { useState } from 'react';
import styles from './Tabs.module.scss';


export default function Tabs({ children }) {
  const [activeTab, setActiveTab] = useState(children[0].props.tabName)

  return (
  <div className={styles.container}>
    <ul className={styles['tab-list']}>
      {children.map((tab) => (
        <li
          key={tab.props.tabName}
          onClick={() => setActiveTab(tab.props.tabName)}
          className={tab.props.tabName == activeTab ? `${styles['tab-item']} ${styles.current}` : styles['tab-item']}
        >
          {tab.props.tabName}
        </li>
      ))}
    </ul>
    {children.map((content) => {
      if (content.props.tabName == activeTab) {
        return (
          <div key={content.props.tabName} className={styles['text-container']}>{content.props.children}</div>
        )} 
      })}
  </div>
  )
}