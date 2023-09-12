import { useTranslations } from "next-intl";
import Link from "next-intl/link";

export default function Home() {
  // const t = useTranslations("Index");

  return (
    <div>
      <div>
        <Link href="/" locale="en">
          In english
        </Link>{" "}
        |{" "}
        <Link href="/" locale="pt">
          Em português
        </Link>
        <br />
        <br />
      </div>
      <div>{/* <p>{t("title")}</p> */}</div>
    </div>
  );
}
