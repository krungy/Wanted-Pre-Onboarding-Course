import {
  Career,
  Data,
  Github,
  Guide,
  Knowhow,
  Law,
  Marketer,
  Md,
  Onboarding,
  Starbucks,
  Ux,
} from '@assets/Image';
import { Button, Icon } from '@components/base';
import { CarouselContent } from '@components/domain';
import styled from '@emotion/styled';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import color from '@assets/colors';
import { useResize, useIntervalFn } from '@hooks';
import PropTypes from 'prop-types';
import theme from '@styles/theme';

const CAROUSEL_LIST = [
  {
    title: '나도 개발자 되고 싶다',
    subtitle: '프론트엔드 무료 교육과정 참여하기',
    src: Onboarding,
    alt: 'Onboarding',
  },
  {
    title: '요즘 MD가 일하는 방법',
    subtitle: '실무자가 공개하는 MD 커리어의 모든 것!',
    src: Md,
    alt: 'Md',
  },
  {
    title: '스타벅스 굿즈 좋아하세요?',
    subtitle: '사랑받는 디자인의 비밀',
    src: Starbucks,
    alt: 'Starbucks',
  },
  {
    title: '믿을 것은 데이터 뿐!',
    subtitle: '요즘 데이터팀은 어떻게 일할까?',
    src: Data,
    alt: 'Data',
  },
  {
    title: '유저 경험을 설계하라!',
    subtitle: '문제를 해결하는 프로덕트 디자인',
    src: Ux,
    alt: 'Ux',
  },
  {
    title: '리크루터 커리어 가이드',
    subtitle: '싼마이 리크루터가 되지 않기 위해',
    src: Guide,
    alt: 'Guide',
  },
  {
    title: '개발자 성장 비결 공개!',
    subtitle: '글 쓰는 개발자들의 이야기',
    src: Knowhow,
    alt: 'Knowhow',
  },
  {
    title: 'Git? GitHub?',
    subtitle: '협업 필수 도구 마스터하기',
    src: Github,
    alt: 'Github',
  },
  {
    title: '마케터를 위한 데이터',
    subtitle: '잘 나가는 마케터는 무엇이 다를까!?',
    src: Marketer,
    alt: 'Marketer',
  },
  {
    title: '아는 만큼 보인다!',
    subtitle: "노동법 '채용' 시리즈",
    src: Law,
    alt: 'Law',
  },
  {
    title: '해, 커리어 EP 02 공개',
    subtitle: '최종 발표를 위한 마지막 관문 2라운드의 승자는?',
    src: Career,
    alt: 'Career',
  },
];

// 맨앞, 맨뒤에 실제로는 이동하지 않는 컨텐츠를 하나씩 넣어서 레이아웃이 유지되도록 함
CAROUSEL_LIST.unshift(CAROUSEL_LIST[CAROUSEL_LIST.length - 1]);
CAROUSEL_LIST.push(CAROUSEL_LIST[1]);

const CarouselContainer = styled.div`
  width: 100%;
  padding: 0;
  overflow: hidden;
  position: relative;
`;

const ContentContainer = styled.div`
  display: flex;
  margin: 0 auto;
  box-sizing: border-box;
  width: ${({ width }) => width}px;
  gap: ${({ gap }) => gap}px;
  user-select: none;
`;

const ButtonContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
  top: 120px;
  border-radius: 15px;
  background-color: ${color.white};
  opacity: 0.5;
  width: 30px;
  height: 60px;
  left: ${({ align }) => align === 'left' && `calc((100% - 1210px) / 2)`};
  right: ${({ align }) => align === 'right' && `calc((100% - 1210px) / 2)`};

  ${theme.mediaQuery('large')} {
    top: 150px;
    left: ${({ align }) => align === 'left' && '4px'};
    right: ${({ align }) => align === 'right' && '4px'};
  }
