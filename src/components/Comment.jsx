import { ThumbsUp, Trash } from "@phosphor-icons/react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({content}) {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/55353527?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Henrick Nogueira</strong>
              <time title="11 de maio ás 08:13h" datetime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Deletar comentário">
                <Trash size={20}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
            <button>
                <ThumbsUp />
                Aplaudir <span>24</span>
            </button>
        </footer>
      </div>
    </div>
  );
}
