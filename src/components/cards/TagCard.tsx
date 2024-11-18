import Link from "next/link";

// UI
import { Badge } from "../ui/badge";

// Constants
import ROUTES from "@/constants/routes";
import { getDeviconClassName } from "@/lib/utils";

interface Props {
  _id: string;
  name: string;
  questions: string;
  showCount?: boolean;
  compact?: boolean;
}

const TagCard = ({ _id, name, questions, showCount, compact }: Props) => {
  const iconClass = getDeviconClassName(name);

  return (
    <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 roudned-md border-none px-4 py-2">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`} />
          <span>{name}</span>
        </div>
      </Badge>

      {showCount ? (
        <p className="small-medium text-dark500_light700">{questions}</p>
      ) : null}
    </Link>
  );
};

export default TagCard;
