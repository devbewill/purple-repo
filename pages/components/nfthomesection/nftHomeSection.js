import Image from "next/image";
import styled from "styled-components";

function NftHomeSection({ items }) {
  return (
    <StyledGrid>
      <StyledTextSide>
        <h2>URBAN MOGUL</h2>
        <p>
          Stop wasting money on hopeless NFT projects. Try something new with
          behind the real project.
        </p>
        <button>Explore</button>
      </StyledTextSide>
      <StyledPictureSide>
        {/* <StyledVideoWrapper>
          <video
            src="/images/nft-video.mp4"
            type="video/mp4"
            autoplay=""
            loop
          ></video>
        </StyledVideoWrapper> */}
        <StyledImageWrapper>
          <Image
            src="/images/animated.gif"
            width={600}
            height={600}
            layout="responsive"
          ></Image>
        </StyledImageWrapper>
      </StyledPictureSide>
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: flex;
  min-height: calc(100vh - 5em);
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const StyledTextSide = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 6rem;
    line-height: 0.9;
    font-weight: 900;
  }

  p {
    font-size: 1.25rem;
    color: rgb(0 0 0 / 60%);
  }

  button {
    background: #000;
    color: #fff;
    padding: 0.8em 1em;
    border: 0;
    border-radius: 2em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.1rem;
    display: inline-block;
    align-self: baseline;
    margin: 0.5em 0;
  }

  @media (max-width: 48em) {
    width: 90%;
    text-align: center;

    h2 {
      padding-top: 1em;
      font-size: 2.2rem;
    }

    button {
      align-self: normal;
    }
  }
`;

const StyledPictureSide = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 48em) {
    width: 100%;
    align-self: center;
    text-align: center;
  }
`;

const StyledImageWrapper = styled.div`
    width:90%;
    margin-top: -200px;
}
`;

const StyledVideoWrapper = styled.div`
    width: 100%;

    video {
        width: 100%;
    height: auto;
    }
}
`;

// const StyledPictureSide = styled.div`
//   width: 50%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   .image {
//     object-fit: contain;
//     width: 100% !important;
//     position: relative !important;
//     height: unset !important;
//   }

//   > div {
//     position: unset !important;
//   }

//   @media (max-width: 48em) {
//     width: 100%;
//   }
// `;

export default NftHomeSection;
