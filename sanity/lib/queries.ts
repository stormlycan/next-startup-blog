import { defineQuery } from "next-sanity";

export const STARTUP_QUERY = defineQuery(`*[_type =="startup" && defined(slug.current) &&!defined($search) ||title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
  _id,
  title, 
  slug, 
  image,
  _createdAt, 
  author-> {
    _id, name, slug, bio
  }, 
  views, 
  category, 
  description
}`)

export const STARTUP_BY_ID_QUERY = defineQuery(`*[_type =="startup" && _id==$id]{
  _id,
  title, 
  slug, 
  _createdAt, 
  author-> {
    _id, name, username,image, bio
  }, 
  views, 
  category, 
  description,
  pitch,
  image,
}`)