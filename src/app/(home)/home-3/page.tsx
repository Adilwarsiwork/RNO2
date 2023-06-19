import React from "react";
import { DEMO_CATEGORIES } from "@/data/taxonomies";
import { DEMO_POSTS, DEMO_POSTS_AUDIO } from "@/data/posts";
import SectionHero from "@/components/SectionHero/SectionHero";
import rightImg from "@/images/hero-right1.png";
import Vector1 from "@/images/Vector1.png";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";

import SectionGridCategoryBox from "@/components/SectionGridCategoryBox/SectionGridCategoryBox";
import Image from "next/image";

import SectionVideos from "@/components/Sections/SectionVideos";
import SectionVideos2 from "../../../components/Sections/SectionVideos2";

// DEMO DATA
const POSTS = DEMO_POSTS;
const MAGAZINE1_POSTS = POSTS.filter((_, i) => i >= 0 && i < 8);
//

const PageHomeDemo3: React.FC = () => {
  return (
    <div className="nc-PageHomeDemo3 relative">
      <div className="container relative">
        <SectionHero
          rightImg={rightImg}
          className="pt-10 pb-16 md:py-16 lg:pb-28 lg:pt-20"
          heading={
            <span className="text-5xl xs:text-3xl">
              Your Source for Breaking News for News Channels & {` `}
              <span className="relative pr-3">
                <Image
                  className="w-full absolute top-1/2 -left-1 transform -translate-y-1/2"
                  src={Vector1}
                  alt=""
                />
                <span className="relative">Agencies</span>
              </span>
            </span>
          }
          btnText="Getting started"
          subHeading="Welcome to Right News Online, the premier platform for
delivering breaking news to news channels and agencies.
We understand the urgency of providing accurate and
timely information to keep your audience informed. 🎈"
        />
        <SectionGridCategoryBox
          headingCenter={false}
          categoryCardType="card2"
          className="pb-16 lg:pb-28"
          categories={DEMO_CATEGORIES.filter((_, i) => i < 10)}
        />
        <SectionVideos className="py-16 lg:py-28" />
        //Video Section start
        <SectionVideos2></SectionVideos2>
        //Video Section end
        <SectionSubscribe2 className="pb-16 lg:pb-28" />
      </div>
    </div>
  );
};

export default PageHomeDemo3;
