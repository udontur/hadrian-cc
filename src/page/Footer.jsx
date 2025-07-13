export default function Footer() {
  return (
    <>
        <footer>
            <div className="left-footer">I do these for fun!</div>
            <div className="right-footer">
              <div id="webring-wrapper">
                <a href="https://skyfall.dev/" id="previousBtn" class="webring-anchor" title="Previous" target="_parent">‹</a>
                <a href="https://webring.hackclub.com/" class="webring-logo" title="Hack Club Webring" alt="Hack Club Webring"></a>
                <a href="https://loboadrian.github.io/" id="nextBtn" class="webring-anchor" title="Next" target="_parent">›</a>
                <script src="https://cdn.jsdelivr.net/gh/hackclub/webring@d8004260e67f17633af5a64b05ac17ff871a509f/public/embed.min.js"></script>
              </div>
            </div>
        </footer>
    </>
  );
}

