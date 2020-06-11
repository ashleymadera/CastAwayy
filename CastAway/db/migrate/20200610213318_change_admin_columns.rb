class ChangeAdminColumns < ActiveRecord::Migration[6.0]
  def change
    remove_column :admins, :patterns_id
    remove_column :admins, :projects_id
  end
end
