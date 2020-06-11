class Project < ApplicationRecord
  belongs_to :admin
  belongs_to :pattern
end
