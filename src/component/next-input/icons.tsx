import {
  FiUser,
  FiMail,
  FiEye,
  FiEyeOff,
  FiLock,
  FiSearch,
} from "react-icons/fi";
import React from "react";

type TInputIcon = {
  type: string;
};

export default function InputIcon({ ...props }: TInputIcon) {
  switch (props.type) {
    case "email":
      return <FiMail />;
    case "password":
      return <FiLock />;
    case "search":
      return <FiSearch />;
    case "pwdVisbile":
      return <FiEyeOff />;
    case "pwdInvisible":
      return <FiEye />;
    default:
      return <FiUser />;
  }
}
