import Image from "next/image";
import Link from "next/link";
import { RxGithubLogo } from "react-icons/rx";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="group relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61] bg-[#030014]/60 backdrop-blur-sm transition-all duration-300 hover:border-purple-500 hover:shadow-purple-500/20 hover:-translate-y-1.5 flex flex-col justify-between flex-1"
    >
      <div>
        <div className="relative w-full h-[220px] overflow-hidden bg-black/40">
          <Image
            src={src}
            alt={title}
            width={1000}
            height={600}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="relative p-5">
          <h1 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
            {title}
          </h1>
          <p className="mt-2 text-sm text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      <div className="px-5 pb-5 pt-3 flex items-center justify-between border-t border-white/[0.08] text-xs text-purple-300 font-medium">
        <span className="flex items-center gap-1.5 group-hover:text-cyan-300 transition-colors">
          <RxGithubLogo className="w-4 h-4" />
          <span>View on GitHub</span>
        </span>
        <span className="text-gray-400 group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
};
