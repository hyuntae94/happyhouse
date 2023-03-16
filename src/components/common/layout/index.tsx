import { Layout as AntdLayout } from "antd";
import Header from "@common/layout/header";

import classNames from "classnames/bind";
import styles from "./layout.module.scss";

const cx = classNames.bind(styles);

interface LayoutProps {
  children: JSX.Element;
}

const Layout = ({ children }: LayoutProps) => {
  const { Content } = AntdLayout;
  return (
    <AntdLayout>
      <Header />
      <AntdLayout className={cx("layoutWrapper")}>
        <Content>{children}</Content>
      </AntdLayout>
    </AntdLayout>
  );
};

export default Layout;
