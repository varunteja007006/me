"use client";

import { Button } from "@workspace/ui/components/button";
import { Checkbox } from "@workspace/ui/components/checkbox";
import React from "react";

const cartSample1 = ["apple", "banana", "cherry", "date", "elderberry"];

const cartSample2 = ["toyota", "nissan", "honda", "mazda", "subaru"];

export default function SwapTheOdds() {
  const [cart1, setCart1] = React.useState([...cartSample1]);
  const [cart2, setCart2] = React.useState([...cartSample2]);

  const [cart3, setCart3] = React.useState(
    [...cartSample1].map((item) => ({ item, checked: false })),
  );
  const [cart4, setCart4] = React.useState(
    [...cartSample2].map((item) => ({ item, checked: false })),
  );

  const onClickSwap = () => {
    const temp = [...cart1];
    const temp2 = [...cart2];

    for (let i = 0; i < cart1.length; i++) {
      const item1 = cart1[i];
      const item2 = cart2[i];
      if (i % 2 !== 0 && item1 && item2) {
        temp[i] = item2;
        temp2[i] = item1;
      }
    }
    setCart1(temp2);
    setCart2(temp);
  };

  const onClickCheckbox1 = (item: number) => {
    const temp = [...cart3];
    const target = temp[item];
    if (target) target.checked = !target.checked;
    setCart3(temp);
  };

  const onClickCheckbox2 = (item: number) => {
    const temp = [...cart4];
    const target = temp[item];
    if (target) target.checked = !target.checked;
    setCart4(temp);
  };

  const onClickSwap2 = () => {
    let temp = [...cart3];
    let temp2 = [...cart4];

    for (let i = 0; i < cart3.length; i++) {
      const box3 = temp[i];
      const box4 = temp2[i];
      if (box3 && box4 && (box3.checked || box4.checked)) {
        const cart3Item = box3.item;
        const cart4Item = box4.item;

        box3.item = cart4Item;
        box4.item = cart3Item;

        box3.checked = false;
        box4.checked = false;
      }
    }

    setCart3(temp);
    setCart4(temp2);
  };

  return (
    <div className="border bg-slate-400 p-5 w-fit space-y-6">
      <h1 className="text-lg">Swap the odds</h1>
      <div className="space-y-6">
        <div className="p-2 border bg-slate-200 text-black flex flex-row gap-5">
          {cart1.map((item) => (
            <div className="bg-green-300 p-1 px-2 rounded-xl" key={item}>
              {item}
            </div>
          ))}
        </div>
        <div className="p-2 border bg-slate-200 text-black flex flex-row gap-5">
          {cart2.map((item) => (
            <div className="bg-yellow-300 p-1 px-2 rounded-xl" key={item}>
              {item}
            </div>
          ))}
        </div>
        <Button onClick={onClickSwap} variant={"destructive"}>
          Swap the odds
        </Button>
      </div>
      <div className="space-y-6">
        <div className="p-2 border bg-slate-200 text-black flex flex-row gap-5">
          {cart3.map((item, index) => (
            <div
              className="bg-green-300 p-1 px-2 rounded-xl flex flex-row items-center gap-2"
              key={item.item}
            >
              {item.item}
              <Checkbox
                checked={item.checked}
                onClick={() => onClickCheckbox1(index)}
              />
            </div>
          ))}
        </div>
        <div className="p-2 border bg-slate-200 text-black flex flex-row gap-5">
          {cart4.map((item, index) => (
            <div
              className="bg-yellow-300 p-1 px-2 rounded-xl flex flex-row items-center gap-2"
              key={item.item}
            >
              {item.item}
              <Checkbox
                checked={item.checked}
                onClick={() => onClickCheckbox2(index)}
              />
            </div>
          ))}
        </div>
        <Button onClick={onClickSwap2} variant={"destructive"}>
          Swap the checked
        </Button>
      </div>
    </div>
  );
}
