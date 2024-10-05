import Header from "@/components/Header/Core";
import Hero from "@/components/Hero/Core";
import ToDoInfo from "@/components/ToDoInfo/Core";
import TaskList from "@/components/TaskList/Core";
import Blog from "@/components/Blog/Core";
import Contact from "@/components/Contact/Core";
import Footer from "@/components/Footer/Core";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ToDoInfo />
      <TaskList />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}
