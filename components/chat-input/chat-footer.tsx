import { Flex, Type } from "@/ui";
import Link from "next/link";

export const ChatFooter = () => {
  return (
    <Flex className="w-full px-4 py-1" justify="center" gap="xs">
      <Type
        size="xxs"
        textColor="tertiary"
        className="inline-block text-center"
      >
        AiconnectChat is created by{" "}
        <Link
          href="https://aitekph.com"
          target="_blank"
          className="inline-block text-violet-500 underline decoration-zinc-500/20 underline-offset-2"
        >
          aitekph.com
        </Link>
      </Type>
    </Flex>
  );
};
