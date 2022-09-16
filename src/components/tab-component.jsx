import * as React from "react";
import styles from "../styles/Home.module.css";
export function TabNavigation({ id, title, activeTab, setActiveTab }) {
  const handleClick = () => setActiveTab(id);
  const state = activeTab === id;
  return (
    <div
      className={styles.tabTitle}
      onClick={handleClick}
      style={{ borderBottom: state && "3px solid " }}
    >
      {title}
    </div>
  );
}