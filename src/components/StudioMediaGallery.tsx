import React, { useEffect, useRef, useState } from "react";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Film,
  Maximize2,
  Pause,
  Play,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import {
  STUDIO_PHOTOS,
  STUDIO_VIDEOS,
  StudioMediaItem,
} from "../data/catalogData";

type GalleryFilter = "all" | "photos" | "videos";

interface VideoCardProps {
  item: StudioMediaItem;
  onOpenLightbox: (item: StudioMediaItem) => void;
}

const VideoGalleryCard: React.FC<VideoCardProps> = ({
  item,
  onOpenLightbox,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasError, setHasError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || hasError) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video || hasError) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[#B58938]/25 bg-[#FFFFFF] shadow-[0_12px_32px_rgba(42,24,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B58938]">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#F2EAE0]">
        {!hasError ? (
          <>
            <video
              ref={videoRef}
              src={item.src}
              muted={isMuted}
              playsInline
              controls
              preload="metadata"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              onError={() => setHasError(true)}
              className="h-full w-full object-cover"
            />

            {/* Custom top-right HD overlay controls without obscuring video */}
            <div className="absolute right-3 top-3 flex items-center gap-1.5">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? `Pause ${item.title}` : `Play ${item.title}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF6F0]/90 text-[#2A1812] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#B58938] hover:text-white cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Play className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? `Unmute ${item.title}` : `Mute ${item.title}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF6F0]/90 text-[#2A1812] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#B58938] hover:text-white cursor-pointer"
              >
                {isMuted ? (
                  <VolumeX className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Volume2 className="h-4 w-4" aria-hidden="true" />
                )}
              </button>
              <button
                type="button"
                onClick={() => onOpenLightbox(item)}
                aria-label={`Open ${item.title} in full-screen lightbox`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF6F0]/90 text-[#2A1812] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#8B3A42] hover:text-white cursor-pointer"
              >
                <Maximize2 className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </>
        ) : (
          <button
            type="button"
            onClick={() => onOpenLightbox(item)}
            className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FAF6F0] via-[#F2EAE0] to-[#EADBC8] p-5 text-center cursor-pointer"
          >
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-[#B58938]/30 bg-[#FAF6F0]/80 px-4 py-6">
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full border border-[#B58938]/40 bg-[#F2EAE0] text-[#8B3A42]">
                <Film className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="brand-font text-base font-medium leading-snug text-[#2A1812]">
                {item.title}
              </p>
              <p className="mt-1 text-xs text-[#644E46]">
                Studio Showcase Reel · HD Video
              </p>
              <code className="mt-3 rounded-full border border-[#B58938]/30 bg-[#F2EAE0] px-3 py-1 text-[11px] font-medium text-[#8B3A42]">
                {item.src}
              </code>
            </div>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between gap-3 p-4">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#8B3A42]">
            {item.category}
          </p>
          <h4 className="mt-0.5 truncate brand-font text-base font-medium text-[#2A1812]">
            {item.title}
          </h4>
        </div>
        <button
          type="button"
          onClick={() => onOpenLightbox(item)}
          aria-label={`Expand ${item.title}`}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#B58938]/30 bg-[#FAF6F0] text-[#2A1812] transition-colors hover:bg-[#B58938] hover:text-white cursor-pointer"
        >
          <Maximize2 className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
};

interface PhotoCardProps {
  item: StudioMediaItem;
  onOpenLightbox: (item: StudioMediaItem) => void;
}

const PhotoGalleryCard: React.FC<PhotoCardProps> = ({
  item,
  onOpenLightbox,
}) => {
  const [hasError, setHasError] = useState(false);

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-[#B58938]/25 bg-[#FFFFFF] shadow-[0_12px_32px_rgba(42,24,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B58938]">
      <button
        type="button"
        onClick={() => onOpenLightbox(item)}
        aria-label={`View ${item.title} in full-screen HD`}
        className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2EAE0] text-left cursor-pointer"
      >
        {!hasError ? (
          <>
            <img
              src={item.src}
              alt={`${item.title} — A&A Choclates Bhopal`}
              referrerPolicy="no-referrer"
              loading="lazy"
              onError={() => setHasError(true)}
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            />
            <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF6F0]/90 text-[#2A1812] opacity-90 shadow-sm backdrop-blur-sm transition-all group-hover:bg-[#B58938] group-hover:text-white">
              <Maximize2 className="h-4 w-4" aria-hidden="true" />
            </span>
          </>
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#FAF6F0] via-[#F2EAE0] to-[#EADBC8] p-4 text-center">
            <div className="flex h-full w-full flex-col items-center justify-center rounded-2xl border border-[#B58938]/30 bg-[#FAF6F0]/80 px-3 py-4">
              <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#B58938]/35 bg-[#F2EAE0] text-[#B58938]">
                <Camera className="h-4 w-4" aria-hidden="true" />
              </div>
              <p className="brand-font text-sm font-medium leading-snug text-[#2A1812]">
                {item.title}
              </p>
              <code className="mt-2 rounded-full border border-[#B58938]/30 bg-[#F2EAE0] px-2.5 py-0.5 text-[10px] font-medium text-[#8B3A42]">
                {item.src}
              </code>
            </div>
          </div>
        )}
      </button>

      <div className="flex items-center justify-between gap-2 p-4">
        <div className="min-w-0">
          <p className="text-[11px] font-semibold tracking-widest uppercase text-[#8B3A42]">
            {item.category}
          </p>
          <h4 className="mt-0.5 truncate brand-font text-base font-medium text-[#2A1812]">
            {item.title}
          </h4>
        </div>
      </div>
    </article>
  );
};

export const StudioMediaGallery: React.FC = () => {
  const [filter, setFilter] = useState<GalleryFilter>("all");
  const [lightboxItem, setLightboxItem] = useState<StudioMediaItem | null>(
    null
  );
  const [lightboxImageError, setLightboxImageError] = useState(false);

  const allItems: StudioMediaItem[] = [...STUDIO_PHOTOS, ...STUDIO_VIDEOS];
  const visibleItems: StudioMediaItem[] =
    filter === "photos"
      ? STUDIO_PHOTOS
      : filter === "videos"
      ? STUDIO_VIDEOS
      : allItems;

  useEffect(() => {
    setLightboxImageError(false);
  }, [lightboxItem]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!lightboxItem) return;
      if (event.key === "Escape") {
        setLightboxItem(null);
      } else if (event.key === "ArrowRight") {
        const idx = visibleItems.findIndex((i) => i.id === lightboxItem.id);
        if (idx >= 0) {
          setLightboxItem(visibleItems[(idx + 1) % visibleItems.length]);
        }
      } else if (event.key === "ArrowLeft") {
        const idx = visibleItems.findIndex((i) => i.id === lightboxItem.id);
        if (idx >= 0) {
          setLightboxItem(
            visibleItems[
              (idx - 1 + visibleItems.length) % visibleItems.length
            ]
          );
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxItem, visibleItems]);

  const navigateLightbox = (direction: -1 | 1) => {
    if (!lightboxItem) return;
    const idx = visibleItems.findIndex((i) => i.id === lightboxItem.id);
    if (idx < 0) return;
    const nextIdx =
      (idx + direction + visibleItems.length) % visibleItems.length;
    setLightboxItem(visibleItems[nextIdx]);
  };

  return (
    <section
      id="studio-gallery"
      className="scroll-mt-28 border-t border-[#B58938]/20 bg-[#F2EAE0] py-16 sm:py-20"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8B3A42]">
              Complete Studio Visual Gallery
            </p>
            <h2 className="mt-2.5 brand-font text-3xl font-medium text-[#2A1812] sm:text-4xl">
              All 22 Product Photos &amp;{" "}
              <span className="italic text-[#8B3A42]">12 Crafting Reels</span>
            </h2>
            <p className="mt-3 text-base text-[#644E46]">
              Explore every handcrafted slab, floral disc, Kunafa bake, and
              behind-the-scenes tempering reel in high resolution. Tap any item
              for full-screen HD view.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter studio gallery media"
            className="inline-flex flex-wrap items-center gap-1.5 rounded-full border border-[#B58938]/30 bg-[#FAF6F0] p-1.5"
          >
            {(
              [
                { id: "all", label: `All Media (${allItems.length})` },
                { id: "photos", label: `Product Photos (${STUDIO_PHOTOS.length})` },
                {
                  id: "videos",
                  label: `Crafting & Showcase Reels (${STUDIO_VIDEOS.length})`,
                },
              ] as const
            ).map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  onClick={() => setFilter(tab.id)}
                  className={`min-h-[40px] rounded-full px-4 py-2 text-xs font-medium tracking-wider uppercase transition-colors cursor-pointer whitespace-nowrap ${
                    active
                      ? "bg-[#2A1812] text-[#FAF6F0]"
                      : "text-[#644E46] hover:text-[#2A1812]"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Media Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {visibleItems.map((item) =>
            item.type === "photo" ? (
              <PhotoGalleryCard
                key={item.id}
                item={item}
                onOpenLightbox={setLightboxItem}
              />
            ) : (
              <VideoGalleryCard
                key={item.id}
                item={item}
                onOpenLightbox={setLightboxItem}
              />
            )
          )}
        </div>
      </div>

      {/* Full-Screen HD Lightbox Modal */}
      {lightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={lightboxItem.title}
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2A1812]/90 p-4 backdrop-blur-sm sm:p-8"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-[#B58938]/40 bg-[#FAF6F0] shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-[#B58938]/20 px-5 py-4">
              <div>
                <p className="text-[11px] font-semibold tracking-widest uppercase text-[#8B3A42]">
                  {lightboxItem.category}
                </p>
                <h3 className="brand-font text-xl font-medium text-[#2A1812]">
                  {lightboxItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => navigateLightbox(-1)}
                  aria-label="Previous media item"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B58938]/30 bg-[#F2EAE0] text-[#2A1812] hover:bg-[#B58938] hover:text-white cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => navigateLightbox(1)}
                  aria-label="Next media item"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#B58938]/30 bg-[#F2EAE0] text-[#2A1812] hover:bg-[#B58938] hover:text-white cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => setLightboxItem(null)}
                  aria-label="Close lightbox"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2A1812] text-[#FAF6F0] hover:bg-[#8B3A42] cursor-pointer"
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="flex max-h-[75vh] items-center justify-center bg-[#F2EAE0] p-4 sm:p-6">
              {lightboxItem.type === "photo" ? (
                !lightboxImageError ? (
                  <img
                    src={lightboxItem.src}
                    alt={lightboxItem.title}
                    onError={() => setLightboxImageError(true)}
                    className="max-h-[65vh] w-auto rounded-2xl object-contain"
                  />
                ) : (
                  <div className="flex min-h-[280px] w-full flex-col items-center justify-center rounded-2xl border border-[#B58938]/30 bg-[#FAF6F0] p-8 text-center">
                    <Camera className="mb-3 h-8 w-8 text-[#B58938]" />
                    <p className="brand-font text-xl text-[#2A1812]">
                      {lightboxItem.title}
                    </p>
                    <code className="mt-3 rounded-full bg-[#F2EAE0] px-4 py-1.5 text-xs text-[#8B3A42]">
                      {lightboxItem.src}
                    </code>
                  </div>
                )
              ) : (
                <video
                  key={lightboxItem.src}
                  src={lightboxItem.src}
                  controls
                  autoPlay
                  playsInline
                  className="max-h-[65vh] w-full rounded-2xl bg-[#2A1812] object-contain"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
