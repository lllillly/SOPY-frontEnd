import React from "react";
import { useQuery } from "react-apollo-hooks";
import MM00Presenter from "./MM00Presenter";
import { GET_ALL_VIDEOS } from "./MM00Queries";

const MM00Container = () => {
  //////////// VARIABLE  ////////////////////

  //////////// USE STATE  ///////////////////

  //////////// USE REF  /////////////////////

  //////////// USE CONTEXT  /////////////////

  ////////////// USE QUERY  /////////////////
  const {
    data: videoDatum,
    loading: videoLoading,
    refetch: videoRefetch,
  } = useQuery(GET_ALL_VIDEOS);

  //////////// USE MUTATION  ////////////////

  ///////////// USE EFFECT  /////////////////

  return <MM00Presenter videoDatum={videoDatum && videoDatum.getAllVideos} />;
};

export default MM00Container;
