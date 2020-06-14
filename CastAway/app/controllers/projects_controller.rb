class ProjectsController < ApplicationController
  # frozen_string_literal: true


  before_action :authorize_request, only: [:create, :update, :destroy]
  before_action :set_project, only: %i[show update destroy]
  before_action :set_pattern, only: %i[create]

    # GET /projects
    def index
      @projects = Project.all
      render json: @projects
    end
  
    # GET /projects/1
    def show
      render json: @project, include: :patterns
    end
  
    # POST /projects
    def create
      @project = Project.new(project_params)
      @project.admin = @current_admin
      @project.pattern = @pattern
      if @project.save
        render json: @project, status: :created
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end
  
    # PATCH/PUT /projects/1
    def update
      if @project.update(project_params)
  
        render json: @project
      else
        render json: @project.errors, status: :unprocessable_entity
      end
    end
  
    # DELETE /projects/1
    def destroy
      @project.destroy
    end
  
    private
  
    # Use callbacks to share common setup or constraints between actions.
    def set_project
      @project = @current_admin.projects.find(params[:id])
    end
  
    def set_pattern
      @pattern = @current_admin.patterns.find(params[:pattern_id])
    end

    # Only allow a trusted parameter "white list" through.
    def project_params
      params.require(:project).permit(:title, :instruction, :garment_type, :image_url)
    end
  end
  
