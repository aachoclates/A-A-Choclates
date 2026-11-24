import React, { useRef, useState } from "react";
import {
  ExternalLink,
  Mail,
  MapPin,
  Pause,
  Phone,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { CRAFT_STUDIO_PHOTOS } from "../data/catalogData";
import { ArtisanalImage } from "./ArtisanalImage";
import { InstagramIcon } from "./SocialIcons";

const CRAFT_VIDEO_SRC = "/assets/03_Videos/aachoclates-video-12.mp4";
const CRAFT_VIDEO_POSTER = "/images/craft-studio.webp";

export const CraftAndLocation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <section
      id="craft"
      className="scroll-mt-28 bg-[#FAF6F0] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Story + Studio Pickup Details */}
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
              Homemade Excellence · Founded by {siteConfig.founderName}
            </p>
            <h2 className="mt-2.5 brand-font text-3xl font-medium text-[#2A1812] sm:text-4xl">
              Wholesome Purity in{" "}
              <span className="italic text-[#8B3A42]">
                Every Small-Batch Bite
              </span>
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-[#644E46] font-light">
              A&amp;A Choclates is an artisanal homemade chocolate and healthy
              dry-fruit confectionery studio rooted in Bhopal, Madhya Pradesh.
              Founded by{" "}
              <strong className="font-medium text-[#2A1812]">
                {siteConfig.founderName}
              </strong>
              , our kitchen crafts custom name-engraved chocolates, hot
              chocolate stirrer spoons, Kunafa bakes, royal stuffed dates, and
              8g protein choco laddus with clean energy, natural ingredients,
              and unhurried care.
            </p>

            <div className="mt-6 rounded-2xl border border-[#B58938]/25 bg-[#F2EAE0] p-6">
              <p className="brand-font text-lg italic leading-relaxed text-[#2A1812]">
                &ldquo;CRAFT WITH CARE — Every piece is created by hand to
                celebrate life&apos;s moments with pure cocoa, slow-roasted
                nuts, and uncompromised homemade quality.&rdquo;
              </p>
            </div>

            {/* Bhopal Studio Pickup & Contact Card */}
            <div className="mt-8 rounded-3xl border border-[#B58938]/25 bg-[#FFFFFF] p-6 shadow-[0_12px_35px_rgba(42,24,18,0.06)]">
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h3 className="brand-font text-xl font-medium text-[#2A1812]">
                    Bhopal Studio Pickup &amp; Inquiries
                  </h3>
                  <p className="mt-0.5 text-xs font-medium text-[#8B3A42]">
                    Local Delivery in Bhopal · Bulk Dispatch Across MP
                  </p>
                </div>

                <a
                  href={siteConfig.GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-berry min-h-[42px] shrink-0 px-5 py-2 text-[11px] whitespace-nowrap"
                >
                  <span>Open Pickup Map</span>
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>

              <dl className="mt-5 grid grid-cols-1 gap-4 border-t border-[#B58938]/15 pt-5 sm:grid-cols-2">
                <div className="flex items-start gap-3 sm:col-span-2">
                  <MapPin
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8B3A42]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold tracking-wider uppercase text-[#2A1812]">
                      Studio Address
                    </dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-[#644E46] font-light">
                      {siteConfig.ADDRESS}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8B3A42]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold tracking-wider uppercase text-[#2A1812]">
                      Direct Line &amp; WhatsApp
                    </dt>
                    <dd className="mt-0.5 text-sm tabular-nums text-[#644E46]">
                      <a
                        href={`tel:+${siteConfig.WHATSAPP_NUMBER}`}
                        className="hover:text-[#2A1812] underline decoration-[#B58938]/50 underline-offset-4"
                      >
                        {siteConfig.DISPLAY_PHONE}
                      </a>
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail
                    className="mt-0.5 h-4 w-4 shrink-0 text-[#8B3A42]"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="text-xs font-semibold tracking-wider uppercase text-[#2A1812]">
                      Email &amp; Instagram
                    </dt>
                    <dd className="mt-0.5 flex flex-col gap-1 text-sm text-[#644E46]">
                      <a
                        href={`mailto:${siteConfig.EMAIL}`}
                        className="hover:text-[#2A1812] underline decoration-[#B58938]/50 underline-offset-4"
                      >
                        {siteConfig.EMAIL}
                      </a>
                      <a
                        href={siteConfig.INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8B3A42] hover:text-[#2A1812]"
                      >
                        <InstagramIcon className="h-3.5 w-3.5" />
                        <span>{siteConfig.INSTAGRAM_HANDLE}</span>
                      </a>
                    </dd>
                  </div>
                </div>
              </dl>
            </div>
          </div>

          {/* Right: Studio Equipment Video Showcase */}
          <div className="lg:col-span-5">
            <figure className="mx-auto w-full max-w-sm">
              <div className="relative overflow-hidden rounded-2xl border border-[#DFC896]/40 bg-[#2A1812] shadow-xl">
                <video
                  ref={videoRef}
                  src={CRAFT_VIDEO_SRC}
                  poster={CRAFT_VIDEO_POSTER}
                  autoPlay
                  muted={isMuted}
                  loop
                  playsInline
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  className="block h-auto w-full"
                >
                  Your browser does not support the video tag.
                </video>

                {/* Minimal corner controls */}
                <div className="absolute bottom-3 right-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Pause studio video" : "Play studio video"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF6F0]/90 text-[#2A1812] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#B58938] hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938]"
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
                    aria-label={isMuted ? "Unmute studio video" : "Mute studio video"}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FAF6F0]/90 text-[#2A1812] shadow-sm backdrop-blur-sm transition-colors hover:bg-[#B58938] hover:text-white cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938]"
                  >
                    {isMuted ? (
                      <VolumeX className="h-4 w-4" aria-hidden="true" />
                    ) : (
                      <Volume2 className="h-4 w-4" aria-hidden="true" />
                    )}
                  </button>
                </div>
              </div>

              <figcaption className="mt-4 text-center text-sm font-light leading-[1.7] text-[#644E46]">
                Inside our Bhopal atelier — small-batch tempering equipment,
                hygienic hand-craft, and 100% pure ingredients in every batch.
              </figcaption>
            </figure>
          </div>
        </div>

        {/* Fresh Creations Grid (photos 27–34) */}
        <div className="mt-16 sm:mt-20">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
              Fresh from the Atelier
            </p>
            <h3 className="mt-2.5 brand-font text-2xl font-medium text-[#2A1812] sm:text-3xl">
              New Creations &amp;{" "}
              <span className="italic text-[#8B3A42]">Behind-the-Scenes Craft</span>
            </h3>
            <p className="mt-3 text-base leading-[1.75] text-[#644E46] font-light">
              A fresh look at our latest handcrafted bars, floral discs, Kunafa
              bakes, and hampers straight from the studio.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {CRAFT_STUDIO_PHOTOS.map((photo) => (
              <figure
                key={photo.id}
                className="group overflow-hidden rounded-2xl border border-[#B58938]/22 bg-[#FFFFFF] shadow-[0_10px_30px_rgba(42,24,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B58938] hover:shadow-[0_18px_40px_rgba(42,24,18,0.12)]"
              >
                <ArtisanalImage
                  src={photo.src}
                  alt={photo.title}
                  title={photo.title}
                  filename={photo.filename}
                  aspectClassName="aspect-square"
                  roundedClassName="rounded-none"
                  className="border-0 border-b border-[#B58938]/15"
                />
                <figcaption className="p-3.5">
                  <p className="text-[10px] font-semibold tracking-widest uppercase text-[#8B3A42]">
                    {photo.category}
                  </p>
                  <p className="mt-0.5 truncate brand-font text-sm font-medium text-[#2A1812]">
                    {photo.title}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};