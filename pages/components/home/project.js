import Link from "next/link";
import * as S from "../commons";

const Project = ({ title, description, link, tags, date }) => {
  return (
    <li>
      <Link
        href={{
          pathname: link,
          query: { title, description },
        }}
      >
        <a>
          <div>
            {tags.map((tag, key) => {
              return <div className={tag} key={key}></div>;
            })}
          </div>

          <div>
            <div>{title}</div>
            <div>{description}</div>
          </div>
          <div>{date}</div>
        </a>
      </Link>
    </li>
  );
};

export default Project;
