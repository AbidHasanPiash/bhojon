import Activities from "@/components/dashboard/Activities";
import MonthlySales from "@/components/dashboard/MonthlySales";
import ComparedToLastWeek from "@/components/dashboard/ComparedToLastWeek";

export default function Home() {
  return (
    <div>
      <div className="px-6 pt-6 2xl:container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Activities/>
          <MonthlySales/>
          <ComparedToLastWeek/>
        </div>
      </div>
    </div>
  );
}
