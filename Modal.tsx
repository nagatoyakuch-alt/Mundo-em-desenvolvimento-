"use client";

type Props = {
  children: React.ReactNode;
};

export default function Modal({ children }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ background: "#1e293b", padding: 20 }}>
        {children}
      </div>
    </div>
  );
}