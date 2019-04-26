class AnimalsController < ApplicationController
  def index
    @animals = Animal.all
    render json: @animals
  end

  def show
    @animal = Animal.find_by(id: params[:id])
    render json: @animal
  end

  def create

  end
end
