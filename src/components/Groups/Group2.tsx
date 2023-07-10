import React from 'react'
import {Text} from '@chakra-ui/react'

interface CardWithButtonProps2 {
    title: string
    number: number
    subtitle: any | unknown
}

const Group2 = (props: CardWithButtonProps2) => {
  return (
    <>
      <main className="bg-white ">
        <div className=" grid  place-content-center">
          <div className="flex flex-col w-52 p-32 pt-8 items-center border-2 border-black h-[30vh] rounded-xl">
            <Text fontSize={"2xl"} textColor={"black"}>
              {props.title}
            </Text>
            <Text fontSize={"2xl"} pt={2} textColor={"black"}>
              {props.number}
            </Text>
            <Text fontSize={"2xl"} pt={2} textColor={"black"}>
              {props.subtitle}
            </Text>
          </div>
        </div>
      </main>
    </>
  )
}

export default Group2