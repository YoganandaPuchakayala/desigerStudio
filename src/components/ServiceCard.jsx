import Img from './Img';
export default function ServiceCard({ title, text, src }) {
  return (
    <article className="card">
      <Img src={src} alt={`${title} by The Designer Studio`} label={title} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}
