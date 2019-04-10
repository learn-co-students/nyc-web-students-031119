class GarbageItemsController < ApplicationController

  def index
    @garbage_items = GarbageItem.all
  end

  def new
    @dumpsters = Dumpster.all
    @garbage_item = GarbageItem.new
  end

  def create
    @garbage_item = GarbageItem.create(garbage_params)
    redirect_to @garbage_item
  end

  def show
    @garbage_item = GarbageItem.find(params[:id])
  end

  private

  def garbage_params
    params.require(:garbage_item).permit(:dumpster_id, :name, :description, :salvageable, :img_url)
  end

end
