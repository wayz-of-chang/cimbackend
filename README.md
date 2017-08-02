# CIM-Backend

## Installing and Running

On a Linux machine

```
$ apt-get install ruby ruby-dev
$ gem install rails
$ bundle install
```
Run initial migration
```
# on dev server
$ rails db:migrate RAILS_ENV=development
# otherwise
$ rails db:migrate RAILS_ENV=production
```

Create your first user
```
# Start rails command line
$ rails c
# In Ruby console
> user=User.create!(:email=>'test@test.com',:username=>'test',:password=>'password')
# Quit Ruby console
> quit
```

Run Ruby on Rails
```
$ rails server
```