import { GITHUB_LINK } from "@/lib/constants";

export default function DesignedAndDevelopedBy() {
  return (
    <div className="text-center text-xs md:text-lg">
      <p>
        &#169; Designed And Developed By 💚{" "}
        <b className="transition hover:cursor-pointer hover:text-main hover:underline">
          <a href={GITHUB_LINK} target="_blank">
            Syed Ammar Ahmed
          </a>
        </b>
      </p>
    </div>
  );
}
