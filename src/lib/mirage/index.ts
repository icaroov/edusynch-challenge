import { createServer, Factory, Model, Response } from 'miragejs'
import faker from 'faker'

export interface Course {
  id: string
  description: string
  numberLessons: number
  image: string
}

export function makeServer() {
  const server = createServer({
    models: {
      course: Model.extend<Partial<Course>>({})
    },
    factories: {
      course: Factory.extend({
        description() {
          return faker.lorem.words(5)
        },
        numberLessons() {
          return faker.datatype.number(20)
        },
        image() {
          return faker.random.image()
        }
      })
    },
    seeds(server) {
      server.createList('course', 100)
    },
    routes() {
      this.namespace = 'api'

      // delay to api response
      this.timing = 750

      this.get('/courses', function (schema, request) {
        // get the first page and the limit of courses per page
        const { page = 1, per_page = 6 } = request.queryParams

        // total of courses
        const total = schema.all('course').length

        const pageStart = (Number(page) - 1) * Number(per_page)
        const pageEnd = pageStart + Number(per_page)

        // @ts-ignore
        // return a copy of courses from the pageStart and pageEnd positions
        const courses = this.serialize(schema.all('course')).courses.slice(
          pageStart,
          pageEnd
        )

        // set the 'x-total-count' in the headers
        return new Response(
          200,
          { 'x-total-count': String(total) },
          { courses }
        )
      })

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}
