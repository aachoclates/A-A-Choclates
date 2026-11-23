import React from "react";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { ArtisanalImage } from "./ArtisanalImage";
import { InstagramIcon } from "./SocialIcons";

export const CraftAndLocation: React.FC = () => {
  return (
    <section
      id="craft"
      className="scroll-mt-28 bg-[#FAF6F0] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Studio Photography */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-3xl border border-[#B58938]/25 bg-[#FFFFFF] p-3.5 shadow-[0_12px_35px_rgba(42,24,18,0.06)]">
              <ArtisanalImage
                src="/assets/02_Images/aachoclates-photo-21.jpg"
                alt="Handcrafted chocolate making in Niquehat Khan's Bhopal studio using pure cocoa butter, roasted almonds, and dried rose petals"
                title="A&A Choclates Artisanal Studio"
                filename="aachoclates-photo-21.jpg"
                aspectClassName="aspect-[4/3] lg:aspect-auto lg:h-full min-h-[340px]"
                roundedClassName="rounded-2xl"
              />
            </div>
          </div>

          {/* Right Story + Studio Pickup Map Details */}
          <div className="flex flex-col justify-center lg:col-span-7">
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
        </div>
      </div>
    </section>
  );
};
