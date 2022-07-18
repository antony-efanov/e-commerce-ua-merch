export function EmptyPage({ text, imgSrc }) {
  return (
    <div className="emptyPage">
      <img src={imgSrc} alt="broken heart" />
      <h3 className="emptyPage__title">Порожньо</h3>
      <p className="emptyPage__text">{text}</p>
    </div>
  );
}
