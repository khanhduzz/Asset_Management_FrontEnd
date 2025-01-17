import { User } from "@/types/User";
import {
  CaretDownOutlined,
  KeyOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { MenuProps, Dropdown, Space, message, Breadcrumb } from "antd";
import { Header } from "antd/es/layout/layout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "@/layouts/BreadcrumbCustom.css";
import getListBreadcrumb from "@/utils/getListBreadcrumb";
import ModalChangePassword from "@/components/ModalChangePassword/ModalChangePassword";
import { useMutation } from "react-query";
import { AuthAPICaller } from "@/services/apis/auth.api";
import APIResponse from "@/types/APIResponse";
import ConfirmationModal from "@/components/ConfirmationModal/ConfirmationModal";

function HeaderAdmin() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const [openLogout, setOpenLogout] = useState(false);

  // hooks
  const navigate = useNavigate();

  const user: User = JSON.parse(localStorage.getItem("user") || "{}");

  const { mutate } = useMutation(AuthAPICaller.logout, {
    onSuccess: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      message.success("Logout success");
      navigate("/login");
    },
    onError: (error) => {
      const errorResponse = error as APIResponse;
      message.error(errorResponse.message);
    },
  });

  // handlers

  const items: MenuProps["items"] = [
    {
      label: "Change Password",
      key: "change-password",
      icon: <KeyOutlined />,
      onClick: () => {
        setIsOpenModal(true);
      },
    },

    {
      label: "Logout",
      key: "logout",
      icon: <LogoutOutlined />,
      danger: true,
      onClick: () => {
        setOpenLogout(true);
      },
    },
  ];

  return (
    <>
      <Header className=" bg-[#CF2338] drop-shadow-md flex items-center h-20 justify-center sticky top-0 left-0 z-50">
        <div className="flex justify-between items-center w-full">
          <div className="text-white">
            <Breadcrumb
              separator={
                <div className="text-white text-base font-normal"> {">"} </div>
              }
              className="font-semibold cursor-pointer text-lg"
              items={getListBreadcrumb(window.location.pathname)}
            />
          </div>

          <Dropdown placement="bottom" arrow menu={{ items }}>
            <Space className="cursor-pointer hover:opacity-75">
              <span className="text-white font-semibold">{user.username}</span>
              <CaretDownOutlined className="text-white" />
            </Space>
          </Dropdown>
        </div>
      </Header>
      <ModalChangePassword
        isOpen={isOpenModal}
        setIsOpenModal={setIsOpenModal}
      />
      <ConfirmationModal
        isOpen={openLogout}
        title={"Are you sure?"}
        message={"Do you want to log out?"}
        buttontext={"Log out"}
        onConfirm={() => {
          mutate();
        }}
        onCancel={() => {
          setOpenLogout(false);
        }}
      />
    </>
  );
}

export default HeaderAdmin;
