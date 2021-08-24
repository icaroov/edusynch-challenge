import { createServer, Factory, Model } from 'miragejs'
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
      server.createList('course', 6)
    },
    routes() {
      this.namespace = 'api'
      this.timing = 750

      this.get('/courses')
      this.get('/courses/:id')

      this.namespace = ''
      this.passthrough()
    }
  })

  return server
}
