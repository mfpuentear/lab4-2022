import { Interno } from "./Interno";
import { Interno2 } from "./Interno2";

export const Externo = () => {
  return (
    <>
      <p>Externo</p>
      <Interno />
      <Interno2 />
    </>
  );
};
