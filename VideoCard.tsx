type Props = {
  title: string;
  url: string;
};

export default function VideoCard({ title, url }: Props) {
  return (
    <div>
      <h3>{title}</h3>
      <video width="300" controls>
        <source src={url} type="video/mp4" />
      </video>
    </div>
  );
}