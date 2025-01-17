import {createClient} from '@sanity/client';


const client = createClient({
    projectId: '318bmcac',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21',
    })

    let sanityQuery = (query, params) => client.fetch(query, params);

export const getFeaturedRestaurants = ()=>{
    return sanityQuery(
        `*[_type == 'featured'] {
            ...,
            restaurants[]->{
                ...,
                dishes[]->{
                    ...
                 },
                    type->{
                    
                    name
                }  
            }
        }
    `);
}

export const getCategories = ()=>{
    return sanityQuery(`*[_type == 'category']
    `);
}

export const getFeaturedRestaurantsById = (id)=>{
    return sanityQuery(`*[_type == 'featured' && _id == $id] {
        ...,
        restaurants[]->{
            ...,
            dishes[]->{
                ...,
                type->{name}
                    name
                ),
                )
            }
        }[0]
    }`, {id});
}