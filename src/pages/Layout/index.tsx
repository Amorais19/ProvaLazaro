import React from "react"
import { Outlet } from "react-router-dom"
import { ComponentHeader, ComponentCard } from "../../components"
import * as S from "./styles"

export function Layout() {
  return (
    <>
      <ComponentCard />
      <ComponentHeader />
      <S.Main>
        <Outlet />
      </S.Main>
    </>
  )
}
