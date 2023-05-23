import Activities from "@/components/dashboard/Activities";
import ComparedToLastDay from "@/components/dashboard/ComparedToLastDay";
import ComparedToLastWeek from "@/components/dashboard/ComparedToLastWeek";

export default function Home() {
  return (
    <div>
      <div className="px-6 pt-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Activities/>
          <ComparedToLastDay/>
          <ComparedToLastWeek/>
        </div>
      </div>
    </div>
  );
}
