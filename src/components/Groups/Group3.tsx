import { Text } from "@chakra-ui/react";
import React from "react";

interface CardWithButtonProps3 {
  Downloaded: string;
  number: number;
  images: string;
}

const Group3 = (props: CardWithButtonProps3) => {
  return (
    <>
      <main className="bg-white ">
        <div className=" grid  place-content-center">
          <div className="flex flex-col w-52 p-32 pt-8 items-center border-2 border-black h-[30vh] rounded-xl">
            <Text fontSize={"2xl"} textColor={"black"}>
              {props.Downloaded}
            </Text>
            <Text fontSize={"2xl"} pt={2} textColor={"black"}>
              {props.number}
            </Text>
            <Text fontSize={"2xl"} pt={2} textColor={"black"}>
              {props.images}
            </Text>
          </div>
        </div>
      </main>
    </>
  );
};

export default Group3;
