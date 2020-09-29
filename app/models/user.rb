# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password

    validates :username, :password_digest, :session_token, presence:true
    validates :password, length: {minimum: 6, allow_nil:true}
    validates :email, :session_token, uniqueness:true

    before_validation :ensure_session_token

    has_many :annotations,
        foreign_key: :author_id

    def self.find_by_credentials(name,password)
        user = User.find_by(email: name) || User.find_by(username: name)
        return user if user && user.is_password?(password)
        nil
    end
    
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end


    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
end
