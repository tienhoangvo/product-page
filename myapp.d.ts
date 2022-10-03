export type User = {
  name: string
}

export type Test = (user: User) => User['name']