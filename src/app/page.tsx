import Image from "next/image";
import Nav from "./components/Nav";
import BlogList from "./components/BlogList";

export default function Home() {
  return (
    <main>
      <BlogList />
    </main>
  );
}
