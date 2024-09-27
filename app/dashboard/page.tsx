import IssueSummary from "@/components/IssueSummary";
import LatestIssues from "@/components/LatestIssues";
export default function Dashboard() {

  return (
    <section className="">
      <div className="w-full flex gap-10 flex-col md:flex-row my-10 justify-between items-start">
        <LatestIssues />
        <div className="flex flex-col">
          <IssueSummary open={10} inProgress={5} closed={5} />
          <div>
            Bar chart
          </div>
        </div>
      </div>
    </section>
  );
}
