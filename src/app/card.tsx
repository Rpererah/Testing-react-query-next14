import Image from "next/image";

interface CardProps {
  title: string;
  image: string;
}
export default function Card({ title, image }: CardProps) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p style={{ textAlign: "center", fontSize: "1rem" }}>{title}</p>
      <Image
        src={image}
        alt={`Image of pokemon ${title} `}
        width={200}
        height={200}
      />
    </div>
  );
}
