# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Project.destroy_all
# Pattern.destroy_all
Admin.destroy_all

@admin = Admin.create!({ username: 'meowmeow', email: 'meow@meow.com', password: '123456'})

p "#{Admin.count} Admin(s) created"

@pattern = Pattern.create!({ 
  name: "garter", 
  difficulty: "easy", 
  yarn: "Bernat Blanket", 
  needle_size: "US 19(15 mm) circular knitting needle 36'' long", 
  gauge:"5 sts and 10 rows = 4''[10cm] in garter st with 2 strands tog ", admin: @admin})

@project = Project.create!({ admin: @admin, pattern: @pattern, garment_type: "Blanket", instruction: "With 2 strands of yarn tog, cast on 60 sts.
Do not join. Working back and forth across needle in rows, proceed as follows:
Knit in rows (garter st), noting 1st row is WS, until piece from beg measures 62'' [157.5 cm] long, ending on a RS row. Cast off knitwise (WS). Abbreviations: Approx-Approximate(ly), Beg-Begin(ing), RS-Right Side, St(s)-Stitch(es), Tog-Together, WS-Wrong Side", title: 'Stormy Weather Blanket'})