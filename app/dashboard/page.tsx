import LatestIssues from "@/components/LatestIssues";
export default function Dashboard() {

  return (
    <section className="flex flex-col md:flex-row my-10 justify-between items-center">
      <div>
        Bar chart
      </div>
      <LatestIssues />
    </section>
  );
}
