class CreateProjects < ActiveRecord::Migration[6.0]
  def change
    create_table :projects do |t|
      t.string :garment_type
      t.string :instruction
      t.references :admins, null: false, foreign_key: true
    end
  end
end
