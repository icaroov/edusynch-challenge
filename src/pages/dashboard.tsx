import { NextPage } from 'next'
import { useEffect, useState } from 'react'

import { api } from 'services/api'
import { Course } from 'lib/mirage'

import Dashboard from 'components/Dashboard'

const DashboardPage: NextPage = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)

  async function fetchCourses() {
    try {
      const { data } = await api.get('/courses')
      setCourses(data.courses)
      setIsLoading(false)
    } catch (error) {
      console.error('Ops... Some error ocurred.', error)
    }
  }

  useEffect(() => {
    fetchCourses()
  }, [])

  return <Dashboard courses={courses} isLoading={isLoading} />
}

export default DashboardPage
