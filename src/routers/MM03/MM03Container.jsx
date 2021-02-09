import React, { useState } from "react";
import MM03Presenter from "./MM03Presenter";
import { GET_VIDEO_ONE, UPDATE_VIDEO_ONE } from "./MM03Queries";
import { useQuery, useMutation } from "react-apollo-hooks";
import useInput from "../../Hooks/useInput";
import storageRef from "../../firebase";

const MM03Container = ({ match, history }) => {
  //////////// VARIABLE  ////////////////////

  const [imagePath, setImagePath] = useState(``);

  const videoId = match.params.id;

  //////////// USE STATE  ///////////////////

  const editThumbnail = useInput(``);
  const editTitle = useInput(``);
  const editDesc = useInput(``);

  const [dataFlag, setDataFlag] = useState(true);

  //////////// USE REF  /////////////////////
  //////////// USE CONTEXT  /////////////////
  ////////////// USE QUERY  /////////////////

  const { data: vData, loading: vLoading, refetch: vRefetch } = useQuery(
    GET_VIDEO_ONE,
    {
      variables: {
        id: videoId,
      },
    }
  );

  if (!vLoading) {
    /* 로딩이 끝날을 때 실행 */

    if (dataFlag) {
      editThumbnail.setValue(vData.getVideoOne.thumbnailPath);
      editTitle.setValue(vData.getVideoOne.title);
      editDesc.setValue(vData.getVideoOne.description);

      setDataFlag(false);
    }
  }

  //////////// USE MUTATION  ////////////////

  const [updateVideoMutation] = useMutation(UPDATE_VIDEO_ONE);

  ///////////// USE EFFECT  /////////////////

  const fileChangeHandler = async (e) => {
    console.log(e.target.files[0]);
    const originFile = e.target.files[0];
    const originFileName = e.target.files[0].name;
    console.log(originFile);
    console.log(originFileName);

    const D = new Date();
    const year = D.getFullYear() + "";
    const month = D.getMonth() + 1 + "";
    const date = D.getDate() + "";
    /* date : 날짜 day : 요일 */
    const hour = D.getHours() + "";
    const min = D.getMinutes() + "";
    const sec = D.getSeconds() + "";

    const suffix = year + month + date + hour + min + sec;

    const uploadFileName = originFileName + suffix;

    try {
      const storage = storageRef.child(
        `SOPY/uploads/thumbnail/${uploadFileName}`
      );

      await storage.put(originFile);

      const url = await storage.getDownloadURL();

      setImagePath(url);
    } catch (e) {
      /*여기는 프론트이므로 콘솔로그 에러는 찍으면 사용자에게 에러가 나오므로 적지 말아야 함! */
    }
  };

  const updateHandler = async (id) => {
    const { data } = await updateVideoMutation({
      variables: {
        id: videoId,
        path: imagePath,
        title: editTitle.value,
        desc: editDesc.value,
      },
    });

    if (data.updateVideoOne) {
      alert("수정 완료!");
      history.push("/");
    } else {
      alert("수정 실패!");
    }
  };

  return (
    <MM03Presenter
      fileChangeHandler={fileChangeHandler}
      editThumbnail={editThumbnail}
      editTitle={editTitle}
      editDesc={editDesc}
      updateHandler={updateHandler}
    />
  );
};

export default MM03Container;
