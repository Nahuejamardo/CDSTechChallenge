import { Author, Favorite, Post } from "../models/index.js"

const seed = async function () {
  console.log('Syncing Models...')
  await Author.sync()
  await Post.sync()
  await Favorite.sync()
  
  const authors = ["Adrian Swift",
      "Jessie Mosciski",
      "Mandie Huels DDS",
      "George Dietrich",
      "Brant Krajcik",
      "Hilaria Rempel",
      "Emory Hodkiewicz",
      "Madelyn Rempel II",
      "Oren Predovic",
      "Al Walsh"
  ]

  const sequence = [...Array(20).keys()].map(i => i+1)
  
  console.log('Loading Authors...')
  await Promise.all(authors.map(name => Author.create({ name })))
  
  console.log('Loading Posts...')
  await Promise.all(sequence.map(index => Post.create({
    title: `title ${index}`,
    content: `content ${index}`,
    authorId: Math.floor(index/3) + 1,
  })))

  console.log('Loading Favorites...')
  await Promise.all(sequence.map(index => Favorite.create({
    authorId: 9 - Math.floor(index/3) + 1,
    postId: index%3 + 1,
  })))
  
  await Promise.all([
    Favorite.create({ authorId: 5, postId: 10 }),
    Favorite.create({ authorId: 6, postId: 15 }),
    Favorite.create({ authorId: 7, postId: 18 }),
    Favorite.create({ authorId: 7, postId: 19 }),
  ])

  console.log('Done')
}

export { seed }
