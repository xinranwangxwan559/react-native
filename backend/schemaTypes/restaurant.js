import { defineField, defineType } from "sanity";

export default {
    name: 'restaurant',
    title: 'Restaurants',
    type: 'document',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: ' Name',
            validation: Rule => Rule.required()
        },
        {
            name: 'description',
            type: 'string',
            title: ' description',
            validation: Rule => Rule.required()
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image of the restaurant',

        },
        {
            name: 'lat',
            type: 'number',
            title: 'Latitude of the restaurant',
            validation: Rule => Rule.required()
        },
        {
            name: 'lng',
            type: 'number',
            title: 'Longtitude of the restaurant',
            validation: Rule => Rule.required()
        },
        {
            name: 'address',
            type: 'string',
            title: 'address of the restaurant',
            validation: Rule => Rule.required()
        },
        {
            name: 'rating',
            type: 'number',
            title: 'Enter the rating of the restaurant out of 5',
            validation: Rule => Rule.required().min(0).max(5).error('Rating should be between 0 and 5'),
        },
        {
            name: 'review',
            type: 'string',
            title: 'Enter the review of the restaurant',
        },
        {
            name: 'type',
            title: 'Category',
            validation: Rule => Rule.required(),
            type: 'reference',
            to: [{ type: 'category' }]

        },

        {
            name: 'dishes',
            type: 'array',
            title: 'Dishes',
            of: [
                {
                    type: 'reference',
                    to: [{ type: 'dish' }]
                }
            ]
        }
    ]






}