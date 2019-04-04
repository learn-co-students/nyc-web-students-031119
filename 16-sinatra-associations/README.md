Sinatra Associations & Forms
============================

## SWBATs

- [ ] Describe how the `params` hash is built
- [ ] Describe how to nest hashes inside of the `params` hash
- [ ] Describe how mass-assignment works in relation to hashes
- [ ] Demonstrate how to use `params` hash to mass-assign and create related objects

## Deliverables

- Build out a one-to-many relationship application.
- Do the create and edit paths for the one that `belongs_to`

one to many

1. forest animals
2. citizens countries
3. caves bats
4. jar cookies =>
  class, migration for this model
    rake db:create_migration
  jar
    size - integer
    color - string
  cookie
    type
    size
    cook_time

  jar has many cookies
5. treasure chests - gems
