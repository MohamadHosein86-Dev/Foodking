import Isauthenticated from "../../../authenticationuser/Isauthenticated";

interface UserCartInfoProps {
  totalCount: number;
  home?: boolean;
}

export default function UserCartInfo({ totalCount, home }: UserCartInfoProps) {
  return <Isauthenticated totalCount={totalCount} home={home} />;
} 