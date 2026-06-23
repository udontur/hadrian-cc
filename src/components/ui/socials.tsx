export function Socials({
  link,
  svg,
  alt,
}: {
  link: string
  svg: string
  alt: string
}) {
  const iconPath = "icons/" + svg

  return (
    <a
      className="no-underline text-white fill-white"
      href={link}
    >
      <button
        className="
          text-2xl flex items-center justify-center flex-row p-3
          border border-solid rounded-[16px] border-border
          ease-in-out duration-200
          bg-card cursor-pointer no-underline gap-4
          hover:bg-secondary hover:border-primary
        "
      >
        <div className="invert-100 brightness-0">
          <img width="48" src={iconPath} alt={alt} />
        </div>
      </button>
    </a>
  )
}
