import React from 'react'


export const createUserIndexDB = {
    name: 'CurrentUser',
    version: 1,
    objectStoresMeta: [
        {
            store: 'user',
            storeConfig: { keyPath: 'id', autoIncrement: true },
            storeSchema: [
                { name: 'token', keypath: 'token', options: { unique: true } },
                { name: 'handle', keypath: 'handle', options: { unique: false } }
            ]
        }
    ]
};