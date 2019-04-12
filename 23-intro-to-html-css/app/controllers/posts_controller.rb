class PostsController < ApplicationController

  def new
    @post = Post.new
  end

  def create
    @post = Post.new(post_params)
    @post.likes = rand 10000
    @post.user = User.find(params[:id])
    @post.save
    redirect_to @post.user
  end

  private

  def post_params
    params.require(:post).permit(:img_url, :caption)
  end

end
