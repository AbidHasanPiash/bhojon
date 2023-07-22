import Link from "next/link";

export default function Home() {
  return (
    <div className="container_gap">
      <h1 className="mb-6 text-center text-7xl">Home</h1>
      <div className="container_layout">
        <Link href={'/dashboard'}>dashboard</Link>
      </div>
    </div>
  );
}
