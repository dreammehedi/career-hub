import SectionTitle from "../SectionTitle";
import JobCategoryItem from "./JobCategoryItem";

function JobCategory() {
  return (
    <section className=" !bg-white dark:bg-gray-100">
      {/* job category title */}
      <SectionTitle
        title="Job Category List"
        desc="Explore thousands of job opportunities with all the information you need. Its your future"
      ></SectionTitle>
      {/* job category items */}
      <JobCategoryItem></JobCategoryItem>
    </section>
  );
}

export default JobCategory;