`;

const Carousel = ({ carouselGap, imageWidth, ...props }) => {
  // activeContent '0' 과 마지막 컨텐츠는 옆에 살짝 보여주기만 하는 레이아웃 용도
  const [activeContent, setActiveContent] = useState(1);
  const initialLocation = imageWidth + carouselGap;
  const [currentLocation, setCurrentLocation] = useState(initialLocation);
  const [isLoading, setIsLoading] = useState(false);
  const carouselRef = useRef(null);
  const windowWidth = useResize();
  const totalContent = CAROUSEL_LIST.length;

  // Carousel 컨텐츠영역의 전체 넓이
  const fullWidth =
    imageWidth * totalContent + (totalContent - 1) * carouselGap;
  // Carousel 표시해줄 마지막 컨텐츠의 시작 넓이 (prev 이벤트로의 이동을 위함)
  const lastContentWidth =
    imageWidth * (totalContent - 2) + (totalContent - 2) * carouselGap;

  const moveCarousel = useCallback(
    (duration) => {
      carouselRef.current.style.transitionDuration = `${duration}ms`;
      carouselRef.current.style.transform = `translateX(-${currentLocation}px)`;
    },
    [currentLocation],
  );

  // 이벤트 딜레이 시간
  const handleLoading = () => {
    setIsLoading(true);
    let timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);
    return () => {
      clearTimeout(timer);
    };
  };

  const handleNextContent = useCallback(() => {
    if (isLoading) return;
    handleLoading();
    return activeContent >= totalContent - 2
      ? (setCurrentLocation(initialLocation), setActiveContent(1))
      : (setCurrentLocation(
          (prevLocation) => (prevLocation += imageWidth + carouselGap),
        ),
        setActiveContent((prevContent) => prevContent + 1));
  }, [
    imageWidth,
    carouselGap,
    activeContent,
    totalContent,
    initialLocation,
    isLoading,
  ]);

  const handlePrevContent = useCallback(() => {
    if (isLoading) return;
    handleLoading();
    return activeContent > 1
      ? (setCurrentLocation(
          (prevLocation) => (prevLocation -= imageWidth + carouselGap),
        ),
        setActiveContent((prevContent) => prevContent - 1))
      : (setCurrentLocation(lastContentWidth),
        setActiveContent(totalContent - 2));
  }, [
    imageWidth,
    carouselGap,
    totalContent,
    activeContent,
    lastContentWidth,
    isLoading,
  ]);

  const [run] = useIntervalFn(() => {
    handleNextContent();
  }, 4000);

  useEffect(() => {
    moveCarousel(300);
    run();
  }, [moveCarousel, run]);

  // window 크기의 변화가 일어날 떄 캐러셀 컨텐츠 위치 작업
  useEffect(() => {
    if (imageWidth < 1060) {
      setActiveContent(1);
      setCurrentLocation(imageWidth + carouselGap);
    } else {
      setActiveContent(1);
      setCurrentLocation(initialLocation);
    }
  }, [imageWidth, carouselGap, initialLocation]);

  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const [isDrag, setIsDrag] = useState(false);

  const handleTouchStart = useCallback((e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setIsDrag(true);
  }, []);

  const handleMouseDown = useCallback((e) => {
    setTouchStart(e.clientX);
    setTouchEnd(e.clientX);
    setIsDrag(true);
  }, []);

  const handleTouchMove = useCallback(
    (e) => {
      isDrag && setTouchEnd(e.targetTouches[0].clientX);
    },
    [isDrag],
  );

  const handleMouseMove = useCallback(
    (e) => {
      isDrag && setTouchEnd(e.clientX);
    },
    [isDrag],
  );

  const handleTouchEnd = useCallback(() => {
    setIsDrag(false);
    if (touchStart - touchEnd > imageWidth / 5) handleNextContent();
    if (touchStart - touchEnd < -(imageWidth / 5)) handlePrevContent();

    setTouchStart(null);
    setTouchEnd(null);
  }, [touchStart, touchEnd, imageWidth, handleNextContent, handlePrevContent]);

  const handleCarouselList = (list) =>
    list.map(({ src, alt, title, subtitle }, index) => (
      <CarouselContent
        src={src}
        alt={alt}
        title={title}
        subtitle={subtitle}
        width={imageWidth}
        isActive={activeContent === index}
        key={index}
      />
    ));

  const initialStyle = {
    paddingLeft:
      imageWidth === 1060 ? Math.ceil(windowWidth / 2 - imageWidth / 2) : 0,
    boxSizing: 'content-box',
  };

  return (
    <CarouselContainer style={{ ...props.style }}>
      <ContentContainer
        gap={carouselGap}
        ref={carouselRef}
        width={fullWidth}
        onTouchStart={(touchStartEvent) => handleTouchStart(touchStartEvent)}
        onTouchMove={(touchMoveEvent) => handleTouchMove(touchMoveEvent)}
        onTouchEnd={(touchEndEvent) => handleTouchEnd(touchEndEvent)}
        onMouseDown={(mouseDownEvent) => handleMouseDown(mouseDownEvent)}
        onMouseMove={(mouseMoveEvent) => handleMouseMove(mouseMoveEvent)}
        onMouseUp={handleTouchEnd}
        style={{ ...initialStyle }}
      >
        {handleCarouselList(CAROUSEL_LIST)}
      </ContentContainer>
      <ButtonContainer align="left">
        <Button onClick={handlePrevContent} style={{ height: '100%' }}>
          <Icon name="bi:chevron-left" height={16} />
        </Button>
      </ButtonContainer>
      <ButtonContainer align="right">
        <Button onClick={handleNextContent} style={{ height: '100%' }}>
          <Icon name="bi:chevron-right" height={16} />
        </Button>
      </ButtonContainer>
    </CarouselContainer>
  );
};

Carousel.propTypes = {
  carouselGap: PropTypes.number,
  imageWidth: PropTypes.number,
};

Carousel.defaultProps = {
  carouselGap: 20,
  imageWidth: 1060,
};

export default Carousel;
