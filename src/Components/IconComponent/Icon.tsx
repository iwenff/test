import React from 'react'
import { iconPathByName, type IconName } from './IconsTemplate'

export interface IconProps {
  name: IconName
  size?: number | string
  className?: string
  onClick?: () => void
}

const Icon: React.FC<IconProps> = ({ name, size = 20, className = '', onClick }) => {
  const src = iconPathByName[name]

  return (
    <img
      src={src}
      alt={name}
      onClick={onClick}
      className={className}
      style={{
        width: size,
        height: size,
        cursor: onClick ? 'pointer' : 'inherit',
      }}
    />
  )
}

export default Icon
