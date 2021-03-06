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

ActiveRecord::Schema.define(version: 2020_09_20_015900) do

  create_table "cards", force: :cascade do |t|
    t.string "name_short"
    t.string "name"
    t.string "value"
    t.string "value_int"
    t.string "meaning_up"
    t.string "meaning_rev"
    t.string "desc"
    t.string "card_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "suit"
    t.string "image_url"
  end

  create_table "cards_spreads", id: false, force: :cascade do |t|
    t.integer "card_id", null: false
    t.integer "spread_id", null: false
  end

  create_table "spreads", force: :cascade do |t|
    t.string "query"
    t.string "spread_type"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "signature"
  end

end
