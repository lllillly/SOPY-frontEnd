import React from "react";
import styled from "styled-components";
import { Wrapper, ImageBox } from "../../components/commonComponents";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";

const BarWrapper = styled.div`
  width: 1350px;
  height: 30px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.subThemeColor};
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 30px 0px;
`;

const ViewText = styled.div`
  margin: 8px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  color: ${(props) => (props.isTitle ? props.theme.blackColor : ``)};
  color: ${(props) => (props.iaAuthor ? props.theme.darkGrayColor : ``)};
  color: ${(props) => (props.isDesc ? props.theme.grayColor : ``)};
`;

const WrapWrapper = styled(Wrapper)`
  width: 1350px;
  flex-wrap: wrap;
`;

const MM00Presenter = () => {
  return (
    <Wrapper>
      <Wrapper height={`400px`} padding={`25px`} dr={`row`}>
        <Fade left>
          <Wrapper al={`flex-end`} padding={`20px`}>
            <ImageBox
              width={`400px`}
              height={`225px`}
              bgImg={`https://images.mypetlife.co.kr/content/uploads/2019/09/23175015/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg`}
            ></ImageBox>
          </Wrapper>
        </Fade>
        <Fade right>
          <Wrapper al={`flex-start`} padding={`20px`}>
            <ViewText size={`18px`} weight={`700`} isTitle={true}>
              경민이의 계란빵 만드는 방법
            </ViewText>
            <ViewText size={`12px`} weight={`400`} isAuthor={true}>
              안녕
            </ViewText>
            <ViewText size={`13.5px`} weight={`500`} isAuthor={true}>
              안녕안녕
            </ViewText>
          </Wrapper>
        </Fade>
      </Wrapper>

      <Wrapper>
        <Bounce>
          <BarWrapper />
        </Bounce>

        <Fade bottom>
          <WrapWrapper dr={`row`} margin={`0px 0px 100px 0px`}>
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://images.mypetlife.co.kr/content/uploads/2019/09/23175015/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg`}
            ></ImageBox>
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://images.mypetlife.co.kr/content/uploads/2019/09/23175015/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg`}
            ></ImageBox>
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://images.mypetlife.co.kr/content/uploads/2019/09/23175015/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg`}
            ></ImageBox>
            <ImageBox
              width={`320px`}
              height={`180px`}
              margin={`5px`}
              bgImg={`https://images.mypetlife.co.kr/content/uploads/2019/09/23175015/ricky-kharawala-adK3Vu70DEQ-unsplash.jpg`}
            ></ImageBox>
          </WrapWrapper>
        </Fade>
      </Wrapper>
    </Wrapper>
  );
};

export default MM00Presenter;
