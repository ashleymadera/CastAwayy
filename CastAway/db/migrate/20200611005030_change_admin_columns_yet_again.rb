class ChangeAdminColumnsYetAgain < ActiveRecord::Migration[6.0]
  def change
    remove_column :admins, :specialty
  end
end
