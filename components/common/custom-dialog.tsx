import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription
} from '@/components/ui/dialog'
import React from 'react'

const CustomDialog = ({
  open,
  handleOpen,
  title,
  description,
  children
}: {
  open: boolean
  handleOpen: () => void
  title?: string
  description?: string
  children: React.ReactNode
}) => {
  return (
    <Dialog open={open} onOpenChange={handleOpen}>
      <DialogContent
        onInteractOutside={e => {
          e.preventDefault()
        }}
      >
        <DialogHeader>
          {title && <DialogTitle>{title}</DialogTitle>}
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default CustomDialog
