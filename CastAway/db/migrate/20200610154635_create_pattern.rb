class CreatePattern < ActiveRecord::Migration[6.0]
  def change
    create_table :patterns do |t|
      t.string :name
      t.string :difficulty
      t.string :yarn
      t.string :needle_size
      t.string :gauge
      t.references :projects, null: false, foreign_key: true
      t.references :admin, null: false, foreign_key: true
    end
  end
end
