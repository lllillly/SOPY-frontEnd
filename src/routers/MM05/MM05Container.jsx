import React from "react";
import MM05Presenter from "./MM05Presenter";
import useInput from "../../Hooks/useInput";

const MM05Container = () => {
  //////////// VARIABLE  ////////////////////
  //////////// USE STATE  ///////////////////

  const newEmail = useInput("");
  const newName = useInput("");
  const newNickName = useInput("");
  const newMobile = useInput("");
  const newZoneCode = useInput("");
  const newAddress = useInput("");
  const newDetailAddress = useInput("");

  //////////// USE REF  /////////////////////
  //////////// USE CONTEXT  /////////////////
  ////////////// USE QUERY  /////////////////
  //////////// USE MUTATION  ////////////////
  ///////////// USE EFFECT  /////////////////

  ////////////// HANDLER  //////////////////
  const registUserHandler = () => {
    console.log(newEmail.value);
    console.log(newName.value);
    console.log(newNickName.value);
    console.log(newMobile.value);
    console.log(newZoneCode.value);
    console.log(newAddress.value);
    console.log(newDetailAddress.value);
  };

  const searchPostHandler = () => {
    new daum.Postcode({
      oncomplete: function (data) {
        // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분입니다.
        // 예제를 참고하여 다양한 활용법을 확인해 보세요.
      },
    }).open();
  };

  return (
    <MM05Presenter
      newEmail={newEmail}
      newName={newName}
      newNickName={newNickName}
      newMobile={newMobile}
      newZoneCode={newZoneCode}
      newAddress={newAddress}
      newDetailAddress={newDetailAddress}
      //Handler
      registUserHandler={registUserHandler}
      searchPostHandler={searchPostHandler}
    />
  );
};

export default MM05Container;
