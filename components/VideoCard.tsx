"use client";
import Image from "next/image";
import Link from "next/link";

const VideoCard = ({
  id,
  videoId,
  title,
  thumbnail,
  userImg,
  username,
  createdAt,
  views,
  visibility,
  duration,
}: VideoCardProps) => {
  return (
    <Link href={`/video/${videoId}`} className="video-card">
      <Image
        src={thumbnail}
        alt="thumbnail"
        width={290}
        height={160}
        className="thumbnail "
      />
      <article>
        <div>
          <figure>
            <Image
              src={userImg || "/assets/images/dummy.jpg"}
              alt="avatar"
              width={34}
              height={34}
              className="rounded-full aspect-square"
            />
            <figcaption>
              <p> {visibility}</p>
            </figcaption>
          </figure>
          <aside>
            <Image
              src="/assets/icons/eye.svg"
              alt="views"
              width={16}
              height={16}
            />
            <span>{views} </span>
          </aside>
        </div>
        <h2>
          {title} -{" "}
          {new Date(createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </h2>
      </article>
      <button onClick={() => {}} className="copy-btn">
        <Image src="/assets/icons/link.svg" alt="copy" width={18} height={18} />
      </button>
      {duration && (
        <div className="duration">{Math.ceil(duration / 60)}min</div>
      )}
    </Link>
  );
};

export default VideoCard;
