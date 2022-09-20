import * as React from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import useGetNote from "../hooks/use-get-note";
import { LottieLoading } from "../assets/lottie";
import { formatDate } from "../utils/date";
import UnarchiveButton from "../components/button-unarchive";
import ArchiveButton from "../components/button-archive";
import DeleteButton from "../components/button-delete";
import { useLocale } from "../hooks/use-locale";
import PageNotFound from "./note-found-page";
import styles from "../styles/Detail.module.css";
import BackButton from "../components/button-back";
export function DetailPage() {
  const params = useParams();
  const locale = useLocale();
  const id = params?.id;
  const { data, loading } = useGetNote({ id });
  if (loading) {
    return (
      <Lottie
        animationData={LottieLoading}
        style={{ margin: "auto", height: "80vh" }}
      />
    );
  }
  if (data?.data) {
    return (
      <div className={styles.container}>
        <div className={styles.actionContainer}>
          <BackButton />
          <DeleteButton id={id} />
        </div>

        <h2>{data.data.title}</h2>
        <p>{formatDate({ date: data.data.createdAt, locale })}</p>
        <div dangerouslySetInnerHTML={{ __html: data.data.body }} />
        {data.data.archived ? (
          <UnarchiveButton id={id} />
        ) : (
          <ArchiveButton id={id} />
        )}
      </div>
    );
  } else {
    <PageNotFound />;
  }
}
