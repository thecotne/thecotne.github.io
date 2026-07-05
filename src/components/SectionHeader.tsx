/** Shared "// READOUT" section header with index chip, title, rule and meta. */
export function SectionHeader({
  idx,
  id,
  title,
  sub,
  meta,
}: {
  idx: string
  id: string
  title: string
  sub: string
  meta: string
}) {
  return (
    <header className="sec-head">
      <span className="sec-idx">{idx}</span>
      <div className="sec-titles">
        <h2 id={id}>{title}</h2>
        <span className="sub">{sub}</span>
      </div>
      <span className="sec-rule" aria-hidden="true" />
      <span className="sec-meta">{meta}</span>
    </header>
  )
}
