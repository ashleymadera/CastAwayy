class ChangeProjectRefs < ActiveRecord::Migration[6.0]
  def change
    rename_column :projects, :admins_id, :admin_id
    rename_column :projects, :patterns_id, :pattern_id
  end
end
