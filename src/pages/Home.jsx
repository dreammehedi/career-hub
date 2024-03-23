import Hero from "../components/Hero";
import JobCategory from "../components/job-category/JobCategory";
import JobFeatured from "../components/job-featured/JobFeatured";

function Home() {
  return (
    <>
      <Hero></Hero>
      <JobCategory></JobCategory>
      <JobFeatured></JobFeatured>
    </>
  );
}

export default Home;
