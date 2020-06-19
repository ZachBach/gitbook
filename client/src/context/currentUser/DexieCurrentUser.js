import React from 'react'
import Dexie from 'dexie'


const db = new Dexie("CurrentUser")
db.version(1).stores({
    user: "token, handle"
})

export default db


