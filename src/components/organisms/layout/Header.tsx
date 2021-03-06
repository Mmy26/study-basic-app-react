/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { FC, memo, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";
import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: FC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), []);
  const onClickUserManegement = useCallback(
    () => history.push("/home/user_manegement"),
    []
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), []);
  return (
    <>
      <Flex
        as="nav"
        bg="teal.500"
        color="grey.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            ユーザー管理アプリ
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={4}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickUserManegement} to={"/home/user_manegement"}>
              ユーザー一覧
            </Link>
          </Box>
          <Link onClick={onClickSetting} to={"/home/setting"}>
            設定
          </Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickUserManegement={onClickUserManegement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
