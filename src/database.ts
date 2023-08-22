type User = {
  name: string;
  age: number;
}

let _data: User[] = [
  { name: 'krist', age: 13 },
  { name: 'minnie', age: 23 },
]

export const db = {
  users: {
    findMany() {
      return structuredClone(_data)
    },
    create(user: User) {
      _data = [..._data, structuredClone(user)]
    },
    createMany(users: User[]) {
      _data = [..._data, ...structuredClone(users)]
    }
  }
}