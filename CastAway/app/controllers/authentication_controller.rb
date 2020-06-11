# frozen_string_literal: true

class AuthenticationController < ApplicationController
  before_action :authorize_request, except: :login

  # POST /auth/login
  def login
    @admin = Admin.find_by_username(login_params[:username])
    if @admin.authenticate(login_params[:password]) # authenticate method provided by Bcrypt and 'has_secure_password'
      @token = encode({ admin_id: @admin.id })
      render json: { admin: @admin, token: @token }, status: :ok
    else
      render json: { errors: 'unauthorized' }, status: :unauthorized
    end
  end

  # GET /auth/verify
  def verify
    render json: @current_admin, status: :ok
  end

  private

  def login_params
    params.require(:auth).permit(:username, :password)
  end
end
