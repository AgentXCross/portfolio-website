/*
Card.tsx

Static card component. Card is a styled container, CardItem is an
optional plain wrapper for individual pieces of content inside it.
*/

import "./Card.css"

import React from "react"


export interface CardProperties {
  children?: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Card ({
  children,
  className,
  containerClassName
}: CardProperties) {
  return (
    <div className={`card-outer ${containerClassName ?? ""}`}>
      <div className={`card ${className ?? ""}`}>
        {children}
      </div>
    </div>
  )
}


export interface CardItemProperties {
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export function CardItem ({
  as: Tag = "div",
  children,
  className,
  translateX,
  translateY,
  translateZ,
  rotateX,
  rotateY,
  rotateZ,
  ...rest
}: CardItemProperties) {
  return React.createElement(
    Tag,
    {
      className: `card-item ${className ?? ""}`,
      ...rest,
    },
    children,
  )
}
