import { NextPage } from 'next'
import { useEffect, useState } from 'react'

import { api } from 'services/api'
import { Course } from 'lib/mirage'

import Dashboard from 'components/Dashboard'

const DashboardPage: NextPage = () => {
  const [courses, setCourses] = useState<Course[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [totalCount, setTotalCount] = useState(0)

  useEffect(() => {
    async function fetchCourses() {
      try {
        const { data, headers } = await api.get('/courses', {
          params: {
            page: currentPage
          }
        })

        setTotalCount(Number(headers['x-total-count']))

        setCourses(data.courses)
        setIsLoading(false)
      } catch (error) {
        console.error('Ops... Some error ocurred.', error)
      }
    }

    fetchCourses()
  }, [currentPage])

  return (
    <Dashboard
      courses={courses}
      isLoading={isLoading}
      totalCount={totalCount}
      currentPage={currentPage}
      setCurrentPage={setCurrentPage}
    />
  )
}

export default DashboardPage
