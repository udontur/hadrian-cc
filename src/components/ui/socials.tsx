export function Socials({ link, svg }: { link: string; svg: string }) {
  return (
    <a className="no-underline" href={link}>
      <button
        className="
          text-2xl flex items-center justify-center flex-row p-3
          border border-solid rounded-[16px] border-border
          ease-in-out duration-200
          bg-card cursor-pointer no-underline gap-4
          hover:bg-secondary hover:border-primary
        ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          viewBox="0 0 24 24"
        >
          <path fill="#fff" d={svg} />
        </svg>
      </button>
    </a>
  );
}
