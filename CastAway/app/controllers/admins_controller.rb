class AdminsController < ApplicationController
  before_action :set_admin, only: %i[show update destroy]

  # GET /uadmins
  def index
    @admins = Admin.all
    render json: @admins
  end

  # GET /uadmins/1
  def show
    render json: @admin
  end

  # POST /uadmins
  def create
    @admin = Admin.new(admin_params)

    if @admin.save
      @token = encode({ admin_id: @admin.id })
      render json: { token: @token, admin: @admin }, status: :created, location: @admin
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /uadmins/1
  def update
    if @admin.update(admin_params)
      render json: @admin
    else
      render json: @admin.errors, status: :unprocessable_entity
    end
  end

  # DELETE /uadmins/1
  def destroy
    @admin.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_admin
    @admin = Admin.find(params[:id])
  end

  # Only allow a trusted parameter "white list" through.
  def admin_params
    params.require(:admin).permit(:username, :email, :password)
  end
end
