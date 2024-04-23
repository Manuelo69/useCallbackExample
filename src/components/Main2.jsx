import { useMemo } from "react";
import { useCallback } from "react";
import { useState } from "react";

const Main2 = () => {
  const [cont, setCont] = useState(0);

  const doble = () => {
    return cont * 2;
  };

  const callback = useCallback(doble, [cont]);
  const memo = useMemo(doble, [cont]);
  console.log(callback()); //devuelve la funcion si no pones los parentesis
  console.log(memo); //devuelve el valor
  return (
    <div>
      <button onClick={() => setCont(cont + 1)}>Incrementar</button>
      <p>{cont}</p>
    </div>
  );
};

export default Main2;
