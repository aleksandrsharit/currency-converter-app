import React from "react"
import { ReactNode } from "react"
import {Layout as AntLayout} from 'antd';

export interface LayoutProps {
    children: ReactNode
}

export const Layout = ({children}: LayoutProps) => {
    return (<Layout>
    <AntLayout.Header>Header</AntLayout.Header>
    <AntLayout.Content>{children}</AntLayout.Content>
    <AntLayout.Footer>Footer</AntLayout.Footer>
  </Layout>)
}