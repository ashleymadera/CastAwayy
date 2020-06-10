class CreateAdmin < ActiveRecord::Migration[6.0]
  def change
    create_table :admins do |t|
      t.string :username
      t.string :specialy
    end
  end
end
