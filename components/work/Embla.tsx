import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import { Thumb } from "@/lib/EmblaCarouselThumbsButton";

interface EmblaProps {
  options?: EmblaOptionsType;
  photos?: string[];
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

function Embla(props: EmblaProps) {
  const { options, photos, selectedIndex, setSelectedIndex } = props;
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: "keepSnaps",
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="embla pb-5 pt-2 px-1 sm:px-0">
      <div className="embla__viewport" ref={emblaMainRef}>
        <div className="embla__container">
          {photos?.map((data, idx) => (
            <div className="embla__slide" key={idx}>
              <div className="embla__slide__number relative overflow-hidden rounded-xl">
                <Image
                  className="absolute top-0 w-full rounded-xl"
                  src={data}
                  alt="picture of the project"
                  style={{ objectFit: "contain" }}
                  fill
                  priority
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla-thumbs">
        <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
          <div className="embla-thumbs__container">
            {photos?.map((data, idx) => (
              <Thumb
                key={idx}
                onClick={() => onThumbClick(idx)}
                selected={idx === selectedIndex}
                index={idx}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Embla;
