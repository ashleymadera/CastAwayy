class Admin < ApplicationRecord
  validates :username, uniqueness: true, presence: true
end
