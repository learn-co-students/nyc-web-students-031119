module Api
  module V1
    class KidsController < ApplicationController

      def index
        kids = Kid.all
        render json: kids
      end

      def chair
        kid = Kid.find(params[:kid_id])
        kid.in_chair = !kid.in_chair
        kid.save
        render json: kid
      end

      def throne
        current_throne = Kid.find_by(throne: true)
        if current_throne
          current_throne.throne = false
          current_throne.save
        end
        kid = Kid.find(params[:kid_id])
        kid.throne = !kid.throne
        kid.votes = 0
        kid.save
        render json: kid
      end

      def vote
         kid = Kid.find(params[:kid_id])
         if params[:vote] == "up"
           kid.votes += 1
           kid.save
         elsif params[:vote] == "down"
           kid.votes -= 1
           kid.save
         end
         render json: kid
       end

      def destroy
        kid = Kid.find(params[:kid_id])
        kid.destroy
      end

      def create
        kid = Kid.new(kid_params)
        kid.in_chair = true
        kid.save
        render json: kid
      end

      private

      def kid_params
        params.require(:kid).permit(:name, :img_url)
      end
    end

  end
end
