import { css } from "../styled-system/css";

export default function Home() {
  return (
    <div
      className={css({
        _hover: { bg: "red.400" },
        color: { _hover: "blue", base: "red.400" },
        fontSize: "2xl",
        fontWeight: "bold",
      })}
    >
      Hello 🐼!
    </div>
  );
}
