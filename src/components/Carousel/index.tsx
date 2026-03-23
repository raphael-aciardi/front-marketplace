import { useCallback, useEffect, useState } from 'react'
import type { ComponentPropsWithRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import useEmblaCarousel from 'embla-carousel-react'
import ClassNames from 'embla-carousel-class-names'
import Autoplay from 'embla-carousel-autoplay'
import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel'
import styles from './style.module.css'

const usePrevNextButtons = (emblaApi: EmblaCarouselType | undefined) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
    const autoplay = emblaApi?.plugins()?.autoplay
    if (autoplay) {
      autoplay.reset()
    }
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
    const autoplay = emblaApi?.plugins()?.autoplay
    if (autoplay) {
      autoplay.reset()
    }
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick }
}

const useDotButton = (emblaApi: EmblaCarouselType | undefined) => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])



  const onDotButtonClick = useCallback((index: number) => {
    if (!emblaApi) return
    emblaApi.scrollTo(index)

    const autoplay = emblaApi?.plugins()?.autoplay
    if (autoplay) {
      autoplay.reset()
    }
  }, [emblaApi])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit).on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return { selectedIndex, scrollSnaps, onDotButtonClick }
}


type ButtonPropType = ComponentPropsWithRef<'button'>



const DotButton = ({ children, className, ...restProps }: ButtonPropType) => (
  <button type="button" className={`${styles.embla__dot} ${className}`} {...restProps}>
    {children}
  </button>
)


type CarouselProps = {
  slides?: string[] | number[];
  options?: EmblaOptionsType;
}

const DEFAULT_SLIDES = [1, 2, 3, 4, 5];

export const Carousel = ({ slides = DEFAULT_SLIDES, options = { loop: true } }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    ClassNames({ snapped: styles['is-snapped'] }),
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi)

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {slides.map((slide, index) => (
            <div className={styles.embla__slide} key={index}>
              <img
                className={styles.embla__slide__img}
                src={typeof slide === 'number' ? `https://picsum.photos/600/350?v=${slide}` : slide}
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      <div className={styles.embla__controls}>
        <div className={styles.embla__buttons}>
          <button
            className={`${styles.embla__button} ${styles['embla__button--prev']}`}
            onClick={onPrevButtonClick}
            disabled={prevBtnDisabled}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className={`${styles.embla__button} ${styles['embla__button--next']}`}
            onClick={onNextButtonClick}
            disabled={nextBtnDisabled}
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.embla__dots}>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={index === selectedIndex ? styles['embla__dot--selected'] : ''}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;