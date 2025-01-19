import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/55353527?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Henrick Nogueira</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="11 de maio ás 08:13h" datetime="2022-05-11 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa</p>
        <p>
          Acabei de subir mais um projeto no meu portifólio. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Ea amet quasi deleniti
          distinctio. Doloremque quibusdam asperiores quia culpa voluptatibus
          hic aut necessitatibus dicta consequuntur! Rem deleniti fuga accusamus
          maiores aspernatur.
        </p>
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>{" "}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
