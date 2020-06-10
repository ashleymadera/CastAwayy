class AddPatternsAndProjectsToAdmins < ActiveRecord::Migration[6.0]
  def change
    add_reference :admins, :projects, null: false, foreign_key: true
    add_reference :admins, :patterns, null: false, foreign_key: true
  end
end
