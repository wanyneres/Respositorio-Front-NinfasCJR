import { IoIosStar } from "react-icons/io";

export function Estrelas({ rating }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <IoIosStar
          key={i}
          size={20}
          className={i <= rating ? "text-yellow-300" : "text-gray-500"}
        />
      ))}
    </div>
  );
}
