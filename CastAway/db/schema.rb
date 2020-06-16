# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_11_200441) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "admins", force: :cascade do |t|
    t.string "username"
    t.string "email"
    t.string "password_digest"
  end

  create_table "patterns", force: :cascade do |t|
    t.string "name"
    t.string "difficulty"
    t.string "yarn"
    t.string "needle_size"
    t.string "gauge"
    t.bigint "admin_id", null: false
    t.index ["admin_id"], name: "index_patterns_on_admin_id"
  end

  create_table "projects", force: :cascade do |t|
    t.string "garment_type"
    t.string "instruction"
    t.bigint "admin_id", null: false
    t.bigint "pattern_id", null: false
    t.string "title"
    t.string "image_url"
    t.index ["admin_id"], name: "index_projects_on_admin_id"
    t.index ["pattern_id"], name: "index_projects_on_pattern_id"
  end

  add_foreign_key "patterns", "admins"
  add_foreign_key "projects", "admins"
  add_foreign_key "projects", "patterns"
end
