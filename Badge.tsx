export default function Badge({ text }: { text: string }) {
  return (
    <span style={{ background: "#334155", padding: 5 }}>
      {text}
    </span>
  );
}