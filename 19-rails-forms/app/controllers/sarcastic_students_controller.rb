class SarcasticStudentsController < ApplicationController
  before_action :get_student, only: [:show, :edit, :update]

  def index
    @students = SarcasticStudent.all
  end

  def show
  end

  def edit
  end

  def update
    @student.update(student_params)
    # byebug
  end

  def new
    @student = SarcasticStudent.new
  end

  private

  def student_params
    params.require(:sarcastic_students).permit(:fav_joke)
  end

  def get_student
    @student = SarcasticStudent.find(params[:id])
  end

end
