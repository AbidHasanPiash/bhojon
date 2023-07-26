import Features from "@/components/home/Features";
import Login from "@/components/home/Login";

export default function Home() {
  return (
    <div>
      <Login/>
      <div className="h-screen">
        <Features/>
      </div>
    </div>
  );
}
