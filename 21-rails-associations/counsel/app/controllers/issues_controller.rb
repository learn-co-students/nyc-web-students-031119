class IssuesController < ApplicationController
  before_action :find_issue, only: [:show, :update, :edit, :destroy]
  def index
    #model
    @issues = Issue.all
    #response
    # render :index
  end

  def yaboi

    #render yaboi
  end

  def new
    @issue = Issue.new
    @teens = Teen.all
    render :issueformyeet
  end
  def create
    issue = Issue.create(issue_params)
    if issue.valid?
      redirect_to issue_path(issue.id)
    else
      flash[:errors] = issue.errors.full_messages
      redirect_to new_issue_path
      # @issue = Issue.new
      # @teens = Teen.all
      # @errors = issue.errors.full_messages
      # render :issueformyeet
    end
  end

  def show
    #model
    @issue = Issue.find(params[:id])
    #response
  end

  def edit

    @teens = Teen.all
    render :edit

  end

  def update

  end

  def destroy

  end

  private

  def find_issue
    @issue = Issue.find(params[:id])
  end
  def issue_params
    params.require(:issue).permit(:desc, :severity, :teen_id)
  end
end
