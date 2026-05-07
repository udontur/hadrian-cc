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

  function handleClick() {
    // biome-ignore lint/suspicious/noExplicitAny: posthog is injected via inline script
    ;(window as any).posthog?.capture("social_link_clicked", { platform: alt })
  }

  return (
    <a
      className="no-underline text-white fill-white"
      href={link}
      onClick={handleClick}
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
