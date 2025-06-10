import React from 'react'

export function CardWrapper({ children, className = "" }) {
  return <div className={`bg-card rounded-lg p-6 border border-primary/20 ${className}`}>{children}</div>
}
