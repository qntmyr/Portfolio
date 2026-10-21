import Image from "next/image";
import type { Photo } from "@/content/photos";

type FrameProps = {
  /** A real photo, or a label shown in a placeholder until the picture exists. */
  photo?: Photo;
  label?: string;
  ratio?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function Frame({ photo, label, ratio, className, sizes = "(max-width: 900px) 100vw, 50vw", priority }: FrameProps) {
  const style = ratio ? { aspectRatio: ratio } : undefined;
  if (!photo) {
    return (
      <div className={`frame frame--empty ${className ?? ""}`} style={style}>
        <span>[{label ?? "Photo"}]</span>
      </div>
    );
  }
  return (
    <div className={`frame ${className ?? ""}`} style={style}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        priority={priority}
        placeholder="blur"
        style={{ objectFit: "cover", objectPosition: photo.focus ?? "50% 50%" }}
      />
    </div>
  );
}
