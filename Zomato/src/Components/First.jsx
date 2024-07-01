import React from "react";
import { createContext } from "react";
import { Second } from './Second';

export const FirstContext= createContext();
export function First() {
  const data = "Hello from First";
  return (
    <div className="box">
      <h3>First Component data={data}</h3>
      <FirstContext.Provider value={data}> 
      <Second />
      </FirstContext.Provider>
    </div>
  );
}
