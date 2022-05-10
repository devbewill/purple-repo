import Image from "next/image";
import styled from "styled-components";

function NftHomeSection({ items }) {
  return (
    <StyledGrid>
      <StyledTextSide>
        <h2>Discover A New Era Of Cool</h2>
        <h3>Bored Of Apes? Try Something New.</h3>
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
            width={500}
            height={500}
            layout="responsive"
          ></Image>
        </StyledImageWrapper>
      </StyledPictureSide>
    </StyledGrid>
  );
}

const StyledGrid = styled.div`
  display: flex;
  min-height: 80vh;
  margin: 0px auto;
  justify-content: center;
  align-items: center;
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
  }
`;

const StyledTextSide = styled.div`
  font-family: "Sora", sans-serif;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: 3em;
    text-transform: capitalize;
    width: 80%;
    color: rgb(32, 32, 32);
    align-self: flex-start;
    line-height: 1.15;
    font-weight: 600;
  }

  h3 {
    font-size: 1.25em;
    text-transform: capitalize;
    color: rgba(32, 32, 32, 0.6);
    font-weight: 400;
    margin-bottom: 1rem;
    width: 80%;
    align-self: flex-start;
    padding: 20px 0;
  }

  @media (max-width: 48em) {
    width: 100%;
    align-self: center;
    text-align: center;

    h2 {
      margin-top: 1em;
      width: 100%;
      font-size: 2rem;
    }

    h3 {
      width: 100%;
      font-size: 1rem;
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
