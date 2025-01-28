export interface MessageTypeForm {
  organizationId: number,
  messageType: number,
  recipient: string,
  content: string
}

export interface SearchData {
  items: Item[]
  total: number
}

export interface Item {
  id: number
  organization: Organization
  recipient: string
  content: string
  sentAt: string
}

export interface Organization {
  id: number
  value: string
}
