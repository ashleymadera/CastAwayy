class Admin < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true, presence: true
  validates :email, presence: true, uniqueness: true
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { minimum: 6 }
  has_many :projects, dependent: :destroy
  has_many :patterns, dependent: :destroy

end
