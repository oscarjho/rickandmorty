import {gql} from '@apollo/client';

export const GET_CHARACTERS = (page, tosearch) => {
  
    return gql`
     query{
        characters (page: ${page}, filter: {name: "${tosearch}"}) {
          info {
            count, pages, next, prev
          }
          results {
            name, status, image, species,gender,
            origin {id, name, type, dimension},
            location {id, name, type, dimension, created}
          }
        }
      }
    `
  }
  
  export default GET_CHARACTERS;