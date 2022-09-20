import { TabNavigation } from "../components/tab-component";
import * as React from "react";
import styles from "../styles/Home.module.css";
import useGetNotes from "../hooks/use-get-notes";
import Lottie from "lottie-react";
import { LottieLoading } from "../assets/lottie";
import { localeData } from "../utils/locale";
import { useLocale } from "../hooks/use-locale";
import NoteCard from "../components/note-card";
import { useSearchParams } from "react-router-dom";
import DialogBackdrop from "../components/dialog-backdrop";
import { SearchForm } from "../components/search-form";
import FabSearch from "../components/fab-search";

export default function Homepage() {
  const { locale } = useLocale();

  const [tab, setTab] = React.useState("active");
  const [hide, setHide] = React.useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, loading } = useGetNotes({ type: tab });

  const changeSearchParams = (keywords) => setSearchParams({ title: keywords });
  const tabHandler = (id) => setTab(id);
  const hideHandler = () => setHide((prevState) => !prevState);

  const title = searchParams.get("title") || "";

  return (
    <>
      {!hide && (
        <DialogBackdrop onClose={hideHandler}>
          <SearchForm onClose={hideHandler} onSearch={changeSearchParams} />
        </DialogBackdrop>
      )}
      <div className={styles.tabContainer}>
        <div className={styles.tabNavigation}>
          <TabNavigation
            id="active"
            activeTab={tab}
            setActiveTab={tabHandler}
            title={localeData[locale].tab_active}
          />
          <TabNavigation
            id="archived"
            activeTab={tab}
            setActiveTab={tabHandler}
            title={localeData[locale].tab_archived}
          />
        </div>
        <div className={styles.tabContent}>
          {loading ? (
            <Lottie animationData={LottieLoading} style={{ margin: "auto" }} />
          ) : data?.data?.length === 0 ? (
            <p>{localeData[locale].content_empty_note}</p>
          ) : data?.data?.filter((value) =>
              value.title.toLowerCase().includes(title.toLowerCase())
            ).length ? (
            data?.data
              ?.filter((value) =>
                value.title.toLowerCase().includes(title.toLowerCase())
              )
              .map((value) => <NoteCard key={value.id} {...value} />)
          ) : (
            <p>{localeData[locale].content_empty_note}</p>
          )}
        </div>
        <FabSearch onShow={hideHandler} />
      </div>
    </>
  );
}
