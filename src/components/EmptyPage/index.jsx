export function EmptyPage({ text, imgSrc }) {
  return (
    <div className="emptyPage">
      <img width="100" height="100" src={imgSrc} alt="broken heart" />
      <h2 className="emptyPage__title">Порожньо</h2>
      <p className="emptyPage__text">{text}</p>
    </div>
  );
}
