import { Flex, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import { ReactNode } from "react";
import { BiSolidUpArrow } from "react-icons/bi";

interface CardWithButtonProps {
  title: string;
  number: number;
  change: {
    title: string;
    children: ReactNode;
  };
  href: string;
}

const Group1 = (props: CardWithButtonProps) => {
  return (
    <main className="bg-white">
    <Flex border={20} borderColor={"black"} justifyContent="center" h={'20rem'}>
      <div className="border-2 border-black h-[35vh]">
          <UnorderedList textAlign={"center"}  border={'1px'} p={20} pt={2}>
            <ListItem listStyleType={"none"} fontSize={25} textColor={"black"} >
              {props.title}
            </ListItem>
            <ListItem listStyleType={"none"} fontSize={25} textColor={"black"} position={"relative"} top={'1rem'}>
              {props.number}
            </ListItem>
            <ListItem
              listStyleType={"none"}
              fontSize={25}
              textColor={"black"}
              position={"relative"}
              right={"6.5rem"}
              top={'2.1rem'}
            >
              {props.change.title}
            </ListItem>
            <ListItem
              position={"relative"}
              color={"black"}
              fontSize={20}
              listStyleType={"none"}
              bottom={"1.5rem"}
              left={"3rem"}
              top={'0.4rem'}
              textColor={"lime"}
            >
              <BiSolidUpArrow />
            </ListItem>
            <ListItem
              position={"relative"}
              color={"black"}
              listStyleType={"none"}
              fontSize={25}
              bottom={"3.5rem"}
              left={"4.3rem"}
              top={'-1.5rem'}
              textColor={"lime"}
            >
              {props.change.children}
            </ListItem>
            <ListItem
              listStyleType={"none"}
              fontSize={25}
              textColor={"black"}
            >
              {props.href}
            </ListItem>
          </UnorderedList>
          </div>
    </Flex>
    </main>
  );
};

export default Group1;
