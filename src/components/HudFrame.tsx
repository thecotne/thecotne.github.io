/** Fixed HUD overlay: corner brackets + vertical side readouts. */
export function HudFrame() {
  return (
    <div className="hud-frame" aria-hidden="true">
      <span className="c tl" />
      <span className="c tr" />
      <span className="c bl" />
      <span className="c br" />
      <span className="side side-l">TN.SYS // OPERATOR CONSOLE</span>
      <span className="side side-r">41.7151&deg;N &middot; 44.8271&deg;E &middot; TBILISI</span>
    </div>
  )
}
