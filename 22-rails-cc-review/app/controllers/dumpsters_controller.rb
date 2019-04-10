class DumpstersController < ApplicationController
  before_action :find_dumpster, only: [:show, :dumpsterfire, :destroy, :edit, :update]

  def home
  end

  def index
    @dumpsters = Dumpster.all
  end

  def new
    @dumpster = Dumpster.new
  end

  def create
    @dumpster = Dumpster.create(dumpster_params)
    if @dumpster.valid?
      redirect_to dumpster_path(@dumpster)
    else flash[:errors] = @dumpster.errors.full_messages
      redirect_to new_dumpster_path
    end
  end


  def show
  end

  def edit
  end

  def update
    @dumpster.update(dumpster_params)
    if @dumpster.valid?
      redirect_to dumpster_path(@dumpster)
    else flash[:errors] = @dumpster.errors.full_messages
      redirect_to edit_dumpster_path
    end
  end

  def dumpsterfire
    @dumpster.garbage_items.each do |item|
      item.destroy
    end
    redirect_to @dumpster
  end

  def destroy
    @dumpster.destroy
    redirect_to dumpsters_path
  end

  private

  def dumpster_params
    params.require(:dumpster).permit(:nickname, :location, :cubic_feet, :pick_up, :img_url)
  end

  def find_dumpster
    @dumpster = Dumpster.find(params[:id])
  end


end
