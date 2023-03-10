import React from "react";
import {Link} from "react-router-dom";
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram, BsYoutube} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";

const linkSocial = [
  {
    id: 1,
    link: "/##",
    icon: <FaFacebookF></FaFacebookF>,
  },
  {
    id: 2,
    link: "/##",
    icon: <BsInstagram></BsInstagram>,
  },
  {
    id: 3,
    link: "/##",
    icon: <FiTwitter></FiTwitter>,
  },
  {
    id: 4,
    link: "/##",
    icon: <BsYoutube></BsYoutube>,
  },
];

const Footer = () => {
  return (
    <footer className="flex items-center md:items-start flex-col w-full my-5 mx-auto text-text2 md:max-w-[800px]">
      <div className="flex mb-4 text-lg gap-x-4 social-link">
        {linkSocial.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              {item.icon}
            </Link>
          );
        })}
      </div>

      <div className="hidden w-full md:block member-link">
        <ul className="flex flex-row flex-wrap items-start w-full mb-4 text-xs gap-x-9">
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Âm thanh và phụ đề
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Mô tả âm thanh
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Trung tâm trợ giúp
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Thẻ quà tặng
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Trung tâm đa phương tiện
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Quan hệ với nhà đầu tư
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Việc làm
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Điều khoản sử dụng
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Quyền riêng tư
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Thông báo pháp lý
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Tùy chọn cookie
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Thông tin doanh nghiệp
            </a>
          </li>
          <li className="flex items-start w-full p-2 member-link-item basis-1/4">
            <a href="/##" className="link">
              Liên hệ với chúng tôi
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-1 member-service">
        <button className="p-2 text-xs border cursor-pointer">
          Mã dịch vụ
        </button>
      </div>

      <div className="mb-4 member-copyright">
        <span className="text-xs">© 1997-2023 Netflix, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
