import SectionTitle from "../SectionTitle";
import JobFeaturedItem from "./JobFeaturedItem";

function JobFeatured() {
  return (
    <section className="!bg-white dark:bg-gray-100">
      {/* job category title */}
      <SectionTitle
        title="Featured Jobs"
        desc="Explore thousands of job opportunities with all the information you need. Its your future"
      ></SectionTitle>
      {/* job featured items */}
      <JobFeaturedItem></JobFeaturedItem>
    </section>
  );
}

export default JobFeatured;
