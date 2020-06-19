import React from 'react'
import Dexie from 'dexie'


const db = new Dexie("CurrentUser")
db.version(1).stores({
    user: "handle"
})

export default db


