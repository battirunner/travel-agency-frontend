import React from "react";
// import dayjs from "dayjs";
import { Button, DatePicker, Input, Radio, Select } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Navigation One", "sub1", <MailOutlined />, [
    getItem(
      "Item 1",
      "g1",
      null,
      [getItem("Option 1", "1"), getItem("Option 2", "2")],
      "group"
    ),
    getItem(
      "Item 2",
      "g2",
      null,
      [getItem("Option 3", "3"), getItem("Option 4", "4")],
      "group"
    ),
  ]),
  getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
    getItem("Option 5", "5"),
    getItem("Option 6", "6"),
    getItem("Submenu", "sub3", null, [
      getItem("Option 7", "7"),
      getItem("Option 8", "8"),
    ]),
  ]),
  {
    type: "divider",
  },
  getItem("Navigation Three", "sub4", <SettingOutlined />, [
    getItem("Option 9", "9"),
    getItem("Option 10", "10"),
    getItem("Option 11", "11"),
    getItem("Option 12", "12"),
  ]),
  getItem(
    "Group",
    "grp",
    null,
    [getItem("Option 13", "13"), getItem("Option 14", "14")],
    "group"
  ),
];

const Navbar = () => {
  const onClick = (e) => {
    console.log("click ", e);
  };
  return (
    <>
      <div
        className="col-3 text-white rounded"
        // style={{ backgroundColor: "#e0e0e0" }}
      >
        <Menu
          onClick={onClick}
          style={{
            // width: 256,
            borderRadius: "10px",
          }}
          theme={"dark"}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
        />
        {/* <div class=""> */}
        {/* <div class="row"> */}
        {/* <div class="col-12">
            <div class="bg-primary p-2">My Account</div>
          </div>
          <div class="col-12"></div>
          <div class="col-12">
            <Button
              type="primary"
              style={{
                marginTop: "20px",
                // height: "50px",
                width: "100%",
              }}
              icon={<SearchOutlined />}
            >
              Search
            </Button>
          </div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Navbar;
