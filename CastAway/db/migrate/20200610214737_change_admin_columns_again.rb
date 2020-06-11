class ChangeAdminColumnsAgain < ActiveRecord::Migration[6.0]
  def change
    remove_column :patterns, :projects_id
  end
end
