import { ChangeEvent, FC, useEffect, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
} from "@chakra-ui/react";
import { User } from "../../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
  user: User | undefined;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserDetailModal: FC<Props> = (props) => {
  const { user, isOpen, onClose, isAdmin = false } = props;

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const onClickUserUpdate = () => alert("");

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      autoFocus={false}
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent pb={6}>
        <ModalHeader>ユーザー詳細</ModalHeader>
        <ModalCloseButton />
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input
                value={username}
                onChange={onChangeUsername}
                readOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} onChange={onChangeName} readOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input
                value={email}
                onChange={onChangeEmail}
                readOnly={!isAdmin}
              />
            </FormControl>
            <FormControl>
              <FormLabel>TEL</FormLabel>
              <Input
                value={phone}
                onChange={onChangePhone}
                readOnly={!isAdmin}
              />
            </FormControl>
            {isAdmin && (
              <PrimaryButton onClick={onClickUserUpdate}>更新</PrimaryButton>
            )}
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
