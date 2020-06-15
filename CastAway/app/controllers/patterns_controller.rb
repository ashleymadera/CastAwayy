class PatternsController < ApplicationController
  
    # frozen_string_literal: true
  
  
    before_action :authorize_request, only: [:create, :update, :destroy]
    before_action :set_pattern, only: [:show, :update, :destroy]
      # GET /patterns
      def index
        @patterns = Pattern.all
        render json: @patterns
      end
    
      # GET /patterns/1
      def show
        render json: @pattern, include: :projects
      end
    
      # POST /fpatterns
      def create
        @pattern = Pattern.new(pattern_params)
        @pattern.admin = @current_admin
    
        if @pattern.save
          render json: @pattern, status: :created
        else
          render json: @pattern.errors, status: :unprocessable_entity
        end
      end
    
      # PATCH/PUT /patterns/1
      def update
        if @pattern.update(pattern_params)
    
          render json: @pattern
        else
          render json: @pattern.errors, status: :unprocessable_entity
        end
      end
    
      # DELETE /patterns/1
      def destroy
        @pattern.destroy
      end
    
  
      private
    
      # Use callbacks to share common setup or constraints between actions.
      def set_pattern
        @pattern = @current_admin.patterns.find(params[:id])
      end
    
      # Only allow a trusted parameter "white list" through.
      def pattern_params
        params.require(:pattern).permit(:name, :difficulty, :yarn, :needle_size, :gauge)
      end
    end
    
  
