import Header from "@/components/Header/Core";
import Hero from "@/components/Hero/Core";
import ToDoInfo from "@/components/ToDoInfo/Core";
import TaskList from "@/components/TaskList/Core";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <ToDoInfo />
      <TaskList />
    </main>
  );
}
