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
    # byebug
    # Animal.create(params)
    species = Species.find_or_create_by(name: params[:species_id])
    @animal = Animal.create(name: params[:name], diet: params[:diet].to_i, species_id: species.id)
    render json: @animal, status: 201
  end



end
