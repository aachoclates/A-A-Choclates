import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { siteConfig } from "../config/siteConfig";
import { GOOGLE_RATING_ONLY_REVIEWS, GOOGLE_REVIEWS } from "../data/catalogData";
import { GoogleIcon } from "./SocialIcons";

export const GoogleReviewsSection: React.FC = () => {
  return (
    <section
      id="google-reviews"
      className="scroll-mt-28 border-y border-[#B58938]/20 bg-[#FAF6F0] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#B58938]/25 bg-[#FFFFFF] shadow-[0_10px_30px_rgba(42,24,18,0.08)]">
              <GoogleIcon className="h-7 w-7" />
            </span>
            <div>
              <p className="text-xs font-semibold tracking-[3px] uppercase text-[#8B3A42]">
                Verified on Google Maps
              </p>
              <h2 className="mt-1.5 brand-font text-3xl font-medium text-[#2A1812] sm:text-4xl">
                Google <span className="italic text-[#8B3A42]">Reviews</span>
              </h2>
            </div>
          </div>

          {/* Rating summary pill */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#B58938]/30 bg-[#FFFFFF] px-5 py-2.5 shadow-[0_8px_24px_rgba(42,24,18,0.06)]">
            <Star
              className="h-5 w-5 fill-[#B58938] text-[#B58938]"
              aria-hidden="true"
            />
            <span className="text-sm font-semibold text-[#2A1812]">5.0</span>
            <span className="h-4 w-px bg-[#B58938]/30" aria-hidden="true" />
            <span className="text-sm font-light text-[#644E46]">
              5 Google Reviews
            </span>
          </div>
        </div>

        {/* Review cards */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {GOOGLE_REVIEWS.map((review) => (
            <article
              key={review.id}
              className="flex flex-col justify-between rounded-3xl border border-[#B58938]/22 bg-[#FFFFFF] p-7 shadow-[0_12px_35px_rgba(42,24,18,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#B58938]"
            >
              <div>
                <div
                  className="flex items-center gap-1 text-[#B58938]"
                  role="img"
                  aria-label={`${review.rating} out of 5 stars`}
                >
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-[#B58938] text-[#B58938]"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <blockquote className="mt-4 text-[15px] font-light italic leading-[1.7] text-[#2A1812]">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 border-t border-[#B58938]/20 pt-4">
                <p className="text-sm font-medium text-[#2A1812]">
                  {review.author}
                </p>
                <span className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-[#F2EAE0] px-2.5 py-1 text-[10px] font-semibold tracking-wider uppercase text-[#8B3A42]">
                  <GoogleIcon className="h-3 w-3" />
                  Verified Google Review
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Rating-only verified Google reviewers */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-2xl border border-[#B58938]/20 bg-[#F2EAE0] px-6 py-5 sm:flex-row sm:gap-10">
          {GOOGLE_RATING_ONLY_REVIEWS.map((reviewer) => (
            <div
              key={reviewer.author}
              className="flex items-center gap-2.5 text-center"
            >
              <span
                className="text-sm tracking-[0.15em] text-[#7D5B1C]"
                role="img"
                aria-label="5 out of 5 stars"
              >
                ★★★★★
              </span>
              <span className="text-sm font-medium text-[#2A1812]">
                {reviewer.author}
              </span>
              <span className="text-xs font-light text-[#644E46]">
                • 5-Star Rating on Google
              </span>
            </div>
          ))}
        </div>

        {/* Feedback CTA block */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 rounded-3xl border border-[#B58938]/30 bg-[#2A1812] p-8 text-[#FAF6F0] shadow-[0_18px_45px_rgba(42,24,18,0.14)] sm:p-10 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold tracking-[3px] uppercase text-[#B58938]">
              We value your experience
            </p>
            <h3 className="mt-2.5 brand-font text-2xl font-medium text-[#FAF6F0] sm:text-3xl">
              Your feedback is important to us
            </h3>
            <p className="mt-2 text-sm font-light leading-[1.7] text-[#FAF6F0]/75">
              Loved your A&amp;A Choclates box? Share a quick review on Google
              and help more Bhopal patrons discover us.
            </p>
          </div>

          <a
            href={siteConfig.GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[50px] shrink-0 items-center justify-center gap-2.5 rounded-full bg-[#B58938] px-7 py-3.5 text-xs font-medium uppercase tracking-[2px] text-[#2A1812] shadow-lg transition-all duration-300 hover:bg-[#DFC896] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B58938] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2A1812]"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FFFFFF]">
              <GoogleIcon className="h-4 w-4" />
            </span>
            <span>Give your feedback</span>
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};