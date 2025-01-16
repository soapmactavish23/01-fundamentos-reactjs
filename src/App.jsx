import { Header } from "./components/Header";
import { Post } from "./Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Henrick Nogueira"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eros eget velit convallis elementum. Sed id velit non massa condimentum ultricies."
          />
        </main>
      </div>
    </div>
  );
}
