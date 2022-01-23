import { memo } from "react";

interface Subject {
  id: number;
  title: string;
}

interface SubjectListProps {
  list: Subject[];
}

const SubJectList = ({ list }: SubjectListProps) => {
  return (
    <div>
      {list.length > 0 ? (
        <ul>
          {list.map((item) => (
            <li key={item.id}>
              {item.id} - {item.title}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default memo(SubJectList);
