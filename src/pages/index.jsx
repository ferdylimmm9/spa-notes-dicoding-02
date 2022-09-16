import { TabNavigation } from "../components/tab-component";
import * as React from "react";
import styles from "../styles/Home.module.css";
import useGetNotes from "../hooks/use-get-notes";
import Lottie from "lottie-react";
import { LottieLoading } from "../assets/lottie";
export default function Homepage() {
  const [tab, setTab] = React.useState("active");
  const { data, loading } = useGetNotes({ type: tab });
  const tabHandler = (id) => setTab(id);
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabNavigation}>
        <TabNavigation
          id="active"
          activeTab={tab}
          setActiveTab={tabHandler}
          title="Catatan Aktif"
        />
        <TabNavigation
          id="archived"
          activeTab={tab}
          setActiveTab={tabHandler}
          title="Catatan Arsip"
        />
      </div>
      <div className={styles.tabContent}>
        {loading ? (
          <Lottie animationData={LottieLoading} style={{ margin: "auto" }} />
        ) : data?.data?.length === 0 ? (
          <p>Catatan Kosong</p>
        ) : (
          data?.data?.map((value) => <p>{value.title}</p>)
        )}
      </div>
    </div>
  );
}
