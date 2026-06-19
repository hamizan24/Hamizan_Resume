import Image from "next/image";
import { profile } from "@/data/portfolio";

type ProfileAvatarProps = {
  size?: "md" | "lg";
  className?: string;
};

const sizeClasses = {
  md: "h-20 w-20 text-2xl sm:h-24 sm:w-24 sm:text-3xl",
  lg: "h-24 w-24 text-3xl sm:h-28 sm:w-28 sm:text-4xl",
};

export default function ProfileAvatar({ size = "lg", className = "" }: ProfileAvatarProps) {
  const initials = profile.name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  if (profile.photoUrl) {
    return (
      <div
        className={`relative shrink-0 overflow-hidden rounded-2xl ring-2 ring-accent/20 ring-offset-2 ring-offset-white shadow-md ${sizeClasses[size]} ${className}`}
      >
        <Image
          src={profile.photoUrl}
          alt={profile.name}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 640px) 96px, 112px"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent-secondary font-bold text-white shadow-md ring-2 ring-accent/20 ring-offset-2 ring-offset-white ${sizeClasses[size]} ${className}`}
      aria-hidden
    >
      {initials}
    </div>
  );
}
