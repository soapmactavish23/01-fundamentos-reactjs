import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      name: "Henrick Nogueira",
      avatarUrl: "https://avatars.githubusercontent.com/u/55353527?v=4",
      role: "Web Developer",
    },
    publishedAt: new Date("2025-01-10 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet quasi delenitidistinctio. Doloremque quibusdam asperiores quia culpa voluptatibus hic aut necessitatibus dicta consequuntur! Rem deleniti fuga accusam usmaiores aspernatur.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
  {
    id: 2,
    author: {
      name: "Ana Cláudia Nogueira",
      avatarUrl: "https://avatars.githubusercontent.com/u/55353527?v=4",
      role: "Web Developer",
    },
    publishedAt: new Date("2025-01-03 20:00:00"),
    content: [
      { type: "paragraph", content: "Fala galeraa" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifólio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet quasi delenitidistinctio. Doloremque quibusdam asperiores quia culpa voluptatibus hic aut necessitatibus dicta consequuntur! Rem deleniti fuga accusam usmaiores aspernatur.",
      },
      { type: "link", content: "jane.design/doctorcare" },
    ],
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                publishedAt={post.publishedAt}
                content={post.content}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
