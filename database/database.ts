import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Injectable } from '@angular/core';

Injectable()
export class Database{
constructor(private sqlite: SQLite) { }
}
this.sqlite.create({
  name: 'data.db',
  location: 'default'
})
  .then((db: SQLiteObject) => {


    db.executeSql('create table danceMoves(name VARCHAR(32))', [])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));


  })
  .catch(e => console.log(e));