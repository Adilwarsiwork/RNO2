import React from "react";
import ModalCategories from "../../app/(archives)/ModalCategories";
import ModalTags from "../../app/(archives)/ModalTags";
import { DEMO_POSTS_VIDEO } from "@/data/posts";
import { DEMO_CATEGORIES, DEMO_TAGS } from "@/data/taxonomies";
import { DEMO_AUTHORS } from "@/data/authors";
import Pagination from "@/components/Pagination/Pagination";
import ButtonPrimary from "@/components/Button/ButtonPrimary";
import ArchiveFilterListBox from "@/components/ArchiveFilterListBox/ArchiveFilterListBox";
import SectionSubscribe2 from "@/components/SectionSubscribe2/SectionSubscribe2";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "@/components/SectionGridCategoryBox/SectionGridCategoryBox";
import ButtonSecondary from "@/components/Button/ButtonSecondary";
import SectionSliderNewAuthors from "@/components/SectionSliderNewAthors/SectionSliderNewAuthors";
import Card10V2 from "@/components/Card10/Card10V2";

const SectionVideos2 = ({}) => {
  //Filters
  const FILTERS = [
    { name: "Most Recent" },
    { name: "Curated by Admin" },
    { name: "Most Appreciated" },
    { name: "Most Discussed" },
    { name: "Most Viewed" },
  ];
  return (
    <div className="dark bg-neutral-900/95 text-white">
      <div className=" py-16 lg:py-28 ">
        {/* HEADER */}
        <h2 className="inline-block align-middle text-5xl font-semibold md:text-6xl ">
          Videos
        </h2>
        <span className="block mt-4 text-neutral-300">1100 Videos</span>
        {/* ====================== END HEADER ====================== */}
        <div className="mt-16 flex flex-col sm:items-center sm:justify-between sm:flex-row">
          <div className="flex space-x-2.5">
            <ModalCategories categories={DEMO_CATEGORIES} />
            <ModalTags tags={DEMO_TAGS} />
          </div>
          <div className="block my-4 border-b w-full border-neutral-500 sm:hidden"></div>
          <div className="flex justify-end">
            <ArchiveFilterListBox lists={FILTERS} />
          </div>
        </div>

        {/* LOOP ITEMS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10 mt-8 lg:mt-10">
          {DEMO_POSTS_VIDEO.map((post) => (
            <Card10V2 key={post.id} post={post} />
          ))}
        </div>

        {/* PAGINATIONS */}
        <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row sm:justify-between sm:items-center">
          <Pagination />
          <ButtonPrimary>Show me more</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default SectionVideos2;
