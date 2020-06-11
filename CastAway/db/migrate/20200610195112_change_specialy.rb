class ChangeSpecialy < ActiveRecord::Migration[6.0]
  def change
    rename_column :admins, :specialy, :specialty
  end
end
