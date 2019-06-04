class Api::V1::SubjectsController < ApplicationController
  # before_action :authorized

  def index
    authorized
    subjects = Subject.all

    render json: subjects
  end

  def create
    subject = Subject.create(subject_params)

    render json: subject
  end

  private

  def subject_params
    params.require(:subject).permit(:title)
  end

end