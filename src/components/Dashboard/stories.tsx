/* eslint-disable @typescript-eslint/no-empty-function */
import { Story, Meta } from '@storybook/react/types-6-0'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import Dashboard, { DashboardProps } from '.'

import mockData from 'components/Card/mock'

export default {
  title: 'Dashboard',
  component: Dashboard
} as Meta

export const Desktop: Story<DashboardProps> = () => (
  <Dashboard
    courses={mockData}
    isLoading={false}
    totalCount={10}
    currentPage={1}
    setCurrentPage={() => {}}
  />
)
export const Mobile: Story<DashboardProps> = () => (
  <Dashboard
    courses={mockData}
    isLoading={false}
    totalCount={10}
    currentPage={1}
    setCurrentPage={() => {}}
  />
)
export const WithLoading: Story<DashboardProps> = () => (
  <Dashboard
    courses={mockData}
    isLoading
    totalCount={10}
    currentPage={1}
    setCurrentPage={() => {}}
  />
)

Desktop.parameters = {
  layout: 'fullscreen'
}

Mobile.parameters = {
  layout: 'fullscreen',
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6'
  }
}
