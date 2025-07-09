import React from "react"
import { IconItem } from "@components/UI/atoms"
import { Briefcase, Calendar1, DollarCircle, Location, People, Tag } from '@constants/icons.constants';

export const iconJobDetailSummaryMap = {
  calendar: React.createElement(IconItem, { icon: Calendar1, size: 16, alt: 'Calendar1-icon' }),
  people: React.createElement(IconItem, { icon: People, size: 16, alt: 'People-icon' }),
  briefcase: React.createElement(IconItem, { icon: Briefcase, size: 16, alt: 'Briefcase-icon' }),
  'dollar-circle': React.createElement(IconItem, { icon: DollarCircle, size: 16, alt: 'DollarCircle-icon' }),
  location: React.createElement(IconItem, { icon: Location, size: 16, alt: 'Location-icon' }),
  tag: React.createElement(IconItem, { icon: Tag, size: 16, alt: 'Tag-icon' }),
}
