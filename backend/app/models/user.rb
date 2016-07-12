class User < ApplicationRecord
  validates :email, :password_digest, :session_token, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}

  attr_reader :password

  before_create do |user|
    user.session_token = user.ensure_session_token
  end

  has_many :tickets
  has_many :flights,
    through: :tickets,
    source: :flight

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def ensure_session_token
    @session_token ||= SecureRandom::urlsafe_base64(16)
  end
end
