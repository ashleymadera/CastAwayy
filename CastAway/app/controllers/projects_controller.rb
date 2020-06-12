class ProjectsController < ApplicationController
  # frozen_string_literal: true


  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_user, only: %i[show update destroy]
  
    # GET /projects
    def index
      @projects = Project.all
      render json: @projects
    end
  
    # GET /fprojects/1
    def show
      @project = Project.find(params[:id])
      render json: @project, include: :patterns
    end
  
    # POST /fprojects
    def create
      @project = Project.new(project_params)
      @project.user = @current_admin
  
      if @project.save
        render json: @project, status: :created
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /fprojects/1
    def update
      if @project.update(project_params)
  
        render json: @project
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /fprojects/1
    def destroy
      @project.destroy
    end
  
    # def project_to_flavor
    #   @flavor = Flavor.find(params[:flavor_id])
    #   @project = Fproject.find(params[:id])
  
    #   @project.flavors << @flavor
    #   # @flavor.fprojects.push(@fproject)
    #   render json: @project, include: :flavors
    # end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @fproject = current_admin.projects.find(params[:id])
    end
  
    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:name)
    end
  end
  
